var numeral = require('numeral');
var bcrypt = require('bcrypt-nodejs');
var dateFormat = require('dateformat');
var report1Model = require('../models/report1_model.js');

exports.create = function(req, res) {
	res.status(200).render('chart.html')
}
exports.get_menu = function(req, res) {
	report1Model.get_menu(function(err,menu){
		res.contentType('application/json');
		res.status(200).send(menu)
	})

}

exports.get_data = function(req, res) {
	report1Model.get_data(req.query,function(err,data){
		res.contentType('application/json');
		res.status(200).send(data)
	})

}