const { application } = require('express');
const express = require('express');
const app = express()
const port = process.env.PORT || 8080

app.get('/', (req, res) => {
    res.render('index.html');
})

app.listen(port, () => {
    console.log(`This server is running on port ${port}`)
})