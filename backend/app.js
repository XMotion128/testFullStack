const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/', async (req, res) => {
    let result = [];
    const db = new sqlite3.Database('./db/prova.db');
    const sql = 'SELECT * FROM prova';
    
    await new Promise((resolve, reject) => {
        db.each(sql, (err, row) => {
            result.push(row);
        }, (err, numrows) => {
            resolve(numrows);
        });
    });

    res.send(JSON.stringify(result));
})

app.listen(port, () => {
    console.log(`Express listening on port ${port}`);
})