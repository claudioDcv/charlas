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
angular.module('comun', ['ui.bootstrap','ui.router','ngRoute','ngAnimate','cl.sii.settings','aaModule']);

angular.module('comun').config(function($stateProvider) {
    /* Inicio */
    $stateProvider.state('public', {
      url: '/public',
      templateUrl: 'comun/partial/public/Index/Index.html',
      controller: 'Index',
      controllerAs: 'vm'
    });
    /* Cancelar Inscripción u Obtener Certificado */
    $stateProvider.state('public.actividad.consultar', {
      url: '/public/actividad/consultar',
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
    /* Add New States Above */

});

// Definiendo el bloque Run, que es lo que ocurre cuando la aplicacin parte
// posterior al app.config() , luego app.run(), directivas, app.controller()
angular.module('comun').run(function($rootScope, SIISettings) {
    SIISettings.load('sdi.lob.ss.sistemacharlas.ui', 'cl.sii.sdi.lob.ss.sistemacharlas.data.impl.SettingsApplicationService/consultarParametros', '/sistemacharlasui/services/data/settingsService/consultarParametros');
});

```
## Crear modules
- ejecutar ```makemodule.sh```  
- elegir opción 2
- agregar nombre ```nombre_modulo ruta nombre_app```

### Nombre de modules
```
Index ./comun/partial/public comun
ActividadConsultar ./comun/partial/public comun
ActividadListado ./comun/partial/public comun
ActividadListadoDR ./comun/partial/public comun
ActividadPorDRResultado ./comun/partial/public comun
ActividadPorDRVer ./comun/partial/public comun
ActividadVer ./comun/partial/public comun

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


### Servicios


#### getCharlasByDr
###### public
```json
  "data": {
    "cod_dr": "<cod_dr(Int)>"
  }
```
```json
{
  "data": [
    {
      "id_charla": "3",
      "id_actividad": "10",
      "direccion": "un lugar",
      "fecha_inicio": "2016-11-07",
      "fecha_termino": "2016-11-07",
      "cupos": "30",
      "cod_dr": "10",
      "cod_comuna": "10",
      "estado": "Activa",
      "rut_monitor": "17365439-1",
      "tema" : "desc del tema"
    },
    {
      "id_charla": "3",
      "id_actividad": "10",
      "direccion": "un lugar",
      "fecha_inicio": "2016-11-07",
      "fecha_termino": "2016-11-07",
      "cupos": "30",
      "cod_dr": "10",
      "cod_comuna": "10",
      "estado": "Activa",
      "rut_monitor": "17365439-1",
      "tema" : "desc del tema"
    }
  ],
  "metaData": {
    "conversationId": "####",
    "transactionId": "1e6141aa-a654-42be-84e1-b559d68d21ab",
    "namespace": "cl.sii.sdi.lob.ss.sistemacharlas.data.api.interfaces.FacadeService/getCharlas",
    "info": null,
    "errors": null,
    "page": null
  }
}
```

#### getCharlaById
###### public
```json
data":{"id":"<id_charla>"}
```
```json
{
  "data": {
      "id_charla": "3",
      "id_actividad": "10",
      "direccion": "un lugar",
      "fecha_inicio": "2016-11-07",
      "fecha_termino": "2016-11-07",
      "cupos": "30",
      "cod_dr": "10",
       "dr": "DR Región Metropolitana",
      "cod_comuna": "10",
      "comuna": "Santiago",
      "estado": "Activa",
      "rut_monitor": "17365439-1",
      "tema" : "desc del tema"
    },
  "metaData": {
    "conversationId": "####",
    "transactionId": "1e6141aa-a654-42be-84e1-b559d68d21ab",
    "namespace": "cl.sii.sdi.lob.ss.sistemacharlas.data.api.interfaces.FacadeService/getCharlas",
    "info": null,
    "errors": null,
    "page": null
  }
}
```

#### createInscripcion
###### public
```json
  "data": {
    "id_charla": 2,
    "rut_participante": "17365439-1",
    "nombre_participante": "Maximiliano",
    "apellido_participante": "Ramirez Mellado",
    "email_participante": "maxramirex@gmail.com",
    "fecha_nacimiento_participante": "1989-19-09",
    "es_activa": true,
    "captcha": {
      "answer": "<respuesta participante>",
      "secret": "base64"
    }
  }
```
```json
{
  "metaData": {
    "conversationId": "####",
    "transactionId": "1e6141aa-a654-42be-84e1-b559d68d21ab",
    "namespace": "cl.sii.sdi.lob.ss.sistemacharlas.data.api.interfaces.FacadeService/createInscripcion",
    "info": null,
    "errors": null,
    "page": null
  },
  "data": {
    "codigo": "PGYC2F",
    "asistencia": false,
    "id_charla": "2",
    "url_certificado": null,
    "rut_participante": "17365439-1",
    "nombre_participante": "Maximiliano",
    "apellido_participante": "Ramirez Mellado",
    "email_participante": "maxramirex@gmail.com",
    "fecha_nacimiento_participante": "1990-07-08",
    "fecha_inscripcion": null,
    "es_activa": true
  }
}
```

#### getInscripcionByCodigo
###### public
```json
"data": {
"id": "JPQAM3",
"captcha": {
      "answer": "<respuesta participante>",
      "secret": "base64"
    }
}
```
```json
{
  "data": {
    "codigo": "JPQAM3",
    "asistencia": false,
    "id_charla": "2",
    "url_certificado": null,
    "rut_participante": "17365439-1",
    "nombre_participante": "Maximiliano",
    "apellido_participante": "Ramirez Mellado",
    "email_participante": "maxramirex@gmail.com",
    "fecha_nacimiento_participante": "1990-07-08",
    "fecha_inscripcion": null,
    "es_activa": true
  },
  "metaData": {
    "conversationId": "####",
    "transactionId": "1e6141aa-a654-42be-84e1-b559d68d21ab",
    "namespace": "cl.sii.sdi.lob.ss.sistemacharlas.data.api.interfaces.FacadeService/getInscripcion",
    "info": null,
    "errors": null,
    "page": null
  }
}
```

#### eliminarInscripcion
###### public
```json
"data": {
"codigo": "JPQAM3",
"captcha": {
      "answer": "<respuesta participante>",
      "secret": "base64"
    }
}
```
```json
{
  "data": {},
  "metaData": {
    "conversationId": "####",
    "transactionId": "1e6141aa-a654-42be-84e1-b559d68d21ab",
    "namespace": "cl.sii.sdi.lob.ss.sistemacharlas.data.api.interfaces.FacadeService/getInscripcion",
    "info": null,
    "errors": null,
    "page": null
  }
}
```

#### getCharlasByMonitor
###### Solo perfil monitor
```json
"data" : {
     "estado": "Activa"
}
```
```json
{
  "data": [
    {
      "id_charla": "3",
      "id_actividad": "10",
      "direccion": "un lugar",
      "fecha_inicio": "2016-11-07",
      "fecha_termino": "2016-11-07",
      "cupos": "30",
      "cod_dr": "10",
      "cod_comuna": "10",
      "estado": "Activa",
      "rut_monitor": "17365439-1",
      "tema" : "desc del tema"
    },
    {
      "id_charla": "3",
      "id_actividad": "10",
      "direccion": "un lugar",
      "fecha_inicio": "2016-11-07",
      "fecha_termino": "2016-11-07",
      "cupos": "30",
      "cod_dr": "10",
      "cod_comuna": "10",
      "estado": "Activa",
      "rut_monitor": "17365439-1",
      "tema" : "desc del tema"
    }
  ],
  "metaData": {
    "conversationId": "####",
    "transactionId": "1e6141aa-a654-42be-84e1-b559d68d21ab",
    "namespace": "cl.sii.sdi.lob.ss.sistemacharlas.data.api.interfaces.FacadeService/getCharlas",
    "info": null,
    "errors": null,
    "page": null
  }
}
```
#### getInscripcionesByCharla
###### Todos los funcionarios
###### retornar solo inscripciones activas
```json
data":{"id":"<id_charla>"}
```
```json
{
  "data": [
    {
      "codigo": "IXTCM5",
      "asistencia": false,
      "id_charla": "2",
      "url_certificado": null,
      "rut_participante": "17365439-1",
      "nombre_participante": "Maximiliano",
      "apellido_participante": "Ramirez Mellado",
      "email_participante": "maxramirex@gmail.com",
      "fecha_nacimiento_participante": "1990-07-08",
      "fecha_inscripcion": null,
      "es_activa": true
    },
    {
      "codigo": "LJ3YU9",
      "asistencia": false,
      "id_charla": "2",
      "url_certificado": null,
      "rut_participante": "17365439-1",
      "nombre_participante": "Maximiliano",
      "apellido_participante": "Ramirez Mellado",
      "email_participante": "maxramirex@gmail.com",
      "fecha_nacimiento_participante": "1990-07-08",
      "fecha_inscripcion": null,
      "es_activa": false
    }
  ],
  "metaData": {
    "conversationId": "####",
    "transactionId": "1e6141aa-a654-42be-84e1-b559d68d21ab",
    "namespace": "cl.sii.sdi.lob.ss.sistemacharlas.data.api.interfaces.FacadeService/getInscripciones",
    "info": null,
    "errors": null,
    "page": null
  }
}
```
#### updateInscripciones
###### Solo monitor
```json
data":[
{
 "codigo":"<codigo>",
 "asistencia":"<true/false>"
},
{
 "codigo":"<codigo>",
 "asistencia":"<true/false>"
},
{
 "codigo":"<codigo>",
 "asistencia":"<true/false>"
}
]
```
```json
{
  "data": {},
  "metaData": {
    "conversationId": "####",
    "transactionId": "1e6141aa-a654-42be-84e1-b559d68d21ab",
    "namespace": "cl.sii.sdi.lob.ss.sistemacharlas.data.api.interfaces.FacadeService/getInscripciones",
    "info": null,
    "errors": null,
    "page": null
  }
}
```

#### updateCharla
###### Solo administrador local
```json
"data":{
      "id_charla": "3",
      "id_actividad": "10",
      "direccion": "un lugar",
      "fecha_inicio": "2016-11-07",
      "fecha_termino": "2016-11-07",
      "cupos": "30",
      "cod_dr": "10",
      "cod_comuna": "10",
      "estado": "<Activa/Suspendida/Cancelada/Cerrada>",
      "rut_monitor": "17365439-1",
      "tema" : "desc del tema"
    }

```
```json
{
  "data": {
      "id_charla": "3"},
      "id_actividad": "10",
      "direccion": "un lugar",
      "fecha_inicio": "2016-11-07",
      "fecha_termino": "2016-11-07",
      "cupos": "30",
      "cod_dr": "10",
      "cod_comuna": "10",
      "estado": "<Activa/Suspendida/Cancelada/Cerrada>",
      "rut_monitor": "17365439-1",
      "tema" : "desc del tema"
   },
  "metaData": {
    "conversationId": "####",
    "transactionId": "1e6141aa-a654-42be-84e1-b559d68d21ab",
    "namespace": "cl.sii.sdi.lob.ss.sistemacharlas.data.api.interfaces.FacadeService/getInscripciones",
    "info": null,
    "errors": null,
    "page": null
  }
}
```

#### getCharlasByEstado
###### Adminitrados central y monitor
```json
data":{
  "estado": "<Activa/Suspendida/Cancelada/Cerrada>"
}
```
```json
{
  "data": {
      "id_charla": "3",
      "id_actividad": "10",
      "direccion": "un lugar",
      "fecha_inicio": "2016-11-07",
      "fecha_termino": "2016-11-07",
      "cupos": "30",
      "cod_dr": "10",
       "dr": "DR Región Metropolitana",
      "cod_comuna": "10",
      "comuna": "Santiago",
      "estado": "Activa",
      "rut_monitor": "17365439-1",
      "tema" : "desc del tema"
    },
  "metaData": {
    "conversationId": "####",
    "transactionId": "1e6141aa-a654-42be-84e1-b559d68d21ab",
    "namespace": "cl.sii.sdi.lob.ss.sistemacharlas.data.api.interfaces.FacadeService/getCharlas",
    "info": null,
    "errors": null,
    "page": null
  }
}
```
#### getActividadesByEstado
###### Administrador local y central
```json
data":{
  "es_activa": "<true/false>"
}
```
```json
{
  "data": [
    {
      "id_actividad": 10,
      "nombre": "ALGO CAMBIO",
      "descripcion": "cambios tributarios para el aÃ±o 2018",
      "url_descriptor": "www.aaa.com/fsfasd",
      "duracion_minutos": 100,
      "es_activa": true,
      "destinatario": "contribuyentes",
      "modalidad": "precencial",
      "objetivo": "plan bla bla",
      "metodologia": "clases con bla bla",
      "tipo_actividad": "charla",
      "temario": "1. fdsafs \n 2.dfsdsafdf",
      "programa": "charlas 2016"
    },
    {
      "id_actividad": 11,
      "nombre": null,
      "descripcion": null,
      "url_descriptor": null,
      "duracion_minutos": null,
      "es_activa": null,
      "destinatario": null,
      "modalidad": null,
      "objetivo": null,
      "metodologia": null,
      "tipo_actividad": null,
      "temario": null,
      "programa": null
    }
  ],
  "metaData": {
    "conversationId": "####",
    "transactionId": "1e6141aa-a654-42be-84e1-b559d68d21ab",
    "namespace": "cl.sii.sdi.lob.ss.sistemacharlas.data.api.interfaces.FacadeService/getActividades",
    "info": null,
    "errors": null,
    "page": null
  }
}
```
#### createCharla
###### Administrador local
```json
{
  "metaData": {
    "namespace": "cl.sii.sdi.lob.ss.sistemacharlas.data.api.interfaces.FacadeService/createCharla",
    "conversationId": "####",
    "transactionId": "1e6141aa-a654-42be-84e1-b559d68d21ab",
    "page": null
  },
  "data": {
    "id_actividad": "10",
    "direccion": "un lugar",
    "fecha_inicio": "2016-11-07T17:00:00Z",
    "fecha_termino": "2016-11-07T22:30:00Z",
    "cupos": 30,
    "cod_dr": 10,
    "cod_comuna": 10,
    "estado": "Activa",
    "rut_monitor": "17365439-1"
  }
}
```
```json
{
  "metaData": {
    "conversationId": "####",
    "transactionId": "1e6141aa-a654-42be-84e1-b559d68d21ab",
    "namespace": "cl.sii.sdi.lob.ss.sistemacharlas.data.api.interfaces.FacadeService/createCharla",
    "info": null,
    "errors": null,
    "page": null
  },
  "data": {
    "id_charla": <id_charla(int)>,
    "id_actividad": "10",
    "direccion": "un lugar",
    "fecha_inicio": "2016-11-07",
    "fecha_termino": "2016-11-07",
    "cupos": "30",
    "cod_dr": "10",
    "cod_comuna": "10",
    "estado": "Activa",
    "rut_monitor": "17365439-1"
  }
}
```

#### createActividadAcademica
###### Administrador central
```json
"data":
    {
      "nombre": "ALGO CAMBIO",
      "descripcion": "cambios tributarios para el aÃ±o 2018",
      "url_descriptor": "www.aaa.com/fsfasd",
      "duracion_minutos": 100,
      "es_activa": true,
      "destinatario": "contribuyentes",
      "modalidad": "precencial",
      "objetivo": "plan bla bla",
      "metodologia": "clases con bla bla",
      "tipo_actividad": "charla",
      "temario": "1. fdsafs \n 2.dfsdsafdf",
      "programa": "charlas 2016"
    }
```
```json
"data":
    {
      "id_actividad": "10",
      "nombre": "ALGO CAMBIO",
      "descripcion": "cambios tributarios para el año 2018",
      "url_descriptor": "www.aaa.com/fsfasd",
      "duracion_minutos": 100,
      "es_activa": true,
      "destinatario": "contribuyentes",
      "modalidad": "precencial",
      "objetivo": "plan bla bla",
      "metodologia": "clases con bla bla",
      "tipo_actividad": "charla",
      "temario": "1. fdsafs \n 2.dfsdsafdf",
      "programa": "charlas 2016"
    }
```
#### uploadActividadAcademicaFile
###### Administrador central
```file [primero generar  upload, luego generar actividad]```
```-Name : docume```nto
```json
{
  "data": {}
  ,
  "metaData": {
    "conversationId": "####",
    "transactionId": "1e6141aa-a654-42be-84e1-b559d68d21ab",
    "namespace": "cl.sii.sdi.lob.ss.sistemacharlas.data.api.interfaces.FacadeService/getInscripcion",
    "info": null,
    "errors": null,
    "page": null
  }
}
```

#### getReporteMensual
###### Adminsitrador central
```json
data":{
  "fecha": "2016-01-01"
}
```

#### generatePDFCertificado
###### public
```json
data":{
  "codigo" : "XD5S4D"
}
```
#### Return File Download

###### getPerfil
###### public
```json
{
  "data": {}
  ,
  "metaData": {
    "conversationId": "####",
    "transactionId": "1e6141aa-a654-42be-84e1-b559d68d21ab",
    "namespace": "cl.sii.sdi.lob.ss.sistemacharlas.data.api.interfaces.FacadeService/getInscripcion",
    "page": null
  }
}
```
```json
 {
 "data": {
"perfil" : "<admin/admin-local/monitor/public>"
}
  ,
  "metaData": {
    "conversationId": "####",
    "transactionId": "1e6141aa-a654-42be-84e1-b559d68d21ab",
    "namespace": "cl.sii.sdi.lob.ss.sistemacharlas.data.api.interfaces.FacadeService/getInscripcion",
    "page": null
  }
}
```
