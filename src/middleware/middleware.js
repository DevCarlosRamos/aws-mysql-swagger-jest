const connection = require('../db');
const fetch = require('node-fetch');

const swapi = async (req, res, next) => {

    try {

        const swapi = await fetch("https://swapi.py4e.com/api/people");
        const datos = await swapi.json();
        console.log(datos.results);
        req.body = datos.results.map(item => {
            return {
                nombre: item.name,
                altura: parseInt(item.height),
                peso: parseInt(item.mass),
                color_de_pelo: item.hair_color,
                color_de_piel: item.skin_color,
                color_de_ojos: item.eye_color,
                nacimiento: item.birth_year,
                genero: item.gender,
                mundo_natal: toString(item.homeworld),
                pelicula: toString(item.films),
                especies: toString(item.species),
                vehiculo: toString(item.vehicles),
                naves: toString(item.starships),
                creado: toString(item.created),
                editado: toString(item.edited),
                link: toString(item.url),
            }

        });

        next();


    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = swapi;