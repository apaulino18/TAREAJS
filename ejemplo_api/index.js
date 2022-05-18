const express = require('express')
const app = express()
 
app.use(express.static('assets'));
app.use(express.static('node_modules'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + "ejemplo_api/index.html")
})

app.get('/clientes', function(req, res) {
    res.sendFile(__dirname + "/views/costumer.html")
})


app.listen(3000)
console.log("Express esta corriendo en el puerto: 3000");
console.log("http://localhost:3100")


