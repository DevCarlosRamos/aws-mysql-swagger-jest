const fetch = require('node-fetch');

const people = fetch("https://swapi.py4e.com/api/people")

    .then((res) => {
        return res.json()
    })

    .then((people) => {

        const data = people.results;

        const People = data.map(item => {
            return {
                nombre: item.name,
                altura: item.height,
                peso: item.mass,
                color_de_pelo: item.hair_color,
                color_de_piel: item.skin_color,
                color_de_ojos: item.eye_color,
                nacimiento: item.birth_year,
                genero: item.gender,
                mundo_natal: item.homeworld,
                pelicula: item.films,
                especies: item.species,
                vehiculo: item.vehicles,
                naves: item.starships,
                creado: item.created,
                editado: item.edited,
                link: item.url,
            }
        });
        console.log(People);
        return People;
    });

module.exports = people;