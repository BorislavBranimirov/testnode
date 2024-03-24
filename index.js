const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/long-request', async (req, res) => {
  await new Promise((resolve) => setTimeout(resolve, 10000));
  res.send('Completed wait...');
});

setTimeout(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}, 10000);
