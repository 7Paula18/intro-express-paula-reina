import express from 'express'
import "dotenv/config"
//const bodyParser = require('body-parser');//importacion commonjs
import bodyParser from "body-parser";//importacion ES "module"
import cors from "cors"

const app = express(); 
const port = process.env.port || 3000; 
app.use(cors());

//configurar el uso de body-parser para la aplicación - no se esta usando
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", function(req, res){
    res.send("Hola ficha 3407184, estamos aprendiento Express en el SENA")
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

//Ej Jhonny
app.get("/productos/:nombre", (req,res)=> {
  const producto = req.params.nombre
  res.send(`El producto es ${producto}`)
})

//1. Endpoint de saludo
app.get("/saludo/:nombre",(req,res)=> {
    const nombre = req.params.nombre

    res.json({
        mensaje: `Hola ${nombre}, bienvenido`
    });

});

//2. Endpoint de productos
app.get("/productos/:id/:nombre/:stock/:precio/:categoria", (req, res) => {
    const { id, nombre, stock, precio, categoria } = req.params;

    res.json({
        id,
        nombre,
        cantidadStock: stock,
        precioUnitario: precio,
        categoria
    });
});

//3. Categoría con id
app.get("/productos/:categoria/:id", (req, res) => {
    const { categoria, id } = req.params;

    res.json({
        producto: id,
        categoria: categoria,
        servidor: servidor
    });
});

//4. Lista de publicaciones
app.get("/usuarios/:id/posts", (req, res) => {
    const { id } = req.params;
    const { orden = "asc" } = req.query;

    let publicaciones = [
        { id: 1, titulo: "Primer Post" },
        { id: 2, titulo: "Segundo Post" },
        { id: 3, titulo: "Tercer Post" }
    ];

    publicaciones.sort((a, b) =>
        orden === "desc" ? b.id - a.id : a.id - b.id
    );

    res.json({
        usuario: id,
        orden: orden,
        publicaciones
    });
});

//5. Comentarios con filtro
app.get("/usuarios/:id/:posts_id/comentarios", (req, res) => {
    const { id, posts_id } = req.params;
    const { orden = "asc" } = req.query;

    let comentarios = [
        { id: 1, comentario: "Excelente publicación" },
        { id: 2, comentario: "Muy interesante" },
        { id: 3, comentario: "Gracias por compartir" }
    ];

    comentarios.sort((a, b) =>
        orden === "desc" ? b.id - a.id : a.id - b.id
    );

    res.json({
        usuario: id,
        post: posts_id,
        orden: orden,
        comentarios
    });
});

//6. Libros
const libros = [
    {
        isbn: "87",
        titulo: "JavaScript Básico",
        autor: "Juan Pérez"
    },
    {
        isbn: "52",
        titulo: "Node.js desde Cero",
        autor: "Ana Gómez"
    },
    {
        isbn: "35",
        titulo: "Express Framework",
        autor: "Carlos Ruiz"
    }
];

app.get("/libros/:isbn", (req, res) => {
    const { isbn } = req.params;

    const libro = libros.find(libro => libro.isbn === isbn);

    if (!libro) {
        return res.status(404).json({
            mensaje: "Libro no encontrado"
        });
    }

    res.json(libro);
});

// Esta funcionando
app.listen(port, function(){ 
  console.log(`Servidor en funcionamiento en el puerto: ${port}`); 
});