# Rest api serverless with Node
###### En este proyecto se implemento:

- Node.js v18  en desarrollo y v16 en producción
- Serverless 
- Lambda
- mysql
- jest
- swagger

###### Dependencias de node:
- "dependencies"
-    "cors": "^2.8.5"
-    "express": "^4.17.1"
-    "morgan": "^1.10.0"
-    "mysql2": "^2.3.3"
-    "node-fetch": "^3.3.0"
-    "serverless-http": "^2.7.0"
-    "swagger-jsdoc": "^6.2.5"
-    "swagger-ui-express": "^4.6.0"

-  "devDependencies"
-    "jest": "^29.3.1"
-    "nodemon": "^2.0.20"
-    "supertest": "^6.3.1"

###### Link de proyecto desplegado en aws:
https://9spdny37pa.execute-api.us-east-1.amazonaws.com/

------------


#### Pasos para desplegarlo:
- Clonar el respositorio:
`git clone https://github.com/DevCarlosRamos/aws-mysql-swagger-jest.git`

- Instalar dependencias:
`npm install`

### scripts
- Para correr de manera local `npm run dev`
"dev": "nodemon ./src/ofline/ofline"
- Para correr las pruebas unitarias `npm run test`
    "test": "npx jest"
- Para dar deploy a aws `npm run deploy`
    "deploy": "serverless deploy --verbose"

##Uso de la api, tiene 5 endpoint
#### - Crear personaje 
POST:https://9spdny37pa.execute-api.us-east-1.amazonaws.com/peoples
Enviar un json ejemplo:
```
{
    "nombre":"personaje1",
    "altura":0,
    "peso":0, 
    "color_de_pelo":"personaje1",
    "color_de_piel":"personaje1", 
    "color_de_ojos":"personaje1", 
    "nacimiento":"personaje1",
    "genero":"personaje1", 
    "mundo_natal":"personaje1", 
    "pelicula":"personaje1", 
    "especies":"personaje1",
    "vehiculo":"personaje1", 
    "naves":"personaje1", 
    "link":"personaje1"
}
```

#### - Mostrar todos los personajes
GET:https://9spdny37pa.execute-api.us-east-1.amazonaws.com/peoples

#### - Mostrar solo un personaje
agregar un id valido al final del link ejemplo:
GET:https://9spdny37pa.execute-api.us-east-1.amazonaws.com/peoples/6

#### - Actualizar personaje
PUT:https://9spdny37pa.execute-api.us-east-1.amazonaws.com/peoples/6
enviar un json con este formato:
```
{
    "nombre":"update1",
    "altura":0,
    "peso":0, 
    "color_de_pelo":"update1",
    "color_de_piel":"update1", 
    "color_de_ojos":"update1", 
    "nacimiento":"update1",
    "genero":"update1", 
    "mundo_natal":"update1", 
    "pelicula":"update1", 
    "especies":"update1",
    "vehiculo":"update1", 
    "naves":"update1", 
    "link":"update1"
}
```

#### - Eliminar personaje
eliminar personaje mediante su id
DELETE:https://9spdny37pa.execute-api.us-east-1.amazonaws.com/peoples/7

### integración con swapi
##### llamado de la api:
```
const people = fetch("https://swapi.py4e.com/api/people")
    .then((res) => {
        return res.json()
    })
```
##### conversion de nombre de ingles a español:
```
 .then((people) => {

        const data = people.results;

        const People = data.map(item => {
            return {
                id,
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
```

para ver en consola:
`node ./src/swapi-api.js`

