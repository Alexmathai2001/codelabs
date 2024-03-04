const express = require('express')
const router = express.Router()

const projectController = require('../controller/projectController')



router.get('/addproject',projectController.addproject)
router.post('/addproject',projectController.addproject)



module.exports = router