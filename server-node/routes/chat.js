const express = require('express');
const { createChat, findUserChats, findChat } = require('../controllers/chatController');
const route = express.Router();

route.post('/', createChat);
route.get('/:userId', findUserChats);
route.get('/find/:firstId/:secondId', findChat);

module.exports = route;