//Extend Native Array JS
Array.prototype.clean = function(deleteValue) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == deleteValue) {
      this.splice(i, 1);
      i--;
    }
  }
  return this;
};
//Factory js
angular
    .module('sistemaCharlas')
    .factory('FactorySecure', FactorySecure);

function FactorySecure($q,$location,ServiceUsuario,$timeout){
    return {
        control: function(type){
            var defer = $q.defer();
            var path = $location.path().split('/').clean('');

            if (ServiceUsuario.getData() != null && ServiceUsuario.getData().role != null && ServiceUsuario.getData().role == type) {
              defer.resolve("access-success");
            }else{
              defer.reject("no-access-controll");
            }
            return defer.promise;

        },
        goto: function(path){
          $location.path(path);
        }
    };
};
