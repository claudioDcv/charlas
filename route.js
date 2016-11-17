angular.module('sistemaCharlas')

.config(function($routeProvider) {
  //$locationProvider.html5Mode(true);

  //Rutas Publicas (Internet)
  $routeProvider
  /* Inicio */
  $stateProvider.state('/public/', {
    templateUrl: 'comun/partial/public/Index/Index.html',
    controller: 'Index',
    controllerAs: 'vm'
  });
  /* Cancelar Inscripción u Obtener Certificado */
  $stateProvider.state('//public/actividad/consultar', {
    templateUrl: 'comun/partial/public/ActividadConsultar/ActividadConsultar.html',
    controller: 'ActividadConsultar',
    controllerAs: 'vm'
  });
  /* Ver Actividad Participante */
  $stateProvider.state('/public/actividad/ver', {
    templateUrl: 'comun/partial/public/ActividadVer/ActividadVer.html',
    controller: 'ActividadVer',
    controllerAs: 'vm'
  });
  /* Lista Actividades Disponibles */
  $stateProvider.state('/actividad/listado', {
    templateUrl: 'comun/partial/public/ActividadListado/ActividadListado.html',
    controller: 'ActividadListado',
    controllerAs: 'vm'
  });
  /* Listado Actividades por DR */
  $stateProvider.state('/public/actividad/listado/:dr', {
    templateUrl: 'comun/partial/public/ActividadListadoDR/ActividadListadoDR.html',
    controller: 'ActividadListadoDR',
    controllerAs: 'vm'
  });
  /* Actividad por DR Ver */
  $stateProvider.state('/public/actividad/listado/:dr/:id_actividad', {
    templateUrl: 'comun/partial/public/ActividadPorDRVer/ActividadPorDRVer.html',
    controller: 'ActividadPorDRVer',
    controllerAs: 'vm'
  });
  /* Actividad por DR Ver Resultado Inscripción
   ** solo ingresa a esta vista si el parametro codigo_actividad existe */
  $stateProvider.state('/public/actividad/confirmado/:dr/:id_actividad', {
    templateUrl: 'comun/partial/public/ActividadPorDRResultado/ActividadPorDRResultado.html',
    controller: 'ActividadPorDRResultado',
    controllerAs: 'vm'
  });
  // Rutas Privadas (Intranet)
  /*** Admin Regional ***/
  /* Potal (Home) */
  $stateProvider.state('/admin', {
    templateUrl: 'comun/partial/admin/AdminIndex/AdminIndex.html',
    controller: 'AdminIndex',
    controllerAs: 'vm'
  });
  /* Actividad Nueva */
  $stateProvider.state('/admin/actividad/nueva', {
    templateUrl: 'comun/partial/admin/ActNueva/ActNueva.html',
    controller: 'ActNueva',
    controllerAs: 'vm'
  });
  /* Catálogo de Actividades */
  $stateProvider.state('/admin/actividad/activa/listado', {
    templateUrl: 'comun/partial/admin/ActCatalogo/ActCatalogo.html',
    controller: 'ActCatalogo',
    controllerAs: 'vm'
  });
  /* Ver/Editar Actividad */
  $stateProvider.state(
    '/admin/actividad/activa/listado/editar/:id_actividad', {
      templateUrl: 'comun/partial/admin/ActEditar/ActEditar.html',
      controller: 'ActEditar',
      controllerAs: 'vm'
    });
  /* Catálogo de Actividades Incativas */
  $stateProvider.state('/admin/actividad/inactiva/listado', {
    templateUrl: 'comun/partial/admin/ActCatalogoInvactiva/ActCatalogoInvactiva.html',
    controller: 'ActCatalogoInvactiva',
    controllerAs: 'vm'
  });
  /* Ver/Editar Actividad Incativas*/
  $stateProvider.state(
    '/admin/actividad/inactiva/listado/editar/:id_actividad', {
      templateUrl: 'comun/partial/admin/ActEditarInactiva/ActEditarInactiva.html',
      controller: 'ActEditarInactiva',
      controllerAs: 'vm'
    });
  /*** Admin Local ***/
  /* Catálogo de Actividades */
  $stateProvider.state('/admin-local/actividad/listado', {
    templateUrl: 'comun/partial/adminLocal/ActCatalogoLocal/ActCatalogoLocal.html',
    controller: 'ActCatalogoLocal',
    controllerAs: 'vm'
  });
  /* Catálogo de Actividades Ver */
  $stateProvider.state('/admin-local/actividad/ver/:id_actividad', {
    templateUrl: 'comun/partial/adminLocal/ActVerLocal/ActVerLocal.html',
    controller: 'ActVerLocal',
    controllerAs: 'vm'
  });
  /* Programar Actividad */
  $stateProvider.state('/admin-local/actividad-programada/nueva', {
    templateUrl: 'comun/partial/adminLocal/ActProgNueva/ActProgNueva.html',
    controller: 'ActProgNueva',
    controllerAs: 'vm'
  });
  /* Actividades Programadas Activas */
  $stateProvider.state('/admin-local/actividad-programada/activa/listado', {
    templateUrl: 'comun/partial/adminLocal/ActProgActi/ActProgActi.html',
    controller: 'ActProgActi',
    controllerAs: 'vm'
  });
  /* Actividades Programadas Suspendidas */
  $stateProvider.state(
    '/admin-local/actividad-programada/suspendida/listado', {
      templateUrl: 'comun/partial/adminLocal/ActProgSusp/ActProgSusp.html',
      controller: 'ActProgSusp',
      controllerAs: 'vm'
    });
  /* Actividades Programadas Completadas */
  $stateProvider.state(
    '/admin-local/actividad-programada/completada/listado', {
      templateUrl: 'comun/partial/adminLocal/ActProgComp/ActProgComp.html',
      controller: 'ActProgComp',
      controllerAs: 'vm'
    });
  /* Actividades Programadas Activas Ver */
  $stateProvider.state(
    '/admin-local/actividad-programada/activa/ver/:id_actividad_programada', {
      templateUrl: 'comun/partial/adminLocal/ActProgActiVer/ActProgActiVer.html',
      controller: 'ActProgActiVer',
      controllerAs: 'vm'
    });
  /* Actividades Programadas Suspendidas Ver */
  $stateProvider.state(
    '/admin-local/actividad-programada/suspendida/ver/:id_actividad_programada', {
      templateUrl: 'comun/partial/adminLocal/ActProgSuspVer/ActProgSuspVer.html',
      controller: 'ActProgSuspVer',
      controllerAs: 'vm'
    });
  /* Actividades Programadas Completadas Ver */
  $stateProvider.state(
    '/admin-local/actividad-programada/completada/ver/:id_actividad_programada', {
      templateUrl: 'comun/partial/adminLocal/ActProgCompVer/ActProgCompVer.html',
      controller: 'ActProgCompVer',
      controllerAs: 'vm'
    });
  /*** Funcionario Monitor ***/
  /* Listado de Actividades Programadas Asignadas */
  $stateProvider.state(
    '/monitor/actividad/activa/listado/:user_type', {
      templateUrl: 'comun/partial/monitor/ActListadoMonitor/ActListadoMonitor.html',
      controller: 'ActListadoMonitor',
      controllerAs: 'vm'
    });
  /* Listado de Actividades Programadas Asignadas Ver */
  $stateProvider.state(
    '/monitor/actividad/activa/ver/:user_type/:id_actividad', {
      templateUrl: 'comun/partial/monitor/ActVerMonitor/ActVerMonitor.html',
      controller: 'ActVerMonitor',
      controllerAs: 'vm'
    });
  /* Listado de Actividades Programadas Asignadas Completadas */
  $stateProvider.state(
    '/monitor/actividad/completada/listado/:user_type', {
      templateUrl: 'comun/partial/monitor/ActListadoMonitorComp/ActListadoMonitorComp.html',
      controller: 'ActListadoMonitorComp',
      controllerAs: 'vm'
    });
  /* Listado de Actividades Programadas Asignadas Completadas Ver */
  $stateProvider.state(
    '/monitor/actividad/completada/ver/:user_type/:id_actividad', {
      templateUrl: 'comun/partial/monitor/ActVerMonitorComp/ActVerMonitorComp.html',
      controller: 'ActVerMonitorComp',
      controllerAs: 'vm'
    });
  .otherwise({
    redirectTo: '/public/'
  });

});
