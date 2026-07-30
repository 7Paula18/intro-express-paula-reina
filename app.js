import express from 'express'
import "dotenv/config"
//const bodyParser = require('body-parser');//importacion commonjs
import bodyParser from "body-parser";//importacion ES "module"
const app = express(); 
const port = process.env.port || 3000; 

//configurar el uso de body-parser para la aplicación - no se esta usando
app.use(express)

app.get("/")

//otro endpoint, funcion de ficha
app.get("/productos", (res, res)=>{
  //usando template string ""
})

app.get("/", (_, res) => { 
  res.send('Hola, estamos aprendiendo express con la ficha 3407184'); 
}); 

app.listen(port, () => { 
  console.log(`Servidor en funcionamiento en el puerto: ${port}`); 
});