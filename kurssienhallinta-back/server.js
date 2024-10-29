const express = require('express');
const app = express();
var cors = require('cors');
var mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mysql'
});

app.use(express.json());
app.use(cors());

app.get('/showDatabases', (req, res) => {
    connection.query('SHOW DATABASES', (err, results) => {
        if (err) {
            throw err;
        }
        console.log('fetched databases:', results);
        res.json(results);
    });
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

