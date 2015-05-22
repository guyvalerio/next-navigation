'use strict';

var nav = require('../models/nav');

module.exports = function (req, res, next) {

	nav.then(function (nav) {
			res.locals.nav = nav;
			next();
		})
		.catch(function (err) {
			res.locals.nav = [];
			next();
		});

};
