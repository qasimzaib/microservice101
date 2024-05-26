const express = require('express');

const SERVICE_URL = '/comments';
const SERVICE_PORT = 4001;

const app = express();

app.get(SERVICE_URL, getHandler);
app.post(SERVICE_URL, postHandler);

app.listen(SERVICE_PORT, listener);

const getHandler = (req, res) => {};

const postHandler = (req, res) => {};

const listener = () => {
	console.log('Listening on port', SERVICE_PORT);
};
