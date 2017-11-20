module.exports = (app, sessionChecker, User) => {

            // //delete since routes will be done through react router
            // // route for Home-Page
            // app.get('/', sessionChecker, (req, res) => {
            //     res.status(200).send("You've reached the home page");
            // });

                    
            // // route for user signup
            // app.route('/signup')
            //     .get(sessionChecker, (req, res) => {
            //         res.status(200).send("You've reached the signup page");
            //     })
            //     .post((req, res) => {
            //         User.create({
            //             username: req.body.username,
            //             email: req.body.email,
            //             password: req.body.password
            //         })
            //         .then(user => {
            //             req.session.user = user.dataValues;
            //             res.status(200).json("You've reached the dashboard page");
            //         })
            //         .catch(error => {
            //             res.status(200).json("Error: Sending back to sign up page");
            //         });
            //     });
            
            
            // // route for user Login
            // app.route('/login')
            //     .get(sessionChecker, (req, res) => {
            //         res.status(200).send("You've reached the login page");
            //     })
            //     .post((req, res) => {
            //         var username = req.body.username,
            //             password = req.body.password;
            
            //         User.findOne({ where: { username: username } }).then(function (user) {
            //             if (!user) {
            //                 res.status(200).json("Can't find that user");
            //             } else if (!user.validPassword(password)) {
            //                 res.status(200).json("Password is not valid");
            //             } else {
            //                 req.session.user = user.dataValues;
            //                 res.status(200).json("You've reached the dashboard page");
            //             }
            //         });
            //     });
            
            
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