FormularioInscripcionMonitor.$inject = ['$scope','ServiceUsuario','ServiceStore','ServiceHTTP','$routeParams','$filter','$location','FactoryLoader'];
function FormularioInscripcionMonitor($scope,ServiceUsuario,ServiceStore,ServiceHTTP,$routeParams,$filter,$location,FactoryLoader){

  var vm = this;
  vm.data = {};

  vm.param = {};
  vm.param.id = $routeParams.id;
  vm.param.dr = $routeParams.dr;
  vm.param.call = $routeParams.call;
  vm.data.charla = {};
  vm.data.charla.fechaFormat;
  vm.data.charla.horaFormat;
  vm.data.charla.horaFinFormat

    vm.urlAnteriorPortal = '/#/monitor/';
    vm.urlAnterior = "/#/monitor/charlas/evaluacion/" + vm.param.dr;
    vm.textoUrlAnterior = "Formulario de Charla"


  vm.newCharla = {
    nombre : '',
    apellido : '',
    email : '',
    fechaNacimiento : '',
    comuna : ''
  };

  vm.callCharla = callCharla;
  function callCharla(dr,id){
      ServiceHTTP.getCharlaPorId(dr,id,'Cargando...').then(function(data){
        FactoryLoader.desactivar();
        vm.data.charla = data.data.data;
      },function(err){
        console.log(err);
      });
     //vm.data.charla = ServiceHTTP.getCharlaPorId(id);
     vm.data.charla.fechaFormat = $filter('date')(vm.data.charla.fecha, "fullDate");
     vm.data.charla.horaFormat = $filter('date')(vm.data.charla.fecha, "shortTime");
     vm.data.charla.horaFinFormat = $filter('date')(vm.data.charla.fechaFin, "shortTime");
  }

  vm.gotoRegistrar = gotoRegistrar;
  function gotoRegistrar(){
    if ($scope.FormNuevaCharla.$valid) {

      //Copiar la data de la charla en el envio
      vm.newCharla.data = vm.data.charla;

      ServiceHTTP.aceptarInscripcionCharla(vm.newCharla , "Registrando...").then(function(data){
        FactoryLoader.desactivar();
        console.log(data);
        ServiceStore.setUltimaCharlaInscrita(data.data.data);
        $location.path('monitor/detalle-inscripcion/' + vm.param.call + '/' + vm.param.dr + '/' + vm.param.id);
      });

    }else{
      console.log('Error debe completar todos los campos');
    }


  }
  vm.cancelarInscripcion = cancelarInscripcion;
  function cancelarInscripcion(id){
    ServiceStore.deleteUltimaCharlaInscrita(id);
    $location.path('public/charlas/listado/' + vm.param.dr);
  }

  vm.callCharla(vm.param.dr,vm.param.id);
}
