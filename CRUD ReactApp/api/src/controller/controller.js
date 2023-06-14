const fs = require("fs");
const path = require("path");
const url = require("url");
const qs = require("querystring");

const servicios = (req, res) => {
    console.log(url.parse(req.url));
    fs.readFile(path.join(__dirname, "../data/servicios.json"), "utf8", (err, data) => {
        if (err) res.send("ERROR: " + err);
        res.status(200).send(data);
    })
}

const regServicio = (req, res) => {
    console.log(url.parse(req.url));
    //console.log(req.files); // Formidable: campos de archivo
    let nuevoSrv = req.fields; // Formidable: campos que no son de tipo 'file'


    fs.readFile(path.join(__dirname, "../data/servicios.json"), "utf8", (err, data) => {
        if (err) res.send("ERROR: " + err);
        let servicios = JSON.parse(data);
        let lastID = 0;

        // Obtener el ultimo ID
        if (servicios.length > 0) {
            lastID = parseInt(servicios.at(-1).id);
        }

        // Agregar el id al nuevo servicio
        nuevoSrv = { id: String(lastID + 1), ...nuevoSrv };

        servicios.push(nuevoSrv);
        fs.writeFileSync(path.join(__dirname, "../data/servicios.json"), JSON.stringify(servicios));
        res.status(200).json({ st: true });
    })
}

const delServicio = (req, res) => {
    console.log(url.parse(req.url));
    let regID = req.params.id;

    fs.readFile(path.join(__dirname, "../data/servicios.json"), "utf8", (err, data) => {
        if (err) res.send("ERROR: " + err);
        let servicios = JSON.parse(data);

        servicios = servicios.filter(srv => srv.id !== regID)
        fs.writeFileSync(path.join(__dirname, "../data/servicios.json"), JSON.stringify(servicios));

        res.status(200).json({ st: true });
    })
}

const clientes = (req, res) => {
    console.log(url.parse(req.url));
    fs.readFile(path.join(__dirname, "../data/clientes.json"), "utf8", (err, data) => {
        if (err) res.send("ERROR: " + err);
        res.status(200).send(data);
    })
}

const regCliente = (req, res) => {
    console.log(url.parse(req.url));
    //console.log(req.files); // Formidable: campos de archivo
    let nuevoCli = req.fields; // Formidable: campos que no son de tipo 'file'

    fs.readFile(path.join(__dirname, "../data/clientes.json"), "utf8", (err, data) => {
        if (err) res.send("ERROR: " + err);
        let clientes = JSON.parse(data);
        let lastID = 0;

        // Obtener el ultimo ID
        if (clientes.length > 0) {
            lastID = parseInt(clientes.at(-1).id);
        }

        // Agregar el id al nuevo cliente
        nuevoCli = { id: String(lastID + 1), ...nuevoCli };

        clientes.push(nuevoCli);
        fs.writeFileSync(path.join(__dirname, "../data/clientes.json"), JSON.stringify(clientes));
        res.status(200).json({ st: true });
    })

}

const delCliente = (req, res) => {
    console.log(url.parse(req.url));
    let regID = req.params.id;

    fs.readFile(path.join(__dirname, "../data/clientes.json"), "utf8", (err, data) => {
        if (err) res.send("ERROR: " + err);
        let clientes = JSON.parse(data);

        clientes = clientes.filter(cli => cli.id !== regID)
        fs.writeFileSync(path.join(__dirname, "../data/clientes.json"), JSON.stringify(clientes));

        res.status(200).json({ st: true });
    })
}

const iniciarSesion = (req, res) => {
    const { usr, pss } = req.params;
    if (usr.toLowerCase() == "root" && pss == "123456") {
        res.status(200).json({ st: true });
    } else {
        res.status(200).json({ st: false });
    }
}

module.exports = { servicios, regServicio, delServicio, clientes, regCliente, delCliente, iniciarSesion };