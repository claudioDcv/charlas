MonitorEvaluacion.$inject = ['$scope', 'ServiceUsuario', 'ServiceHTTP',
  'FactoryLoader', '$location', '$routeParams', '$timeout'
];

function MonitorEvaluacion($scope, ServiceUsuario, ServiceHTTP, FactoryLoader,
  $location, $routeParams, $timeout) {
  console.log(ServiceUsuario.getData());

  var vm = this;

  vm.type = $routeParams.type;
  vm.id = $routeParams.id;
  vm.data = {};
  vm.data.charla = {};
  vm.data.usuarios = [];
  vm.arr = [];
  vm.agregarParticipante = agregarParticipante;

  vm.isHistorial;
  if (vm.id == "1") {
    vm.isHistorial = true;
  }else {
    vm.isHistorial = false;
  }

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


      $scope.$watch('vm.data.usuarios', function(newValue, oldValue) {

        if (newValue != oldValue) {
          console.log(1);
          vm.disableButton = false;
        } else {
          console.log(2);
          vm.disableButton = true;
          console.log(vm.disableButton);
        }

      }, true);

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


  vm.todosPresentes = function(){
    console.log(1);
    for (var v in vm.arr) {
      if (vm.arr.hasOwnProperty(v)) {
        console.log(vm.arr[v]);
        vm.arr[v].asistio = true;
      }
    }
  }


}


function arrayObjectIndexOf(arr, obj) {
  for (var i = 0; i < arr.length; i++) {
    if (angular.equals(arr[i], obj)) {
      return i;
    }
  };
  return -1;
}
