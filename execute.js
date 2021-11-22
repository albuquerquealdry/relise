const axios = require('axios')

axios.get('http://localhost:3000/checkout/')
  .then(function (response) {
    // handle success
    console.log(response);
  })