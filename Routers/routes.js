'use strict';

const controller = require('../Controllers/Controller');
const express = require('express');
const router = express.Router();

router.get('/about',controller.about);
router.get('/person',controller.getPersonInfo);

module.exports=router;