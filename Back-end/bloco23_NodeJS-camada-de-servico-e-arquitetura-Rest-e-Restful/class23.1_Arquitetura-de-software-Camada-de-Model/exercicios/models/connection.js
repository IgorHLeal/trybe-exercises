const mysql = require('mysql2/promise');

const connection = mysql.createPool({
	host: 'localhost',
	user: 'igorleal',
	password: 'Maranata',
	database: 'user_crud',
	port: '3306',
});

module.exports = connection;