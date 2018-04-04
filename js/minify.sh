uglifyjs app.js \
          controladores/MainController.js  \
          controladores/PeliculasController.js \
          controladores/PersonajesController.js \
          directivas/PersonajeDirectiva.js \
          servicios/StarWarsService.js \
          --source-map app.min.js.map \
          --source-map-root http://127.0.0.1:8080/starWarsApp/js \
          -o app.min.js -m
