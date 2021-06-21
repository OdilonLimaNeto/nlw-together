import express from 'express';

const server = express();

server.listen(3333, () => {
    console.log('Server is running');
});

