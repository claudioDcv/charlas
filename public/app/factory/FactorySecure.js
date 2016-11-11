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

function FactorySecure($q, $location, ServiceUsuario, $timeout) {
  return {
    control: function(type) {
      var defer = $q.defer();
      var path = $location.path().split('/').clean('');
      console.log(path);
      console.log(11);
      if (angular.isArray(type)) {
        var ingresoOK = false;
        for (var i = 0; i < type.length; i++) {
          if (ServiceUsuario.getData() != null && ServiceUsuario.getData().role !=
            null && ServiceUsuario.getData().role == type[i]) {
            ingresoOK = true;
            break;
          }
        }

        if (ingresoOK) {
          defer.resolve("access-success");
        } else {
          defer.reject("no-access-controll");
        }
      } else {
        if (ServiceUsuario.getData() != null && ServiceUsuario.getData().role !=
          null && ServiceUsuario.getData().role == type) {
          defer.resolve("access-success");
        } else {
          defer.reject("no-access-controll");
        }
      }
      return defer.promise;
    },
    goto: function(path) {
      $location.path(path);
    }
  };
};
