AdminActAcad.$inject = ['ServiceUsuario', '$location', 'ServiceHTTP', 'FactoryLoader', 'ServiceHelpers'];

function AdminActAcad(ServiceUsuario, $location, ServiceHTTP, FactoryLoader, ServiceHelpers) {

    var vm = this;
    vm.data = {};
    vm.data.actividad = {};

    vm.goto = goto;

    function goto(url, id) {
        $location.path('admin/charlas/' + url + '/' + id);
    }

    vm.duracionCalculada = 0;
    vm.minutosAHoras = function(minutos) {
        return ServiceHelpers.minutosAHoras(minutos);
    }

    function initView() {

    }
    initView();


}
