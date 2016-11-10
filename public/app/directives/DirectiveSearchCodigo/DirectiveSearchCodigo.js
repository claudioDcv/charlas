(function () {
  'use strict'

  angular
    .module('sistemaCharlas')
    .directive('uhlSearchCodigo', UhlSearchCodigo);

  UhlSearchCodigo.$inject = ['FactorySearchCharla','$location','ServiceHTTP','FactoryLoader'];
  function UhlSearchCodigo (FactorySearchCharla,$location,ServiceHTTP,FactoryLoader) {
    return {
      restrict: 'E',
      scope: { },
      templateUrl: './app/directives/DirectiveSearchCodigo/DirectiveSearchCodigo.html',
      link: function ($scope, element, attrs) {
            $scope.codigo;
            $scope.isErrorBuscar = false;

            $scope.formatText = formatText;
            function formatText(txt){
              $scope.isErrorBuscar = false;
              //.replace(/^[a-z0-9]+$/i,'') eliminar letras y numeros
              //.replace(/\W/g, '') == [^0-9a-zA-Z_] deja letras numero y espacios
              $scope.codigo = txt == null ? '' : txt.toUpperCase().replace(/[^0-9a-z]/gi, '');
            }

            $scope.formIsValid = formIsValid;
            function formIsValid(){
              return $scope.formBusqueda.$valid && $scope.codigo.length == 6
            }
            $scope.buscar = buscar;
            function buscar(){
              if ($scope.formIsValid()) {

                function resultOK(data){
                  FactoryLoader.desactivar();
                  FactorySearchCharla.setCodigo($scope.codigo);
                  FactorySearchCharla.setUltimaCharlaEncontrada(data.data);
                  $location.path('public/charlas/charla');
                }
                function resultNOK(err){
                  FactoryLoader.desactivar();
                  $scope.isErrorBuscar = true;
                  $scope.captcha = "";
                  $scope.formBusqueda.$setUntouched();
                }
                ServiceHTTP.getCharlaPorCodigo($scope.codigo,'Buscando...')
                  .success(function(data) {
                    if (data.data != -1)
                      resultOK(data);
                    else
                      resultNOK(data);
                  })
                  .error(function(err) {
                      resultNOK(err);
                  });

                /*
                .then(function(data) {
                          FactorySearchCharla.setCodigo($scope.codigo);
                          FactorySearchCharla.setUltimaCharlaEncontrada(data);
                          $location.path('public/charlas/charla');
                        })
                        .catch(function(err)) {
                            $scope.isErrorBuscar = true;
                        }
                */
              }
            }


            $scope.url_captcha = 'https://zeus.sii.cl/cvc_cgi/stc/CViewCaptcha.cgi?oper=1&txtCaptcha=VAZxN0lEUUMdxSEkyMDE3MTEwMzE3NTMxNFhONFB3dnR0B3ZjMjIyMnNLUWR2NVVFdTVNMDBjYm5rtyuRMXlXLlFVSnZMakJtYkhCMFozRnNMZz09cDlheVBwUmkxZC3=';
            $scope.regenerate = function(){
              $scope.captcha = "";
              $scope.url_captcha = '';
              $scope.url_captcha = 'https://zeus.sii.cl/cvc_cgi/stc/CViewCaptcha.cgi?oper=1&txtCaptcha=VAZxN0lEUUMxSEkyMDE3MTEwMzE3NTMxNFhONFB3dnR0B3ZjMjIyMnNLUWR2NVVFdTVNMDBjYm5rtyuRMXlXLlFVSnZMakJtYkhCMFozRnNMZz09cDlheVBwUmkxZC3=';
              console.log(1);

              $scope.apply;
            }

            $scope.cerrarErrorBuscar = cerrarErrorBuscar;
            function cerrarErrorBuscar(){
              $scope.isErrorBuscar = false;
              $scope.codigo = '';
            }

          }
    }
  }

})();
