const {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} = require("firebase/storage");

const openai = require("../utils/openAI.js");

const firebase = require("firebase/app");
const { FirebaseError, initializeApp } = require("firebase/app");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6dXeSr8OFbKSyKSfCNdzGXO_Gr46yjas",
  authDomain: "codelabs-9c109.firebaseapp.com",
  projectId: "codelabs-9c109",
  storageBucket: "codelabs-9c109.appspot.com",
  messagingSenderId: "625623603495",
  appId: "1:625623603495:web:09e0100bcaf7a16285f102",
  measurementId: "G-BE74MSWS3Y",
};

firebase.initializeApp(firebaseConfig);

const storage = getStorage();

const projectModel = require("../models/projectSchema.js");
const developerModel = require("../models/developerSchema.js");

module.exports = {
  postaddproject: async (req, res) => {
    const coverPhoto = req.body.coverPhoto;
    const screenshotList = req.body.screenshots;
    let screenshotLinks = [];
    let coverPhotoLink = "";

    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const date = `${month}-${day}-${year}`;

    function generateProjectId() {
      const timestamp = Date.now();
      return `ID${timestamp}`;
    }

    screenshotList.map((item) => {
      const file = base64ImageToBlob(item);
      const storageRef = ref(
        storage,
        "screenshots/" + Date.now() + "." + file.type.split("/")[1]
      );
      uploadBytes(storageRef, file).then((snapshot) => {
        console.log("uploaded");
        getDownloadURL(snapshot.ref).then((item) => {
          screenshotLinks.push(item);
        });
      });
    });

    const file = base64ImageToBlob(req.body.coverPhoto);
    const storageRef = ref(
      storage,
      "thumbnail/" + Date.now() + "." + file.type.split("/")[1]
    );

    uploadBytes(storageRef, file).then((snapshot) => {
      console.log("Uploaded file!");
      getDownloadURL(snapshot.ref).then(async (item) => {
        coverPhotoLink = item;
        console.log(req.body);
        const {
          title,
          category,
          livelink,
          description,
          tech_used,
          database,
          features,
          repolink,
        } = req.body;

        //openai
        const response = await openai.chat.completions.create({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content:
                "You will be provided with a block of text, and your task is to extract a list of keywords from it. it will be given as comma seperated values..example task,new,store",
            },
            {
              role: "user",
              content: description,
            },
          ],
          temperature: 0.5,
          max_tokens: 64,
          top_p: 1,
        });

        const databases = database.split(",");

        const newProject = new projectModel({
          title: title,
          category: category,
          project_id: generateProjectId(),
          live_link: livelink,
          overview: description,
          keywords:
            title.split(" ").join(",") +
            "," +
            tech_used +
            "," +
            response?.choices[0]?.message?.content,
          tech_used: tech_used,
          db_used: databases,
          screenshots: screenshotLinks,
          thumbnail: coverPhotoLink,
          features: features,
          project_link: repolink,
          publisher: "Alex mathai",
          publisher_id: "DEV_6628",
          published_date: date,
          last_updated: date,
          views: 0,
          downloads: 0,
          status: "Pending",
          price: "Free",
        });
        newProject.save();
        res.json({
          result: "success",
        });
      });
    });
  },

  getdata: async (req, res) => {
    try {
      const projectData = await projectModel.find();
      res.json(projectData);
    } catch (error) {
      console.log(error);
    }
  },
  getDescription: async (req, res) => {
    try {
      const projectData = await projectModel.findOne({
        project_id: req.params.project_id,
      });
      const views = projectData?.views + 1;


      if (!req.session.viewed_posts) {
				req.session.viewed_posts = {};
			}
			if (!req.session.viewed_posts[req.params.project_id]) {
				req.session.viewed_posts[req.params.project_id] = 1;
				//update session
				//increment post count in posts table with post id
				//update 'viewed_posts' column with new session
				const update = await projectModel.findOneAndUpdate(
					{ project_id: req.params.project_id },
					{ views: views }
				);
			}


      console.log("hello")
      res.json(projectData);
    } catch (error) {
      console.log(error);
    }
  },
  postsignup: async (req, res) => {
    function generateDevId(prefix = "DEV_", length = 4) {
      const randomNumber = Array.from({ length }, () =>
        Math.floor(Math.random() * 10)
      ).join("");
      const uniqueId = prefix + randomNumber;
      return uniqueId;
    }

    const newProject = new developerModel({
      dev_id: generateDevId(),
      dev_name: req.body.fullName,
      dev_email: req.body.email,
    });
    newProject.save();
    res.json({
      status: "success",
    });
  },
  getDevelopersList: async (req, res) => {
    const developerData = await developerModel.find();
    res.json(developerData);
  },
  getdevInfo: async (req, res) => {
    const dev_details = await developerModel.find({
      dev_id: req.params.dev_id,
    });
    const dev_projects = await projectModel.find({
      publisher_id: req.params.dev_id,
    });
    const techUsedSet = new Set(
      dev_projects.flatMap((project) =>
        project.tech_used.map((tech) => tech.toLowerCase())
      )
    );
    const techUsedArray = Array.from(techUsedSet);

    const user = await projectModel.aggregate([
      {
        $match: {
          publisher_id: req.params.dev_id,
        },
      },
      {
        $group: {
          _id: null,
          totalViews: { $sum: "$views" },
          projectsCount: { $sum: 1 },
        },
      },
    ]);


    res.json({
      total_views : user[0]?.totalViews || 0,
      total_project : user[0]?.projectsCount || 0,
      dev_details: dev_details,
      dev_projects: dev_projects,
      tech_used: techUsedArray,
    });
  },
  getFullDomains: async (req, res) => {
    const allProjects = await projectModel.find();
    const techUsedSet = new Set(
      allProjects.flatMap((project) =>
        project.tech_used.map((tech) => tech.toLowerCase())
      )
    );
    const fulltechStack = Array.from(techUsedSet);
    res.json(fulltechStack);
  },
  getSearch: async (req, res) => {
    const searchdata = await projectModel.find({
      keywords: { $regex: new RegExp(req.params.search_id, "i") },
    });
    res.json(searchdata);
  },
  getmyproject: async (req, res) => {
    const devinfo = await developerModel.findOne({
      dev_email: req.session.user,
    });
    const devid = devinfo.dev_id;
    const myprojectinfo = await projectModel.find({ publisher_id: devid });
    console.log(myprojectinfo);
    res.json(myprojectinfo);
  },
  geteditprojectinfo: async (req, res) => {
    const projectinfo = await projectModel.find({
      project_id: req.params.projectid,
    });
    res.json(projectinfo);
  },
  posteditproject: async (req, res) => {
    console.log(req.body);
    await projectModel.findOneAndUpdate(
      { project_id: req.body.project_id },
      {
        title: req.body.title,
        category: req.body.category,
        live_link: req.body.livelink,
        features: req.body.features,
        description: req.body.description,
        db_used: req.body.db_used, // Include db_used in the update object
      },
      {
        new: true, // Return the updated document
      }
    );

    res.json();
  },
  getallprojects :async (req,res) => {
    const data = await projectModel.find()
    res.json(data)
  }
};

function base64ImageToBlob(str) {
  // extract content type and base64 payload from original string
  var pos = str.indexOf(";base64,");
  var type = str.substring(5, pos);
  var b64 = str.substr(pos + 8);

  // decode base64
  var imageContent = atob(b64);

  // create an ArrayBuffer and a view (as unsigned 8-bit)
  var buffer = new ArrayBuffer(imageContent.length);
  var view = new Uint8Array(buffer);

  // fill the view, using the decoded base64
  for (var n = 0; n < imageContent.length; n++) {
    view[n] = imageContent.charCodeAt(n);
  }

  // convert ArrayBuffer to Blob
  var blob = new Blob([buffer], { type: type });

  return blob;
}
