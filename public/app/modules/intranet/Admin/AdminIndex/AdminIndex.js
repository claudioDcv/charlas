AdminIndex.$inject = ['ServiceUsuario'];
function AdminIndex(ServiceUsuario){
  console.log(ServiceUsuario.getData());

  var vm = this;
      vm.data = {};
      vm.data.informe = '';

  vm.modalReporteMensualCerrar = function(){
    if (vm.data.informe.fecha) {
      $('#modal-reporte-mensual').modal('hide');
    }

  }
  vm.optFechaInforme = {
              icons:{
                next:'glyphicon glyphicon-arrow-right',
                previous:'glyphicon glyphicon-arrow-left',
                up:'glyphicon glyphicon-arrow-up',
                down:'glyphicon glyphicon-arrow-down',
              },
              format: 'MM/YYYY',
              viewMode: 'years'
            };
}
