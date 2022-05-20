const express = require('express');
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

app.listen(8000, () => {
	console.log('hey raven, server is listening.');
})