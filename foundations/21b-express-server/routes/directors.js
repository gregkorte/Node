'use strict';

const { Router } = require('express');
const router = Router();

const { getDirectors, getOneDirector } = require('../controllers/directorCtrl');

router.get('/directors', getDirectors);
router.get('/directors/:id', getOneDirector);

module.exports = router;
