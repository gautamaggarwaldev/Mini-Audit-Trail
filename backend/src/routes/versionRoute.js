const express = require('express');
const router = express.Router();
const { saveVersion, getVersions } = require('../controller/versionController');


router.post('/save-version', saveVersion);
router.get('/', getVersions);


module.exports = router;