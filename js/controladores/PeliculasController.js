app.controller('PeliculasController', ['$scope', 'StarWarsService', function($scope, StarWarsService) {

   /**
   *
   */
   $scope.obtenerDatos = function(){
     $scope.flagLoading = true;
     StarWarsService.getPeliculas().then(function( response ){
       $scope.flagError = false;
       $scope.peliculas = response.results;
       $scope.flagLoading = false;
     },function( error ){
       $scope.flagError = true;
       $scope.equipos = {};
       $scope.flagLoading = false;
     });
   };

   $scope.obtenerDatos();




}]);
