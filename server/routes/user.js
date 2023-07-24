const express = require('express');
const { register, login, findUser, getUser } = require('../controllers/userController');
const route = express.Router();

// Auth
route.post('/register', register);
route.post('/login', login);

//Search
route.get('/find/:userId', findUser);
route.get('/', getUser);

module.exports = route