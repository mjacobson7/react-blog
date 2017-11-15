const bodyParser = require('body-parser'),
express = require('express'),
app = express(),
port = 2400,
cors = require('cors'),
http = require('http'),
massive = require("massive");

massive({
    host: 'localhost',
    port: 5432,
    database: 'react-blog',
    user: 'maxjacobson',
    password: '',
    ssl: false
  }).then(function(db) {
    app.set('db', db);
  });


app.use(bodyParser.json());
app.use(cors());
app.use(express.static('build'));
app.set('views', './build');

app.get('/testEndpoint', function(req, res) {
    app.get('db').query('SELECT * FROM company_selected_timezone where company_id = 12345; ').then(tests => {
        res.send(tests);
    })
})

app.get('*', function(req, res) {
    res.sendFile(`${process.cwd()}/build/index.html`);
});
app.listen(process.env.PORT || port, () => {
console.log(`Now listening on port ${port}`);
});

