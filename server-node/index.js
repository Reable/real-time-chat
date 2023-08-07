require('dotenv').config()

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5050;

app.use(express.json());
app.use(cors());

app.use('/api/users', require('./routes/user'));
app.use('/api/chats', require('./routes/chat'));
app.use('/api/messages', require('./routes/message'));

mongoose.connect(process.env.DB_URL, {
	useNewUrlParser: true, 
	useUnifiedTopology: true,
})
	.then(() => console.log('Success database connection'))
	.catch((err) => console.log('Database error, ', err));


app.listen(PORT, (req, res) => {
	console.log('Server start, port 5050')
})
