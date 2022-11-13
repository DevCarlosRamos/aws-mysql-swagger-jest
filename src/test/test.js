const request = require("supertest");
const app = require("../app");

afterAll(async () => {
    await new Promise(resolve => setTimeout(() => resolve(), 500));
});

describe("GET /peoples", () => {
    test("deberia de responder con codigo de estado 200", async () => {
        const response = await request(app).get("/peoples").send();
        expect(response.statusCode).toBe(200);
    });
    test("deberia de responer un array", async () => {
        const response = await request(app).get("/peoples").send();
        expect(response.body).toBeInstanceOf(Object);
    });

});

describe("POST /peples", () => {
    describe("creacion de nuevos personajes", () => {
        const newPeople = {
            nombre: "personaje1",
            altura: 0,
            peso: 0,
            color_de_pelo: "personaje1",
            color_de_piel: "personaje1",
            color_de_ojos: "personaje1",
            nacimiento: "personaje1",
            genero: "personaje1",
            mundo_natal: "personaje1",
            pelicula: "personaje1",
            especies: "personaje1",
            vehiculo: "personaje1",
            naves: "personaje1",
            link: "personaje1"
        };

        test("deberia de responder con el codigo 200", async () => {
            const response = await request(app).post("/peoples").send(newPeople);
            expect(response.statusCode).toBe(200);
        });

        test("deberia tener un Content-Type: application/json en el header", async () => {
            const response = await request(app).post("/peoples").send(newPeople);
            expect(response.headers["content-type"]).toEqual(
                expect.stringContaining("json")
            );

        })
    })
});

