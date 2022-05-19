const express = require('express')
const app = express()
 
app.use(express.static('assets'));
app.use(express.static('node_modules'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html")
})

app.get('/clientes', function(req, res) {
    res.sendFile(__dirname + "customers.html")
})


app.listen(3100)
console.log("Express esta corriendo en el puerto: 3100");
console.log("http://localhost:3100")


