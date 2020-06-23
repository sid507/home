// const Person = require('./person');

// const person1 = new Person('Siddharth', 20);

// person1.greeting();


// // console.log(JSON.stringify(person))

// const Logger = require('./logger');

// const logger = new Logger();
// logger.on('message', (Data) => { console.log('Called Listener', Data) });

// logger.log('hello world');

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {

        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(data)
        })
    }
    if (req.url === '/todo') {

        fs.readFile(path.join(__dirname, 'todo.html'), (err, data) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(data)
        })
    }
});
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log('Server running'));

