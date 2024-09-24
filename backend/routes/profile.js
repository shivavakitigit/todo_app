const express = require('express');
const { updateProfile, getProfile } = require('../controllers/profile');
const router = express.Router();

router.put('/', updateProfile);
router.get('/', getProfile);

module.exports = router;
