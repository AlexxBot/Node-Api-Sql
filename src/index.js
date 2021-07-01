//console.log("hola mundo")

const express = require('express')
const http = require('http')
const app = express()
const sql = require('mssql')
var log_1 = require("./Extencion/log")


const config = {
  user: 'alex',
  password: 'Dotacinema2',
  server: 'localhost', // You can use 'localhost\\instance' to connect to named instance
  database: 'DBBSINNOVAWCF',
}


app.get('/',  async (req, res) => {
    res.status(200).send('Welcome to Api REST')
})

/* http.createServer(app).listen(8000, () => {
    console.log('Server started at http://localhost:8080')
})
 */
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });
