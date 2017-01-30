const express = require('express');
const app     = express();
const path    = require('path');
const port    = process.env.PORT || 3333;

app.use('/public', express.static(path.join(__dirname, 'public')))

const imageUrls = [
  'http://i.imgur.com/558qckm.jpg?1',
  'http://i.imgur.com/8fYJCto.jpg',
];

app.get('/container/:id', (req, res) => {
  res.send(`<img src="${imageUrls[req.params.id]}" style="width: 100%">`);
});

app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});
