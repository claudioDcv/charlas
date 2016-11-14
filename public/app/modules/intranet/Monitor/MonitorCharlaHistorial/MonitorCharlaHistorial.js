MonitorCharlaHistorial.$inject = ['ServiceUsuario', '$location', 'ServiceHTTP',
  'FactoryLoader', '$routeParams'
];

function MonitorCharlaHistorial(ServiceUsuario, $location, ServiceHTTP,
  FactoryLoader, $routeParams) {

  var vm = this;
  vm.data = {};
  vm.data.charlas = {};
  vm.type = $routeParams.type;
  vm.goto = goto;

  function goto(url, id) {
    $location.path('monitor/charlas/' + url + "/" + vm.type + '/' + id);
  }
  console.log(1237912349127346128473);

  function initView() {

    function resultOK(data) {
      FactoryLoader.desactivar();
      vm.data.charlas = data.data;
      console.log(vm.data.charlas, data);
    }

    function resultNOK(err) {
      FactoryLoader.desactivar();
      console.log(err);
    }
    ServiceHTTP.getCharlasPorMonitorId(2, 'Cargando listado de actividades...')
      .success(function(data) {
        resultOK(data);
      })
      .error(function(err) {
        resultNOK(err);
      });

  }
  initView();


}
