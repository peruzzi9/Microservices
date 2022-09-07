'use strict';

const properties = require('../package.json');
const personInfo = require('../Services/personInfo');

var controllers = {

    /* 
    * /about request is one of this microservice services and it is executed without need to make request from other microservice
    */
    about: (req, res) => {
        var aboutInfo = {
            name: properties.name,
            version: properties.version,
        }
        res.json(aboutInfo);
    },
    /* 
    * /person request is one of this microservice services and it needs to make request from other microservice
    */
    getPersonInfo: (req, res) => {
        personInfo.find(req, res, (err, info) => {
            if (err)
                res.send(err);
            res.json(info);
        });
    },
};

module.exports = controllers;