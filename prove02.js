const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views-prove02');

const adminData = require('./prove02-routes/admin')
const shopRoutes = require('./prove02-routes/shop')

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public-prove02')))

app.use('/admin', adminData.routes);

app.use(shopRoutes);


app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page Not Found'});
});

app.listen(3000);