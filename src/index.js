const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

// const server = require('http').Server(app);
const server = require('http').createServer(app);
const io = require('socket.io')(server);
io.origins(['http://192.168.1.6:3000/']);

mongoose.connect('mongodb+srv://deyvisonpenha:de_ison1@cluster0-faoju.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

app.use((req, res, next) => {
    req.io = io;
    next();
})

app.use(cors());

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')))

app.use(require('./routes'));

app.listen(3001)