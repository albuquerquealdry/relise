const axios = require('axios')

axios.get('https://app-relise.herokuapp.com/checkout')
  .then(function (response) {
    // handle success
    console.log(response);
  })