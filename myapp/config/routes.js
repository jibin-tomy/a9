
var report1 = require('../app/controllers/report1');

//you can include all your controllers

module.exports = function (app, passport) {

    app.get('/report1', report1.create);
    app.get('/report1/menu', report1.get_menu);
    app.get('/report1/get_data', report1.get_data);
    // app.get('/signup', home.signup);

    // app.get('/', home.loggedIn, home.home);//home
    // app.get('/home', home.loggedIn, home.home);//home

    // app.post('/signup', passport.authenticate('local-signup', {
    //     successRedirect: '/home', // redirect to the secure profile section
    //     failureRedirect: '/signup', // redirect back to the signup page if there is an error
    //     failureFlash: true // allow flash messages
    // }));
    // // process the login form
    // app.post('/login', passport.authenticate('local-login', {
    //     successRedirect: '/home', // redirect to the secure profile section
    //     failureRedirect: '/login', // redirect back to the signup page if there is an error
    //     failureFlash: true // allow flash messages
    // }));


}
