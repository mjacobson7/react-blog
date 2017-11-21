module.exports = (app, sessionChecker, User) => {

    //User signup
    app.post('/signup', sessionChecker, (req, res, next) => {
        User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
        .then(user => {
            req.session.user = user.dataValues;
            res.status(200).json("You have successfully created a new account!");
        })
        .catch(error => {
            res.status(200).json("Bro, you already have an account. Please Log in!");
        });
    })

    //User login
    app.post('/login', sessionChecker, (req, res) => {
        var username = req.body.username;
        var password = req.body.password;
        User.findOne({ where: { username: username } }).then(function (user) {
            if (!user) {
                res.status(200).json("Can't find that user");
            } else if (!user.validPassword(password)) {
                res.status(200).json("Password is not valid");
            } else {
                req.session.user = user.dataValues;
                res.status(200).json("You've reached the dashboard page");
            }
        });
    })



            
            
            // // route for user's dashboard
            // app.get('/dashboard', (req, res) => {
            //     if (req.session.user && req.cookies.user_sid) {
            //         res.status(200).send("You've reached the dashboard page");
            //     } else {
            //         res.status(200).send("You are not logged in");
            //     }
            // });
            
            
            // // route for user logout
            // app.get('/logout', (req, res) => {
            //     if (req.session.user && req.cookies.user_sid) {
            //         res.clearCookie('user_sid');
            //         res.status(200).send("You've been logged out");
            //     } else {
            //         res.status(200).send("You've reached the login page");
            //     }
            // });
            
            
            // // route for handling 404 requests(unavailable routes)
            // app.use(function (req, res, next) {
            //   res.status(404).send("Sorry can't find that!")
            // });
}