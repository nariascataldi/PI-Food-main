//                       |||
//                    |||||||||
//                       |||
//                       |||
//                       |||
//                       
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { BACKEND_PORT } = require('./src/utils/config/index.js')
// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(3001, () => {
    console.log(`It's listening at ${BACKEND_PORT}, recuerda setear el force a true`); // eslint-disable-line no-console
  });
});
