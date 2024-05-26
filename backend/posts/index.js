const express = require('express');
const bodyParser = require('body-parser');

const SERVICE_URL = '/posts';
const SERVICE_PORT = 4000;

const posts = {};

const getHandler = (req, res) => {
	res.send(posts);
};

const postHandler = (req, res) => {
	const id = Date.now();
	const { title } = req.body;

	posts[id] = {
		id,
		title,
	};

	res.status(201).send(posts[id]);
};

const listener = () => {
	console.log('Listening on port', SERVICE_PORT);
};

const app = express();
app.use(bodyParser.json());

app.get(SERVICE_URL, getHandler);
app.post(SERVICE_URL, postHandler);

app.listen(SERVICE_PORT, listener);
