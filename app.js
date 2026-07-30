import express from 'express'
import "dotenv/config"
//const bodyParser = require('body-parser');//importacion commonjs
import bodyParser from "body-parser";//importacion ES "module"
const app = express(); 
const port = process.env.port || 3000; 

//configurar el uso de body-parser para la aplicación - no se esta usando
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", function(req, res){
    res.send("Hola ficha 3407184, estamos aprendiento Express. en el SENA")
})

//otro endpoint, funcion de ficha
app.get("/productos", (req, res)=>{
   //usando template string ``
    res.send(`<h1>Listado de productos</h1>
        <ol>
        <li>Televisor</li>
        <li>Celular</li>
        <li>Impresora</li>
        </ol>`)
})

app.get("/productos/:nombre", (req,res)=>{
  const producto = req.params.nombre
  res.send("El producto es ${producto}")
})

//ejercicios


app.listen(port, function(){ 
  console.log(`Servidor en funcionamiento en el puerto: ${port}`); 
});