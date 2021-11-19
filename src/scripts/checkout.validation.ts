const axios = require('axios');

function searchData(id){
    return axios.get (`https://sheetdb.io/api/v1/8yylocsb92p9x`)    
    .then( async response => {
        const {data={}}=  response;
        return data[id]
    });
}

module.exports = searchData