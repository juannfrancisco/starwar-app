var app = angular.module('AppStarWars', ['ngRoute']);

app.config([ '$routeProvider', function($routeProvider) {

  $routeProvider
  .when( '/' ,           { templateUrl:'view/inicio.html', controller:'InicioController' } )
  .when( '/personajes' , { templateUrl:'view/personajes.html', controller:'PersonajesController' } )
  .when( '/naves',       { templateUrl:'view/naves.html', controller:'NavesController' } )
  .when( '/peliculas',   { templateUrl:'view/peliculas.html', controller:'PeliculasController' } )
  .when( '/planetas',    { templateUrl:'view/planetas.html', controller:'PlanetasController' } )

  .otherwise( '/'  );

}]);
