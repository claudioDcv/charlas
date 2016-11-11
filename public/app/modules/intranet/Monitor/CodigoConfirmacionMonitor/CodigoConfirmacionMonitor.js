CodigoConfirmacionMonitor.$inject = ['ServiceStore', 'FactorySearchCharla',
  '$routeParams', '$location', 'FactoryLoader'
];

function CodigoConfirmacionMonitor(ServiceStore, FactorySearchCharla,
  $routeParams, $location, FactoryLoader) {
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

  function volver(id) {
    vm.volver = {};


  };

}
