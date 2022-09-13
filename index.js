const express = require('express');
const app = express();

// adding EJS (first install this)
// npm i ejs
app.set('view engine', 'ejs');

app.listen(3000, () => {
	console.log('Listening on port 3000...');
});

app.get('/', (req, res) => {
	res.send('<h1>This is my homepage. Welcome!</h1>');
});
