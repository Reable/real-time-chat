const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const validator = require('validator');

const createToken = (_id) => {
	return jwt.sign({ _id }, process.env.SECRET_KEY, {expiresIn: '3d'});
}

const register = async (req, res) => {
	try{
		const {name, email, password} = req.body;

		let user = await userModel.findOne({ email });

		if(user) return res.status(400).json({ message: 'User already exists', user });

		if(!name || !email || !password) return res.status(400).json({message: 'Not all data is exists'});

		if(!validator.isEmail(email)) return res.status(400).json({message: 'Email must be valid'});

		// if(!validator.isStrongPassword(password)) return res.status(400).json({message: 'Password must be a strong password'});

		let hash = await bcrypt.hash(password, 10);

		user = await userModel.create({
			name, email, password: hash
		});

		const token = createToken(user._id);

		res.status(200).json({message: 'Success registration', name, email, _id: user._id, token});

	} catch(error) {
		console.error(error)
		res.send(500).json({ error });
	}
}

const login = async (req, res) => {
	const { email, password } = req.body;

	try{
		let user = await userModel.findOne({ email });
	
		if(!user) return res.status(400).json({ message: 'Error email or password' });
	
		if(!email || !password) return res.status(400).json({message: 'Not all data is exists'});
	
		const checkPassword = await bcrypt.compare(password, user.password);

		if(!checkPassword) return res.status(400).json({ message: 'Error email or password' });

		const token = createToken(user._id);

		res.status(200).json({message: "Success", name: user.name, email, token, _id: user._id});
	} catch(error){
		console.error(error)
		res.send(500).json({ error });	
	}
}

const findUser = async (req, res) => {
	const userId = req.params.userId;

	try{
		const user = await userModel.findById(userId);

		if(!user) return res.status(400).json({ message: 'User not found' });

		res.status(200).json(user);

	} catch(error) {
		console.error(error)
		res.send(500).json({ error });	
	}

}

const getUser = async (req, res) => {
	try{
		const users = await userModel.find();

		res.status(200).json(users);
	} catch(error) {
		console.error(error)
		res.send(500).json({ error });	
	}

}

module.exports = {
	register, login,
	findUser, getUser
}