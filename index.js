const express = require('express');
const app     = express();
const path    = require('path');
const port    = process.env.PORT || 3333;

app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/container/:id', (req, res) => {
  res.send(`<img src="/static/${[req.params.id]}.png">`);
});

app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});
