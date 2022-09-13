const express = require('express');
const app = express();
const path = require('path');

// adding EJS (first install this)
// npm i ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.listen(3000, () => {
	console.log('Listening on port 3000...');
});

app.get('/', (req, res) => {
	// by default EJS looks for a folder /views
	// no need to add .ejs
	res.render('home');
});

app.get('/rand', (req, res) => {
	// defining variables for EJS
	const num = Math.floor(Math.random() * 10) + 1;
	res.render('random', { rand: num });
});
