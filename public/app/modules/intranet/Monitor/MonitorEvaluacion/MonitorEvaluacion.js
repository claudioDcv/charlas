MonitorEvaluacion.$inject = ['$scope', 'ServiceUsuario', 'ServiceHTTP',
  'FactoryLoader', '$location', '$routeParams'
];

function MonitorEvaluacion($scope, ServiceUsuario, ServiceHTTP, FactoryLoader,
  $location, $routeParams) {
  console.log(ServiceUsuario.getData());

  var vm = this;

  vm.type = $routeParams.type;
  vm.data = {};
  vm.data.charla = {};
  vm.data.usuarios = [];
  vm.arr = [];

  vm.agregarParticipante = agregarParticipante;

  function agregarParticipante() {
    $location.path('monitor/formulario-de-inscripcion/evaluacion/1/1');
  }

  function initView() {
    function resultOK(data) {
      FactoryLoader.desactivar();
      console.log(data.data);
      vm.data.charla = data.data.identificacion;
      vm.data.usuarios = data.data.listado;
      angular.copy(vm.data.usuarios, vm.arr)
    }

    function resultNOK(err) {
      FactoryLoader.desactivar();
      $scope.isErrorBuscar = true;
    }
    ServiceHTTP.getCharlaMonitorPorId(2, 'Cargando...')
      .success(function(data) {
        if (data.data != -1)
          resultOK(data);
        else
          resultNOK(data);
      })
      .error(function(err) {
        resultNOK(err);
      });
  }

  initView();

  vm.cerrarCharla = cerrarCharla;

  function cerrarCharla() {
    console.log(vm.data.usuarios);
  }

  vm.searchInput = '';
  vm.getUsuarios = function() {
      vm.searchInput += '';
      vm.arr = [];
      //angular.copy(vm.data.usuarios,arr)
      if (vm.searchInput.length > 0) {
        for (var i = 0; i < vm.data.usuarios.length; i++) {
          if (
            vm.data.usuarios[i].nombre.toLowerCase().indexOf(vm.searchInput.toLowerCase()) !=
            -1 ||
            vm.data.usuarios[i].rut.toLowerCase().indexOf(vm.searchInput.toLowerCase()) !=
            -1 ||
            vm.data.usuarios[i].codigo.toLowerCase().indexOf(vm.searchInput.toLowerCase()) !=
            -1) {
            vm.arr.push(vm.data.usuarios[i])
          }
        }
        //angular.copy(vm.arr,vm.data.usuarios)
        return true;
      }
      angular.copy(vm.data.usuarios, vm.arr)

    }
    //vm.getUsuarios();


  vm.disableButton = true;
  setTimeout(function() {
    $scope.$watch('vm.data.usuarios', function(newValue, oldValue) {

      if (newValue != oldValue) {
        console.log(1);
        vm.disableButton = false;
      } else {
        2
      }

    }, true);
  }, 500);

}



function arrayObjectIndexOf(arr, obj) {
  for (var i = 0; i < arr.length; i++) {
    if (angular.equals(arr[i], obj)) {
      return i;
    }
  };
  return -1;
}
