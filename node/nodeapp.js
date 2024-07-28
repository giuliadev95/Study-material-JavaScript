const http= require('http');

// inizializzare un server con una funzione
const server = http.createServer((req,res) => {

    // settare header
    res.writeHeader(200, { 'Content-Type': 'text/html; charset = utf-8' });
    
    // settare 'corpo' del documento
    res.write('<html> <head> <meta charset = "UTF-8">  <title> Server locale </title> </head> <body> <h1> Test </h1> </body> </html>')
    
    // terminare il processo
    res.end();
})

// Indicare la porta di local host
server.listen(3001, () => {
    console.log('Server is listening on port 3001');
});