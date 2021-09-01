const express = require('express');
const MccControllers = require('../app/controllers/MccControllers');
const router = express.Router();

router.get('/', MccControllers.mcc);

module.exports = router;
