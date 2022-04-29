const mysql = require('mysql');

// create here mysql connection

const dbCon = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'nodecrudapi'
});

dbCon.connect(function(error){
    if(error) throw error;
    console.log('Database Connected Successfully');
})

module.exports = dbCon;