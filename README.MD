# APP Sistema Charlas UI
## Rutas Publicas (Internet)

### Participante
#### Inicio
>**host/namespace**/#/public/

#### Cancelar Inscripción u Obtener Certificado
>**host/namespace**/#/public/actividad/consultar

#### Ver Actividad Participante
>**host/namespace**/#/public/actividad/ver

#### Lista Actividades Disponibles
>**host/namespace**/#/public/actividad/listado

#### Listado Actividades por DR
>**host/namespace**/#/public/actividad/listado/**:dr**

#### Actividad por DR Ver
>**host/namespace**/#/public/actividad/listado/**:dr**/**:id_actividad**

#### Actividad por DR Ver Resultado Inscripción
solo ingresa a esta vista si el parametro ```codigo_actividad``` existe
>**host/namespace**/#/public/actividad/confirmado/**:dr**/**:id_actividad**

## Rutas Privadas (Intranet)

### Admin Regional

#### Potal (Home)
>**host/namespace**/#/admin/

#### Actividad Nueva
>**host/namespace**/#/admin/actividad/nueva

#### Catálogo de Actividades
>**host/namespace**/#/admin/actividad/activa/listado

#### Ver/Editar Actividad
>**host/namespace**/#/admin/actividad/activa/listado/editar/**:id_actividad**

#### Catálogo de Actividades Incativas
>**host/namespace**/#/admin/actividad/inactiva/listado

#### Ver/Editar Incativa
>**host/namespace**/#/admin/actividad/inactiva/listado/editar/**:id_actividad**

### Admin Local

#### Catálogo de Actividades
>**host/namespace**/#/admin-local/actividad/listado

#### Catálogo de Actividades Ver
>**host/namespace**/#/admin-local/actividad/ver/**:id_actividad**

#### Programar Actividad
>**host/namespace**/#/admin-local/actividad-programada/nueva

#### Actividades Programadas Activas
>**host/namespace**/#/admin-local/actividad-programada/activa/listado

#### Actividades Programadas Suspendidas
>**host/namespace**/#/admin-local/actividad-programada/suspendida/listado

#### Actividades Programadas Completadas
>**host/namespace**/#/admin-local/actividad-programada/completada/listado


#### Actividades Programadas Activas Ver
>**host/namespace**/#/admin-local/actividad-programada/activa/ver/**:id_actividad_programada**

#### Actividades Programadas Suspendidas Ver
>**host/namespace**/#/admin-local/actividad-programada/suspendida/ver/**:id_actividad_programada**

#### Actividades Programadas Completadas Ver
>**host/namespace**/#/admin-local/actividad-programada/completada/ver/**:id_actividad_programada**


### Funcionario Monitor

#### Listado de Actividades Programadas Asignadas
>**host/namespace**/#/monitor/actividad/activa/listado/**:user_type**

#### Listado de Actividades Programadas Asignadas Ver

>**host/namespace**/#/monitor/actividad/activa/ver/**:user_type**/**:id_actividad**

#### Listado de Actividades Programadas Asignadas Completadas
>**host/namespace**/#/monitor/actividad/completada/listado/**:user_type**

#### Listado de Actividades Programadas Asignadas Completadas Ver

>**host/namespace**/#/monitor/actividad/completada/ver/**:user_type**/**:id_actividad**


## Listado Rutas JS
```javascript
angular.module('sistemaCharlas')

.config(function($routeProvider) {
  //$locationProvider.html5Mode(true);

  //Rutas Publicas (Internet)
  $routeProvider
  /* Inicio */
    .when('/public/', {
      templateUrl: 'comun/partial/public/Index/Index.html',
      controller: 'Index',
      controllerAs: 'vm'
    })
    /* Cancelar Inscripción u Obtener Certificado */
    .when('//public/actividad/consultar', {
      templateUrl: 'comun/partial/public/ActividadConsultar/ActividadConsultar.html',
      controller: 'ActividadConsultar',
      controllerAs: 'vm'
    })
    /* Ver Actividad Participante */
    .when('/public/actividad/ver', {
      templateUrl: 'comun/partial/public/ActividadVer/ActividadVer.html',
      controller: 'ActividadVer',
      controllerAs: 'vm'
    })
    /* Lista Actividades Disponibles */
    .when('/actividad/listado', {
      templateUrl: 'comun/partial/public/ActividadListado/ActividadListado.html',
      controller: 'ActividadListado',
      controllerAs: 'vm'
    })
    /* Listado Actividades por DR */
    .when('/public/actividad/listado/:dr', {
      templateUrl: 'comun/partial/public/ActividadListadoDR/ActividadListadoDR.html',
      controller: 'ActividadListadoDR',
      controllerAs: 'vm'
    })
    /* Actividad por DR Ver */
    .when('/public/actividad/listado/:dr/:id_actividad', {
      templateUrl: 'comun/partial/public/ActividadPorDRVer/ActividadPorDRVer.html',
      controller: 'ActividadPorDRVer',
      controllerAs: 'vm'
    })
    /* Actividad por DR Ver Resultado Inscripción
     ** solo ingresa a esta vista si el parametro codigo_actividad existe */
    .when('/public/actividad/confirmado/:dr/:id_actividad', {
      templateUrl: 'comun/partial/public/ActividadPorDRResultado/ActividadPorDRResultado.html',
      controller: 'ActividadPorDRResultado',
      controllerAs: 'vm'
    })
    // Rutas Privadas (Intranet)
    /*** Admin Regional ***/
    /* Potal (Home) */
    .when('/admin', {
      templateUrl: 'comun/partial/admin/AdminIndex/AdminIndex.html',
      controller: 'AdminIndex',
      controllerAs: 'vm'
    })
    /* Actividad Nueva */
    .when('/admin/actividad/nueva', {
      templateUrl: 'comun/partial/admin/ActNueva/ActNueva.html',
      controller: 'ActNueva',
      controllerAs: 'vm'
    })
    /* Catálogo de Actividades */
    .when('/admin/actividad/activa/listado', {
      templateUrl: 'comun/partial/admin/ActCatalogo/ActCatalogo.html',
      controller: 'ActCatalogo',
      controllerAs: 'vm'
    })
    /* Ver/Editar Actividad */
    .when('/admin/actividad/activa/listado/editar/:id_actividad', {
      templateUrl: 'comun/partial/admin/ActEditar/ActEditar.html',
      controller: 'ActEditar',
      controllerAs: 'vm'
    })
    /* Catálogo de Actividades Incativas */
    .when('/admin/actividad/inactiva/listado', {
      templateUrl: 'comun/partial/admin/ActCatalogoInvactiva/ActCatalogoInvactiva.html',
      controller: 'ActCatalogoInvactiva',
      controllerAs: 'vm'
    })
    /* Ver/Editar Actividad Incativas*/
    .when('/admin/actividad/inactiva/listado/editar/:id_actividad', {
      templateUrl: 'comun/partial/admin/ActEditarInactiva/ActEditarInactiva.html',
      controller: 'ActEditarInactiva',
      controllerAs: 'vm'
    })
    /*** Admin Local ***/
    /* Catálogo de Actividades */
    .when('/admin-local/actividad/ver/:id_actividad', {
      templateUrl: 'comun/partial/adminLocal/ActCatalogoLocal/ActCatalogoLocal.html',
      controller: 'ActCatalogoLocal',
      controllerAs: 'vm'
    })
    /* Catálogo de Actividades Ver */
    .when('/admin-local/actividad/ver/:id_actividad', {
      templateUrl: 'comun/partial/adminLocal/ActVerLocal/ActVerLocal.html',
      controller: 'ActVerLocal',
      controllerAs: 'vm'
    })
    /* Programar Actividad */
    .when('/admin-local/actividad-programada/nueva', {
      templateUrl: 'comun/partial/adminLocal/ActProgNueva/ActProgNueva.html',
      controller: 'ActProgNueva',
      controllerAs: 'vm'
    })
    /* Actividades Programadas Activas */
    .when('/admin-local/actividad-programada/activa/listado', {
      templateUrl: 'comun/partial/adminLocal/ActProgActi/ActProgActi.html',
      controller: 'ActProgActi',
      controllerAs: 'vm'
    })
    /* Actividades Programadas Suspendidas */
    .when('/admin-local/actividad-programada/suspendida/listado', {
      templateUrl: 'comun/partial/adminLocal/ActProgSusp/ActProgSusp.html',
      controller: 'ActProgSusp',
      controllerAs: 'vm'
    })
    /* Actividades Programadas Completadas */
    .when('/admin-local/actividad-programada/completada/listado', {
      templateUrl: 'comun/partial/adminLocal/ActProgComp/ActProgComp.html',
      controller: 'ActProgComp',
      controllerAs: 'vm'
    })
    /* Actividades Programadas Activas Ver */
    .when(
      '/admin-local/actividad-programada/activa/ver/:id_actividad_programada', {
        templateUrl: 'comun/partial/adminLocal/ActProgActiVer/ActProgActiVer.html',
        controller: 'ActProgActiVer',
        controllerAs: 'vm'
      })
    /* Actividades Programadas Suspendidas Ver */
    .when(
      '/admin-local/actividad-programada/suspendida/ver/:id_actividad_programada', {
        templateUrl: 'comun/partial/adminLocal/ActProgSuspVer/ActProgSuspVer.html',
        controller: 'ActProgSuspVer',
        controllerAs: 'vm'
      })
    /* Actividades Programadas Completadas Ver */
    .when(
      '/admin-local/actividad-programada/completada/ver/:id_actividad_programada', {
        templateUrl: 'comun/partial/adminLocal/ActProgCompVer/ActProgCompVer.html',
        controller: 'ActProgCompVer',
        controllerAs: 'vm'
      })
    /*** Funcionario Monitor ***/
    /* Listado de Actividades Programadas Asignadas */
    .when(
      '/monitor/actividad/activa/listado/:user_type', {
        templateUrl: 'comun/partial/monitor/ActListadoMonitor/ActListadoMonitor.html',
        controller: 'ActListadoMonitor',
        controllerAs: 'vm'
      })
    /* Listado de Actividades Programadas Asignadas Ver */
    .when(
      '/monitor/actividad/activa/ver/:user_type/:id_actividad', {
        templateUrl: 'comun/partial/monitor/ActVerMonitor/ActVerMonitor.html',
        controller: 'ActVerMonitor',
        controllerAs: 'vm'
      })
    /* Listado de Actividades Programadas Asignadas Completadas */
    .when(
      '/monitor/actividad/completada/listado/:user_type', {
        templateUrl: 'comun/partial/monitor/ActListadoMonitorComp/ActListadoMonitorComp.html',
        controller: 'ActListadoMonitorComp',
        controllerAs: 'vm'
      })
    /* Listado de Actividades Programadas Asignadas Completadas Ver */
    .when(
      '/monitor/actividad/completada/ver/:user_type/:id_actividad', {
        templateUrl: 'comun/partial/monitor/ActVerMonitorComp/ActVerMonitorComp.html',
        controller: 'ActVerMonitorComp',
        controllerAs: 'vm'
      })
    .otherwise({
      redirectTo: '/public/'
    });

});
```
##Crear modules
- ejecutar ```makemodule.sh```  
- elegir opción 2
- agregar nombre ```nombre_modulo ruta nombre_app```

### Nombre de modules
```
AdminIndex ./comun/partial/admin comun
ActNueva ./comun/partial/admin comun
ActCatalogo ./comun/partial/admin comun
ActEditar ./comun/partial/admin comun
ActCatalogoInvactiva ./comun/partial/admin comun
ActEditarInactiva ./comun/partial/admin comun

ActCatalogoLocal ./comun/partial/admin-local comun
ActVerLocal ./comun/partial/admin-local comun
ActProgNueva ./comun/partial/admin-local comun
ActProgActi ./comun/partial/admin-local comun
ActProgSusp ./comun/partial/admin-local comun
ActProgComp ./comun/partial/admin-local comun
ActProgActiVer ./comun/partial/admin-local comun
ActProgSuspVer ./comun/partial/admin-local comun
ActProgCompVer ./comun/partial/admin-local comun

ActListadoMonitor ./comun/partial/monitor comun
ActVerMonitor ./comun/partial/monitor comun
ActListadoMonitorComp ./comun/partial/monitor comun
ActVerMonitorComp ./comun/partial/monitor comun

```
