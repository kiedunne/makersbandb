const express      = require('express');
const bodyParser   = require('body-parser');
const user         = require('./routes/user.route');
const index        = require('./routes/index.route');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const database = require('/Users/cesarecamurani/Desktop/@Makers/Week6_Projects/makersbandb/database.js');

const app = express();

const mongoose  = require('mongoose');

const mongoDB   = process.env.MONGODB_URI || database.url;
mongoose.connect(mongoDB);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieSession({
  secret: 'work hard',
}));
app.use('/', index);
app.use('/users', user);
// app.use('/properties', property);

let port = 8000;
app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});
