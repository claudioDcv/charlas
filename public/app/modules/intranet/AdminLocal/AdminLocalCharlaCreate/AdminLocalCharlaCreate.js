AdminLocalCharlaCreate.$inject = ['ServiceUsuario','FactoryData'];
function AdminLocalCharlaCreate(ServiceUsuario,FactoryData){
  console.log(ServiceUsuario.getData());

  var vm = this;
      vm.newCharla = {};
      vm.data = {};
      vm.data.charla = {};
      vm.data.charla.fechaInicio = new Date();
      vm.data.charla.estado = 1;


      vm.comunas = FactoryData.getComuna();
      vm.dr = FactoryData.getDr();


  vm.selectAct = function(id,titulo,hrs){
    vm.data.charla.actividadSelect = id;

    vm.data.charla.actividadSelectHumanText = 'Actividad: ' + titulo + " | " + hrs + " Hrs";
    console.log(id);
    $('#selecion-actividad').modal('hide');

  }

  vm.listen = function(){
    console.log(vm.data.charla.fechaInicio,vm.data.charla.fechaTermino);
  }

  vm.formatFecha = {
    date : vm.data.charla.a,
    format: 'DD/MM/YYYY'
  };
  vm.formatHora = {
    date : vm.data.charla.a,
    format: 'HH:MM',
  };
  vm.optFechaInicio = {
              icons:{
                next:'glyphicon glyphicon-arrow-right',
                previous:'glyphicon glyphicon-arrow-left',
                up:'glyphicon glyphicon-arrow-up',
                down:'glyphicon glyphicon-arrow-down',
              },
              format: 'DD/MM/YYYY',
              minDate : vm.data.charla.fechaInicio
            };

  vm.optFechaFin =  {
              icons:{
                next:'glyphicon glyphicon-arrow-right',
                previous:'glyphicon glyphicon-arrow-left',
                up:'glyphicon glyphicon-arrow-up',
                down:'glyphicon glyphicon-arrow-down',
              },
              format: 'DD/MM/YYYY',
              minDate : vm.data.charla.fechaInicio
            };

  vm.gotoCrear = function(){

    console.log(vm.data.charla);

  }

}
