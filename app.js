const express       = require('express');
const bodyParser    = require('body-parser');
const user          = require('./routes/user.route');
const index         = require('./routes/index.route');
const property      = require('./routes/properties.route');
const booking       = require('./routes/booking.route');
const dotenv        = require('dotenv').config();
const cookieParser  = require('cookie-parser');
const cookieSession = require('cookie-session');
const session       = require('express-session')
const path          = require('path');
const app           = express();
const mongoose  = require('mongoose');
const mongoDB   = process.env.DB_URL;
mongoose.connect(mongoDB);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieSession({
  secret: 'Mission Impossible',
}));
app.use('/', index);
app.use('/users', user);
app.use('/login', user);
app.use('/logout', user);
app.use('/properties', property);
app.use('/bookings', booking);

let port = 3000;
app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});
