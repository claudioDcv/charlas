AdminLocalActVer.$inject = ['ServiceUsuario', '$location', 'ServiceHTTP', 'FactoryLoader', 'ServiceHelpers','$routeParams','$scope'];

function AdminLocalActVer(ServiceUsuario, $location, ServiceHTTP, ServiceHelpers,$routeParams,$scope) {

    var vm = this;
    vm.param = {};
    vm.param.id = $routeParams.id;

    vm.data = {};


    vm.goto = goto;
    function goto(url, id) {
        $location.path('admin/charlas/' + url + '/' + vm.param);
    }

    vm.duracionCalculada = 0;
    vm.minutosAHoras = function(minutos) {
        return ServiceHelpers.minutosAHoras(minutos);
    }


    vm.actividadGrabar = function(){
      ServiceHTTP.actividadGrabar('');
      console.log(vm.data.actividad);
    }

    function initView() {

      vm.data.actividad = {
        "id" : '',
        "duracion": '',
        "temario": '',
        "tipo_programa": '',
        "metodologia": '',
        "activa": false,
        "objetivo": '',
        "modalidad": '',
        "destinatario": '',
        "programa": '',
        "descripcion": '',
        "nombre": ''
      };


      ServiceHTTP.getActividad(vm.param.id,"Cargando Actividad").then(function(data){
        console.log(data);
        console.log(vm.data);
        vm.data.actividad = data.data.data;
        ServiceHTTP.cerrarMensaje();
      },function(err){
        console.log(err);
      });
    }
    initView();


}
