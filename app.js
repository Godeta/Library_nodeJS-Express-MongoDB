const express = require('express')
const app = express();
const port = 8000;
// link : http://127.0.0.1:8000/
app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});