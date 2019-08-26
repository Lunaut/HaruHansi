const app = require('express')();
const http = require('http').createServer(app);
const db = require('mysql');


http.listen(3000, ()=> {
    console.log("Server running : 3000");
});