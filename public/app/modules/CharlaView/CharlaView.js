CharlaView.$inject = ['ServiceUsuario','FactorySearchCharla','$location'];
function CharlaView(ServiceUsuario,FactorySearchCharla,$location){

  var vm = this;
      vm.data = {};

      vm.param = {};

      vm.data.charla = FactorySearchCharla.getUltimaCharlaEncontrada();

      vm.goto = goto;
      function goto(url){
        $location.path(url);
      }
}
