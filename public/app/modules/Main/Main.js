Main.$inject = ['ServiceUsuario'];
function Main(ServiceUsuario){

  var vm = this;
  vm.data = {};
  vm.usuario = ServiceUsuario.getData();
  //TODO eliminar autocreate usuario


}
