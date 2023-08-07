const Chat = require('../models/chatModel')

const createChat = async(req, res) => {
	const {firstId, secondId} = req.body;

	try{
		const chat = await Chat.findOne({
			members: {$all: [firstId, secondId]}
		});

		if(chat) return res.status(200).json(chat);

		const newChat = Chat.create({members: [firstId, secondId]});

		return res.status(200).json(newChat);
	} catch(error){
		console.log(error);
		res.status(500).json(error);
	}
};

const findUserChats = async(req, res) => {
	const userId = req.params.userId;
	console.log(userId);

	try{
		const chats = await Chat.find({
			members: {$in: [userId]}
		});
		console.log(chats);
		return res.status(200).json(chats);
	} catch(error){
		console.log(error);
		res.status(500).json(error);
	}
}

const findChat = async(req, res) => {
	const {firstId, secondId} = req.params;

	try{
		const chat = await Chat.find({
			members: {$all: [firstId, secondId]}
		});

		return res.status(200).json(chat);
	} catch(error){
		console.log(error);
		res.status(500).json(error);
	}
};

module.exports = {
	createChat,
	findUserChats,
	findChat,
};