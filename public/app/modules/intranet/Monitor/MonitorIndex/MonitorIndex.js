MonitorIndex.$inject = ['ServiceUsuario'];
function MonitorIndex(ServiceUsuario){
  console.log(ServiceUsuario.getData());
}
