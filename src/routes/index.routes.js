const express = require("express");
const { getPeoples, getPeople, createPeople, updatePeople, removePeople } = require("../controllers/index.controllers");
const swapi = require('../middleware/middleware')
const routerPeoples = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    People:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: id autogenerado
 *        nombre:
 *          type: string
 *          description: nombre del personaje
 *        altura:
 *          type: integer
 *          description: altura del personaje
 *        peso:
 *          type: integer
 *          description: peso del personaje
 *        color_de_pelo:
 *          type: string
 *          description: color del pelo del personaje
 *        color_de_piel:
 *          type: string
 *          description: color de piel del personaje
 *        color_de_ojos:
 *          type: string
 *          description: color de ojos del personaje
 *        nacimiento:
 *          type: string
 *          description: fecha de nacimiento del personaje
 *        genero:
 *          type: string
 *          description: tipo genereo del personaje
 *        mundo_natal:
 *          type: string
 *          description: mundo natal del personaje
 *        pelicula:
 *          type: string
 *          description: peliculas donde participo el personaje
 *        especies:
 *          type: string
 *          description: que especie es el personaje
 *        vehiculo:
 *          type: string
 *          description: vehiculos que tiene el personaje
 *        naves:
 *          type: string
 *          description: naves que tiene el personaje
 *        creado:
 *          type: string
 *          description: fecha de creacion
 *        editado:
 *          type: string
 *          description: fecha de edicion
 *        link:
 *          type: string
 *          description: urls del personaje
 *      required:
 *        - nombre
 *        - altura
 *        - peso
 *        - color_de_pelo
 *        - color_de_piel
 *        - color_de_ojos
 *        - nacimiento
 *        - genero
 *        - mundo_natal
 *        - pelicula
 *        - especies
 *        - vehiculo
 *        - naves
 *        - link
 *      example:
 *        id: 1
 *        nombre: personaje1
 *        altura: 0
 *        peso: 0 
 *        color_de_pelo: personaje1
 *        color_de_piel: personaje1
 *        color_de_ojos: personaje1
 *        nacimiento: personaje1
 *        genero: personaje1
 *        mundo_natal: personaje1
 *        pelicula: personaje1
 *        especies: personaje1
 *        vehiculo: personaje1
 *        naves: personaje1
 *        creado: 2022-11-13 03:55:36.79
 *        editado: 2022-11-13 03:56:44.696
 *        link: personaje1
 */

/**
 * @swagger
 * tags:
 *  name: People
 *  description: People endpoint
 */

/**
 * @swagger
 * /peoples:
 *  get:
 *    summary: retorna todos los personajes
 *    tags: [People]
 *    responses:
 *      200:
 *        description: lista de todos los personajes
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/People'
 *      500:
 *        description: algun error del server
 */
routerPeoples.get("/peoples", swapi, getPeoples);

/**
 * @swagger
 * /peoples/{id}:
 *  get:
 *    summary: retorna solo un personaje por medio de un ID
 *    tags: [People]
 *    responses:
 *      200:
 *        description: lista de al personaje del ID
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/People'
 *      500:
 *        description: algun error del server
 */
routerPeoples.get("/peoples/:id", getPeople);

/**
 * @swagger
 * /peoples:
 *  post:
 *    summary: crear nuevo personaje
 *    tags: [People]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/People'
 *    responses:
 *      200:
 *        description: nos dice que se creo un personaje
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/People'
 *      500:
 *        description: algun error del server
 *
 */
routerPeoples.post("/peoples", createPeople);

/**
 * @swagger
 * /peoples/{id}:
 *  put:
 *    summary: actualiza un personaje por medio del un ID
 *    tags: [People]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/People'
 *    responses:
 *      200:
 *        description: nos dice que se actualizo un personaje
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/People'
 *      500:
 *        description: algun error del server
 *
 */
routerPeoples.put("/peoples/:id", updatePeople);

/**
 * @swagger
 * /peoples/{id}:
 *  delete:
 *    summary: elimina un personaje por medio del un ID
 *    tags: [People]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/People'
 *    responses:
 *      200:
 *        description: nos dice que se elimino el personaje 
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/People'
 *      500:
 *        description: algun error del server
 *
 */
routerPeoples.delete("/peoples/:id", removePeople);


module.exports = routerPeoples;