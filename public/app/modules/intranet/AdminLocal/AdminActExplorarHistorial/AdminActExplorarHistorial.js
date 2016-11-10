AdminLocalActExplorarHistorial.$inject = ['ServiceUsuario', '$location', 'ServiceHTTP', 'FactoryLoader', 'ServiceHelpers'];

function AdminLocalActExplorarHistorial(ServiceUsuario, $location, ServiceHTTP, FactoryLoader, ServiceHelpers) {

    var vm = this;
    vm.data = {};
    vm.data.actividades = {};

    vm.goto = goto;

    function goto(url, id) {
        $location.path(url + '/' + id);
    }

    vm.minutosAHoras = function(minutos) {
        return ServiceHelpers.minutosAHoras(minutos);
    }

    function initView() {

        function resultOK(data) {
            FactoryLoader.desactivar();
            vm.data.actividades = data.data;
            console.log(vm.data.actividades, data);
        }

        function resultNOK(err) {
            FactoryLoader.desactivar();
            console.log(err);
        }
        ServiceHTTP.getAllActividadesHistoricas(2, 'Cargando listado de actividades...')
            .success(function(data) {
                resultOK(data);
            })
            .error(function(err) {
                resultNOK(err);
            });

    }
    initView();


}
