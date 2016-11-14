ListaCharla.$inject = ['$scope','ServiceHTTP','ServiceStore','$location','$routeParams','FactoryLoader'];
function ListaCharla($scope,ServiceHTTP,ServiceStore,$location,$routeParams,FactoryLoader){

  var vm = this;
  vm.data = {};
  vm.param = {};
  vm.param.type = $routeParams.type;
  vm.param.dr = $routeParams.dr;


    function getCharlas(){
      function resultOK(data){
        FactoryLoader.desactivar();
        vm.data.charlas = data.data;
      }
      function resultNOK(err){
        FactoryLoader.desactivar();
        console.log(err);
      }
      ServiceHTTP.getCharlas(vm.param.dr,'Cargando listado de actividades...')
        .success(function(data) {
            resultOK(data);
        })
        .error(function(err) {
            resultNOK(err);
        });
    }
    getCharlas();


    vm.bread_charla = [
      { text : 'Charlas', class : 'active', href : '' }
    ];

    var getUltimaCharlaInscritaId = ServiceStore.getUltimaCharlaInscrita() ? ServiceStore.getUltimaCharlaInscrita().id : '';
    vm.compareCharlas = function(id){
      return id == getUltimaCharlaInscritaId ? 'bg-info' : '';
    }
    vm.charlaInscribir = charlaInscribir;
    function charlaInscribir(objCharla){

        $location.path('public/formulario-de-inscripcion/listado/' + vm.param.dr + '/'+objCharla.id);
/*


      console.log(objCharla);
*/
        }

}
