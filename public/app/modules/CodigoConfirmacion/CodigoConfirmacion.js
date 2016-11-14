CodigoConfirmacion.$inject = ['ServiceStore', 'FactorySearchCharla', '$routeParams', '$location', 'FactoryLoader'];

function CodigoConfirmacion(ServiceStore, FactorySearchCharla, $routeParams, $location, FactoryLoader) {
    var vm = this
    vm.data = {};
    vm.param = {};
    vm.param.id = $routeParams.id;
    vm.param.dr = $routeParams.dr;
    vm.param.call = $routeParams.call;

    vm.data.charla = ServiceStore.getUltimaCharlaInscrita();
    console.log(vm.data.charla);
    console.log(vm.data.charla);
    vm.volver = volver;


    if (vm.param.call == 'listado') {
      vm.volver.texto = 'Volver a listado de actividades';
      vm.urlAnteriorPortal = '/#/public/';
      vm.urlAnterior = "/#/public/charlas/listado/" + vm.param.dr;
      vm.textoUrlAnterior = "Charlas"
    }else{
      vm.volver.texto = 'Volver a Formulario de charla';
      vm.urlAnteriorPortal = '/#/monitor/';
      vm.urlAnterior = "/#/monitor/charlas/evaluacion/" + vm.param.dr;
      vm.textoUrlAnterior = "Formulario de Charla"
    }


    function volver(id) {
        vm.volver = {};
        if (vm.param.call == 'listado') {
            $location.path('public/charlas/listado/' + vm.param.dr);
        } else {
            $location.path('monitor/charlas/evaluacion/' + vm.param.dr);
        }

    };

}
