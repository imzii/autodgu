var express = require('express');
var axios = require('axios');
var app = express();

var port = process.env.PORT || 3000;
app.listen(port, function(){

    var config = {
      method: 'get',
      url: 'https://eclass.dongguk.edu/User.do?cmd=getRsaPublicKey',
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
});