AdminLocalIndex.$inject = ['ServiceUsuario'];
function AdminLocalIndex(ServiceUsuario){
  console.log(ServiceUsuario.getData());
}
