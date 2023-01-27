const express = require('express');
const { loginRoute } = require('./routes');
const { userRoute } = require('./routes');

//  ...

const app = express();

app.use(express.json());

app.use('/login', loginRoute);
app.use('/user', userRoute);

app.use((error, _req, res, _next) => {
    if (error.status) {
      return res.status(error.status).json({ message: error.message });
    }
    console.error(`***** Erro ${error.message}`);
    return res.status(500).json({ message: 'internal server error' });
  });

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
