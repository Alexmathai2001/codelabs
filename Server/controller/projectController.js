const Mongoose = require('mongoose')
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
    measurementId: "G-BE74MSWS3Y"
  };

firebase.initializeApp(firebaseConfig);

const storage = getStorage();

const projectModel = require('../models/projectSchema.js')


module.exports = {
    postaddproject : async (req,res) => {
        const coverPhoto = req.body.coverPhoto
        const screenshotList = req.body.screenshots
        let screenshotLinks = []
        let coverPhotoLink = ''

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
				const {
					title,
					category,
					livelink,
                    description,
					framework,
					database,
					features,
					repolink,
				} = req.body;

				const newProject = new projectModel({
					title: title,
					category: category,
					live_link: livelink,
					overview: description,
					frameworks_used: framework,
					db_used: database,
					screenshots: screenshotLinks,
					thumbnail: coverPhotoLink,
					features: features,
					project_link: repolink,
					publisher: "rafeeq",
					published_date: new Date().toLocaleDateString(),
					last_updated: new Date().toLocaleDateString(),
					views: 0,
					downloads: 0,
					status: "Pending",
					price: "Free",
				});
                newProject.save()
				res.json({
					result : "success"
				})
			});
		});
    },

	getdata : async (req,res) => {
		try {
			const projectData = await projectModel.find()
			res.json(projectData)
			
		} catch (error) {
			console.log(error);
		}

	}
}


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