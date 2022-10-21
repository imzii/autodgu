var axios = require('axios');

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