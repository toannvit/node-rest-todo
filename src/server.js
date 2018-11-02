const createServerApp = require('./config/app');

const server = createServerApp();

const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log('Server started on port:%s', port);
});