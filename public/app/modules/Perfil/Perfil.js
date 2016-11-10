


Perfil.$inject = ['ServiceHTTP'];
function Perfil(ServiceHTTP){

  var vm = this;
  vm.data = {};
  vm.data.charlas = ServiceHTTP.getCharlaPorId(1);

}
