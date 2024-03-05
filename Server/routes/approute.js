const express = require('express')
const router = express.Router()

const projectController = require('../controller/projectController')



router.post('/addproject',projectController.postaddproject)
router.get('/getdata',projectController.getdata)



module.exports = router