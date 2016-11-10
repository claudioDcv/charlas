MonitorCharlaHistorial.$inject = ['ServiceUsuario','$location','ServiceHTTP','FactoryLoader'];
function MonitorCharlaHistorial(ServiceUsuario,$location,ServiceHTTP,FactoryLoader,ServiceHelpers){

  var vm = this;
      vm.data = {};
      vm.data.charlas = {};

  vm.goto = goto;
  function goto(url,id){
    $location.path('monitor/charlas/' + url + '/' + id);
  }


  function initView(){

    function resultOK(data){
      FactoryLoader.desactivar();
      vm.data.charlas = data.data;
      console.log(vm.data.charlas,data);
    }
    function resultNOK(err){
      FactoryLoader.desactivar();
      console.log(err);
    }
    ServiceHTTP.getCharlasPorMonitorId(2,'Cargando listado de charlas...')
      .success(function(data) {
          resultOK(data);
      })
      .error(function(err) {
          resultNOK(err);
      });

  }
  initView();


}
