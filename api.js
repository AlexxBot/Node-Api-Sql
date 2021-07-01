var Db = require('./dbOperations');
var dbOperations = require('./dbOperations');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const { response } = require('express');
var app = express();
var router = express.Router();


app.use(bodyParser.urlencoded({ extended : true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api',  router);

router.use((request, response, next) => {
    console.log('middleware');
    next();
})

router.route("/persona").get((request, response) => {
    dbOperations.getPersonas().then(result => {
        response.json(result[0]);
    })
})

router.route("/persona").post((request, response) => {
    let persona = {...request.body}
    console.log(persona);
    dbOperations.addPersona(persona).then(result => {
        //response.json(result[0]);
        console.log(result)
        response.status(201).json(result)
    })
})

router.route("/persona/:codPersona").get((request, response) => {
    dbOperations.getPersona(request.params.codPersona).then(result => {
        response.json(result[0]);
    })

})

var port = process.env.PORT || 8090;
app.listen(port);
console.log('Order api is running at ' + port);

/* dbOperations.getPersonas().then(result => {
    console.log(result);
}) */