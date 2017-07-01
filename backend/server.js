import express from 'express';
import dbRoutes from './routes/databaseAccess.js'; //importing all routes from this file
const app = express();

// This line makes the build folder publicly available.
app.use(express.static('build'));
//Allows for using routes that are written in a separate file
app.use('/db', dbRoutes);

app.listen(3000, () => {
  console.log('Server for React Todo App listening on port 3000!')
});
