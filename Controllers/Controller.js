'use strict';

const properties = require('../package.json');
const personInfo = require('../Services/personInfo');

var controllers = {
    about: (req, res) => {
        var aboutInfo = {
            name: properties.name,
            version: properties.version,
        }
        res.json(aboutInfo);
    },

    getPersonInfo: (req, res) => {
        personInfo.find(req, res, (err, info) => {
            if (err)
                res.send(err);
            res.json(info);
        });
    },
};

module.exports = controllers;