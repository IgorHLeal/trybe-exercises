const mysql = require('mysql2/promise');

const connection = mysql.createPool({
	host: 'localhost',
	user: 'igorleal',
	password: 'Maranata',
	database: 'model_example',
	port: '3306',
});

module.exports = connection;