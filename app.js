const express = require('express');

const app = express();

const appConfig = {
    "port": 3000
}

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('index');
});

app.listen(appConfig.port);