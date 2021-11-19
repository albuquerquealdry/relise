import { Injectable } from "@nestjs/common";
const axios = require('axios');



@Injectable()
export class CheckoutRepository {
    constructor(){

    }
    
checkStatus(id, status){
    axios.patch(`https://sheetdb.io/api/v1/8yylocsb92p9x/numberP/${id}`, 
	{ 
		data:{"status":status}
	}, 
	{
		// Config
	}
);

// getAll(){
//     return axios.get (`https://sheetdb.io/api/v1/lia2dzpfqpubn`)
//     .then( async response => {
//         const {data={}}=  response;
//         return data
        
//        //let general = await response['data'];
//        //let timestamp = await general[0]['hour']
//        //return timestamp

//     });
// }
// getOne(id){
//     return axios.get (`https://sheetdb.io/api/v1/lia2dzpfqpubn`)
//     .then( async response => {
//         const {data={}}=  response;
//         return data[id]
        
//        //let general = await response['data'];
//        //let timestamp = await general[0]['hour']
//        //return timestamp

//     });
// }
}}
