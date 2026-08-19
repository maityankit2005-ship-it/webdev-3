const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/students', (req, res) => {
    console.log(req.method);
    console.log(req.url);
    console.log(req.body);
    console.log(req.query.cgpa);
  res.send('Hello from students');

});

app.listen(port, () => {
  console.log(`Server is running `);
});

