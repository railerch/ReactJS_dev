const fs = require("fs");
const path = require("path");

const disponibles = (req, res) => {
    fs.readFile(path.join(__dirname, "../data/peliculas.json"), "utf-8", (err, file) => {
        if (err) res.status(500).write(`<h2>ERROR</h2> <p>${err}</p>`);
        res.status(200).send(file).end();
    })
}

const seleccionada = (req, res) => {
    const id = req.params.id;

    fs.readFile(path.join(__dirname, "../data/peliculas.json"), "utf-8", (err, file) => {
        if (err) res.status(500).write(`<h2>ERROR</h2> <p>${err}</p>`);
        const peliculas = JSON.parse(file);
        const seleccion = peliculas.filter((el, i) => el.id === id);
        res.status(200).json(seleccion).end();
    })


}

module.exports = {
    disponibles,
    seleccionada
}