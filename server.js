const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();

const mockUserData = [
	{name: 'Elon'},
	{name: 'Rahul'}
];

app.get('/users', (req, res) => {
	res.json({
		success: true,
		message: "successfuly got users. Nice.",
		users: mockUserData
	})
})

// In Express, words with colon in front of them, in the url are treated as variables.
// You can access the value of each variable, req.params like this.

app.get('/users/:id', (req, res) => {
	console.log(req.params.id);
	res.json({
		success: true,
		message: 'got 1 user',
		user: req.params.id
	})
})

app.listen(8000, () => {
	console.log('hey raven, server is listening.');
})