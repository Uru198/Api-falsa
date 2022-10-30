const {faker} = require('@faker-js/faker');
const express = require('express');
const app = express();

class Usuario {
    constructor() {
        this._id = faker.datatype.uuid();
        this.nombre = faker.name.firstName();
        this.apellido = faker.name.lastName();
        this.telefono = faker.phone.number();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Empresa {
    constructor() {
        this._id = faker.datatype.uuid();
        this.nombre = faker.company.name();
        this.direccion = {
            calle: faker.address.street(),
            ciudad: faker.address.city(),
            estado: faker.address.state(),
            cp: faker.address.zipCode(),
            pais: faker.address.country()
        }
    }
}


app.get("/api/users/new", (req, res) => {
    let nuevoUsuario = new Usuario();
    res.json(nuevoUsuario);
    
});

app.get("/api/companies/new", (req, res) => {
    let nuevaEmpresa = new Empresa();
    res.json(nuevaEmpresa);
});

app.get("/api/user/company", (req, res) => {
    let user = new Usuario();
    let company = new Empresa ();
    res.json({
        user: user,
        company: company,
        });
    })









app.listen(8000, () => {
    console.log("servidor esta corriendo");
});