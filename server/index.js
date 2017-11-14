var bodyParser = require('body-parser'),
    express = require('express'),
    app = express(),
    port = 3001,
    cors = require('cors'),
    path = require('path');

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.resolve(__dirname, '../client/build')));
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });  


  app.listen(process.env.PORT || port, () => {
    console.log(`Now listening on port ${port}`);
  });