const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');

// const apiRouter = require('./server/api');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// app.use('/api', apiRouter);

module.exports = app;

/* Do not change the following line! It is required for testing and allowing
*  the frontend application to interact as planned with the api server
*/
const PORT = process.env.PORT || 4001;

// Add middleware for handling CORS requests from index.html


// Add middware for parsing request bodies here:


// Mount your existing apiRouter below at the '/api' path.
const apiRouter = require('./server/api');


// This conditional is here for testing purposes:
if (!module.parent) { 
  // Add your code to start the server listening at PORT below:

}
