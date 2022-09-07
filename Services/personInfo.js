const request = require('request');

/* 
* We first load the request package to process the external HTTP request
*/
var personInfo = {
    find: (req, res, next) => {

/* 
* make request to get person info from other microservice
* api.genderize.io microservice
*/

        request('https://api.genderize.io?name=luc',
            (error, response, body) => {
                if (!error && response.statusCode == 200) {
                    response = JSON.parse(body);
                    res.send(response);
                } else {
                    console.log(response.statusCode + response.body);
                    res.send(response.body);
                }
            });
    }
};

module.exports = personInfo;