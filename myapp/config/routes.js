
var report1 = require('../app/controllers/report1');

//you can include all your controllers

module.exports = function (app, passport) {

    app.get('/report1', report1.create);
    app.get('/report1/menu', report1.get_menu);
    app.get('/report1/get_data', report1.get_data);

}
