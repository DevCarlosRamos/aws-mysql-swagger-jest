const connection = require('../db');

const getPeoples = async (req, res) => {
    try {
        const db = await connection();
        const [rows] = await db.query("select * from people");
        return res.status(200).json({
            rows,
            ...req.body
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
const getPeople = async (req, res) => {
    try {
        const { id } = req.params;
        const db = await connection();
        const [rows] = await db.query(`select * from people where id = ${id}`);
        if (!rows) return res.sendStatus(404);
        return res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const createPeople = async (req, res) => {
    try {
        const { nombre, altura, peso, color_de_pelo,
            color_de_piel, color_de_ojos, nacimiento,
            genero, mundo_natal, pelicula, especies,
            vehiculo, naves, link } = req.body;

        //obtenemos fecha
        let now = new Date();

        const db = await connection();
        const [results] = await db.query("INSERT INTO people (nombre, altura, peso, color_de_pelo," +
            "color_de_piel, color_de_ojos, nacimiento," +
            "genero, mundo_natal, pelicula, especies," +
            "vehiculo, naves, creado, editado, link) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
            [nombre, altura, peso, color_de_pelo,
                color_de_piel, color_de_ojos, nacimiento,
                genero, mundo_natal, pelicula, especies,
                vehiculo, naves, now, now, link]);

        return res.json({ message: "El personaje a sido creado" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const updatePeople = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, altura, peso, color_de_pelo,
            color_de_piel, color_de_ojos, nacimiento,
            genero, mundo_natal, pelicula, especies,
            vehiculo, naves, link } = req.body;

        //obtenemos fecha
        let now = new Date();

        const db = await connection();
        await db.query("UPDATE people SET nombre=?, altura=?, peso=?, color_de_pelo=?," +
            "color_de_piel=?, color_de_ojos=?, nacimiento=?," +
            "genero=?, mundo_natal=?, pelicula=?, especies=?," +
            "vehiculo=?, naves=?,editado=?, link=? WHERE id =?", [
            nombre, altura, peso, color_de_pelo,
            color_de_piel, color_de_ojos, nacimiento,
            genero, mundo_natal, pelicula, especies,
            vehiculo, naves, now, link,
            id,
        ]);


        return res.json({ message: "El personaje a sido actualizado" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const removePeople = async (req, res) => {
    try {
        const { id } = req.params;
        const db = await connection();
        await db.query("DELETE FROM people WHERE id = ?", [
            id,
        ]);

        res.status(200).json({ msg: "el personaje a sido eliminado" })
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = { getPeoples, getPeople, createPeople, updatePeople, removePeople }