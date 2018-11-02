const http = require('http');
const bodyParser = require('body-parser');
 module.exports = () => {
    const app = require('express')();
    
    app.use(require('morgan')('dev'));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Orgin', '*')
        res.header('Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept, Authorization'
        );
        if(req.method === 'OPTIONS') {
            res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, GET, DELETE');
            return res.status(200).json({});
        }
        next();
    });


    const apiBasePath = process.env.BASE_PATH;
    app.use(apiBasePath, require('../resources/index'));

    app.use((error, req, res, next) => {
        res.status(error.status || 500);
        res.json({
            error: error.message || 'Internal Server Error'
        });
    });
    return http.createServer(app);
}