app.service( 'StarWarsService',[ '$http', '$q', function( $http, $q ){

  /**
  * Obtiene todos personajes de la saga Star Wars
  */
  this.getPersonajes = function(){
    var prom = $q.defer();
    $http.get( 'http://swapi.co/api/people/' ).
    success( function( response ){
      prom.resolve( response );
    }).
    error( function( error ){
      prom.reject( error );
    });
    return prom.promise;
  };


  /**
  * Obtiene todos los films de la saga Star Wars
  */
  this.getPeliculas = function(){
    var prom = $q.defer();
    $http.get( 'http://swapi.co/api/films/' ).
    success( function( response ){
      prom.resolve( response );
    }).
    error( function( error ){
      prom.reject( error );
    });
    return prom.promise;
  };

}]);
