
//const http = require('http');
//const routes = require('./routes.js');
const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

const bodyParser = require('body-parser');
const path = require('path');
const rootDir = require('./util/path');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);

app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', 'error.html'));
});


app.listen(3000);

/*const server = http.createServer(app);
server.listen(3000);*/



