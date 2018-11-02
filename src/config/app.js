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


    app.use((req, res, next) => {
        res.status(200).json({
            message: 'It works'
        });
        
    });
    return http.createServer(app);
}