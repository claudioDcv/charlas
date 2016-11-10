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
        templateUrl: CONST.MODULE_PATH + 'CharlaPorCodigo/CharlaPorCodigo.html',
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
            templateUrl: CONST.MODULE_PATH + 'FormularioInscripcion/FormularioInscripcion.html',
            controller: 'FormularioInscripcion',
            controllerAs: 'vm'
        })
    .when('/public/detalle-inscripcion/:call/:dr/:id', {
        templateUrl: CONST.MODULE_PATH + 'CodigoConfirmacion/CodigoConfirmacion.html',
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
                    templateUrl: CONST.MODULE_PATH_ADMIN + 'AdminActAcad/AdminActAcad.html',
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
                        templateUrl: CONST.MODULE_PATH_ADMIN + 'AdminActExplorar/AdminActExplorar.html',
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
                        templateUrl: CONST.MODULE_PATH_ADMIN + 'AdminActExplorarHistorial/AdminActExplorarHistorial.html',
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
                          templateUrl: CONST.MODULE_PATH_ADMIN + 'AdminActVer/AdminActVer.html',
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
            templateUrl: CONST.MODULE_PATH_ADMIN_LOCAL + 'AdminLocalIndex/AdminLocalIndex.html',
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
            templateUrl: CONST.MODULE_PATH_ADMIN_LOCAL + 'AdminLocalCharlaExplora/AdminLocalCharlaExplora.html',
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
                templateUrl: CONST.MODULE_PATH_ADMIN_LOCAL + 'AdminActExplorar/AdminActExplorar.html',
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
                templateUrl: CONST.MODULE_PATH_ADMIN_LOCAL + 'AdminActExplorarHistorial/AdminActExplorarHistorial.html',
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
                  templateUrl: CONST.MODULE_PATH_ADMIN_LOCAL + 'AdminActVer/AdminActVer.html',
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
            templateUrl: CONST.MODULE_PATH_ADMIN_LOCAL + 'AdminLocalCharlaCreate/AdminLocalCharlaCreate.html',
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
            templateUrl: CONST.MODULE_PATH_ADMIN_LOCAL + 'AdminLocalCharlaVer/AdminLocalCharlaVer.html',
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
            templateUrl: CONST.MODULE_PATH_ADMIN_LOCAL + 'AdminLocalActAcadExplora/AdminLocalActAcadExplora.html',
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
            templateUrl: CONST.MODULE_PATH_MONITOR + 'MonitorCharla/MonitorCharla.html',
            controller: 'MonitorCharla',
            controllerAs: 'vm',
            resolve: {
                access: function(FactorySecure) {
                    FactorySecure.control('monitor').then(
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

        .when('/monitor/historial', {
            templateUrl: CONST.MODULE_PATH_MONITOR + 'MonitorCharlaHistorial/MonitorCharlaHistorial.html',
            controller: 'MonitorCharlaHistorial',
            controllerAs: 'vm',
            resolve: {
                access: function(FactorySecure) {
                    FactorySecure.control('monitor').then(
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

        .when('/monitor/charlas/evaluacion/:id', {
            templateUrl: CONST.MODULE_PATH_MONITOR + 'MonitorEvaluacion/MonitorEvaluacion.html',
            controller: 'MonitorEvaluacion',
            controllerAs: 'vm',
            resolve: {
                access: function(FactorySecure) {
                    FactorySecure.control('monitor').then(
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

    .when('/monitor/formulario-de-inscripcion/:call/:dr/:id', {
        templateUrl: CONST.MODULE_PATH_MONITOR + 'FormularioInscripcionMonitor/FormularioInscripcionMonitor.html',
        controller: 'FormularioInscripcionMonitor',
        controllerAs: 'vm',
        resolve: {
            access: function(FactorySecure) {
                FactorySecure.control('monitor').then(
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


    .when('/monitor/detalle-inscripcion/:call/:dr/:id', {
        templateUrl: CONST.MODULE_PATH_MONITOR + 'CodigoConfirmacionMonitor/CodigoConfirmacionMonitor.html',
        controller: 'CodigoConfirmacionMonitor',
        controllerAs: 'vm',
        resolve: {
            access: function(FactorySecure) {
                FactorySecure.control('monitor').then(
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
