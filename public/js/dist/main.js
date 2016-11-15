angular
    .module('sistemaCharlas', [
      'ngRoute',
      'angular-storage',
      'datetimepicker',
      'platanus.rut'
    ]);



angular.module('sistemaCharlas')
  .constant("CONST", {
        "MODULE_PATH": "./app/modules/",
        "MODULE_PATH_ADMIN" : "/app/modules/intranet/Admin/",
        "MODULE_PATH_MONITOR" : "/app/modules/intranet/Monitor/",
        "MODULE_PATH_ADMIN_LOCAL" : "/app/modules/intranet/AdminLocal/",
        "NAMESPACES" : {
          "TEST":"com.sitema.charlas.ex.messagge.test"}
    });

angular.module('sistemaCharlas')

.config(function($routeProvider, CONST) {
  //$locationProvider.html5Mode(true);

  $routeProvider
    .when('/public/', {
      templateUrl: CONST.MODULE_PATH + 'Index/Index.html',
      controller: 'Index',
      controllerAs: 'vm'
    })

  .when('/public/charlas', {
    templateUrl: CONST.MODULE_PATH + 'CharlasIndex/CharlasIndex.html',
    controller: 'CharlasIndex',
    controllerAs: 'vm'
  })

  .when('/public/charlas/buscar', {
    templateUrl: CONST.MODULE_PATH +
      'CharlaPorCodigo/CharlaPorCodigo.html',
    controller: 'CharlaPorCodigo',
    controllerAs: 'vm'
  })

  .when('/public/charlas/charla', {
    templateUrl: CONST.MODULE_PATH + 'CharlaView/CharlaView.html',
    controller: 'CharlaView',
    controllerAs: 'vm'
  })


  .when('/public/charlas/listado/:dr', {
    templateUrl: CONST.MODULE_PATH + 'ListaCharla/ListaCharla.html',
    controller: 'ListaCharla',
    controllerAs: 'vm'
  })

  .when('/public/formulario-de-inscripcion/:call/:dr/:id', {
      templateUrl: CONST.MODULE_PATH +
        'FormularioInscripcion/FormularioInscripcion.html',
      controller: 'FormularioInscripcion',
      controllerAs: 'vm'
    })
    .when('/public/detalle-inscripcion/:call/:dr/:id', {
      templateUrl: CONST.MODULE_PATH +
        'CodigoConfirmacion/CodigoConfirmacion.html',
      controller: 'CodigoConfirmacion',
      controllerAs: 'vm'
    })

  //ROUTE FOR ADMIN
  .when('/admin/', {
    templateUrl: CONST.MODULE_PATH_ADMIN + 'AdminIndex/AdminIndex.html',
    controller: 'AdminIndex',
    controllerAs: 'vm',
    resolve: {
      access: function(FactorySecure) {
        FactorySecure.control('admin').then(
          function(thing) {
            console.log(thing);
          },
          function(message) {
            FactorySecure.goto('public');
          }
        );
      }
    }
  })

  .when('/admin/charlas', {
      templateUrl: CONST.MODULE_PATH_ADMIN + 'AdminAct/AdminAct.html',
      controller: 'AdminAct',
      controllerAs: 'vm',
      resolve: {
        access: function(FactorySecure) {
          FactorySecure.control('admin').then(
            function(thing) {
              console.log(thing);
            },
            function(message) {
              FactorySecure.goto('public');
            }
          );
        }
      }
    })
    .when('/admin/actividad/nueva', {
      templateUrl: CONST.MODULE_PATH_ADMIN +
        'AdminActAcad/AdminActAcad.html',
      controller: 'AdminActAcad',
      controllerAs: 'vm',
      resolve: {
        access: function(FactorySecure) {
          FactorySecure.control('admin').then(
            function(thing) {
              console.log(thing);
            },
            function(message) {
              FactorySecure.goto('public');
            }
          );
        }
      }
    })

  .when('/admin/actividad/explorar', {
    templateUrl: CONST.MODULE_PATH_ADMIN +
      'AdminActExplorar/AdminActExplorar.html',
    controller: 'AdminActExplorar',
    controllerAs: 'vm',
    resolve: {
      access: function(FactorySecure) {
        FactorySecure.control('admin').then(
          function(thing) {
            console.log(thing);
          },
          function(message) {
            FactorySecure.goto('public');
          }
        );
      }
    }
  })

  .when('/admin/actividad/explorar-historial', {
      templateUrl: CONST.MODULE_PATH_ADMIN +
        'AdminActExplorarHistorial/AdminActExplorarHistorial.html',
      controller: 'AdminActExplorarHistorial',
      controllerAs: 'vm',
      resolve: {
        access: function(FactorySecure) {
          FactorySecure.control('admin').then(
            function(thing) {
              console.log(thing);
            },
            function(message) {
              FactorySecure.goto('public');
            }
          );
        }
      }
    })
    .when('/admin/actividad/ver/:id', {
      templateUrl: CONST.MODULE_PATH_ADMIN +
        'AdminActVer/AdminActVer.html',
      controller: 'AdminActVer',
      controllerAs: 'vm',
      resolve: {
        access: function(FactorySecure) {
          FactorySecure.control('admin').then(
            function(thing) {
              console.log(thing);
            },
            function(message) {
              FactorySecure.goto('public');
            }
          );
        }
      }
    })
    //ADMIN LOCAL
    .when('/admin-local/', {
      templateUrl: CONST.MODULE_PATH_ADMIN_LOCAL +
        'AdminLocalIndex/AdminLocalIndex.html',
      controller: 'AdminLocalIndex',
      controllerAs: 'vm',
      resolve: {
        access: function(FactorySecure) {
          FactorySecure.control('admin-local').then(
            function(thing) {
              console.log(thing);
            },
            function(message) {
              FactorySecure.goto('public');
            }
          );
        }
      }
    })
    .when('/admin-local/listado/charlas', {
      templateUrl: CONST.MODULE_PATH_ADMIN_LOCAL +
        'AdminLocalCharlaExplora/AdminLocalCharlaExplora.html',
      controller: 'AdminLocalCharlaExplora',
      controllerAs: 'vm',
      resolve: {
        access: function(FactorySecure) {
          FactorySecure.control('admin-local').then(
            function(thing) {
              console.log(thing);
            },
            function(message) {
              FactorySecure.goto('public');
            }
          );
        }
      }
    })


  .when('/admin-local/actividad/explorar', {
    templateUrl: CONST.MODULE_PATH_ADMIN_LOCAL +
      'AdminActExplorar/AdminActExplorar.html',
    controller: 'AdminLocalActExplorar',
    controllerAs: 'vm',
    resolve: {
      access: function(FactorySecure) {
        FactorySecure.control('admin-local').then(
          function(thing) {
            console.log(thing);
          },
          function(message) {
            FactorySecure.goto('public');
          }
        );
      }
    }
  })

  .when('/admin-local/actividad/explorar-historial', {
      templateUrl: CONST.MODULE_PATH_ADMIN_LOCAL +
        'AdminActExplorarHistorial/AdminActExplorarHistorial.html',
      controller: 'AdminLocalActExplorarHistorial',
      controllerAs: 'vm',
      resolve: {
        access: function(FactorySecure) {
          FactorySecure.control('admin-local').then(
            function(thing) {
              console.log(thing);
            },
            function(message) {
              FactorySecure.goto('public');
            }
          );
        }
      }
    })
    .when('/admin-local/actividad/ver/:id', {
      templateUrl: CONST.MODULE_PATH_ADMIN_LOCAL +
        'AdminActVer/AdminActVer.html',
      controller: 'AdminLocalActVer',
      controllerAs: 'vm',
      resolve: {
        access: function(FactorySecure) {
          FactorySecure.control('admin-local').then(
            function(thing) {
              console.log(thing);
            },
            function(message) {
              FactorySecure.goto('public');
            }
          );
        }
      }
    })


  //CREATE charlas
  .when('/admin-local/listado/charlas/create', {
      templateUrl: CONST.MODULE_PATH_ADMIN_LOCAL +
        'AdminLocalCharlaCreate/AdminLocalCharlaCreate.html',
      controller: 'AdminLocalCharlaCreate',
      controllerAs: 'vm',
      resolve: {
        access: function(FactorySecure) {
          FactorySecure.control('admin-local').then(
            function(thing) {
              console.log(thing);
            },
            function(message) {
              FactorySecure.goto('public');
            }
          );
        }
      }
    })
    .when('/admin-local/listado/charlas/ver/:id', {
      templateUrl: CONST.MODULE_PATH_ADMIN_LOCAL +
        'AdminLocalCharlaVer/AdminLocalCharlaVer.html',
      controller: 'AdminLocalCharlaVer',
      controllerAs: 'vm',
      resolve: {
        access: function(FactorySecure) {
          FactorySecure.control('admin-local').then(
            function(thing) {
              console.log(thing);
            },
            function(message) {
              FactorySecure.goto('public');
            }
          );
        }
      }
    })
    .when('/admin-local/listado/actidivades', {
      templateUrl: CONST.MODULE_PATH_ADMIN_LOCAL +
        'AdminLocalActAcadExplora/AdminLocalActAcadExplora.html',
      controller: 'AdminLocalActAcadExplora',
      controllerAs: 'vm',
      resolve: {
        access: function(FactorySecure) {
          FactorySecure.control('admin-local').then(
            function(thing) {
              console.log(thing);
            },
            function(message) {
              FactorySecure.goto('public');
            }
          );
        }
      }
    })
    //MONITOR
    .when('/monitor', {
      templateUrl: CONST.MODULE_PATH_MONITOR +
        'MonitorIndex/MonitorIndex.html',
      controller: 'MonitorIndex',
      controllerAs: 'vm',
      resolve: {
        access: function(FactorySecure) {
          FactorySecure.control(['admin-local', 'monitor', 'admin']).then(
            function(thing) {
              console.log(thing);
            },
            function(message) {
              FactorySecure.goto('public');
            }
          );
        }
      }
    })
    .when('/monitor/charlas/:type', {
      templateUrl: CONST.MODULE_PATH_MONITOR +
        'MonitorCharla/MonitorCharla.html',
      controller: 'MonitorCharla',
      controllerAs: 'vm',
      resolve: {
        access: function(FactorySecure) {
          FactorySecure.control(['admin-local', 'monitor', 'admin']).then(
            function(thing) {
              console.log(thing);
            },
            function(message) {
              FactorySecure.goto('public');
            }
          );
        }
      }
    })

  .when('/monitor/charlas/historial/:type', {
    templateUrl: CONST.MODULE_PATH_MONITOR +
      'MonitorCharlaHistorial/MonitorCharlaHistorial.html',
    controller: 'MonitorCharlaHistorial',
    controllerAs: 'vm',
    resolve: {
      access: function(FactorySecure) {
        FactorySecure.control(['admin-local', 'monitor', 'admin']).then(
          function(thing) {
            console.log(thing);
          },
          function(message) {
            FactorySecure.goto('public');
          }
        );
      }
    }
  })

  .when('/monitor/charlas/evaluacion/:type/:id', {
    templateUrl: CONST.MODULE_PATH_MONITOR +
      'MonitorEvaluacion/MonitorEvaluacion.html',
    controller: 'MonitorEvaluacion',
    controllerAs: 'vm',
    resolve: {
      access: function(FactorySecure) {
        FactorySecure.control(['admin-local', 'monitor', 'admin']).then(
          function(thing) {
            console.log(thing);
          },
          function(message) {
            FactorySecure.goto('public');
          }
        );
      }
    }
  })

  .otherwise({
    redirectTo: '/public/'
  });

});

'use strict';

angular
  .module('datetimepicker', [])

  .provider('datetimepicker', function () {
    var default_options = {};

    this.setOptions = function (options) {
      default_options = options;
    };

    this.$get = function () {
      return {
        getOptions: function () {
          return default_options;
        }
      };
    };
  })

  .directive('datetimepicker', [
    '$timeout',
    'datetimepicker',
    function ($timeout,
              datetimepicker) {

      var default_options = datetimepicker.getOptions();

      return {
        require : '?ngModel',
        restrict: 'AE',
        scope   : {
          datetimepickerOptions: '@'
        },
        link    : function ($scope, $element, $attrs, ngModelCtrl) {
          var passed_in_options = $scope.$eval($attrs.datetimepickerOptions);
          var options = jQuery.extend({}, default_options, passed_in_options);

          $element
            .on('dp.change', function (e) {
              if (ngModelCtrl) {
                $timeout(function () {
                  ngModelCtrl.$setViewValue(e.target.value);
                });
              }
            })
            .datetimepicker(options);

          function setPickerValue() {
            var date = null;

            if (ngModelCtrl && ngModelCtrl.$viewValue) {
              date = ngModelCtrl.$viewValue;
            }

            $element
              .data('DateTimePicker')
              .date(date);
          }

          if (ngModelCtrl) {
            ngModelCtrl.$render = function () {
              setPickerValue();
            };
          }

          setPickerValue();
        }
      };
    }
  ]);

(function() {
    'use strict';

    angular
        .module('sistemaCharlas')
        .directive('replace', uhlReplace);

    function uhlReplace() {
        return {
            require: 'ngModel',
            scope: {
                regex: '@replace',
                with: '@with'
            },
            link: function(scope, element, attrs, model) {
                model.$parsers.push(function(val) {
                    if (!val) {
                        return;
                    }
                    var regex = new RegExp(scope.regex);
                    var replaced = val.replace(regex, scope.with || '');
                    if (replaced !== val) {
                        model.$setViewValue(replaced);
                        model.$render();
                    }
                    return replaced;
                });
            }
        };
    }
})();

(function() {
  'use strict'

  angular
    .module('sistemaCharlas')
    .directive('agregarUsuario', AgregarUsuario);

  AgregarUsuario.$inject = ['ServiceHTTP', '$location', '$timeout',
    'FactoryLoader'
  ];

  function AgregarUsuario(ServiceHTTP, $location, $timeout, FactoryLoader) {
    return {
      restrict: 'E',
      scope: {
        'lista': '=',
        'data': '='
      },
      templateUrl: './app/directives/AgregarUsuario/AgregarUsuario.html',
      link: function($scope, element, attrs) {

        $scope.nuevoUsuario = {
          'charlaId': '',
          id: 0,
          rut: '',
          email: '',
          fechaNacimiento: '',
          comuna: '',
          nombre: '',
          asistio: false
        };

        $scope.agregarParticipante = function() {
          $('#modal-agregar-usuario').modal('show');
          console.log($scope);
        }

        $scope.gotoRegistrar = function() {
          $scope.nuevoUsuario.charlaId = $scope.data.id;
          //Copiar la data de la charla en el envio
          var nuevoUser = {
            data: $scope.nuevoUsuario
          };

          ServiceHTTP.aceptarInscripcionCharla(nuevoUser,
            "Registrando...").then(function(data) {
            FactoryLoader.desactivar();

            $scope.nuevoUsuario.codigo = data.data.data.codigo;

            $scope.lista.push($scope.nuevoUsuario);
            $scope.nuevoUsuario = {
              'charlaId': $scope.data.id,
              id: 0,
              rut: '',
              email: '',
              fechaNacimiento: '',
              comuna: '',
              nombre: '',
              asistio: false,
              codigo: ''
            };
            $scope.FormNuevaCharla.$setUntouched();
          });
          //HTTP send
          $('#modal-agregar-usuario').modal('hide');
        }

        /*
        element.on('click', function () {
          console.log($scope.idc);
            element.css('background-color', 'red');
        });
        element.on('mouseenter', function () {
            element.css('background-color', 'yellow');
        });
        element.on('mouseleave', function () {
            element.css('background-color', 'white');
        });
        */
      }
    }
  }

})();

(function () {
  'use strict'

  angular
    .module('sistemaCharlas')
    .directive('modalCancelCharla', ModalCancelCharla);

  ModalCancelCharla.$inject = ['ServiceHTTP','$location','$timeout'];
  function ModalCancelCharla (ServiceHTTP,$location,$timeout) {
    return {
      restrict: 'E',
      scope: {
        idc: '@',
        'tema' : '@',
      },
      templateUrl: './app/directives/DirectiveModal/DirectiveModal.html',
      link: function ($scope, element, attrs) {

              $scope.cancelarInscripcionAction = function(){
                $('#modal-cancel-charla-' + $scope.idc).modal('hide');

                var result = ServiceHTTP.delInscripcion($scope.idc);

                $timeout(function () {
                  $location.path('public');
                }, 500);
              }
              /*
              element.on('click', function () {
                console.log($scope.idc);
                  element.css('background-color', 'red');
              });
              element.on('mouseenter', function () {
                  element.css('background-color', 'yellow');
              });
              element.on('mouseleave', function () {
                  element.css('background-color', 'white');
              });
              */
          }
    }
  }

})();
/*

@: vinculación en un solo sentido, al crearse el ámbito de la directiva el valor de esta propiedad se asigna al nuevo ámbito de tal forma que las modificaciones dentro de la directiva no afectan al ámbito del padre pero sí a la contra. El valor de la propiedad debe ser evaluada {{}} en la declaración del atributo.
=: vinculación en ambos sentidos, espera que el valor de la propiedad sea una referencia al modelo, no una expresión evaluable como en el caso anterior. La vinculación se hace en ambos sentidos de tal forma que las modificaciones tanto fuera como dentro de la directiva del modelo afectan a ambos.
&: vinculación de métodos que permite invocar desde la directiva a métodos declarados en el ámbito del padre


var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';

  $scope.items = [
    {"src":"http://t3.gstatic.com/images?q=tbn:ANd9GcR1Kp2JmcnxhBOf66aN_JqMWl3h_okOQKFX_kEqwr9mRe5iPomy", "alt":"image 001"},
    {"src":"http://t3.gstatic.com/images?q=tbn:ANd9GcQAoT9UmjmunwFTAA19_n1auOFR_JG017_TUru-E91T7nIH8HyU", "alt":"image 002"},
    {"src":"http://t2.gstatic.com/images?q=tbn:ANd9GcTfntbVv3pl5wFCe6IdkaMVrme_Au9TD8Z_xE95Ezv6jz8oK4nT", "alt":"image 003"},
    {"src":"http://t1.gstatic.com/images?q=tbn:ANd9GcSAOralDJGSVtfirbHG5VdFqG8fTqXMh7C4Xd_aHCy176SKNQqK", "alt":"image 004"},
    {"src":"http://fc08.deviantart.net/fs70/f/2012/122/0/c/landscape_wallpaper_by_nickchoubg-d4yaep3.png", "alt":"image 005"},
  ];

});

app.directive('thumbnail', [function() {
  return {
    restrict: 'CA',
    replace: false,
    transclude: false,
    scope: {
            index: '=index',
            item: '=itemdata'
    },
    template: '<a href="#"><img src="{{item.src}}" alt="{{item.alt}}" /></a>',
    link: function(scope, elem, attrs) {

    if (parseInt(scope.index)==0) {
      angular.element(attrs.options).css({'background-image':'url('+ scope.item.src +')'});
    }

      elem.bind('click', function() {

        var src = elem.find('img').attr('src');

        // call your SmoothZoom here
        angular.element(attrs.options).css({'background-image':'url('+ scope.item.src +')'});
      });
    }
  }
}]);
*/

(function() {
  'use strict'

  angular
    .module('sistemaCharlas')
    .directive('modalCerrarCurso', ModalCerrarCurso);

  ModalCerrarCurso.$inject = ['ServiceHTTP', '$location', '$timeout'];

  function ModalCerrarCurso(ServiceHTTP, $location, $timeout) {
    return {
      restrict: 'E',
      scope: {
        'curso': '@',
        'perfil': '@',
        'usuarios': '@',
      },
      templateUrl: './app/directives/DirectiveModalCerrarCurso/DirectiveModalCerrarCurso.html',
      link: function($scope, element, attrs) {
        $scope.idc = 0;
        $scope.cancelarInscripcionAction = function(idc) {
            $('#modal-cerrar-curso').modal('hide');

            console.log($scope.idc);

            var result = ServiceHTTP.delInscripcion(idc);
            console.log($scope.perfil);
            $timeout(function() {
              console.log('monitor/' + $scope.perfil);
              $location.path('monitor/charlas/' + $scope.perfil);
            }, 500);
          }
          /*
          element.on('click', function () {
            console.log($scope.idc);
              element.css('background-color', 'red');
          });
          element.on('mouseenter', function () {
              element.css('background-color', 'yellow');
          });
          element.on('mouseleave', function () {
              element.css('background-color', 'white');
          });
          */
      }
    }
  }

})();
/*

@: vinculación en un solo sentido, al crearse el ámbito de la directiva el valor de esta propiedad se asigna al nuevo ámbito de tal forma que las modificaciones dentro de la directiva no afectan al ámbito del padre pero sí a la contra. El valor de la propiedad debe ser evaluada {{}} en la declaración del atributo.
=: vinculación en ambos sentidos, espera que el valor de la propiedad sea una referencia al modelo, no una expresión evaluable como en el caso anterior. La vinculación se hace en ambos sentidos de tal forma que las modificaciones tanto fuera como dentro de la directiva del modelo afectan a ambos.
&: vinculación de métodos que permite invocar desde la directiva a métodos declarados en el ámbito del padre


var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';

  $scope.items = [
    {"src":"http://t3.gstatic.com/images?q=tbn:ANd9GcR1Kp2JmcnxhBOf66aN_JqMWl3h_okOQKFX_kEqwr9mRe5iPomy", "alt":"image 001"},
    {"src":"http://t3.gstatic.com/images?q=tbn:ANd9GcQAoT9UmjmunwFTAA19_n1auOFR_JG017_TUru-E91T7nIH8HyU", "alt":"image 002"},
    {"src":"http://t2.gstatic.com/images?q=tbn:ANd9GcTfntbVv3pl5wFCe6IdkaMVrme_Au9TD8Z_xE95Ezv6jz8oK4nT", "alt":"image 003"},
    {"src":"http://t1.gstatic.com/images?q=tbn:ANd9GcSAOralDJGSVtfirbHG5VdFqG8fTqXMh7C4Xd_aHCy176SKNQqK", "alt":"image 004"},
    {"src":"http://fc08.deviantart.net/fs70/f/2012/122/0/c/landscape_wallpaper_by_nickchoubg-d4yaep3.png", "alt":"image 005"},
  ];

});

app.directive('thumbnail', [function() {
  return {
    restrict: 'CA',
    replace: false,
    transclude: false,
    scope: {
            index: '=index',
            item: '=itemdata'
    },
    template: '<a href="#"><img src="{{item.src}}" alt="{{item.alt}}" /></a>',
    link: function(scope, elem, attrs) {

    if (parseInt(scope.index)==0) {
      angular.element(attrs.options).css({'background-image':'url('+ scope.item.src +')'});
    }

      elem.bind('click', function() {

        var src = elem.find('img').attr('src');

        // call your SmoothZoom here
        angular.element(attrs.options).css({'background-image':'url('+ scope.item.src +')'});
      });
    }
  }
}]);
*/

(function () {
  'use strict'

  angular
    .module('sistemaCharlas')
    .directive('uhlSearchCodigo', UhlSearchCodigo);

  UhlSearchCodigo.$inject = ['FactorySearchCharla','$location','ServiceHTTP','FactoryLoader'];
  function UhlSearchCodigo (FactorySearchCharla,$location,ServiceHTTP,FactoryLoader) {
    return {
      restrict: 'E',
      scope: { },
      templateUrl: './app/directives/DirectiveSearchCodigo/DirectiveSearchCodigo.html',
      link: function ($scope, element, attrs) {
            $scope.codigo;
            $scope.isErrorBuscar = false;

            $scope.formatText = formatText;
            function formatText(txt){
              $scope.isErrorBuscar = false;
              //.replace(/^[a-z0-9]+$/i,'') eliminar letras y numeros
              //.replace(/\W/g, '') == [^0-9a-zA-Z_] deja letras numero y espacios
              $scope.codigo = txt == null ? '' : txt.toUpperCase().replace(/[^0-9a-z]/gi, '');
            }

            $scope.formIsValid = formIsValid;
            function formIsValid(){
              return $scope.formBusqueda.$valid && $scope.codigo.length == 6
            }
            $scope.buscar = buscar;
            function buscar(){
              if ($scope.formIsValid()) {

                function resultOK(data){
                  FactoryLoader.desactivar();
                  FactorySearchCharla.setCodigo($scope.codigo);
                  FactorySearchCharla.setUltimaCharlaEncontrada(data.data);
                  $location.path('public/charlas/charla');
                }
                function resultNOK(err){
                  FactoryLoader.desactivar();
                  $scope.isErrorBuscar = true;
                  $scope.captcha = "";
                  $scope.formBusqueda.$setUntouched();
                }
                ServiceHTTP.getCharlaPorCodigo($scope.codigo,'Buscando...')
                  .success(function(data) {
                    if (data.data != -1)
                      resultOK(data);
                    else
                      resultNOK(data);
                  })
                  .error(function(err) {
                      resultNOK(err);
                  });

                /*
                .then(function(data) {
                          FactorySearchCharla.setCodigo($scope.codigo);
                          FactorySearchCharla.setUltimaCharlaEncontrada(data);
                          $location.path('public/charlas/charla');
                        })
                        .catch(function(err)) {
                            $scope.isErrorBuscar = true;
                        }
                */
              }
            }


            $scope.url_captcha = 'https://zeus.sii.cl/cvc_cgi/stc/CViewCaptcha.cgi?oper=1&txtCaptcha=VAZxN0lEUUMdxSEkyMDE3MTEwMzE3NTMxNFhONFB3dnR0B3ZjMjIyMnNLUWR2NVVFdTVNMDBjYm5rtyuRMXlXLlFVSnZMakJtYkhCMFozRnNMZz09cDlheVBwUmkxZC3=';
            $scope.regenerate = function(){
              $scope.captcha = "";
              $scope.url_captcha = '';
              $scope.url_captcha = 'https://zeus.sii.cl/cvc_cgi/stc/CViewCaptcha.cgi?oper=1&txtCaptcha=VAZxN0lEUUMxSEkyMDE3MTEwMzE3NTMxNFhONFB3dnR0B3ZjMjIyMnNLUWR2NVVFdTVNMDBjYm5rtyuRMXlXLlFVSnZMakJtYkhCMFozRnNMZz09cDlheVBwUmkxZC3=';
              console.log(1);

              $scope.apply;
            }

            $scope.cerrarErrorBuscar = cerrarErrorBuscar;
            function cerrarErrorBuscar(){
              $scope.isErrorBuscar = false;
              $scope.codigo = '';
            }

          }
    }
  }

})();


// some.factory.js
angular
    .module('sistemaCharlas')
    .factory('FactoryData', FactoryData);


FactoryData.$inject = [];
function FactoryData() {
  return {
    getComuna : getComuna,
    getDr : getDr
  }
  function getDr(){
    return ['Todas las Regionales','DR Arica','DR Iquique','DR Antofagasta','DR Copiapó','DR La Serena','DR Valparaíso','DR Rancagua','DR Talca','DR Concepción','DR Temuco','DR Valdivia','DR Puerto Montt','DR Coyhaique','DR Punta Arenas'];
  }
  function getComuna(){

    return [{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"1101","regnCodigo":"15","uoclCodigo":"01101","descripcion":"ARICA","codigoTesoreria":null,"cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"1106","regnCodigo":"15","uoclCodigo":"01101","descripcion":"CAMARONES","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"1201","regnCodigo":"1","uoclCodigo":"01201","descripcion":"IQUIQUE","codigoTesoreria":null,"cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"1203","regnCodigo":"1","uoclCodigo":"01201","descripcion":"PICA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"1204","regnCodigo":"1","uoclCodigo":"01201","descripcion":"POZO ALMONTE","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"1206","regnCodigo":"1","uoclCodigo":"01201","descripcion":"HUARA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"1210","regnCodigo":"1","uoclCodigo":"01201","descripcion":"COLCHANE","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"1301","regnCodigo":"15","uoclCodigo":"01101","descripcion":"PUTRE","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"1302","regnCodigo":"15","uoclCodigo":"01101","descripcion":"GENERAL LAGOS","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"2101","regnCodigo":"2","uoclCodigo":"02101","descripcion":"TOCOPILLA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"2103","regnCodigo":"2","uoclCodigo":"02101","descripcion":"MARIA ELENA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"2201","regnCodigo":"2","uoclCodigo":"02201","descripcion":"ANTOFAGASTA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"2202","regnCodigo":"2","uoclCodigo":"02202","descripcion":"TALTAL","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"2203","regnCodigo":"2","uoclCodigo":"02201","descripcion":"MEJILLONES","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"2206","regnCodigo":"2","uoclCodigo":"02201","descripcion":"SIERRA GORDA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"2301","regnCodigo":"2","uoclCodigo":"02301","descripcion":"CALAMA","codigoTesoreria":null,"cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"2302","regnCodigo":"2","uoclCodigo":"02301","descripcion":"OLLAGUE","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"2303","regnCodigo":"2","uoclCodigo":"02301","descripcion":"SN P DE ATACAMA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"3101","regnCodigo":"3","uoclCodigo":"03101","descripcion":"CHANARAL","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"3102","regnCodigo":"3","uoclCodigo":"03101","descripcion":"D DE ALMAGRO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"3201","regnCodigo":"3","uoclCodigo":"03201","descripcion":"COPIAPO","codigoTesoreria":null,"cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"3202","regnCodigo":"3","uoclCodigo":"03201","descripcion":"CALDERA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"3203","regnCodigo":"3","uoclCodigo":"03201","descripcion":"TIERRA AMARILLA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"3301","regnCodigo":"3","uoclCodigo":"03301","descripcion":"VALLENAR","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"3302","regnCodigo":"3","uoclCodigo":"03301","descripcion":"FREIRINA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"3303","regnCodigo":"3","uoclCodigo":"03301","descripcion":"HUASCO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"3304","regnCodigo":"3","uoclCodigo":"03301","descripcion":"PRUEBA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"4101","regnCodigo":"4","uoclCodigo":"04101","descripcion":"LA SERENA","codigoTesoreria":null,"cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"4102","regnCodigo":"4","uoclCodigo":"04101","descripcion":"LA HIGUERA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"4103","regnCodigo":"4","uoclCodigo":"04103","descripcion":"COQUIMBO","codigoTesoreria":null,"cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"4104","regnCodigo":"4","uoclCodigo":"04101","descripcion":"UNA Comuna","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"4105","regnCodigo":"4","uoclCodigo":"04101","descripcion":"VICUNA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"4106","regnCodigo":"4","uoclCodigo":"04101","descripcion":"PAIHUANO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"4201","regnCodigo":"4","uoclCodigo":"04201","descripcion":"OVALLE","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"4203","regnCodigo":"4","uoclCodigo":"04201","descripcion":"MONTE PATRIA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"4205","regnCodigo":"4","uoclCodigo":"04201","descripcion":"COMBARBALA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"4206","regnCodigo":"4","uoclCodigo":"04201","descripcion":"RIO HURTADO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"4302","regnCodigo":"4","uoclCodigo":"04301","descripcion":"SALAMANCA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"4304","regnCodigo":"4","uoclCodigo":"04301","descripcion":"CANELA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"5201","regnCodigo":"5","uoclCodigo":"05201","descripcion":"LA LIGUA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"5202","regnCodigo":"5","uoclCodigo":"05201","descripcion":"PETORCA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"5204","regnCodigo":"5","uoclCodigo":"05201","descripcion":"ZAPALLAR","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"5205","regnCodigo":"5","uoclCodigo":"05201","descripcion":"PAPUDO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"5302","regnCodigo":"5","uoclCodigo":"05301","descripcion":"VINA DEL MAR","codigoTesoreria":null,"cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"5304","regnCodigo":"5","uoclCodigo":"05303","descripcion":"QUILPUE","codigoTesoreria":null,"cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"5305","regnCodigo":"5","uoclCodigo":"05301","descripcion":"CASABLANCA","codigoTesoreria":null,"cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"5307","regnCodigo":"5","uoclCodigo":"05301","descripcion":"PUCHUNCAVI","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"5308","regnCodigo":"5","uoclCodigo":"05301","descripcion":"JUAN FERNANDEZ","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"5402","regnCodigo":"5","uoclCodigo":"05401","descripcion":"SANTO DOMINGO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"5403","regnCodigo":"5","uoclCodigo":"05401","descripcion":"CARTAGENA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"5405","regnCodigo":"5","uoclCodigo":"05401","descripcion":"EL QUISCO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"5501","regnCodigo":"5","uoclCodigo":"05501","descripcion":"QUILLOTA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"5502","regnCodigo":"5","uoclCodigo":"05501","descripcion":"NOGALES","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"5504","regnCodigo":"5","uoclCodigo":"05501","descripcion":"LA CALERA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"5506","regnCodigo":"5","uoclCodigo":"05501","descripcion":"LIMACHE","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"5601","regnCodigo":"5","uoclCodigo":"05601","descripcion":"SAN FELIPE","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"5602","regnCodigo":"5","uoclCodigo":"05601","descripcion":"PANQUEHUE","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"5604","regnCodigo":"5","uoclCodigo":"05601","descripcion":"PUTAENDO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"5606","regnCodigo":"5","uoclCodigo":"05601","descripcion":"LLAY-LLAY","codigoTesoreria":null,"cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"5701","regnCodigo":"5","uoclCodigo":"05701","descripcion":"LOS ANDES","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"5703","regnCodigo":"5","uoclCodigo":"05701","descripcion":"SAN ESTEBAN","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"6101","regnCodigo":"6","uoclCodigo":"06101","descripcion":"RANCAGUA","codigoTesoreria":null,"cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"6102","regnCodigo":"6","uoclCodigo":"06101","descripcion":"MACHALI","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"6104","regnCodigo":"6","uoclCodigo":"06101","descripcion":"SAN FCO. DE MOSTAZAL","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"6106","regnCodigo":"6","uoclCodigo":"06101","descripcion":"COLTAUCO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"6107","regnCodigo":"6","uoclCodigo":"06101","descripcion":"CODEGUA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"6109","regnCodigo":"6","uoclCodigo":"06110","descripcion":"LAS CABRAS","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"6111","regnCodigo":"6","uoclCodigo":"06110","descripcion":"PICHIDEGUA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"6112","regnCodigo":"6","uoclCodigo":"06101","descripcion":"RENGO","codigoTesoreria":null,"cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"6114","regnCodigo":"6","uoclCodigo":"06101","descripcion":"OLIVAR","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"6116","regnCodigo":"6","uoclCodigo":"06101","descripcion":"COINCO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"6201","regnCodigo":"6","uoclCodigo":"06201","descripcion":"SAN FERNANDO","codigoTesoreria":null,"cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"6202","regnCodigo":"6","uoclCodigo":"06201","descripcion":"CHIMBARONGO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"6204","regnCodigo":"6","uoclCodigo":"06201","descripcion":"PLACILLA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"6205","regnCodigo":"6","uoclCodigo":"06205","descripcion":"SANTA CRUZ","codigoTesoreria":null,"cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"6207","regnCodigo":"6","uoclCodigo":"06205","descripcion":"PALMILLA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"6209","regnCodigo":"6","uoclCodigo":"06205","descripcion":"CHEPICA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"6301","regnCodigo":"6","uoclCodigo":"06301","descripcion":"PICHILEMU","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"6302","regnCodigo":"6","uoclCodigo":"05401","descripcion":"NAVIDAD","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"6304","regnCodigo":"6","uoclCodigo":"06301","descripcion":"LA ESTRELLA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"6306","regnCodigo":"6","uoclCodigo":"06301","descripcion":"PAREDONES","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"7101","regnCodigo":"7","uoclCodigo":"07101","descripcion":"CURICO","codigoTesoreria":null,"cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"7103","regnCodigo":"7","uoclCodigo":"07101","descripcion":"ROMERAL","codigoTesoreria":null,"cuotaAseo":"11","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"7105","regnCodigo":"7","uoclCodigo":"07101","descripcion":"LICANTEN","codigoTesoreria":null,"cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"7107","regnCodigo":"7","uoclCodigo":"07101","descripcion":"HUALANE","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"7108","regnCodigo":"7","uoclCodigo":"07101","descripcion":"MOLINA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"7201","regnCodigo":"7","uoclCodigo":"07201","descripcion":"TALCA","codigoTesoreria":null,"cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"7202","regnCodigo":"7","uoclCodigo":"07201","descripcion":"SAN CLEMENTE","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"7204","regnCodigo":"7","uoclCodigo":"07201","descripcion":"RIO CLARO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"7206","regnCodigo":"7","uoclCodigo":"07201","descripcion":"MAULE","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"7207","regnCodigo":"7","uoclCodigo":"07201","descripcion":"CUREPTO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"7209","regnCodigo":"7","uoclCodigo":"07208","descripcion":"EMPEDRADO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"7301","regnCodigo":"7","uoclCodigo":"07301","descripcion":"LINARES","codigoTesoreria":null,"cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"7302","regnCodigo":"7","uoclCodigo":"07301","descripcion":"YERBAS BUENAS","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"7303","regnCodigo":"7","uoclCodigo":"07301","descripcion":"COLBUN","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"7304","regnCodigo":"7","uoclCodigo":"07301","descripcion":"LONGAVI","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"7305","regnCodigo":"7","uoclCodigo":"07305","descripcion":"PARRAL","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"7306","regnCodigo":"7","uoclCodigo":"07305","descripcion":"RETIRO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"7309","regnCodigo":"7","uoclCodigo":"07201","descripcion":"VILLA ALEGRE","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"7310","regnCodigo":"7","uoclCodigo":"07201","descripcion":"SAN JAVIER","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"7401","regnCodigo":"7","uoclCodigo":"07401","descripcion":"CAUQUENES","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"7402","regnCodigo":"7","uoclCodigo":"07401","descripcion":"PELLUHUE","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"7403","regnCodigo":"7","uoclCodigo":"07401","descripcion":"CHANCO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"8101","regnCodigo":"8","uoclCodigo":"08101","descripcion":"CHILLAN","codigoTesoreria":null,"cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"8102","regnCodigo":"8","uoclCodigo":"08101","descripcion":"PINTO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"8103","regnCodigo":"8","uoclCodigo":"08101","descripcion":"COIHUECO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"8104","regnCodigo":"8","uoclCodigo":"08101","descripcion":"QUIRIHUE","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"8105","regnCodigo":"8","uoclCodigo":"08101","descripcion":"NINHUE","codigoTesoreria":null,"cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"8106","regnCodigo":"8","uoclCodigo":"08101","descripcion":"PORTEZUELO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"8107","regnCodigo":"8","uoclCodigo":"08101","descripcion":"COBQUECURA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"8108","regnCodigo":"8","uoclCodigo":"08101","descripcion":"TREHUACO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"8109","regnCodigo":"8","uoclCodigo":"08109","descripcion":"SAN CARLOS","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"8110","regnCodigo":"8","uoclCodigo":"08109","descripcion":"NIQUEN","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"8111","regnCodigo":"8","uoclCodigo":"08109","descripcion":"SAN FABIAN","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"8112","regnCodigo":"8","uoclCodigo":"08109","descripcion":"SAN NICOLAS","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"8113","regnCodigo":"8","uoclCodigo":"08101","descripcion":"BULNES","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"8114","regnCodigo":"8","uoclCodigo":"08101","descripcion":"SAN IGNACIO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"8115","regnCodigo":"8","uoclCodigo":"08101","descripcion":"QUILLON","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"8116","regnCodigo":"8","uoclCodigo":"08101","descripcion":"YUNGAY","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"8117","regnCodigo":"8","uoclCodigo":"08101","descripcion":"PEMUCO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"8118","regnCodigo":"8","uoclCodigo":"08101","descripcion":"EL CARMEN","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"8119","regnCodigo":"8","uoclCodigo":"08101","descripcion":"RANQUIL","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"8120","regnCodigo":"8","uoclCodigo":"08101","descripcion":"COELEMU","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"8201","regnCodigo":"8","uoclCodigo":"08201","descripcion":"CONCEPCION","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"8202","regnCodigo":"8","uoclCodigo":"08201","descripcion":"PENCO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"8203","regnCodigo":"8","uoclCodigo":"08201","descripcion":"HUALQUI","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"8204","regnCodigo":"8","uoclCodigo":"08201","descripcion":"FLORIDA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"8206","regnCodigo":"8","uoclCodigo":"08206","descripcion":"TALCAHUANO","codigoTesoreria":null,"cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"8208","regnCodigo":"8","uoclCodigo":"08201","descripcion":"LOTA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"8209","regnCodigo":"8","uoclCodigo":"08201","descripcion":"SANTA JUANA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"8302","regnCodigo":"8","uoclCodigo":"08303","descripcion":"CURANILAHUE","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"8304","regnCodigo":"8","uoclCodigo":"08303","descripcion":"LOS ALAMOS","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"8306","regnCodigo":"8","uoclCodigo":"08303","descripcion":"CONTULMO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"8401","regnCodigo":"8","uoclCodigo":"08401","descripcion":"LOS ANGELES","codigoTesoreria":null,"cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"8402","regnCodigo":"8","uoclCodigo":"08401","descripcion":"SANTA BARBARA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"8404","regnCodigo":"8","uoclCodigo":"08401","descripcion":"QUILLECO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"8406","regnCodigo":"8","uoclCodigo":"08401","descripcion":"NEGRETE","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"8408","regnCodigo":"8","uoclCodigo":"08401","descripcion":"QUILACO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"8409","regnCodigo":"8","uoclCodigo":"08401","descripcion":"YUMBEL","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"8411","regnCodigo":"8","uoclCodigo":"08401","descripcion":"SAN ROSENDO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"8413","regnCodigo":"8","uoclCodigo":"08401","descripcion":"ANTUCO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"9102","regnCodigo":"9","uoclCodigo":"09101","descripcion":"PUREN","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"9103","regnCodigo":"9","uoclCodigo":"09101","descripcion":"LOS SAUCES","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"9105","regnCodigo":"9","uoclCodigo":"09101","descripcion":"COLLIPULLI","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"9107","regnCodigo":"9","uoclCodigo":"09109","descripcion":"TRAIGUEN","codigoTesoreria":null,"cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"9109","regnCodigo":"9","uoclCodigo":"09109","descripcion":"VICTORIA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"9110","regnCodigo":"9","uoclCodigo":"09109","descripcion":"CURACAUTIN","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"9201","regnCodigo":"9","uoclCodigo":"09201","descripcion":"TEMUCO","codigoTesoreria":null,"cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"9203","regnCodigo":"9","uoclCodigo":"09201","descripcion":"FREIRE","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"9205","regnCodigo":"9","uoclCodigo":"09201","descripcion":"LAUTARO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"9206","regnCodigo":"9","uoclCodigo":"09201","descripcion":"PERQUENCO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"9208","regnCodigo":"9","uoclCodigo":"09201","descripcion":"NUEVA IMPERIAL","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"9210","regnCodigo":"9","uoclCodigo":"09201","descripcion":"SAAVEDRA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"9212","regnCodigo":"9","uoclCodigo":"09201","descripcion":"GORBEA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"9213","regnCodigo":"9","uoclCodigo":"09201","descripcion":"TOLTEN","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"9215","regnCodigo":"9","uoclCodigo":"09215","descripcion":"VILLARRICA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"9216","regnCodigo":"9","uoclCodigo":"09215","descripcion":"PUCON","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"9218","regnCodigo":"9","uoclCodigo":"09215","descripcion":"CURARREHUE","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"10101","regnCodigo":"10","uoclCodigo":"10101","descripcion":"VALDIVIA","codigoTesoreria":null,"cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"10102","regnCodigo":"14","uoclCodigo":"10101","descripcion":"MARIQUINA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"10104","regnCodigo":"14","uoclCodigo":"10101","descripcion":"LOS LAGOS","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"10106","regnCodigo":"14","uoclCodigo":"10101","descripcion":"CORRAL","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"10107","regnCodigo":"14","uoclCodigo":"10101","descripcion":"MAFIL","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"10109","regnCodigo":"14","uoclCodigo":"10109","descripcion":"LA UNION","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"10110","regnCodigo":"14","uoclCodigo":"10101","descripcion":"PAILLACO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"10112","regnCodigo":"14","uoclCodigo":"10109","descripcion":"LAGO RANCO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"10202","regnCodigo":"10","uoclCodigo":"10201","descripcion":"SAN PABLO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"10203","regnCodigo":"10","uoclCodigo":"10201","descripcion":"PUERTO OCTAY","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"10205","regnCodigo":"10","uoclCodigo":"10201","descripcion":"RIO NEGRO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"10207","regnCodigo":"10","uoclCodigo":"10201","descripcion":"SN JUAN DE LA C","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"10301","regnCodigo":"10","uoclCodigo":"10301","descripcion":"PUERTO MONTT","codigoTesoreria":null,"cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"10303","regnCodigo":"10","uoclCodigo":"10303","descripcion":"PUERTO VARAS","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"10305","regnCodigo":"10","uoclCodigo":"10303","descripcion":"FRUTILLAR","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"10306","regnCodigo":"10","uoclCodigo":"10303","descripcion":"LLANQUIHUE","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"10308","regnCodigo":"10","uoclCodigo":"10301","descripcion":"LOS MUERMOS","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"10401","regnCodigo":"10","uoclCodigo":"10401","descripcion":"CASTRO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"10402","regnCodigo":"10","uoclCodigo":"10401","descripcion":"CHONCHI","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"10404","regnCodigo":"10","uoclCodigo":"10401","descripcion":"QUELLON","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"10406","regnCodigo":"10","uoclCodigo":"10406","descripcion":"ANCUD","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"10407","regnCodigo":"10","uoclCodigo":"10406","descripcion":"QUEMCHI","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"10410","regnCodigo":"10","uoclCodigo":"10401","descripcion":"CURACO DE VELEZ","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"10415","regnCodigo":"10","uoclCodigo":"10401","descripcion":"QUINCHAO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"10501","regnCodigo":"10","uoclCodigo":"10501","descripcion":"CHAITEN","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"10502","regnCodigo":"10","uoclCodigo":"10501","descripcion":"HUALAIHUE","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"10503","regnCodigo":"10","uoclCodigo":"10501","descripcion":"FUTALEUFU","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"10504","regnCodigo":"10","uoclCodigo":"10501","descripcion":"PALENA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"11101","regnCodigo":"11","uoclCodigo":"11101","descripcion":"AYSEN","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"11102","regnCodigo":"11","uoclCodigo":"11401","descripcion":"CISNES","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"11104","regnCodigo":"11","uoclCodigo":"10401","descripcion":"GUAITECAS","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"11201","regnCodigo":"11","uoclCodigo":"11201","descripcion":"CHILE CHICO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"11203","regnCodigo":"11","uoclCodigo":"11401","descripcion":"RIO IBANEZ","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"11301","regnCodigo":"11","uoclCodigo":"11401","descripcion":"COCHRANE","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"11302","regnCodigo":"11","uoclCodigo":"11401","descripcion":"O'HIGGINS","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"11303","regnCodigo":"11","uoclCodigo":"11401","descripcion":"TORTEL","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"11401","regnCodigo":"11","uoclCodigo":"11401","descripcion":"COYHAIQUE","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"11402","regnCodigo":"11","uoclCodigo":"11401","descripcion":"LAGO VERDE","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"12101","regnCodigo":"12","uoclCodigo":"12101","descripcion":"PUERTO NATALES","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"12103","regnCodigo":"12","uoclCodigo":"12101","descripcion":"TORRES DE PAINE","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"12202","regnCodigo":"12","uoclCodigo":"12205","descripcion":"RIO VERDE","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"12204","regnCodigo":"12","uoclCodigo":"12205","descripcion":"SAN GREGORIO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"12205","regnCodigo":"12","uoclCodigo":"12205","descripcion":"PUNTA ARENAS","codigoTesoreria":null,"cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"12206","regnCodigo":"12","uoclCodigo":"12205","descripcion":"LAGUNA BLANCA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"12301","regnCodigo":"12","uoclCodigo":"12301","descripcion":"PORVENIR","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"12302","regnCodigo":"12","uoclCodigo":"12301","descripcion":"PRIMAVERA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"12304","regnCodigo":"12","uoclCodigo":"12301","descripcion":"TIMAUKEL","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"12401","regnCodigo":"12","uoclCodigo":"12205","descripcion":"NAVARINO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"13101","regnCodigo":"13","uoclCodigo":"13000","descripcion":"SANTIAGO","codigoTesoreria":null,"cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"13159","regnCodigo":"13","uoclCodigo":"20000","descripcion":"RECOLETA","codigoTesoreria":null,"cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"13167","regnCodigo":"13","uoclCodigo":"20000","descripcion":"INDEPENDENCIA","codigoTesoreria":null,"cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"14107","regnCodigo":"13","uoclCodigo":"14000","descripcion":"QUINTA NORMAL","codigoTesoreria":null,"cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"14109","regnCodigo":"13","uoclCodigo":"14109","descripcion":"MAIPU","codigoTesoreria":null,"cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"14111","regnCodigo":"13","uoclCodigo":"14000","descripcion":"PUDAHUEL","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"14113","regnCodigo":"13","uoclCodigo":"14000","descripcion":"RENCA","codigoTesoreria":null,"cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"14114","regnCodigo":"13","uoclCodigo":"20000","descripcion":"QUILICURA","codigoTesoreria":null,"cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"14127","regnCodigo":"13","uoclCodigo":"20000","descripcion":"CONCHALI","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"14155","regnCodigo":"13","uoclCodigo":"14000","descripcion":"LO PRADO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"14156","regnCodigo":"13","uoclCodigo":"14000","descripcion":"CERRO NAVIA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"14157","regnCodigo":"13","uoclCodigo":"14000","descripcion":"EST CENTRAL","codigoTesoreria":null,"cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"14158","regnCodigo":"13","uoclCodigo":"20000","descripcion":"HUECHURABAs","codigoTesoreria":null,"cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"14166","regnCodigo":"13","uoclCodigo":"14109","descripcion":"CERRILLOS","codigoTesoreria":null,"cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"14201","regnCodigo":"13","uoclCodigo":"20000","descripcion":"COLINA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"14203","regnCodigo":"13","uoclCodigo":"20000","descripcion":"TIL-TIL","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"14502","regnCodigo":"13","uoclCodigo":"14109","descripcion":"ISLA DE MAIPO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"14503","regnCodigo":"13","uoclCodigo":"14109","descripcion":"EL MONTE","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"14601","regnCodigo":"13","uoclCodigo":"14601","descripcion":"MELIPILLA","codigoTesoreria":null,"cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"14602","regnCodigo":"13","uoclCodigo":"14601","descripcion":"MARIA PINTO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"14605","regnCodigo":"13","uoclCodigo":"14601","descripcion":"ALHUE","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"15105","regnCodigo":"13","uoclCodigo":"15105","descripcion":"NUNOA","codigoTesoreria":null,"cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"15108","regnCodigo":"13","uoclCodigo":"15000","descripcion":"LAS CONDES","codigoTesoreria":null,"cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"15132","regnCodigo":"13","uoclCodigo":"15105","descripcion":"LA REINA","codigoTesoreria":null,"cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"15151","regnCodigo":"13","uoclCodigo":"15105","descripcion":"MACUL","codigoTesoreria":null,"cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"15160","regnCodigo":"13","uoclCodigo":"15000","descripcion":"VITACURA","codigoTesoreria":null,"cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"16106","regnCodigo":"13","uoclCodigo":"16000","descripcion":"SAN MIGUEL","codigoTesoreria":null,"cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"16110","regnCodigo":"13","uoclCodigo":"16000","descripcion":"LA CISTERNA","codigoTesoreria":null,"cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"16153","regnCodigo":"13","uoclCodigo":"16000","descripcion":"SAN RAMON","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"16154","regnCodigo":"13","uoclCodigo":"16000","descripcion":"LA PINTANA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"16163","regnCodigo":"13","uoclCodigo":"16000","descripcion":"SAN JOAQUIN","codigoTesoreria":null,"cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"16164","regnCodigo":"13","uoclCodigo":"16000","descripcion":"LO ESPEJO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"16301","regnCodigo":"13","uoclCodigo":"16300","descripcion":"PUENTE ALTO","codigoTesoreria":null,"cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"16302","regnCodigo":"13","uoclCodigo":"16300","descripcion":"PIRQUE","codigoTesoreria":null,"cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"16401","regnCodigo":"13","uoclCodigo":"16401","descripcion":"SAN BERNARDO","codigoTesoreria":null,"cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"16402","regnCodigo":"13","uoclCodigo":"16401","descripcion":"CALERA DE TANGO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"16404","regnCodigo":"13","uoclCodigo":"16401","descripcion":"PAINE","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"99999","regnCodigo":"13","uoclCodigo":"99999","descripcion":"Comuna NO REGISTRADA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"N"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"4204","regnCodigo":"4","uoclCodigo":"04201","descripcion":"PUNITAQUI","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"4301","regnCodigo":"4","uoclCodigo":"04301","descripcion":"ILLAPEL","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"4303","regnCodigo":"4","uoclCodigo":"04301","descripcion":"LOS VILOS","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"5101","regnCodigo":"5","uoclCodigo":"05301","descripcion":"ISLA DE PASCUA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"5203","regnCodigo":"5","uoclCodigo":"05201","descripcion":"CABILDO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"5301","regnCodigo":"5","uoclCodigo":"05301","descripcion":"VALPARAISO","codigoTesoreria":null,"cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"5303","regnCodigo":"5","uoclCodigo":"05303","descripcion":"VILLA ALEMANA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"5306","regnCodigo":"5","uoclCodigo":"05301","descripcion":"QUINTEROS","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"5401","regnCodigo":"5","uoclCodigo":"05401","descripcion":"SAN ANTONIO","codigoTesoreria":null,"cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"5404","regnCodigo":"5","uoclCodigo":"05401","descripcion":"EL TABO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"5406","regnCodigo":"5","uoclCodigo":"05401","descripcion":"ALGARROBO","codigoTesoreria":null,"cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"5503","regnCodigo":"5","uoclCodigo":"05501","descripcion":"HIJUELAS","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"5505","regnCodigo":"5","uoclCodigo":"05501","descripcion":"LA CRUZ","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"5507","regnCodigo":"5","uoclCodigo":"05501","descripcion":"OLMUE","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"5603","regnCodigo":"5","uoclCodigo":"05601","descripcion":"CATEMU","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"5605","regnCodigo":"5","uoclCodigo":"05601","descripcion":"SANTA MARIA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"5702","regnCodigo":"5","uoclCodigo":"05701","descripcion":"CALLE LARGA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"5704","regnCodigo":"5","uoclCodigo":"05701","descripcion":"RINCONADA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"6103","regnCodigo":"6","uoclCodigo":"06101","descripcion":"GRANEROS","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"6105","regnCodigo":"6","uoclCodigo":"06101","descripcion":"DONIHUE","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"6108","regnCodigo":"6","uoclCodigo":"06110","descripcion":"PEUMO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"6110","regnCodigo":"6","uoclCodigo":"06110","descripcion":"SAN VICENTE","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"6113","regnCodigo":"6","uoclCodigo":"06101","descripcion":"REQUINOA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"6115","regnCodigo":"6","uoclCodigo":"06101","descripcion":"MALLOA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"6117","regnCodigo":"6","uoclCodigo":"06101","descripcion":"QUINTA TILCOCO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"6203","regnCodigo":"6","uoclCodigo":"06201","descripcion":"NANCAGUA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"6206","regnCodigo":"6","uoclCodigo":"06205","descripcion":"LOLOL","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"6208","regnCodigo":"6","uoclCodigo":"06205","descripcion":"PERALILLO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"6214","regnCodigo":"6","uoclCodigo":"06205","descripcion":"PUMANQUE","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"6303","regnCodigo":"6","uoclCodigo":"06301","descripcion":"LITUECHE","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"6305","regnCodigo":"6","uoclCodigo":"06301","descripcion":"MARCHIGUE","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"7102","regnCodigo":"7","uoclCodigo":"07101","descripcion":"TENO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"7104","regnCodigo":"7","uoclCodigo":"07101","descripcion":"RAUCO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"7106","regnCodigo":"7","uoclCodigo":"07101","descripcion":"VICHUQUEN","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"7109","regnCodigo":"7","uoclCodigo":"07101","descripcion":"SAGRADA FAMILIA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"7203","regnCodigo":"7","uoclCodigo":"07201","descripcion":"PELARCO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"7205","regnCodigo":"7","uoclCodigo":"07201","descripcion":"PENCAHUE","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"7208","regnCodigo":"7","uoclCodigo":"07208","descripcion":"CONSTITUCION","codigoTesoreria":null,"cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"8205","regnCodigo":"8","uoclCodigo":"08201","descripcion":"TOME","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"8207","regnCodigo":"8","uoclCodigo":"08201","descripcion":"CORONEL","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"8301","regnCodigo":"8","uoclCodigo":"08201","descripcion":"ARAUCO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"8303","regnCodigo":"8","uoclCodigo":"08303","descripcion":"LEBU","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"8305","regnCodigo":"8","uoclCodigo":"08303","descripcion":"CANETE","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"8307","regnCodigo":"8","uoclCodigo":"08303","descripcion":"TIRUA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"8403","regnCodigo":"8","uoclCodigo":"08401","descripcion":"LAJA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"8405","regnCodigo":"8","uoclCodigo":"08401","descripcion":"NACIMIENTO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"8407","regnCodigo":"8","uoclCodigo":"08401","descripcion":"MULCHEN","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"8410","regnCodigo":"8","uoclCodigo":"08401","descripcion":"CABRERO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"8412","regnCodigo":"8","uoclCodigo":"08401","descripcion":"TUCAPEL","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"9101","regnCodigo":"9","uoclCodigo":"09101","descripcion":"ANGOL","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"9104","regnCodigo":"9","uoclCodigo":"09101","descripcion":"RENAICO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"9106","regnCodigo":"9","uoclCodigo":"09101","descripcion":"ERCILLA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"9108","regnCodigo":"9","uoclCodigo":"09109","descripcion":"LUMACO","codigoTesoreria":null,"cuotaAseo":"0","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"9111","regnCodigo":"9","uoclCodigo":"09109","descripcion":"LONQUIMAY","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"9202","regnCodigo":"9","uoclCodigo":"09201","descripcion":"VILCUN","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"9204","regnCodigo":"9","uoclCodigo":"09201","descripcion":"CUNCO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"9207","regnCodigo":"9","uoclCodigo":"09201","descripcion":"GALVARINO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"9209","regnCodigo":"9","uoclCodigo":"09201","descripcion":"CARAHUE","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"9211","regnCodigo":"9","uoclCodigo":"09201","descripcion":"PITRUFQUEN","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"9214","regnCodigo":"9","uoclCodigo":"09201","descripcion":"LONCOCHE","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"9217","regnCodigo":"9","uoclCodigo":"09201","descripcion":"MELIPEUCO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"9219","regnCodigo":"9","uoclCodigo":"09201","descripcion":"TEODORO SCHMIDT","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"10103","regnCodigo":"14","uoclCodigo":"10103","descripcion":"LANCO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"10105","regnCodigo":"14","uoclCodigo":"10101","descripcion":"FUTRONO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"10108","regnCodigo":"14","uoclCodigo":"10103","descripcion":"PANGUIPULLI","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"10111","regnCodigo":"14","uoclCodigo":"10109","descripcion":"RIO BUENO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"10201","regnCodigo":"10","uoclCodigo":"10201","descripcion":"OSORNITO ITO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"10204","regnCodigo":"10","uoclCodigo":"10201","descripcion":"PUYEHUE","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"10206","regnCodigo":"10","uoclCodigo":"10201","descripcion":"PURRANQUE","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"10302","regnCodigo":"10","uoclCodigo":"10303","descripcion":"COCHAMO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"10304","regnCodigo":"10","uoclCodigo":"10303","descripcion":"FRESIA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"10307","regnCodigo":"10","uoclCodigo":"10301","descripcion":"MAULLIN","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"10309","regnCodigo":"10","uoclCodigo":"10301","descripcion":"CALBUCO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"10403","regnCodigo":"10","uoclCodigo":"10401","descripcion":"QUEILEN","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"10405","regnCodigo":"10","uoclCodigo":"10401","descripcion":"PUQUELDON","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"10408","regnCodigo":"10","uoclCodigo":"10401","descripcion":"DALCAHUE","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"10414","regnCodigo":"10","uoclCodigo":"10501","descripcion":"CORCOVADO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"14202","regnCodigo":"13","uoclCodigo":"20000","descripcion":"LAMPA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"14501","regnCodigo":"13","uoclCodigo":"14109","descripcion":"TALAGANTE","codigoTesoreria":null,"cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"14504","regnCodigo":"13","uoclCodigo":"14109","descripcion":"PENAFLOR","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"14603","regnCodigo":"13","uoclCodigo":"14109","descripcion":"CURACAVI","codigoTesoreria":"33","cuotaAseo":"23","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"15103","regnCodigo":"13","uoclCodigo":"15000","descripcion":"PROVIDENCIA","codigoTesoreria":null,"cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"15128","regnCodigo":"13","uoclCodigo":"16300","descripcion":"LA FLORIDA","codigoTesoreria":null,"cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"15152","regnCodigo":"13","uoclCodigo":"15105","descripcion":"PENALOLEN","codigoTesoreria":null,"cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"15161","regnCodigo":"13","uoclCodigo":"15000","descripcion":"LO BARNECHEA","codigoTesoreria":null,"cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"16131","regnCodigo":"13","uoclCodigo":"16000","descripcion":"LA GRANJA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"16162","regnCodigo":"13","uoclCodigo":"16000","descripcion":"P AGUIRRE CERDA","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"16165","regnCodigo":"13","uoclCodigo":"16401","descripcion":"EL BOSQUE","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"16303","regnCodigo":"13","uoclCodigo":"16300","descripcion":"SAN JOSE MAIPO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"16403","regnCodigo":"13","uoclCodigo":"16401","descripcion":"BUIN","codigoTesoreria":null,"cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"14604","regnCodigo":"13","uoclCodigo":"14601","descripcion":"SAN PEDRO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"1208","regnCodigo":"1","uoclCodigo":"01201","descripcion":"CAMINA.","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"14505","regnCodigo":"13","uoclCodigo":"14109","descripcion":"PADRE HURTADO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"7210","regnCodigo":"7","uoclCodigo":"07201","descripcion":"SAN RAFAEL","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"8211","regnCodigo":"8","uoclCodigo":"08201","descripcion":"CHIGUAYANTE","codigoTesoreria":"0","cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"8210","regnCodigo":"8","uoclCodigo":"08201","descripcion":"SAN PEDRO DE LA PAZ","codigoTesoreria":"1","cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"9220","regnCodigo":"9","uoclCodigo":"09201","descripcion":"PADRE LAS CASAS","codigoTesoreria":"9","cuotaAseo":null,"convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"5309","regnCodigo":"5","uoclCodigo":"05301","descripcion":"CON CON","codigoTesoreria":"4","cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"8121","regnCodigo":"8","uoclCodigo":"08101","descripcion":"CHILLAN VIEJO","codigoTesoreria":"5","cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"9221","regnCodigo":"9","uoclCodigo":"09201","descripcion":"CHOLCHOL","codigoTesoreria":"348","cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"1211","regnCodigo":"1","uoclCodigo":"01201","descripcion":"ALTO HOSPICIO","codigoTesoreria":"347","cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"8212","regnCodigo":"8","uoclCodigo":"08206","descripcion":"HUALPEN","codigoTesoreria":"346","cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"8414","regnCodigo":"8","uoclCodigo":"08401","descripcion":"ALTO BIO BIO","codigoTesoreria":"349","cuotaAseo":"1","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"1771","regnCodigo":"13","uoclCodigo":"15105","descripcion":"temuco","codigoTesoreria":"2","cuotaAseo":"2","convenio":"S"},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"12402","regnCodigo":"12","uoclCodigo":"12205","descripcion":"ANTARTICA","codigoTesoreria":null,"cuotaAseo":null,"convenio":null},{"codigoError":0,"descripcionError":null,"sysdate":"2016-10-27","codigo":"0","regnCodigo":"8","uoclCodigo":"08401","descripcion":"REG PROVISORIO","codigoTesoreria":null,"cuotaAseo":null,"convenio":"S"}];
  }
  function getUnidadComuna(){
    return [{"unidad":"01201","nombreUnidad":"IQUIQUE","direccionUnidad":"TARAPACA 470, IQUIQUE","region":"1","descripcionRegion":"REGION DE TARAPACA       ","regional":"1","descripcionRegional":"1RA UNIDAD REGIONAL IQUIQUE"},{"unidad":"10201","nombreUnidad":"OSORNO","direccionUnidad":"BERNARDO O'HIGGINS 667, OSORNO","region":"10","descripcionRegion":"REGION DE LOS LAGOS","regional":"10","descripcionRegional":"10MA UNIDAD REGIONAL LOS LAGOS"},{"unidad":"10301","nombreUnidad":"PUERTO MONTT","direccionUnidad":"SAN MARTIN 080, PUERTO MONTT","region":"10","descripcionRegion":"REGION DE LOS LAGOS","regional":"10","descripcionRegional":"10MA UNIDAD REGIONAL LOS LAGOS"},{"unidad":"10406","nombreUnidad":"ANCUD","direccionUnidad":"LIBERTAD 669, ANCUD","region":"10","descripcionRegion":"REGION DE LOS LAGOS","regional":"10","descripcionRegional":"10MA UNIDAD REGIONAL LOS LAGOS"},{"unidad":"10401","nombreUnidad":"CASTRO","direccionUnidad":"BERNARDO O'HIGGINS S/N, CASTRO","region":"10","descripcionRegion":"REGION DE LOS LAGOS","regional":"10","descripcionRegional":"10MA UNIDAD REGIONAL LOS LAGOS"},{"unidad":"10501","nombreUnidad":"CHAITEN","direccionUnidad":"ALMIRANTE RIVEROS 459, CHAITEN","region":"10","descripcionRegion":"REGION DE LOS LAGOS","regional":"10","descripcionRegional":"10MA UNIDAD REGIONAL LOS LAGOS"},{"unidad":"10303","nombreUnidad":"PUERTO VARAS","direccionUnidad":"SAN JOSE 228, PUERTO VARAS","region":"10","descripcionRegion":"REGION DE LOS LAGOS","regional":"10","descripcionRegional":"10MA UNIDAD REGIONAL LOS LAGOS"},{"unidad":"11101","nombreUnidad":"AYSEN","direccionUnidad":"CIRCUNVALACION S/N RIBERA SUR, AYSEN","region":"11","descripcionRegion":"REGION DE AYSEN","regional":"11","descripcionRegional":"11RA UNIDAD REGIONAL COYHAIQUE"},{"unidad":"11201","nombreUnidad":"CHILE CHICO","direccionUnidad":"BERNARDO OHIGGINS 192, CHILE CHICO","region":"11","descripcionRegion":"REGION DE AYSEN","regional":"11","descripcionRegional":"11RA UNIDAD REGIONAL COYHAIQUE"},{"unidad":"11401","nombreUnidad":"COYHAIQUE","direccionUnidad":"COCHRANE 314, COYHAIQUE","region":"11","descripcionRegion":"REGION DE AYSEN","regional":"11","descripcionRegional":"11RA UNIDAD REGIONAL COYHAIQUE"},{"unidad":"12101","nombreUnidad":"PUERTO NATALES","direccionUnidad":"MANUEL BULNES 531, PTO. NATALES","region":"12","descripcionRegion":"REGION DE MAGALLANES Y A.","regional":"12","descripcionRegional":"12MA UNIDAD REGIONAL MAGALLANES"},{"unidad":"12301","nombreUnidad":"PORVENIR","direccionUnidad":"BERNARDO PHILLIPI 175, PORVENIR","region":"12","descripcionRegion":"REGION DE MAGALLANES Y A.","regional":"12","descripcionRegional":"12MA UNIDAD REGIONAL MAGALLANES"},{"unidad":"12205","nombreUnidad":"PUNTA ARENAS","direccionUnidad":"PLAZA MUNOZ GAMERO 1007, PTA. ARENAS","region":"12","descripcionRegion":"REGION DE MAGALLANES Y A.","regional":"12","descripcionRegional":"12MA UNIDAD REGIONAL MAGALLANES"},{"unidad":"13000","nombreUnidad":"SANTIAGO CENTRO","direccionUnidad":"ALONSO OVALLE 680, SANTIAGO","region":"13","descripcionRegion":"REGION METROPOLITANA     ","regional":"13","descripcionRegional":"SANTIAGO CENTRO                         "},{"unidad":"13900","nombreUnidad":"GRAN CONTRIB.REG.CENTRO","direccionUnidad":"ALONSO OVALLE 680, SANTIAGO","region":"13","descripcionRegion":"REGION METROPOLITANA     ","regional":"13","descripcionRegional":"SANTIAGO CENTRO                         "},{"unidad":"64000","nombreUnidad":"OFICINA FISCALIZACION SECTORIAL","direccionUnidad":"TEATINOS 120","region":"13","descripcionRegion":"REGION METROPOLITANA     ","regional":"13","descripcionRegional":"SANTIAGO CENTRO                         "},{"unidad":"14000","nombreUnidad":"SANTIAGO PONIENTE","direccionUnidad":"ROMERO 3226, ESTACION CENTRAL","region":"13","descripcionRegion":"REGION METROPOLITANA     ","regional":"14","descripcionRegional":"SANTIAGO PONIENTE"},{"unidad":"17100","nombreUnidad":"G.C. NACIONAL","direccionUnidad":"AMUNATEGUI 66, SANTIAGO","region":"13","descripcionRegion":"REGION METROPOLITANA     ","regional":"17","descripcionRegional":"DIR. GRANDES CONTRIBUYENTES"},{"unidad":"16300","nombreUnidad":"LA FLORIDA","direccionUnidad":"AVDA VICUNA MACKENNA PONIENTE 7390","region":"13","descripcionRegion":"REGION METROPOLITANA     ","regional":"16","descripcionRegional":"SANTIAGO SUR                            "},{"unidad":"16403","nombreUnidad":"BUIN","direccionUnidad":"BERNARDINO BRAVO 337, BUIN","region":"13","descripcionRegion":"REGION METROPOLITANA     ","regional":"16","descripcionRegional":"SANTIAGO SUR                            "},{"unidad":"16401","nombreUnidad":"SAN BERNARDO","direccionUnidad":"FREIRE 473, SAN BERNARDO","region":"13","descripcionRegion":"REGION METROPOLITANA     ","regional":"16","descripcionRegional":"SANTIAGO SUR                            "},{"unidad":"16301","nombreUnidad":"PUENTE ALTO NO USAR","direccionUnidad":"MANUEL RODRIGUEZ 0144, PTE. ALTO","region":"13","descripcionRegion":"REGION METROPOLITANA     ","regional":"16","descripcionRegional":"SANTIAGO SUR                            "},{"unidad":"16131","nombreUnidad":"LA GRANJA DESACTIVADA","direccionUnidad":"SANTA ROSA 9010, LA GRANJA","region":"13","descripcionRegion":"REGION METROPOLITANA     ","regional":"16","descripcionRegional":"SANTIAGO SUR                            "},{"unidad":"16000","nombreUnidad":"SANTIAGO SUR","direccionUnidad":"RAMON SUBERCASEAUX 1273, SAN MIGUEL","region":"13","descripcionRegion":"REGION METROPOLITANA     ","regional":"16","descripcionRegional":"SANTIAGO SUR                            "},{"unidad":"15103","nombreUnidad":"PROVIDENCIA","direccionUnidad":"AV. SUECIA 211, PROVIDENCIA","region":"13","descripcionRegion":"REGION METROPOLITANA     ","regional":"15","descripcionRegional":"SANTIAGO ORIENTE"},{"unidad":"15200","nombreUnidad":"DEPTO 2 FISCALIZACION MYG","direccionUnidad":"GENERAL DEL CANTO 281 PROVIDENCIA","region":"13","descripcionRegion":"REGION METROPOLITANA     ","regional":"15","descripcionRegional":"SANTIAGO ORIENTE"},{"unidad":"20000","nombreUnidad":"SANTIAGO NORTE","direccionUnidad":"RECOLETA 672 Y 676, RECOLETA","region":"13","descripcionRegion":"REGION METROPOLITANA     ","regional":"20","descripcionRegional":"SANTIAGO NORTE"},{"unidad":"15128","nombreUnidad":"UNIDAD DESACTIVADA","direccionUnidad":"AVDA VICUNA MACKENNA PONIENTE 7390","region":"13","descripcionRegion":"REGION METROPOLITANA     ","regional":"15","descripcionRegional":"SANTIAGO ORIENTE"},{"unidad":"15900","nombreUnidad":"GRAN CONTRIB.REG.ORIENTE","direccionUnidad":"GENERAL DEL CANTO 281, PROVIDENCIA","region":"13","descripcionRegion":"REGION METROPOLITANA     ","regional":"15","descripcionRegional":"SANTIAGO ORIENTE"},{"unidad":"15100","nombreUnidad":"DEPTO 1 FISCALIZACION MYG","direccionUnidad":"GENERAL DEL CANTO 281 PROVIDENCIA","region":"13","descripcionRegion":"REGION METROPOLITANA     ","regional":"15","descripcionRegional":"SANTIAGO ORIENTE"},{"unidad":"15105","nombreUnidad":"NUNOA","direccionUnidad":"AV. IRARRAZAVAL 5515, NUNOA","region":"13","descripcionRegion":"REGION METROPOLITANA     ","regional":"15","descripcionRegional":"SANTIAGO ORIENTE"},{"unidad":"15000","nombreUnidad":"SANTIAGO ORIENTE","direccionUnidad":"GENERAL DEL CANTO 281, PROVIDENCIA","region":"13","descripcionRegion":"REGION METROPOLITANA     ","regional":"15","descripcionRegional":"SANTIAGO ORIENTE"},{"unidad":"14900","nombreUnidad":"GRAN CONTRIB. REG.PONIENTE","direccionUnidad":"ROMERO 3226, ESTACION CENTRAL","region":"13","descripcionRegion":"REGION METROPOLITANA     ","regional":"14","descripcionRegional":"SANTIAGO PONIENTE"},{"unidad":"14109","nombreUnidad":"MAIPU","direccionUnidad":"FERNANDO RIESCO 33, MAIPU","region":"13","descripcionRegion":"REGION METROPOLITANA     ","regional":"14","descripcionRegional":"SANTIAGO PONIENTE"},{"unidad":"14601","nombreUnidad":"MELIPILLA","direccionUnidad":"SERRANO 334, MELIPILLA","region":"13","descripcionRegion":"REGION METROPOLITANA     ","regional":"14","descripcionRegional":"SANTIAGO PONIENTE"},{"unidad":"17400","nombreUnidad":"G.C. COMEX","direccionUnidad":"AMUNATEGUI 66, SANTIAGO","region":"13","descripcionRegion":"REGION METROPOLITANA     ","regional":"17","descripcionRegional":"DIR. GRANDES CONTRIBUYENTES"},{"unidad":"17000","nombreUnidad":"DIR. GRANDES CONTRIBUYENTES","direccionUnidad":"AMUNATEGUI 66, SANTIAGO","region":"13","descripcionRegion":"REGION METROPOLITANA     ","regional":"17","descripcionRegional":"DIR. GRANDES CONTRIBUYENTES"},{"unidad":"17300","nombreUnidad":"G.C. SIN FINES DE LUCRO","direccionUnidad":"AMUNATEGUI 66, SANTIAGO","region":"13","descripcionRegion":"REGION METROPOLITANA     ","regional":"17","descripcionRegional":"DIR. GRANDES CONTRIBUYENTES"},{"unidad":"17200","nombreUnidad":"G.C. INTERNACIONAL","direccionUnidad":"AMUNATEGUI 66, SANTIAGO","region":"13","descripcionRegion":"REGION METROPOLITANA     ","regional":"17","descripcionRegional":"DIR. GRANDES CONTRIBUYENTES"},{"unidad":"10101","nombreUnidad":"VALDIVIA","direccionUnidad":"SAN CARLOS 50 - VALDIVIA","region":"14","descripcionRegion":"REGION DE LOS RIOS","regional":"19","descripcionRegional":"19NA UNIDAD REGIONAL DE LOS RIOS"},{"unidad":"10109","nombreUnidad":"LA UNION","direccionUnidad":"CAYETANO LETELIER 341, LA UNION","region":"14","descripcionRegion":"REGION DE LOS RIOS","regional":"19","descripcionRegional":"19NA UNIDAD REGIONAL DE LOS RIOS"},{"unidad":"10108","nombreUnidad":"PANGUIPULLI","direccionUnidad":"CALLE JUAN PABLO II N 80","region":"14","descripcionRegion":"REGION DE LOS RIOS","regional":"19","descripcionRegional":"19NA UNIDAD REGIONAL DE LOS RIOS"},{"unidad":"10103","nombreUnidad":"LANCO","direccionUnidad":"CONDOR ESQ. 18 DE SEPTIEMBRE, LANCO","region":"14","descripcionRegion":"REGION DE LOS RIOS","regional":"19","descripcionRegional":"19NA UNIDAD REGIONAL DE LOS RIOS"},{"unidad":"01101","nombreUnidad":"ARICA","direccionUnidad":"ARTURO PRAT 305, ARICA","region":"15","descripcionRegion":"REGION ARICA Y PARINACOTA","regional":"18","descripcionRegional":"18VA UNIDAD REGIONAL ARICA Y PARINACOTA"},{"unidad":"02101","nombreUnidad":"TOCOPILLA","direccionUnidad":"21 DE MAYO 1653, 2DO PISO, TOCOPILLA","region":"2","descripcionRegion":"REGION DE ANTOFAGASTA    ","regional":"2","descripcionRegional":"2DA UNIDAD REGIONAL ANTOFAGASTA"},{"unidad":"02201","nombreUnidad":"ANTOFAGASTA","direccionUnidad":"MANUEL ANTONIO MATTA 2630","region":"2","descripcionRegion":"REGION DE ANTOFAGASTA    ","regional":"2","descripcionRegional":"2DA UNIDAD REGIONAL ANTOFAGASTA"},{"unidad":"02202","nombreUnidad":"TALTAL","direccionUnidad":"ARTURO PRAT 525, TALTAL","region":"2","descripcionRegion":"REGION DE ANTOFAGASTA    ","regional":"2","descripcionRegional":"2DA UNIDAD REGIONAL ANTOFAGASTA"},{"unidad":"02301","nombreUnidad":"CALAMA","direccionUnidad":"GRANADEROS 2262, CALAMA","region":"2","descripcionRegion":"REGION DE ANTOFAGASTA    ","regional":"2","descripcionRegional":"2DA UNIDAD REGIONAL ANTOFAGASTA"},{"unidad":"03101","nombreUnidad":"CHANARAL","direccionUnidad":"BUIN S/N EDIF.GOBERNACION, CHANARAL","region":"3","descripcionRegion":"REGION DE ATACAMA","regional":"3","descripcionRegional":"3RA UNIDAD REGIONAL ATACAMA"},{"unidad":"03201","nombreUnidad":"COPIAPO","direccionUnidad":"MANUEL ANTONIO MATTA 245","region":"3","descripcionRegion":"REGION DE ATACAMA","regional":"3","descripcionRegional":"3RA UNIDAD REGIONAL ATACAMA"},{"unidad":"03301","nombreUnidad":"VALLENAR","direccionUnidad":"SARGENTO ALDEA 697, VALLENAR","region":"3","descripcionRegion":"REGION DE ATACAMA","regional":"3","descripcionRegional":"3RA UNIDAD REGIONAL ATACAMA"},{"unidad":"04101","nombreUnidad":"LA SERENA","direccionUnidad":"AV. MATTA 461, LA SERENA","region":"4","descripcionRegion":"REGION DE COQUIMBO","regional":"4","descripcionRegional":"4TA UNIDAD REGIONAL COQUIMBO"},{"unidad":"04103","nombreUnidad":"COQUIMBO","direccionUnidad":"MELGAREJO 655, COQUIMBO","region":"4","descripcionRegion":"REGION DE COQUIMBO","regional":"4","descripcionRegional":"4TA UNIDAD REGIONAL COQUIMBO"},{"unidad":"04201","nombreUnidad":"OVALLE","direccionUnidad":"V. MACKENNA 310 OF. 102, OVALLE","region":"4","descripcionRegion":"REGION DE COQUIMBO","regional":"4","descripcionRegional":"4TA UNIDAD REGIONAL COQUIMBO"},{"unidad":"04301","nombreUnidad":"ILLAPEL","direccionUnidad":"INDEPENDENCIA 160, ILLAPEL","region":"4","descripcionRegion":"REGION DE COQUIMBO","regional":"4","descripcionRegional":"4TA UNIDAD REGIONAL COQUIMBO"},{"unidad":"05201","nombreUnidad":"LA LIGUA","direccionUnidad":"PORTALES 367, LA LIGUA","region":"5","descripcionRegion":"REGION DE VALPARAISO","regional":"5","descripcionRegional":"5TA UNIDAD REGIONAL VALPARAISO"},{"unidad":"05301","nombreUnidad":"VALPARAISO","direccionUnidad":"MELGAREJO 667, VALPARAISO","region":"5","descripcionRegion":"REGION DE VALPARAISO","regional":"5","descripcionRegional":"5TA UNIDAD REGIONAL VALPARAISO"},{"unidad":"05302","nombreUnidad":"VINA DEL MAR","direccionUnidad":"ARLEGUI 525, VINA DEL MAR","region":"5","descripcionRegion":"REGION DE VALPARAISO","regional":"5","descripcionRegional":"5TA UNIDAD REGIONAL VALPARAISO"},{"unidad":"05401","nombreUnidad":"SAN ANTONIO","direccionUnidad":"AV. BARROS LUCO 2390, SAN ANTONIO","region":"5","descripcionRegion":"REGION DE VALPARAISO","regional":"5","descripcionRegional":"5TA UNIDAD REGIONAL VALPARAISO"},{"unidad":"05501","nombreUnidad":"QUILLOTA","direccionUnidad":"O'HIGGINS 320, QUILLOTA","region":"5","descripcionRegion":"REGION DE VALPARAISO","regional":"5","descripcionRegional":"5TA UNIDAD REGIONAL VALPARAISO"},{"unidad":"05601","nombreUnidad":"SAN FELIPE","direccionUnidad":"ARTURO PRAT 1032, SAN FELIPE","region":"5","descripcionRegion":"REGION DE VALPARAISO","regional":"5","descripcionRegional":"5TA UNIDAD REGIONAL VALPARAISO"},{"unidad":"05701","nombreUnidad":"LOS ANDES","direccionUnidad":"ESMERALDA 78, LOS ANDES","region":"5","descripcionRegion":"REGION DE VALPARAISO","regional":"5","descripcionRegional":"5TA UNIDAD REGIONAL VALPARAISO"},{"unidad":"05303","nombreUnidad":"VILLA ALEMANA","direccionUnidad":"SANTIAGO 503-B, VILLA ALEMANA","region":"5","descripcionRegion":"REGION DE VALPARAISO","regional":"5","descripcionRegional":"5TA UNIDAD REGIONAL VALPARAISO"},{"unidad":"06101","nombreUnidad":"RANCAGUA","direccionUnidad":"Estado 154, RANCAGUA","region":"6","descripcionRegion":"REGION DE OHIGGINS","regional":"6","descripcionRegional":"6TA UNIDAD REGIONAL RANCAGUA"},{"unidad":"06110","nombreUnidad":"SAN VICENTE TAGUA TAGUA","direccionUnidad":"ARTURO PRAT 855, SAN VICENTE T.T.","region":"6","descripcionRegion":"REGION DE OHIGGINS","regional":"6","descripcionRegional":"6TA UNIDAD REGIONAL RANCAGUA"},{"unidad":"06201","nombreUnidad":"SAN FERNANDO","direccionUnidad":"CHACABUCO 428, SAN FERNANDO","region":"6","descripcionRegion":"REGION DE OHIGGINS","regional":"6","descripcionRegional":"6TA UNIDAD REGIONAL RANCAGUA"},{"unidad":"06205","nombreUnidad":"SANTA CRUZ","direccionUnidad":"21 DE MAYO 172, SANTA CRUZ","region":"6","descripcionRegion":"REGION DE OHIGGINS","regional":"6","descripcionRegional":"6TA UNIDAD REGIONAL RANCAGUA"},{"unidad":"06301","nombreUnidad":"PICHILEMU","direccionUnidad":"AV. JOAQUIN PRIETO 203, PICHILEMU","region":"6","descripcionRegion":"REGION DE OHIGGINS","regional":"6","descripcionRegional":"6TA UNIDAD REGIONAL RANCAGUA"},{"unidad":"07101","nombreUnidad":"CURICO","direccionUnidad":"CARMEN 560, 2DO PISO, CURICO","region":"7","descripcionRegion":"REGION DEL MAULE","regional":"7","descripcionRegional":"7MA UNIDAD REGIONAL MAULE"},{"unidad":"07201","nombreUnidad":"TALCA","direccionUnidad":"UNO ORIENTE 1150, TALCA","region":"7","descripcionRegion":"REGION DEL MAULE","regional":"7","descripcionRegional":"7MA UNIDAD REGIONAL MAULE"},{"unidad":"07208","nombreUnidad":"CONSTITUCION","direccionUnidad":"MONTT ESQ. FREIRE, CONSTITUCION","region":"7","descripcionRegion":"REGION DEL MAULE","regional":"7","descripcionRegional":"7MA UNIDAD REGIONAL MAULE"},{"unidad":"07301","nombreUnidad":"LINARES","direccionUnidad":"INDEPENDENCIA ESQ. FREIRE, LINARES","region":"7","descripcionRegion":"REGION DEL MAULE","regional":"7","descripcionRegional":"7MA UNIDAD REGIONAL MAULE"},{"unidad":"07305","nombreUnidad":"PARRAL","direccionUnidad":"DIECIOCHO 720, PARRAL","region":"7","descripcionRegion":"REGION DEL MAULE","regional":"7","descripcionRegional":"7MA UNIDAD REGIONAL MAULE"},{"unidad":"07401","nombreUnidad":"CAUQUENES","direccionUnidad":"O'HIGGINS 458, CAUQUENES","region":"7","descripcionRegion":"REGION DEL MAULE","regional":"7","descripcionRegional":"7MA UNIDAD REGIONAL MAULE"},{"unidad":"08101","nombreUnidad":"CHILLAN","direccionUnidad":"LIBERTAD ESQ. ARAUCO S/N, CHILLAN","region":"8","descripcionRegion":"REGION DEL BIO BIO","regional":"8","descripcionRegional":"8VA UNIDAD REGIONAL BIO BIO"},{"unidad":"08109","nombreUnidad":"SAN CARLOS","direccionUnidad":"MAIPU 680, SAN CARLOS","region":"8","descripcionRegion":"REGION DEL BIO BIO","regional":"8","descripcionRegional":"8VA UNIDAD REGIONAL BIO BIO"},{"unidad":"08201","nombreUnidad":"CONCEPCION","direccionUnidad":"O'HIGGINS 749, CONCEPCION","region":"8","descripcionRegion":"REGION DEL BIO BIO","regional":"8","descripcionRegional":"8VA UNIDAD REGIONAL BIO BIO"},{"unidad":"08303","nombreUnidad":"LEBU","direccionUnidad":"FREIRE 530, LEBU","region":"8","descripcionRegion":"REGION DEL BIO BIO","regional":"8","descripcionRegional":"8VA UNIDAD REGIONAL BIO BIO"},{"unidad":"08401","nombreUnidad":"LOS ANGELES","direccionUnidad":"CAUPOLICAN S/N, LOS ANGELES","region":"8","descripcionRegion":"REGION DEL BIO BIO","regional":"8","descripcionRegional":"8VA UNIDAD REGIONAL BIO BIO"},{"unidad":"08206","nombreUnidad":"TALCAHUANO","direccionUnidad":"AV. COLON  3875 LOCALES 1 Y 2 TALCAHUANO","region":"8","descripcionRegion":"REGION DEL BIO BIO","regional":"8","descripcionRegional":"8VA UNIDAD REGIONAL BIO BIO"},{"unidad":"09101","nombreUnidad":"ANGOL","direccionUnidad":"LAUTARO 226, PRIMER PISO, ANGOL","region":"9","descripcionRegion":"REGION DE LA ARAUCANIA","regional":"9","descripcionRegional":"9NA UNIDAD REGIONAL TEMUCO"},{"unidad":"09109","nombreUnidad":"VICTORIA","direccionUnidad":"CALAMA ESQ. LAGOS, VICTORIA","region":"9","descripcionRegion":"REGION DE LA ARAUCANIA","regional":"9","descripcionRegional":"9NA UNIDAD REGIONAL TEMUCO"},{"unidad":"09201","nombreUnidad":"TEMUCO","direccionUnidad":"CLARO SOLAR 873, TEMUCO","region":"9","descripcionRegion":"REGION DE LA ARAUCANIA","regional":"9","descripcionRegional":"9NA UNIDAD REGIONAL TEMUCO"},{"unidad":"09215","nombreUnidad":"VILLARRICA","direccionUnidad":"CAMILO HENRIQUEZ 225, VILLARRICA","region":"9","descripcionRegion":"REGION DE LA ARAUCANIA","regional":"9","descripcionRegional":"9NA UNIDAD REGIONAL TEMUCO"},{"unidad":"63001","nombreUnidad":"CENTRAL.VAL.","direccionUnidad":"XXXX","region":null,"descripcionRegion":null,"regional":"63","descripcionRegional":"CENTRAL.VAL."}];

  }

}

// some.factory.js
angular
    .module('sistemaCharlas')
    .factory('FactoryLoader', FactoryLoader);

FactoryLoader.$inject = [];
function FactoryLoader() {

  var wrap = document.getElementById('my-wrapper');
  var container = document.createElement('div');
      container.className = 'sistema-charlas-loader sistema-charlas-loader-hide';
  this.subContainer = document.createElement('div');
  var block = document.createElement('div');

  var p = document.createElement('p');
  this.txt = document.createTextNode('');
  this.img = document.createElement('img');
  this.img.src = './images/ajax-loader.gif';

  p.appendChild(this.txt);

  block.appendChild(this.img);
  block.appendChild(p);

  this.subContainer.appendChild(block);
  container.appendChild(this.subContainer);
  wrap.appendChild(container);

  function deleteChild(myNode){
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
    return myNode;
  }

  function crearContenidoLoader(message){
    deleteChild(p);
    this.txt = document.createTextNode(message);
    p.appendChild(this.txt);
    block.appendChild(p);
  }

  return {

    activa: false,

    activar: function(message) {
      var message = message || '';
      if (this.activa) {
        console.log('Loader ya se encuentra activo');
      }else{
        crearContenidoLoader(message);
        this.activa = true;
        container.className = 'sistema-charlas-loader sistema-charlas-loader-show';
      }

    },
    desactivar: function() {
      crearContenidoLoader();
      this.activa = false;
      container.className = 'sistema-charlas-loader sistema-charlas-loader-hide';
    }
  };
}

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

// some.factory.js
angular
    .module('sistemaCharlas')
    .factory('FactorySearchCharla', FactorySearchCharla);

FactorySearchCharla.$inject = ['store'];
function FactorySearchCharla(store) {

  return {
    codigo: '',
    charla: '',

    getCodigo: function() {
      return this.codigo  || store.get('sistemaCharlas.search.codigo');
    },
    setCodigo: function(codigo) {
      store.set('sistemaCharlas.search.codigo',codigo.toUpperCase());
      this.codigo = codigo.toUpperCase();
    },
    getUltimaCharlaEncontrada: function() {
      console.log(this);
      return this.charla  || store.get('sistemaCharlas.search.UltimaCharlaEncontrada');
    },
    setUltimaCharlaEncontrada: function(charla) {
      store.set('sistemaCharlas.search.UltimaCharlaEncontrada',charla);
      this.charla = charla;
    }
  };
}

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

var txtCaptcha = null;
var urlcaptcha="/cvc_cgi/stc/CViewCaptcha.cgi?oper=1&txtCaptcha="
//var imgCaptcha		='<img src="'+ urlcaptcha + txtCaptcha+'" /><br/>';
var inputCaptcha 	='<input type="text" placeholder="Escriba Captcha..." onkeyup="javascript:this.value=this.value.toUpperCase();" style="width: 8em;" id="txt_code"  maxlength="4" name="txt_code">';

function getImgCaptcha(){
  return '<img id="imgcapt" src="'+ urlcaptcha + txtCaptcha+'" /> <input type="hidden" id="txt_captcha" autocomplete="off" name="txt_captcha"><br/>';
}
function dispCaptcha() {
  var var_aux = '<div id="divCaptcha" style="width: 24em;  margin: 0 auto;">';
  var_aux +='<fieldset>';
  var_aux +='<div style="width:22em; padding:7px">';
    var_aux +='<div style="float:left;width:15em;">';
    var_aux +=getImgCaptcha();
    var_aux +='</div>';
    var_aux +='<div style="float:right;width:7em;">';
    var_aux +='<br>';
    var_aux +='<input type="button" value="Refrescar" onClick="callRefreshCaptcha();">';
    var_aux +='</div>';
  var_aux +='<br>';
  var_aux +='<div style="float:left;width:15em;">';
  var_aux +='<input type="text" placeholder="Escriba Captcha..."  onkeyup="javascript:this.value=this.value.toUpperCase();" style="width: 8em;" id="txt_code"  maxlength="4" name="txt_code">';
  var_aux +='</div>';
  var_aux +='</div>';
  var_aux +='</fieldset>';
  var_aux +='</div>';

      document.write(var_aux);
}


function dispImgCaptcha() {
    document.write(getImgCaptcha());
}
function dispInputCaptcha() {
    document.write(inputCaptcha);
}

function callCaptcha(tipo) {
        $.ajax({
                type: "post",
                contentType: "text/html;charset=utf-8",
                url: "/cvc_cgi/stc/CViewCaptcha.cgi",
                async: false,
                data: "oper=0",
                dataType: 'json',
                beforeSend: function() {
                        //$.mobile.showPageLoadingMsg();
                },
                complete: function() {
                        //$.mobile.hidePageLoadingMsg();
                },
                error: function() {
                        alert("Error Interno");
                        return false;
                },
                success: function(data) {
                        if (data != null){
              if (data.codigorespuesta == 0) {
                txtCaptcha = data.txtCaptcha;
                if(tipo==null)
                  dispCaptcha();
                if(tipo==1)
                  dispImgCaptcha();

                var objc = document.getElementById("txt_captcha");
                 if(objc)
                  objc.value=txtCaptcha;
              }
            }
                }
        });
}

function callRefreshCaptcha(tipo) {
        $.ajax({
                type: "post",
                contentType: "text/html;charset=utf-8",
                url: "/cvc_cgi/stc/CViewCaptcha.cgi",
                async: false,
                data: "oper=0",
                dataType: 'json',
                beforeSend: function() {
                        //$.mobile.showPageLoadingMsg();
                },
                complete: function() {
                        //$.mobile.hidePageLoadingMsg();
                },
                error: function() {
                        alert("Error Interno");
                        return false;
                },
                success: function(data) {
                        if (data != null){
              if (data.codigorespuesta == 0) {
                txtCaptcha = data.txtCaptcha;
                var objImg = document.getElementById("imgcapt");
                if(objImg){
                  objImg.src=urlcaptcha + txtCaptcha;
                }
                var objc = document.getElementById("txt_captcha");
                 if(objc)
                  objc.value=txtCaptcha;
              }
            }
                }
        });
}

function login(){
  var obj=document.getElementById("txt_code");
  if(obj)
    if(obj.value=='')
      alert("Debe ingresar Captcha");
    else{
      alert("Aqui colocar mi funcion submit?")
    }
}
function captcha(tipo){
  callCaptcha(tipo);

}

angular.module('sistemaCharlas')

.service('ServiceHTTP', ServiceHTTP);

function ServiceHTTP($q, FactoryLoader, $http, $location, $log,CONST) {

    var data = {
        metaData: {
            namespace: CONST.NAMESPACES.TEST,
            page: 'TODO',
            coversationId: '12345678901234567890',
            transactionId: '###'
        },
        data: {}
    };
    var config = {};
    var defered = $q.defer();
    var promise = defered.promise;

    return {
        getCharlas: getCharlas,
        getCharlaPorId: getCharlaPorId,
        delInscripcion: delInscripcion,
        aceptarInscripcionCharla: aceptarInscripcionCharla,
        getInscripcion: getInscripcion,
        getCharlaPorCodigo: getCharlaPorCodigo,
        getCharlaMonitorPorId: getCharlaMonitorPorId,
        getCharlasPorMonitorId: getCharlasPorMonitorId,

        cerrarMensaje : cerrarMensaje,

        getAllActividades: getAllActividades,
        getAllActividadesHistoricas: getAllActividadesHistoricas,
        getActividad : getActividad,
        createActividad : createActividad,
        editActividad : editActividad,
        deleteActividad : deleteActividad
    };

    /** getCharlas request http post
     * return {obj} : retorna lista completa de charlar
     */
    function getCharlas(dr, msg) {
        FactoryLoader.activar(msg);
        data.data.dr = dr;
        url = '/api/public/get-charlas';
        return $http.post(url, data, config);
    }
    /** getCharlaPorId request http post
     * param id{int} : id de charla
     * return {obj} : return el objeto con la charla
     */
    function getCharlaPorId(dr, id, msg) {
        FactoryLoader.activar(msg);
        data.id = id;
        data.data.dr = dr;
        url = '/api/public/get-charla-por-id';
        send = $http.post(url, data, config);
        $log.info(send)
        return send;
    }
    /** searchCharlaPorCodigo request http post
     * usuario busca charla por codigo unico ej: [1AS2DS]
     * param id{int} : codigo de charla
     * return {obj} : return el objeto con la charla
     */
    function getCharlaPorCodigo(codigo, msg) {
        FactoryLoader.activar(msg);
        data.data = {
            codigo: codigo
        };
        url = '/api/public/get-charla-por-codigo';
        return $http.post(url, data, config);
    }
    /** delInscripcion request http post
     * param id{int} : id de charla
     * return {boolean} : exito o fracaso en eliminacion de charla
     */
    function delInscripcion(id) {
        return {
            'id': id
        };
    }
    /** subscribe request http post
     * param id{int} : id de charla
     * return {boolean} : exito o fracaso en eliminacion de charla
     */
    function getInscripcion(codigo) {
        return {
            nombreActividadAcademica: 'Facturación electrónicda',
            fechaCharla: new Date(2016, 5, 1),
            ubicacionCharla: 'Valle de robles 1010, Temuco',
            codigo: codigo
        };
    }

    /** aceptarInscripcionCharla request http post
     * param id{int} : id de charla
     * return {boolean} : exito o fracaso de inscripcion
     */
    function aceptarInscripcionCharla(dataout, message) {
        console.log(dataout);
        data.data = dataout;
        FactoryLoader.activar(message);
        url = '/api/public/aceptar-inscripcion-charla';
        return $http.post(url, data, config);
    }

    /**
     * getCharlaMonitorPorId request http post
     * @param  {int} id      id de charla a buscar
     * @param  {String} message Mensaje para Loader
     * @return {promise http}   Promesa con el retorno de la peticion
     */
    function getCharlaMonitorPorId(id, message) {
        data.data.id = id;
        FactoryLoader.activar(message);
        url = '/api/monitor/get-charla-por-id';
        return $http.post(url, data, config);
    }

    /** getCharlaMonitorPorId request http post
     * param id{int} : id de charla
     * return {boolean} : exito o fracaso de inscripcion
     */
    function getCharlasPorMonitorId(id, message) {
        data.data.id = id;
        FactoryLoader.activar(message);
        url = '/api/monitor/get-charlas-por-monitor-id';
        return $http.post(url, data, config);
    }

    /**
     * [getAllActividades description]
     * @param  {[type]} adminId [description]
     * @param  {[type]} message [description]
     * @return {[type]}         [description]
     */
    function getAllActividades(adminId, message) {
        data.data.id = adminId;
        FactoryLoader.activar(message);
        url = '/api/admin/get-all-actividades';
        return $http.post(url, data, config);
    }
    /**
     * [getAllActividadesHistoricas description]
     * @param  {[type]} adminId [description]
     * @param  {[type]} message [description]
     * @return {[type]}         [description]
     */
    function getAllActividadesHistoricas(adminId, message) {
        data.data.id = adminId;
        FactoryLoader.activar(message);
        url = '/api/admin/get-all-actividades-historicas';
        return $http.post(url, data, config);
    }

//---------------------- CRUD ACTIVIDAD --------------------------------------//
    /**
     * [getActividad devulve una actividad por id]
     * @param  {int} id      [description]
     * @param  {String} message [description]
     * @return {Promise Actividad}         [description]
     */
    function getActividad(id, message) {
        data.data.id = id;
        FactoryLoader.activar(message);
        url = '/api/admin/actividad-get';
        return $http.post(url, data, config);
    }
    /**
     * [createActividad crea una actividad]
     * @param  {[type]} obj     [description]
     * @param  {[type]} message [description]
     * @return {Promise Actividad}         [description]
     */
    function createActividad(obj, message) {
        data.data = obj;
        FactoryLoader.activar(message);
        url = '/api/admin/actividad-create';
        return $http.post(url, data, config);
    }
    /**
     * [editActividad description]
     * @param  {[type]} obj     [description]
     * @param  {[type]} message [description]
     * @return {[type]}         [description]
     */
    function editActividad(obj, message) {
        data.data = obj;
        FactoryLoader.activar(message);
        url = '/api/admin/actividad-edit';
        return $http.post(url, data, config);
    }
    /**
     * [deleteActividad description]
     * @param  {[type]} id      [description]
     * @param  {[type]} message [description]
     * @return {[type]}         [description]
     */
    function deleteActividad(id, message) {
        data.data.id = id;
        FactoryLoader.activar(message);
        url = '/api/admin/actividad-delete';
        return $http.post(url, data, config);
    }

    function cerrarMensaje(){
      FactoryLoader.desactivar();
    }
}

angular.module('sistemaCharlas')
    .service('ServiceHelpers', ServiceHelpers);


function ServiceHelpers() {
    //make Public
    return {
        minutosAHoras: minutosAHoras
    };

    //Private
    function minutosAHoras(minutos) {
        var hora = parseInt(minutos / 60) || 0;
        var minuto = (minutos % 60) || 0;
        return hora + (hora > 1 ? ' horas ' : ' hora ') + minuto + (minuto > 1 ? ' minutos' : ' minutos');
    }
}

angular.module('sistemaCharlas')
  .service('ServiceStore',ServiceStore);


  function ServiceStore(store) {
    return {
      setUltimaCharlaInscrita : setUltimaCharlaInscrita,
      getUltimaCharlaInscrita : getUltimaCharlaInscrita,
      deleteUltimaCharlaInscrita : deleteUltimaCharlaInscrita
    };

    //Private
    function setUltimaCharlaInscrita(objCharla){
      store.set('sistemaCharlas.ultimaCharlaInscrita',objCharla);
    }
    function getUltimaCharlaInscrita(){
      return store.get('sistemaCharlas.ultimaCharlaInscrita');
    }
    function deleteUltimaCharlaInscrita(){
      store.remove('sistemaCharlas.ultimaCharlaInscrita');
    }
  }

angular.module('sistemaCharlas')
  .service('ServiceUsuario',ServiceUsuario);

  function ServiceUsuario(store) {
    return {
      setData : setData,
      getData : getData,
      deleteData : deleteData
    };

    //Private
    function setData(usuario){
      console.log(usuario);
      store.set('usuario',usuario);
    }
    function getData(){
      return store.get('usuario');
    }
    function deleteData(){
      store.remove('usuario');
    }
  }

AdminActAcad.$inject = ['ServiceUsuario', '$location', 'ServiceHTTP', 'FactoryLoader', 'ServiceHelpers'];

function AdminActAcad(ServiceUsuario, $location, ServiceHTTP, FactoryLoader, ServiceHelpers) {

    var vm = this;
    vm.data = {};
    vm.data.actividad = {};


    vm.data.actividad.tipo = "0";
    vm.data.actividad.modalidad = "0";

    vm.goto = goto;

    function goto(url, id) {
        $location.path('admin/charlas/' + url + '/' + id);
    }


    function initView() {
      vm.activa = true;
    }
    initView();


}

angular.module('sistemaCharlas')
  .controller('AdminActAcad',AdminActAcad);

AdminAct.$inject = ['ServiceUsuario', '$location', 'ServiceHTTP', 'FactoryLoader'];

function AdminAct(ServiceUsuario, $location, ServiceHTTP, FactoryLoader) {

    var vm = this;
    vm.data = {};
    vm.data.charlas = {};

    vm.goto = goto;

    function goto(url, id) {
        $location.path('admin/charlas/' + url + '/' + id);
    }


    function initView() {

        function resultOK(data) {
            FactoryLoader.desactivar();
            vm.data.charlas = data.data;
            console.log(vm.data.charlas, data);
        }

        function resultNOK(err) {
            FactoryLoader.desactivar();
            console.log(err);
        }
        ServiceHTTP.getCharlasPorMonitorId(2, 'Cargando listado de actividades...')
            .success(function(data) {
                resultOK(data);
            })
            .error(function(err) {
                resultNOK(err);
            });

    }
    initView();


}

angular.module('sistemaCharlas')
  .controller('AdminAct',AdminAct);

AdminActExplorar.$inject = ['ServiceUsuario','$location','ServiceHTTP','FactoryLoader','ServiceHelpers'];
function AdminActExplorar(ServiceUsuario,$location,ServiceHTTP,FactoryLoader,ServiceHelpers){
      var vm = this;
      vm.data = {};
      vm.data.actividades = {};

      vm.goto = goto;

      function goto(url, id) {
          $location.path(url + '/' + id);
      }

      vm.minutosAHoras = function(minutos) {
          return ServiceHelpers.minutosAHoras(minutos);
      }

      function initView() {

          function resultOK(data) {
              FactoryLoader.desactivar();
              vm.data.actividades = data.data;
              console.log(vm.data.actividades, data);
          }

          function resultNOK(err) {
              FactoryLoader.desactivar();
              console.log(err);
          }
          ServiceHTTP.getAllActividadesHistoricas(2, 'Cargando listado de actividades...')
              .success(function(data) {
                  resultOK(data);
              })
              .error(function(err) {
                  resultNOK(err);
              });

      }
      initView();


  }

angular.module('sistemaCharlas')
  .controller('AdminActExplorar',AdminActExplorar);

AdminActExplorarHistorial.$inject = ['ServiceUsuario', '$location', 'ServiceHTTP', 'FactoryLoader', 'ServiceHelpers'];

function AdminActExplorarHistorial(ServiceUsuario, $location, ServiceHTTP, FactoryLoader, ServiceHelpers) {

    var vm = this;
    vm.data = {};
    vm.data.actividades = {};

    vm.goto = goto;

    function goto(url, id) {
        $location.path(url + '/' + id);
    }

    vm.minutosAHoras = function(minutos) {
        return ServiceHelpers.minutosAHoras(minutos);
    }

    function initView() {

        function resultOK(data) {
            FactoryLoader.desactivar();
            vm.data.actividades = data.data;
            console.log(vm.data.actividades, data);
        }

        function resultNOK(err) {
            FactoryLoader.desactivar();
            console.log(err);
        }
        ServiceHTTP.getAllActividadesHistoricas(2, 'Cargando listado de actividades...')
            .success(function(data) {
                resultOK(data);
            })
            .error(function(err) {
                resultNOK(err);
            });

    }
    initView();


}

angular.module('sistemaCharlas')
  .controller('AdminActExplorarHistorial',AdminActExplorarHistorial);

AdminActVer.$inject = ['ServiceUsuario', '$location', 'ServiceHTTP', 'FactoryLoader', 'ServiceHelpers','$routeParams','$scope'];

function AdminActVer(ServiceUsuario, $location, ServiceHTTP, ServiceHelpers,$routeParams,$scope) {

    var vm = this;
    vm.param = {};
    vm.param.id = $routeParams.id;

    vm.data = {};


    vm.goto = goto;
    function goto(url, id) {
        $location.path('admin/charlas/' + url + '/' + vm.param);
    }

    vm.duracionCalculada = 0;
    vm.minutosAHoras = function(minutos) {
        return ServiceHelpers.minutosAHoras(minutos);
    }


    vm.estadoCarga = false;
    vm.cargarArchivo = function(){
      console.log("click");
      vm.estadoCarga = true;
    }

    vm.actividadGrabar = function(){
      ServiceHTTP.actividadGrabar('');
      console.log(vm.data.actividad);
    }

    function initView() {

      vm.data.actividad = {
        "id" : '',
        "duracion": '',
        "temario": '',
        "tipo_programa": '',
        "metodologia": '',
        "activa": false,
        "objetivo": '',
        "modalidad": '',
        "destinatario": '',
        "programa": '',
        "descripcion": '',
        "nombre": ''
      };


      ServiceHTTP.getActividad(vm.param.id,"Cargando Actividad").then(function(data){
        console.log(data);
        console.log(vm.data);
        vm.data.actividad = data.data.data;
        ServiceHTTP.cerrarMensaje();
      },function(err){
        console.log(err);
      });
    }
    initView();


}

angular.module('sistemaCharlas')
  .controller('AdminActVer',AdminActVer);

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

angular.module('sistemaCharlas')
  .controller('AdminIndex',AdminIndex);

AdminLocalActExplorar.$inject = ['ServiceUsuario','$location','ServiceHTTP','FactoryLoader','ServiceHelpers'];
function AdminLocalActExplorar(ServiceUsuario,$location,ServiceHTTP,FactoryLoader,ServiceHelpers){
      var vm = this;
      vm.data = {};
      vm.data.actividades = {};

      vm.goto = goto;

      function goto(url, id) {
          $location.path(url + '/' + id);
      }

      vm.minutosAHoras = function(minutos) {
          return ServiceHelpers.minutosAHoras(minutos);
      }

      function initView() {

          function resultOK(data) {
              FactoryLoader.desactivar();
              vm.data.actividades = data.data;
              console.log(vm.data.actividades, data);
          }

          function resultNOK(err) {
              FactoryLoader.desactivar();
              console.log(err);
          }
          ServiceHTTP.getAllActividadesHistoricas(2, 'Cargando listado de actividades...')
              .success(function(data) {
                  resultOK(data);
              })
              .error(function(err) {
                  resultNOK(err);
              });

      }
      initView();


  }

angular.module('sistemaCharlas')
  .controller('AdminLocalActExplorar',AdminLocalActExplorar);

AdminLocalActExplorarHistorial.$inject = ['ServiceUsuario', '$location', 'ServiceHTTP', 'FactoryLoader', 'ServiceHelpers'];

function AdminLocalActExplorarHistorial(ServiceUsuario, $location, ServiceHTTP, FactoryLoader, ServiceHelpers) {

    var vm = this;
    vm.data = {};
    vm.data.actividades = {};

    vm.goto = goto;

    function goto(url, id) {
        $location.path(url + '/' + id);
    }

    vm.minutosAHoras = function(minutos) {
        return ServiceHelpers.minutosAHoras(minutos);
    }

    function initView() {

        function resultOK(data) {
            FactoryLoader.desactivar();
            vm.data.actividades = data.data;
            console.log(vm.data.actividades, data);
        }

        function resultNOK(err) {
            FactoryLoader.desactivar();
            console.log(err);
        }
        ServiceHTTP.getAllActividadesHistoricas(2, 'Cargando listado de actividades...')
            .success(function(data) {
                resultOK(data);
            })
            .error(function(err) {
                resultNOK(err);
            });

    }
    initView();


}

angular.module('sistemaCharlas')
  .controller('AdminLocalActExplorarHistorial',AdminLocalActExplorarHistorial);

AdminLocalActVer.$inject = ['ServiceUsuario', '$location', 'ServiceHTTP', 'FactoryLoader', 'ServiceHelpers','$routeParams','$scope'];

function AdminLocalActVer(ServiceUsuario, $location, ServiceHTTP, ServiceHelpers,$routeParams,$scope) {

    var vm = this;
    vm.param = {};
    vm.param.id = $routeParams.id;

    vm.data = {};


    vm.goto = goto;
    function goto(url, id) {
        $location.path('admin/charlas/' + url + '/' + vm.param);
    }

    vm.duracionCalculada = 0;
    vm.minutosAHoras = function(minutos) {
        return ServiceHelpers.minutosAHoras(minutos);
    }


    vm.actividadGrabar = function(){
      ServiceHTTP.actividadGrabar('');
      console.log(vm.data.actividad);
    }

    function initView() {

      vm.data.actividad = {
        "id" : '',
        "duracion": '',
        "temario": '',
        "tipo_programa": '',
        "metodologia": '',
        "activa": false,
        "objetivo": '',
        "modalidad": '',
        "destinatario": '',
        "programa": '',
        "descripcion": '',
        "nombre": ''
      };


      ServiceHTTP.getActividad(vm.param.id,"Cargando Actividad").then(function(data){
        console.log(data);
        console.log(vm.data);
        vm.data.actividad = data.data.data;
        ServiceHTTP.cerrarMensaje();
      },function(err){
        console.log(err);
      });
    }
    initView();


}

angular.module('sistemaCharlas')
  .controller('AdminLocalActVer',AdminLocalActVer);

AdminLocalActAcadExplora.$inject = ['ServiceUsuario'];
function AdminLocalActAcadExplora(ServiceUsuario){
  console.log(ServiceUsuario.getData());
}

angular.module('sistemaCharlas')
  .controller('AdminLocalActAcadExplora',AdminLocalActAcadExplora);

AdminLocalActAcadVer.$inject = ['ServiceUsuario'];
function AdminLocalActAcadVer(ServiceUsuario){
  console.log(ServiceUsuario.getData());
}

angular.module('sistemaCharlas')
  .controller('AdminLocalActAcadVer',AdminLocalActAcadVer);

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

angular.module('sistemaCharlas')
  .controller('AdminLocalCharlaCreate',AdminLocalCharlaCreate);

AdminLocalCharlaExplora.$inject = ['ServiceUsuario','$location','ServiceHTTP','FactoryLoader'];
function AdminLocalCharlaExplora(ServiceUsuario,$location,ServiceHTTP,FactoryLoader){
  var vm = this;
      vm.data = {};
      vm.data.charlas = {};

  vm.goto = goto;
  function goto(url,id){
    $location.path('admin-local/listado/charlas/ver/'+ id);
  }

  function initView(){

    function resultOK(data){
      FactoryLoader.desactivar();
      vm.data.charlas = data.data;
      console.log(vm.data.charlas,data);
    }
    function resultNOK(err){
      FactoryLoader.desactivar();
      console.log(err);
    }
    ServiceHTTP.getCharlasPorMonitorId(2,'Cargando listado de actividades...')
      .success(function(data) {
          resultOK(data);
      })
      .error(function(err) {
          resultNOK(err);
      });

  }
  initView();
}

angular.module('sistemaCharlas')
  .controller('AdminLocalCharlaExplora',AdminLocalCharlaExplora);

AdminLocalCharlaVer.$inject = ['ServiceUsuario', 'FactoryData', '$location',
  '$scope', '$timeout'
];

function AdminLocalCharlaVer(ServiceUsuario, FactoryData, $location, $scope,
  $timeout) {
  console.log(ServiceUsuario.getData());

  var vm = this;
  vm.newCharla = {};
  vm.data = {};
  vm.data.charla = {};
  vm.data.charla.fechaInicio = new Date();
  vm.data.charla.estado = 1;

  vm.saveAndNotify = false;
  vm.desactiveButton = true;

  vm.comunas = FactoryData.getComuna();
  vm.dr = FactoryData.getDr();


  vm.data.charla = {};


  vm.suspenderActividad = function(idc) {

    $('#modal-suspender-charla').modal('hide');
    $timeout(function() {
      console.log(1);
      $location.path('admin-local/listado/charlas');
      $scope.apply;
    }, 500);

  }
  vm.selectAct = function(id, titulo) {
    vm.data.charla.actividadSelect = id;

    vm.data.charla.actividadSelectHumanText = 'Actividad: ' + titulo;
    console.log(id);
    $('#selecion-actividad').modal('hide');


  }


  vm.optFechaInicio = function() {
    return {
      icons: {
        next: 'fa fa-angle-right',
        previous: 'fa fa-angle-left',
        up: 'fa fa-angle-up',
        down: 'fa fa-angle-down',
      },
      format: 'DD/MM/YYYY'
    };
  }
  vm.optFechaFin = function() {
    return {
      icons: {
        next: 'fa fa-angle-right',
        previous: 'fa fa-angle-left',
        up: 'fa fa-angle-up',
        down: 'fa fa-angle-down',
      },
      format: 'DD/MM/YYYY',
      minDate: new Date(vm.data.charla.fechaInicio)
    };
  }


  vm.cargarHTTP = function(){




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
    vm.horario= JSON.parse('[{"inicio":"11:00","fin":"13:00","dia":"23/12/2016"},{"inicio":"12:00","fin":"12:00","dia":"24/12/2016"}]');



    vm.charlaOriginal = {};


    vm.data.charla = {
      actividadSelect: 2,
      actividadSelectHumanText: "Actividad: Como declarar IVA | 15Hrs",
      comuna: "8413",
      cupos: 10,
      direccion: "Avenida Siempre Viva #3345",
      dr: "DR Arica",
      estado: 2,
      fechaInicio: "01/11/2016",
      fechaTermino: "10/11/2016",
      monitorSelect: "167512569"
    };

    angular.copy(vm.data.charla,vm.charlaOriginal);

    $timeout(function () {

      $scope.$watch('vm.horarios', function(newValue, oldValue){
        if (oldValue  != newValue) {
          vm.desactiveButton = false;
        }
        if (oldValue != newValue) {
          vm.saveAndNotify = true;
        }else{

        }
      }, true);
      $scope.$watch('vm.data.charla', function(newValue, oldValue){
        if (oldValue  != newValue) {
          vm.desactiveButton = false;
        }

        if (
          oldValue.comuna != newValue.comuna ||
          oldValue.direccion != newValue.direccion ||
          oldValue.dr != newValue.dr ||
          oldValue.estado != newValue.estado ||
          oldValue.fechaInicio != newValue.fechaInicio ||
          oldValue.fechaTermino != newValue.fechaTermino
        ) {
          vm.saveAndNotify = true;
        }else{

        }
      }, true);
    }, 500);

  }
  vm.cargarHTTP();

}

angular.module('sistemaCharlas')
  .controller('AdminLocalCharlaVer',AdminLocalCharlaVer);

AdminLocalIndex.$inject = ['ServiceUsuario'];
function AdminLocalIndex(ServiceUsuario){
  console.log(ServiceUsuario.getData());
}

angular.module('sistemaCharlas')
  .controller('AdminLocalIndex',AdminLocalIndex);

CodigoConfirmacionMonitor.$inject = ['ServiceStore', 'FactorySearchCharla',
  '$routeParams', '$location', 'FactoryLoader'
];

function CodigoConfirmacionMonitor(ServiceStore, FactorySearchCharla,
  $routeParams, $location, FactoryLoader) {
  var vm = this
  vm.data = {};
  vm.param = {};
  vm.param.id = $routeParams.id;
  vm.param.dr = $routeParams.dr;
  vm.param.call = $routeParams.call;

  vm.data.charla = ServiceStore.getUltimaCharlaInscrita();
  console.log(vm.data.charla);
  console.log(vm.data.charla);
  vm.volver = volver;

  function volver(id) {
    vm.volver = {};


  };

}

angular.module("sistemaCharlas")
  .controller("CodigoConfirmacionMonitor",CodigoConfirmacionMonitor);

FormularioInscripcionMonitor.$inject = ['$scope','ServiceUsuario','ServiceStore','ServiceHTTP','$routeParams','$filter','$location','FactoryLoader'];
function FormularioInscripcionMonitor($scope,ServiceUsuario,ServiceStore,ServiceHTTP,$routeParams,$filter,$location,FactoryLoader){

  var vm = this;
  vm.data = {};

  vm.param = {};
  vm.param.id = $routeParams.id;
  vm.param.dr = $routeParams.dr;
  vm.param.call = $routeParams.call;
  vm.data.charla = {};
  vm.data.charla.fechaFormat;
  vm.data.charla.horaFormat;
  vm.data.charla.horaFinFormat

    vm.urlAnteriorPortal = '/#/monitor/';
    vm.urlAnterior = "/#/monitor/charlas/evaluacion/" + vm.param.dr;
    vm.textoUrlAnterior = "Formulario de Charla"


  vm.newCharla = {
    nombre : '',
    apellido : '',
    email : '',
    fechaNacimiento : '',
    comuna : ''
  };

  vm.callCharla = callCharla;
  function callCharla(dr,id){
      ServiceHTTP.getCharlaPorId(dr,id,'Cargando...').then(function(data){
        FactoryLoader.desactivar();
        vm.data.charla = data.data.data;
      },function(err){
        console.log(err);
      });
     //vm.data.charla = ServiceHTTP.getCharlaPorId(id);
     vm.data.charla.fechaFormat = $filter('date')(vm.data.charla.fecha, "fullDate");
     vm.data.charla.horaFormat = $filter('date')(vm.data.charla.fecha, "shortTime");
     vm.data.charla.horaFinFormat = $filter('date')(vm.data.charla.fechaFin, "shortTime");
  }

  vm.gotoRegistrar = gotoRegistrar;
  function gotoRegistrar(){
    if ($scope.FormNuevaCharla.$valid) {

      //Copiar la data de la charla en el envio
      vm.newCharla.data = vm.data.charla;

      ServiceHTTP.aceptarInscripcionCharla(vm.newCharla , "Registrando...").then(function(data){
        FactoryLoader.desactivar();
        console.log(data);
        ServiceStore.setUltimaCharlaInscrita(data.data.data);
        $location.path('monitor/detalle-inscripcion/' + vm.param.call + '/' + vm.param.dr + '/' + vm.param.id);
      });

    }else{
      console.log('Error debe completar todos los campos');
    }


  }
  vm.cancelarInscripcion = cancelarInscripcion;
  function cancelarInscripcion(id){
    ServiceStore.deleteUltimaCharlaInscrita(id);
    $location.path('public/charlas/listado/' + vm.param.dr);
  }

  vm.callCharla(vm.param.dr,vm.param.id);
}

angular.module('sistemaCharlas')
  .controller('FormularioInscripcionMonitor',FormularioInscripcionMonitor);

MonitorCharla.$inject = ['ServiceUsuario', '$location', 'ServiceHTTP',
  'FactoryLoader', '$routeParams'
];

function MonitorCharla(ServiceUsuario, $location, ServiceHTTP, FactoryLoader,
  $routeParams) {

  var vm = this;

  vm.type = $routeParams.type;
  vm.data = {};
  vm.data.charlas = {};

  vm.goto = goto;

  function goto(url, id) {
    $location.path('monitor/charlas/' + url + "/" + vm.type + '/' + id);
  }


  function initView() {

    function resultOK(data) {
      FactoryLoader.desactivar();
      vm.data.charlas = data.data;
      console.log(vm.data.charlas, data);
    }

    function resultNOK(err) {
      FactoryLoader.desactivar();
      console.log(err);
    }
    ServiceHTTP.getCharlasPorMonitorId(2, 'Cargando listado de actividades...')
      .success(function(data) {
        resultOK(data);
      })
      .error(function(err) {
        resultNOK(err);
      });

  }
  initView();


}

angular.module('sistemaCharlas')
  .controller('MonitorCharla',MonitorCharla);

MonitorCharlaHistorial.$inject = ['ServiceUsuario', '$location', 'ServiceHTTP',
  'FactoryLoader', '$routeParams'
];

function MonitorCharlaHistorial(ServiceUsuario, $location, ServiceHTTP,
  FactoryLoader, $routeParams) {

  var vm = this;
  vm.data = {};
  vm.data.charlas = {};
  vm.type = $routeParams.type;
  vm.goto = goto;

  function goto(url, id) {
    $location.path('monitor/charlas/' + url + "/" + vm.type + '/' + id);
  }
  console.log(1237912349127346128473);

  function initView() {

    function resultOK(data) {
      FactoryLoader.desactivar();
      vm.data.charlas = data.data;
      console.log(vm.data.charlas, data);
    }

    function resultNOK(err) {
      FactoryLoader.desactivar();
      console.log(err);
    }
    ServiceHTTP.getCharlasPorMonitorId(2, 'Cargando listado de actividades...')
      .success(function(data) {
        resultOK(data);
      })
      .error(function(err) {
        resultNOK(err);
      });

  }
  initView();


}

angular.module('sistemaCharlas')
  .controller('MonitorCharlaHistorial',MonitorCharlaHistorial);

MonitorEvaluacion.$inject = ['$scope', 'ServiceUsuario', 'ServiceHTTP',
  'FactoryLoader', '$location', '$routeParams', '$timeout'
];

function MonitorEvaluacion($scope, ServiceUsuario, ServiceHTTP, FactoryLoader,
  $location, $routeParams, $timeout) {
  console.log(ServiceUsuario.getData());

  var vm = this;

  vm.type = $routeParams.type;
  vm.id = $routeParams.id;
  vm.data = {};
  vm.data.charla = {};
  vm.data.usuarios = [];
  vm.arr = [];
  vm.agregarParticipante = agregarParticipante;

  vm.isHistorial;
  if (vm.id == "1") {
    vm.isHistorial = true;
  }else {
    vm.isHistorial = false;
  }

  function agregarParticipante() {
    $location.path('monitor/formulario-de-inscripcion/evaluacion/1/1');
  }

  function initView() {
    function resultOK(data) {
      FactoryLoader.desactivar();
      console.log(data.data);
      vm.data.charla = data.data.identificacion;
      vm.data.usuarios = data.data.listado;
      angular.copy(vm.data.usuarios, vm.arr)


      $scope.$watch('vm.data.usuarios', function(newValue, oldValue) {

        if (newValue != oldValue) {
          console.log(1);
          vm.disableButton = false;
        } else {
          console.log(2);
          vm.disableButton = true;
          console.log(vm.disableButton);
        }

      }, true);

    }

    function resultNOK(err) {
      FactoryLoader.desactivar();
      $scope.isErrorBuscar = true;
    }
    ServiceHTTP.getCharlaMonitorPorId(2, 'Cargando...')
      .success(function(data) {
        if (data.data != -1)
          resultOK(data);
        else
          resultNOK(data);
      })
      .error(function(err) {
        resultNOK(err);
      });
  }

  initView();

  vm.cerrarCharla = cerrarCharla;

  function cerrarCharla() {
    console.log(vm.data.usuarios);
  }

  vm.searchInput = '';
  vm.getUsuarios = function() {
      vm.searchInput += '';
      vm.arr = [];
      //angular.copy(vm.data.usuarios,arr)
      if (vm.searchInput.length > 0) {
        for (var i = 0; i < vm.data.usuarios.length; i++) {
          if (
            vm.data.usuarios[i].nombre.toLowerCase().indexOf(vm.searchInput.toLowerCase()) !=
            -1 ||
            vm.data.usuarios[i].rut.toLowerCase().indexOf(vm.searchInput.toLowerCase()) !=
            -1 ||
            vm.data.usuarios[i].codigo.toLowerCase().indexOf(vm.searchInput.toLowerCase()) !=
            -1) {
            vm.arr.push(vm.data.usuarios[i])
          }
        }
        //angular.copy(vm.arr,vm.data.usuarios)
        return true;
      }
      angular.copy(vm.data.usuarios, vm.arr)

    }
    //vm.getUsuarios();


  vm.disableButton = true;


}



function arrayObjectIndexOf(arr, obj) {
  for (var i = 0; i < arr.length; i++) {
    if (angular.equals(arr[i], obj)) {
      return i;
    }
  };
  return -1;
}

angular.module('sistemaCharlas')
  .controller('MonitorEvaluacion',MonitorEvaluacion);

MonitorIndex.$inject = ['ServiceUsuario'];
function MonitorIndex(ServiceUsuario){
  console.log(ServiceUsuario.getData());
}

angular.module('sistemaCharlas')
  .controller('MonitorIndex',MonitorIndex);

CharlaPorCodigo.$inject = ['ServiceUsuario','FactorySearchCharla','$location'];
function CharlaPorCodigo(ServiceUsuario,FactorySearchCharla,$location){
  var vm = this;
}

angular.module('sistemaCharlas')
  .controller('CharlaPorCodigo',CharlaPorCodigo);

CharlaView.$inject = ['ServiceUsuario','FactorySearchCharla','$location'];
function CharlaView(ServiceUsuario,FactorySearchCharla,$location){

  var vm = this;
      vm.data = {};

      vm.param = {};

      vm.data.charla = FactorySearchCharla.getUltimaCharlaEncontrada();

      vm.goto = goto;
      function goto(url){
        $location.path(url);
      }
}

angular.module('sistemaCharlas')
  .controller('CharlaView',CharlaView);

CharlasIndex.$inject = ['ServiceUsuario'];
function CharlasIndex(ServiceUsuario){
  var vm = this;

}

angular.module('sistemaCharlas')
  .controller('CharlasIndex',CharlasIndex);

CodigoConfirmacion.$inject = ['ServiceStore', 'FactorySearchCharla', '$routeParams', '$location', 'FactoryLoader'];

function CodigoConfirmacion(ServiceStore, FactorySearchCharla, $routeParams, $location, FactoryLoader) {
    var vm = this
    vm.data = {};
    vm.param = {};
    vm.param.id = $routeParams.id;
    vm.param.dr = $routeParams.dr;
    vm.param.call = $routeParams.call;

    vm.data.charla = ServiceStore.getUltimaCharlaInscrita();
    console.log(vm.data.charla);
    console.log(vm.data.charla);
    vm.volver = volver;


    if (vm.param.call == 'listado') {
      vm.volver.texto = 'Volver a listado de actividades';
      vm.urlAnteriorPortal = '/#/public/';
      vm.urlAnterior = "/#/public/charlas/listado/" + vm.param.dr;
      vm.textoUrlAnterior = "Charlas"
    }else{
      vm.volver.texto = 'Volver a Formulario de charla';
      vm.urlAnteriorPortal = '/#/monitor/';
      vm.urlAnterior = "/#/monitor/charlas/evaluacion/" + vm.param.dr;
      vm.textoUrlAnterior = "Formulario de Charla"
    }


    function volver(id) {
        vm.volver = {};
        if (vm.param.call == 'listado') {
            $location.path('public/charlas/listado/' + vm.param.dr);
        } else {
            $location.path('monitor/charlas/evaluacion/' + vm.param.dr);
        }

    };

}

angular.module("sistemaCharlas")
  .controller("CodigoConfirmacion",CodigoConfirmacion);

FormularioInscripcion.$inject = ['$scope', 'ServiceUsuario', 'ServiceStore', 'ServiceHTTP', '$routeParams', '$filter', '$location', 'FactoryLoader','FactoryData'];

function FormularioInscripcion($scope, ServiceUsuario, ServiceStore, ServiceHTTP, $routeParams, $filter, $location, FactoryLoader,FactoryData) {

    var vm = this;
    vm.data = {};

    vm.param = {};
    vm.param.id = $routeParams.id;
    vm.param.dr = $routeParams.dr;
    vm.param.call = $routeParams.call;
    vm.data.charla = {};
    vm.data.charla.fechaFormat;
    vm.data.charla.horaFormat;
    vm.data.charla.horaFinFormat

    vm.comunas = FactoryData.getComuna();
    //Fecha actual menos 15 años
    vm.maxDate = new Date((new Date).setFullYear((new Date).getFullYear()-15));

    vm.optFecha = function(){

      return {
          icons:{
            next:'fa fa-angle-right',
            previous:'fa fa-angle-left',
            up:'fa fa-angle-up',
            down:'fa fa-angle-down'
          },
          viewMode: 'years',
          format: 'DD/MM/YYYY'
        };

    };

    vm.urlAnteriorPortal = '/#/public/';
    vm.urlAnterior = "/#/public/charlas/listado/" + vm.param.dr;
    vm.textoUrlAnterior = "Charlas"


    vm.newCharla = {
        nombre: '',
        apellido: '',
        email: '',
        fechaNacimiento: '',
        comuna: ''
    };

    vm.callCharla = callCharla;

    function callCharla(dr, id) {
        ServiceHTTP.getCharlaPorId(dr, id, 'Cargando...').then(function(data) {
            FactoryLoader.desactivar();
            vm.data.charla = data.data.data;
        }, function(err) {
            console.log(err);
        });
        //vm.data.charla = ServiceHTTP.getCharlaPorId(id);
        vm.data.charla.fechaFormat = $filter('date')(vm.data.charla.fecha, "fullDate");
        vm.data.charla.horaFormat = $filter('date')(vm.data.charla.fecha, "shortTime");
        vm.data.charla.horaFinFormat = $filter('date')(vm.data.charla.fechaFin, "shortTime");
    }

    vm.gotoRegistrar = gotoRegistrar;

    function gotoRegistrar() {
        if ($scope.FormNuevaCharla.$valid) {

            //Copiar la data de la charla en el envio
            vm.newCharla.data = vm.data.charla;

            ServiceHTTP.aceptarInscripcionCharla(vm.newCharla, "Registrando...").then(function(data) {
                FactoryLoader.desactivar();
                console.log(data);
                ServiceStore.setUltimaCharlaInscrita(data.data.data);
                $location.path('public/detalle-inscripcion/' + vm.param.call + '/' + vm.param.dr + '/' + vm.param.id);
            });

        } else {
            console.log('Error debe completar todos los campos');
        }


    }
    vm.cancelarInscripcion = cancelarInscripcion;

    function cancelarInscripcion(id) {
        ServiceStore.deleteUltimaCharlaInscrita(id);
        $location.path('public/charlas/listado/' + vm.param.dr);
    }

    vm.callCharla(vm.param.dr, vm.param.id);


    vm.url_captcha = 'https://zeus.sii.cl/cvc_cgi/stc/CViewCaptcha.cgi?oper=1&txtCaptcha=VAZxN0lEUUMdxSEkyMDE3MTEwMzE3NTMxNFhONFB3dnR0B3ZjMjIyMnNLUWR2NVVFdTVNMDBjYm5rtyuRMXlXLlFVSnZMakJtYkhCMFozRnNMZz09cDlheVBwUmkxZC3=';
    vm.regenerate = function(){
      vm.captcha = "";
      vm.url_captcha = '';
      vm.url_captcha = 'https://zeus.sii.cl/cvc_cgi/stc/CViewCaptcha.cgi?oper=1&txtCaptcha=VAZxN0lEUUMxSEkyMDE3MTEwMzE3NTMxNFhONFB3dnR0B3ZjMjIyMnNLUWR2NVVFdTVNMDBjYm5rtyuRMXlXLlFVSnZMakJtYkhCMFozRnNMZz09cDlheVBwUmkxZC3=';
      vm.apply;
    }
}

angular.module('sistemaCharlas')
  .controller('FormularioInscripcion',FormularioInscripcion);

Index.$inject = ['ServiceUsuario','$location','FactoryLoader'];
function Index(ServiceUsuario,$location,FactoryLoader){
  var vm = this;

  vm.createUsuario = createUsuario;
  function createUsuario(type){
    vm.usuario = {
      'role' : type,
      'id' : 1,
      'rut' : '16.751.256-9',
      'nombre' : 'Claudio Rojas R.'
    };
    ServiceUsuario.setData(vm.usuario);
  }


  vm.login = login;
  function login(type){
    vm.createUsuario(type);
    $location.path(type);
    console.log(type);
  }
}

angular.module('sistemaCharlas')
  .controller('Index',Index);

ListaCharla.$inject = ['$scope','ServiceHTTP','ServiceStore','$location','$routeParams','FactoryLoader'];
function ListaCharla($scope,ServiceHTTP,ServiceStore,$location,$routeParams,FactoryLoader){

  var vm = this;
  vm.data = {};
  vm.param = {};
  vm.param.type = $routeParams.type;
  vm.param.dr = $routeParams.dr;


    function getCharlas(){
      function resultOK(data){
        FactoryLoader.desactivar();
        vm.data.charlas = data.data;
      }
      function resultNOK(err){
        FactoryLoader.desactivar();
        console.log(err);
      }
      ServiceHTTP.getCharlas(vm.param.dr,'Cargando listado de actividades...')
        .success(function(data) {
            resultOK(data);
        })
        .error(function(err) {
            resultNOK(err);
        });
    }
    getCharlas();


    vm.bread_charla = [
      { text : 'Charlas', class : 'active', href : '' }
    ];

    var getUltimaCharlaInscritaId = ServiceStore.getUltimaCharlaInscrita() ? ServiceStore.getUltimaCharlaInscrita().id : '';
    vm.compareCharlas = function(id){
      return id == getUltimaCharlaInscritaId ? 'bg-info' : '';
    }
    vm.charlaInscribir = charlaInscribir;
    function charlaInscribir(objCharla){

        $location.path('public/formulario-de-inscripcion/listado/' + vm.param.dr + '/'+objCharla.id);
/*


      console.log(objCharla);
*/
        }

}

angular.module('sistemaCharlas')
  .controller('ListaCharla',ListaCharla);

Main.$inject = ['ServiceUsuario'];
function Main(ServiceUsuario){

  var vm = this;
  vm.data = {};
  vm.usuario = ServiceUsuario.getData();
  //TODO eliminar autocreate usuario


}

angular.module('sistemaCharlas')
  .controller('Main',Main);




Perfil.$inject = ['ServiceHTTP'];
function Perfil(ServiceHTTP){

  var vm = this;
  vm.data = {};
  vm.data.charlas = ServiceHTTP.getCharlaPorId(1);

}

angular.module('sistemaCharlas')
  .controller('Perfil',Perfil);
