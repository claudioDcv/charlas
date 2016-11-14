angular.module('sistemaCharlas')
.directive('ngHora', function() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function($scope, $element, $attrs, ngModel) {
      function clean(_value) {
        return typeof _value === 'string' ? _value.replace(/[^0-9]+/g,'') : '';
      }

      function format(_value){
        _value = clean(_value)

        if(!_value) return "";
        if(_value.length <= 1) return _value;

        var result = _value.slice(-4,-2) + ':' + _value.substr(_value.length-2);
        return result;
      }

      $scope.$watch(function() {
        return ngModel.$viewValue;
      }, function() {
        ngModel.$setViewValue(format(ngModel.$viewValue));
        ngModel.$render();
        console.log(ngModel);
      });

    }
  };
});


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
                next:'fa fa-angle-right',
                previous:'fa fa-angle-left',
                up:'fa fa-angle-up',
                down:'fa fa-angle-down',
              },
              format: 'DD/MM/YYYY',
              minDate : vm.data.charla.fechaInicio
            };

  vm.optFechaFin =  {
              icons:{
                next:'fa fa-angle-right',
                previous:'fa fa-angle-left',
                up:'fa fa-angle-up',
                down:'fa fa-angle-down',
              },
              format: 'DD/MM/YYYY',
              minDate : vm.data.charla.fechaInicio
            };

  vm.gotoCrear = function(){

    console.log(vm.data.charla);

  }

  vm.addDay = function(){
    vm.horario.push({"inicio":"00:00","fin":"00:00","dia":""});
  }

  vm.optionDia = {
              icons:{
                next:'fa fa-angle-right',
                previous:'fa fa-angle-left',
                up:'fa fa-angle-up',
                down:'fa fa-angle-down',
              },
              format: 'DD/MM/YYYY'
            };
  vm.optionHora = {
              icons:{
                next:'fa fa-angle-right',
                previous:'fa fa-angle-left',
                up:'fa fa-angle-up',
                down:'fa fa-angle-down',
              },
              format: 'LT'
            };


  //horario version compleja
  vm.horario= JSON.parse('[]');

}
