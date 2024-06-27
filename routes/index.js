const express = require('express');

const {getAllUsers, addNewUser, removeUser, updateUser} = require('../controllers/index');

const router = express.Router();

router.get('/users', getAllUsers);
router.post('/users', addNewUser);
router.delete('/users/:id', removeUser);
router.patch('/users/:id/edit', updateUser);

exports.router = router;