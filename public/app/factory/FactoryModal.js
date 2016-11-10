// some.factory.js
angular
    .module('sistemaCharlas')
    .factory('FactoryModal', FactoryModal);



function FactoryModal() {


   var Alert = function(){

   }

   return {
     Alert : Alert
   }

}
