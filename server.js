const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./proyectoDelivery'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'proyectoDelivery/src'}),
);


app.listen(process.env.PORT || 8080);

console.log(`Running on port ${process.env.PORT || 8080}`)