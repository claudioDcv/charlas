AdminActAcad.$inject = ['ServiceUsuario', '$location', 'ServiceHTTP', 'FactoryLoader', 'ServiceHelpers'];

function AdminActAcad(ServiceUsuario, $location, ServiceHTTP, FactoryLoader, ServiceHelpers) {

    var vm = this;
    vm.data = {};
    vm.data.actividad = {};


    vm.data.actividad.tipo = "0";
    vm.data.actividad.modalidad = "0";

    vm.goto = goto;

    function goto(url, id) {
        $location.path('admin/charlas/' + url + '/' + id);
    }


    function initView() {
      vm.activa = true;
    }
    initView();


}
