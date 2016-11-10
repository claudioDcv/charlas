(function () {
  'use strict'

  angular
    .module('sistemaCharlas')
    .directive('agregarUsuario', AgregarUsuario);

  AgregarUsuario.$inject = ['ServiceHTTP','$location','$timeout','FactoryLoader'];
  function AgregarUsuario (ServiceHTTP,$location,$timeout,FactoryLoader) {
    return {
      restrict: 'E',
      scope: {
        'lista': '=',
        'data': '='
      },
      templateUrl: './app/directives/AgregarUsuario/AgregarUsuario.html',
      link: function ($scope, element, attrs) {

              $scope.nuevoUsuario  = {
                'charlaId':'',
                id: 0,
                rut: '',
                email:'',
                fechaNacimiento : '',
                comuna:'',
                nombre: '',
                asistio: false
              };

              $scope.agregarParticipante = function(){
                $('#modal-agregar-usuario').modal('show');
              }

              $scope.gotoRegistrar = function(){
                $scope.nuevoUsuario.charlaId = $scope.data.id;
                //Copiar la data de la charla en el envio
                var nuevoUser = {
                  data : $scope.nuevoUsuario
                };

                ServiceHTTP.aceptarInscripcionCharla(nuevoUser , "Registrando...").then(function(data){
                  FactoryLoader.desactivar();

                  $scope.nuevoUsuario.codigo = data.data.data.codigo;

                  $scope.lista.push($scope.nuevoUsuario);
                  $scope.nuevoUsuario  = {
                    'charlaId': $scope.data.id,
                    id: 0,
                    rut: '',
                    email:'',
                    fechaNacimiento : '',
                    comuna:'',
                    nombre: '',
                    asistio: false,
                    codigo : ''
                  };
                  $scope.FormNuevaCharla.$setUntouched();
                });
                //HTTP send
                $('#modal-agregar-usuario').modal('hide');
              }

              /*
              element.on('click', function () {
                console.log($scope.idc);
                  element.css('background-color', 'red');
              });
              element.on('mouseenter', function () {
                  element.css('background-color', 'yellow');
              });
              element.on('mouseleave', function () {
                  element.css('background-color', 'white');
              });
              */
          }
    }
  }

})();
