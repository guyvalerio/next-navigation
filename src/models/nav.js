'use strict';

require('es6-promise').polyfill();
var denodeify = require('denodeify');
var readFile = denodeify(require('fs').readFile);
var path = require('path');

module.exports = (function () {

	// TODO: for now, reading off the fs (eventually move to lists?)
	return readFile(path.join(__dirname, '..', '..', 'config', 'nav.json'), { encoding: 'utf-8' })
		.then(function (data) {
			return JSON.parse(data);
		});

}());
