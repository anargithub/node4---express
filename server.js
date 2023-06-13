const express = require('express');
const path = require('path');
const app = express();
const jsonRoute = require('./routes/json-route');

const PORT = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());


app.get('/', (req, res) => {
    res.end('aaa');
});

app.get('/second', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.use('/json', jsonRoute);

app.use(function(req, res){
    res.status(404).send("<h1>404</h1>")
})


app.listen(PORT, () => console.log(`Server running on port ${PORT}`))