const {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} = require("firebase/storage");

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
      getDownloadURL(snapshot.ref).then((item) => {
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

        const databases = database.split(",");

        const newProject = new projectModel({
          title: title,
          category: category,
          project_id: generateProjectId(),
          live_link: livelink,
          overview: description,
          tech_used: tech_used,
          db_used: databases,
          screenshots: screenshotLinks,
          thumbnail: coverPhotoLink,
          features: features,
          project_link: repolink,
          publisher: "ausni",
          publisher_id: "DEV_3075",
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
    const techUsedSet = new Set(dev_projects.flatMap(project => project.tech_used.map(tech => tech.toLowerCase())));
	const techUsedArray = Array.from(techUsedSet);

    res.json({ dev_details: dev_details, dev_projects: dev_projects,tech_used : techUsedArray });
  },
  getFullDomains : async (req,res) => {
	const allProjects = await projectModel.find()
	console.log("hello")
	const techUsedSet = new Set(allProjects.flatMap(project => project.tech_used.map(tech => tech.toLowerCase())));
	const fulltechStack = Array.from(techUsedSet);
	res.json(fulltechStack)

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
