const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
    const db = new sqlite3.Database('./db/prova.db');
    const result = [];

    async function query() {
        const result = [];

        await db.each('SELECT * FROM prova', (err, row) => {
            result.push(row);
            console.log(result)
        })

        return result;
    }

    res.send(query())
})

app.listen(port, () => {
    console.log(`Express listening on port ${port}`)
})