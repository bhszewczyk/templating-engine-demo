const express = require('express');
const app = express();
const path = require('path');
const subpageData = require('./data.json');

app.use(express.static(path.join(__dirname, 'public')));

// adding EJS (first install this)
// npm i ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
	// by default EJS looks for a folder /views
	// no need to add .ejs
	res.render('home');
});
app.get('/s/:subpage', (req, res) => {
	const { subpage } = req.params;
	const data = subpageData[subpage.toLowerCase()];
	if (data) {
		res.render('subpage', { ...data });
	} else {
		res.render('notfound', { subpage });
	}
});

app.get('/dogs', (req, res) => {
	const dogs = ['Eevee', 'Ponyo', 'Volo', 'Ida'];

	res.render('dogs', { dogs });
});

app.get('/rand', (req, res) => {
	// defining variables for EJS
	const num = Math.floor(Math.random() * 10) + 1;
	res.render('random', { rand: num });
});

app.listen(3000, () => {
	console.log('Listening on port 3000...');
});
