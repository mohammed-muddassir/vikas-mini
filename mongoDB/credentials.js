if(process.env.NODE_ENV!=='production'){
    require('dotenv').config()
 }
const {MongoClient} =require('mongodb')
const uri=process.env.URI;
const client=new MongoClient(uri);
var details;
module.exports={MongoClient,uri,client};