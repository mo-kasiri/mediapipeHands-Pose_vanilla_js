const express = require('express');
const http = require('http');

const app = express();
app.use(express.static("public"));

const server = http.createServer(app);

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});


app.listen(5000, () => {
    console.log('server is running at: http://localhost:5000');
});