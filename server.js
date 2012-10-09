var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , xml2js = require('xml2js')
  , parser = new xml2js.Parser()
  , fs = require('fs');

app.listen(8000);

function handler ( req, res ) {
  fs.readFile( __dirname + '/client.html' ,
  function ( err, data ) {
    if ( err ) {
      console.log( err );
      res.writeHead(500);
      return res.end( 'Error cargando client.html' );
    }
    res.writeHead( 200 );
    res.end( data );
  });
};

// crea un websocket para mantener el contenido actualizado sin AJAX request
io.sockets.on( 'connection', function ( socket ) {
  // viendo el archivo xml
  fs.watch( 'example.xml', function ( curr, prev ) {
    // el archivo cambia para el leer el nuevo xml
    fs.readFile( 'example.xml', function ( err, data ) {
      if ( err ) throw err;
      // parseando el xml para convertirlo en json
      parser.parseString( data );
    });
  });
  // cuando el parseo termina se envian los nuevos datos a la pagina
  parser.addListener('end', function( result ) {

    // agregando la hora de lá ultima actualizacion
    result.time = new Date();
    socket.volatile.emit( 'notification' , result );
  });
});
