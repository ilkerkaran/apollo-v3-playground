import express from 'express';
import jsonGraphqlExpress from 'json-graphql-server';
import data from  './data.json';
const PORT = 5200;
const app = express();

//make a 40 ms delay before return the data 
app.use((req, res, next) => {
  setTimeout(() => next(), 400);
});
app.use('/graphql', jsonGraphqlExpress(data));
app.listen(PORT,()=> console.log(`Server started! Listening port:${PORT}`));