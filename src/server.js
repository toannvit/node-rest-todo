const createServerApp = require('./config/app');

const server = createServerApp();

const port = process.env.PORT || 3000;

server.listen(port, () => {
    const mongoose = require('mongoose');
    const db = mongoose.connection;
    
    db.on('error', (error) => console.log(error));
    db.once('open', () =>
    {
        console.log('MongoDB connected successfully');
        console.log('Server started on port:%s', port);
    });

    mongoose.connect(process.env.MONGODB_ATLAS_URI,
        {
            useNewUrlParser: true
        }
    );
});