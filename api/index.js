//                       |||
//                    |||||||||
//                       |||
//                       |||
//                       |||
//                       
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { Diet, conn } = require('./src/db.js');
const { BACKEND_PORT } = require('./src/utils/config/index.js');
const model = require('./src/apiInfo/allData');

// la funcion allDiets me devuelve un arreglo con todas las dietas de la api
// cargar la bd con un findOrCreate
const dietLoader = async function () {
  const dietsApiR = await model.allDiets();
  try {
    dietsApiR.forEach((t) => {
      Diet.findOrCreate({
        where: {
          title: t
        }
      })
    });
  } catch (error) {
    console.log(error)
  }
}
var boolean = false;
// Syncing all the models at once.
conn.sync({ force: boolean }).then(() => {
  server.listen(process.env.PORT || BACKEND_PORT, () => {
    dietLoader()
    if (!boolean) {
      console.log(`It's listening at ${BACKEND_PORT}, recuerda setear el force a true y aumentar las peticiones a 100 de recetas`); // eslint-disable-line no-console
    } else {
      console.log(`Running at ${BACKEND_PORT}`)
    }
  });
});
