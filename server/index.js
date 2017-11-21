var User = require('./api/models/user').User;
var BlogPost = require('./api/models/blogPost');
var GlobalSetting = require('./api/models/globalSetting');
var session = require('express-session');
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var port = 9000;

//Express
var app = express();
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.listen(app.get('port'), () => console.log(`App started on port ${app.get('port')}`));
    
//Sessions
app.use(session({
    key: 'user_sid',
    secret: 'somerandonstuffs',
    resave: false,
    saveUninitialized: false,
    cookie: {
    expires: 600000
    }
}));
        
// This middleware will check if user's cookie is still saved in browser and user is not set, then automatically log the user out.
// This usually happens when you stop your express server after login, your cookie still remains saved in the browser.
app.use((req, res, next) => {
    if (req.cookies.user_sid && !req.session.user) {
        res.clearCookie('user_sid');        
    }
    next();
});
        
// middleware function to check for logged-in users
var sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
        // res.redirect('/dashboard');
        console.log("already logged in");
    } else {
        next();
    }    
};

//routes
require('./api/auth/authRoutes')(app, sessionChecker, User);

//Set up static files
app.use(express.static('build'));

//Listening to port
app.listen(process.env.PORT || port, () => {
console.log(`Now listening on port ${port}`);
});

