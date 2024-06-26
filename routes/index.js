const express = require('express');

const {getAllUsers, addNewUser} = require('../controllers/index');

const router = express.Router();

router.get('/users', getAllUsers);
router.post('/users', addNewUser);

exports.router = router;