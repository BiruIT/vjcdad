const express = require('express');
const AcControllers = require('../app/controllers/AcControllers');
const router = express.Router();

router.get('/', AcControllers.ac);

module.exports = router;
