AdminLocalCharlaVer.$inject = ['ServiceUsuario', 'FactoryData', '$location',
  '$scope', '$timeout'
];

function AdminLocalCharlaVer(ServiceUsuario, FactoryData, $location, $scope,
  $timeout) {
  console.log(ServiceUsuario.getData());

  var vm = this;
  vm.newCharla = {};
  vm.data = {};
  vm.data.charla = {};
  vm.data.charla.fechaInicio = new Date();
  vm.data.charla.estado = 1;

  vm.saveAndNotify = false;
  vm.desactiveButton = true;

  vm.comunas = FactoryData.getComuna();
  vm.dr = FactoryData.getDr();


  vm.data.charla = {};


  vm.suspenderActividad = function(idc) {

    $('#modal-suspender-charla').modal('hide');
    $timeout(function() {
      console.log(1);
      $location.path('admin-local/listado/charlas');
      $scope.apply;
    }, 500);

  }
  vm.selectAct = function(id, titulo) {
    vm.data.charla.actividadSelect = id;

    vm.data.charla.actividadSelectHumanText = 'Actividad: ' + titulo;
    console.log(id);
    $('#selecion-actividad').modal('hide');


  }


  vm.optFechaInicio = function() {
    return {
      icons: {
        next: 'glyphicon glyphicon-arrow-right',
        previous: 'glyphicon glyphicon-arrow-left',
        up: 'glyphicon glyphicon-arrow-up',
        down: 'glyphicon glyphicon-arrow-down',
      },
      format: 'DD/MM/YYYY'
    };
  }
  vm.optFechaFin = function() {
    return {
      icons: {
        next: 'glyphicon glyphicon-arrow-right',
        previous: 'glyphicon glyphicon-arrow-left',
        up: 'glyphicon glyphicon-arrow-up',
        down: 'glyphicon glyphicon-arrow-down',
      },
      format: 'DD/MM/YYYY',
      minDate: new Date(vm.data.charla.fechaInicio)
    };
  }


  vm.cargarHTTP = function(){

    vm.charlaOriginal = {};


    vm.data.charla = {
      actividadSelect: 2,
      actividadSelectHumanText: "Actividad: Como declarar IVA | 15Hrs",
      comuna: "8413",
      cupos: 10,
      direccion: "Avenida Siempre Viva #3345",
      dr: "DR Arica",
      estado: 2,
      fechaInicio: "01/11/2016",
      fechaTermino: "10/11/2016",
      monitorSelect: "167512569"
    };

    angular.copy(vm.data.charla,vm.charlaOriginal);

    $timeout(function () {
      $scope.$watch('vm.data.charla', function(newValue, oldValue){
        if (oldValue  != newValue) {
          vm.desactiveButton = false;
        }

        if (
          oldValue.comuna != newValue.comuna ||
          oldValue.direccion != newValue.direccion ||
          oldValue.dr != newValue.dr ||
          oldValue.estado != newValue.estado ||
          oldValue.fechaInicio != newValue.fechaInicio ||
          oldValue.fechaTermino != newValue.fechaTermino
        ) {
          vm.saveAndNotify = true;
        }else{

        }
      }, true);
    }, 500);

  }
  vm.cargarHTTP();

}
