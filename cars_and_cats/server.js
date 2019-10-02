const express = require("express");
const app = express();
app.use(express.static(__dirname + "/static"));
app.get('/', (request, response) => {
   response.send(index.html);
});

app.get('/cars', (request, response) => {
    response.redirect('cars.html');
 });

 app.get('/cats', (request, response) => {
    response.redirect('cats.html');
 });

 app.get('/form', (request, response) => {
    response.redirect('form.html');
 });
app.listen(8000, () => console.log("listening on port 8000"));
