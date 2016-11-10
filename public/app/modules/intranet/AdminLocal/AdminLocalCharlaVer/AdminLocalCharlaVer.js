AdminLocalCharlaVer.$inject = ['ServiceUsuario','FactoryData'];
function AdminLocalCharlaVer(ServiceUsuario,FactoryData){
  console.log(ServiceUsuario.getData());

  var vm = this;
      vm.newCharla = {};
      vm.data = {};
      vm.data.charla = {};
      vm.data.charla.fechaInicio = new Date();
      vm.data.charla.estado = 1;


      vm.comunas = FactoryData.getComuna();
      vm.dr = FactoryData.getDr();


      vm.data.charla = {actividadSelect : 2,
      actividadSelectHumanText : "Actividad: Como declarar IVA",
      comuna : "8413",
      cupos : 10,
      direccion : "Avenida Siempre Viva #3345",
      dr : "DR Arica",
      estado : 2,
      fechaInicio : "01/11/2016" ,
      fechaTermino : "10/11/2016",
      monitorSelect : "167512569"};



  vm.selectAct = function(id,titulo){
    vm.data.charla.actividadSelect = id;

    vm.data.charla.actividadSelectHumanText = 'Actividad: ' + titulo;
    console.log(id);
    $('#selecion-actividad').modal('hide');

  }


  vm.optFechaInicio = function(){
    return {
              icons:{
                next:'glyphicon glyphicon-arrow-right',
                previous:'glyphicon glyphicon-arrow-left',
                up:'glyphicon glyphicon-arrow-up',
                down:'glyphicon glyphicon-arrow-down',
              },
              format: 'DD/MM/YYYY'
            };
  }
  vm.optFechaFin = function(){
    return {
              icons:{
                next:'glyphicon glyphicon-arrow-right',
                previous:'glyphicon glyphicon-arrow-left',
                up:'glyphicon glyphicon-arrow-up',
                down:'glyphicon glyphicon-arrow-down',
              },
              format: 'DD/MM/YYYY',
              minDate : new Date(vm.data.charla.fechaInicio)
            };
  }

}
