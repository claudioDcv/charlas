Index.$inject = ['ServiceUsuario','$location','FactoryLoader'];
function Index(ServiceUsuario,$location,FactoryLoader){
  var vm = this;

  vm.createUsuario = createUsuario;
  function createUsuario(type){
    vm.usuario = {
      'role' : type,
      'id' : 1,
      'rut' : '16.751.256-9',
      'nombre' : 'Claudio Rojas R.'
    };
    ServiceUsuario.setData(vm.usuario);
  }


  vm.login = login;
  function login(type){
    vm.createUsuario(type);
    $location.path(type);
    console.log(type);
  }
}
