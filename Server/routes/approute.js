const express = require('express')
const router = express.Router()

const projectController = require('../controller/projectController')



router.post('/addproject',projectController.postaddproject)
router.get('/getdata',projectController.getdata)
router.get('/description/:project_id',projectController.getDescription)
router.post('/signup',projectController.postsignup)
router.get('/getDevelopersList',projectController.getDevelopersList)
router.get('/profile/:dev_id',projectController.getdevInfo)
router.get('/getFullDomains',projectController.getFullDomains)
router.get('/search/:search_id',projectController.getSearch)



module.exports = router