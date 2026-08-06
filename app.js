import express from "express";
import { configDotenv } from "dotenv";

configDotenv();

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (_, res) => {
    res.send("Hola, estamos aprendiendo express con la ficha 3407184");
});

app.get("/aprendiz", (req, res) => {
    res.json({
        datosPersonales: {
            nombre: "Jorge",
            apellido: "Torres",
            listaTelefonos: [
                "3001234567",
                "3109876543"
            ]
        },
        datosPrograma: {
            nombre: "Análisis y Desarrollo de Software",
            tipoPrograma: "Tecnólogo",
            ficha: "3407184"
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor funcionando en el puerto ${port}`);
});