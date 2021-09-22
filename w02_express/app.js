const express = require('express');
const app = express();


/*app.use((req, res, next) => {
    console.log('First Middleware');
    next();
});

app.use('/add-product', (req, res, next) => {
    console.log('First Middleware');
    res.send('<h3>Assignment Solved (almost)</h3>');
});*/

app.use('/users', (req, res, next) => {
    res.send('<h3>Middleware that handles users </h3>');
});

app.use('/', (req, res, next) => {
    res.send('<h3>Middleware that hadles / </h3>');
});



app.listen(3000);