const express = require('express')
const router = express.Router() 
const {auth} = require("../middleware/auth")
const {authVerify} = require("../middleware/authJWT")

const projectController = require('../controller/projectController')
const userController = require('../controller/userController')



router.post('/addproject',auth,authVerify,projectController.postaddproject)
router.get('/getdata',auth,projectController.getdata)
router.get('/description/:project_id',auth,projectController.getDescription)
router.post('/signup',auth,projectController.postsignup)
router.get('/getDevelopersList',auth,projectController.getDevelopersList)
router.get('/profile/:dev_id',auth,projectController.getdevInfo)
router.get('/getFullDomains',auth,projectController.getFullDomains)
router.get('/search/:search_id',auth,projectController.getSearch)
router.get('/myprojects',auth,authVerify,projectController.getmyproject)
router.get('/geteditprojectinfo/:projectid',auth,authVerify,projectController.geteditprojectinfo)
router.post('/editproject',auth,authVerify,projectController.posteditproject)
router.get('/getallprojects',auth,projectController.getallprojects)


router.post('/login',auth,userController.login)
router.get('/getdevprofile',auth,authVerify,userController.getdevprofile)
router.get('/deveditinfo/:dev_id',auth,authVerify,userController.getdevinfo)
router.post('/posteditdev',auth,authVerify,userController.editdev)



module.exports = router