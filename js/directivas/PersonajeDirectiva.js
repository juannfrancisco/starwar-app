(function() {

   app.directive('personajeThumbail', [function() {
      return {
        restrict: 'E',
        scope: { personaje:'=' },
        template:'<div class="thumbnail">' +
          '<img ng-src="img/people/{{personaje.name}}.jpg" alt="...">'+
          '<div class="caption">'+
          '<h3>{{personaje.name}}</h3>'+
          '<p>height : {{personaje.height}}</p>'+
          '<p>Año de Nacimiento : {{personaje.birth_year}}</p>'+
          '</div>'+
          '</div>'
      };
  }]);

}());
