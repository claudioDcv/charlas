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
                next:'fa fa-angle-right',
                previous:'fa fa-angle-left',
                up:'fa fa-angle-up',
                down:'fa fa-angle-down',
              },
              format: 'MM/YYYY',
              viewMode: 'years'
            };
}
