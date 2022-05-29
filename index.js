const express = require ("express")

const path = require ("path")

const app = express ()

const amigos = [
    {
        id: 1,
        name: "rodrigo"
    },
    {
        id: 2,
        name: "pablo"
    },
    {
        id: 3,
        name: "nadia"
    }
]
app.listen (3001, () => console.log ("servidor escuchando puerto 3001") )

app.get ("/", (req,res) => {
    res.send ("<h1>hola mundo</h1>")
} )

app.get ("/amigos", (req,res) => {
    res.send (amigos)
} )

app.get ("/index", (req,res) => {
    let htmlinfo = path.resolve (__dirname, "./vistas/index.html")
    res.sendFile (htmlinfo)
})