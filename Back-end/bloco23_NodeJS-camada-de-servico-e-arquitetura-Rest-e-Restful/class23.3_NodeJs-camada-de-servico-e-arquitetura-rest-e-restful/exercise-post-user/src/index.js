require('express-async-errors');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});