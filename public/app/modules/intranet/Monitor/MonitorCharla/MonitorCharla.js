MonitorCharla.$inject = ['ServiceUsuario', '$location', 'ServiceHTTP',
  'FactoryLoader', '$routeParams'
];

function MonitorCharla(ServiceUsuario, $location, ServiceHTTP, FactoryLoader,
  $routeParams) {

  var vm = this;

  vm.type = $routeParams.type;
  vm.data = {};
  vm.data.charlas = {};

  vm.goto = goto;

  function goto(url, id) {
    $location.path('monitor/charlas/' + url + "/" + vm.type + '/' + id);
  }


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
    ServiceHTTP.getCharlasPorMonitorId(2, 'Cargando listado de charlas...')
      .success(function(data) {
        resultOK(data);
      })
      .error(function(err) {
        resultNOK(err);
      });

  }
  initView();


}
