app.controller('PersonajesController', ['$scope', 'StarWarsService',  function($scope, StarWarsService ) {

  $scope.flagLoading = false;

  /**
  * Obtiene los equipos de Basket
  */
  $scope.obtenerDatos = function(){

    $scope.flagLoading = true;

    StarWarsService.getPersonajes().then(function( response ){
      $scope.flagError = false;
      $scope.personajes = response.results;
      $scope.flagLoading = false;
    }, function( error ){
      $scope.flagError = true;
      $scope.equipos = {};
      $scope.flagLoading = false;
    });
  };

  $scope.obtenerDatos();
}]);
