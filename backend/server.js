import express from 'express';
import dbRoutes from './routes/databaseAccess.js'; //importing all routes from this file
import mongoose from 'mongoose';
import bodyParser from 'body-parser'
const app = express();
var connect = process.env.MONGODB_URI;
mongoose.connect(connect);

// This line makes the build folder publicly available.
app.use(express.static('build'));
//Middleware
app.use(bodyParser.json());
//Allows for using routes that are written in a separate file
app.use('/db', dbRoutes);

app.listen(3000, () => {
  console.log('Server for React Todo App listening on port 3000!')
});
