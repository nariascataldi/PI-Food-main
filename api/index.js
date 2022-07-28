//                       |||
//                    |||||||||
//                       |||
//                       |||
//                       |||
//                       
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const {Diet, conn } = require('./src/db.js');
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

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(3001, () => {
    dietLoader()
    console.log(`It's listening at ${BACKEND_PORT}, recuerda setear el force a true`); // eslint-disable-line no-console
  });
});
