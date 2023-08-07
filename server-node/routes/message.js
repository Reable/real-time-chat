const express = require('express');
const { createMessage, getMessages } = require('../controllers/messageController');
const route = express.Router();

route.post('/', createMessage);
route.get('/:chatId', getMessages);

module.exports = route;