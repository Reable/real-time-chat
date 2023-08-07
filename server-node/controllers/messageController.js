const Message = require('../models/messageModel');

const createMessage = async (req, res) => {
	const { chatId, senderId, text } = req.body;

	try{
		const message = await Message.create({
			chatId, senderId, text
		});

		return res.status(200).json(message);
	} catch(error){
		console.log(error);
		return res.status(500).json(error);
	}

}	

const getMessages = async (req, res) => {
	const { chatId } = req.params;

	try{
		const messages = await Message.find({ chatId });

		return res.status(200).json(messages);
	} catch(error){
		console.log(error);
		return res.status(500).json(error);
	}
}

module.exports = {
	createMessage,
	getMessages
}