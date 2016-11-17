# APP Sistema Charlas UI
## Rutas Publicas

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
solo ingresa a esta vista si previamente se consulto en ***Actividad por DR***
>**host/namespace**/#/public/actividad/confirmado/**:dr**/**:id_actividad**

## Rutas Privadas (Intranet)

### Admin Regional

#### Potal (Home)
>**host/namespace**/#/admin/

#### Activida Nueva
>**host/namespace**/#/admin/actividad/nueva

#### Catálogo de Actividades
>**host/namespace**/#/admin/actividad/activa/listado

#### Ver/Editar Actividad
>**host/namespace**/#/admin/actividad/activa/listado/editar/**:id_Actividad**

#### Catálogo de Actividades Incativas
>**host/namespace**/#/admin/actividad/inactiva/listado

#### Ver/Editar Incativa
>**host/namespace**/#/admin/actividad/inactiva/listado/editar/**:id_Actividad**

### Admin Local
#### Programar Actividad
>**host/namespace**/#/admin/actividad-programada/nueva

#### Actividades Programadas Activas
>**host/namespace**/#/admin/actividad-programada/activa/listado

#### Actividades Programadas Suspendidas
>**host/namespace**/#/admin/actividad-programada/asuspendida/listado

#### Actividades Programadas Completadas
>**host/namespace**/#/admin/actividad-programada/completada/listado


#### Actividades Programadas Activas Ver
>**host/namespace**/#/admin/actividad-programada/activa/ver/**:id_actividad_programada**

#### Actividades Programadas Suspendidas Ver
>**host/namespace**/#/admin/actividad-programada/asuspendida/ver/**:id_actividad_programada**

#### Actividades Programadas Completadas Ver
>**host/namespace**/#/admin/actividad-programada/completada/ver/**:id_actividad_programada**


### Funcionario Monitor

#### Listado de Actividades Programadas Asignadas
>**host/namespace**/#/monitor/actividad/activa/listado/**:user_type**

#### Listado de Actividades Programadas Asignadas Ver

>**host/namespace**/#/monitor/actividad/activa/ver/**:user_type**/**:id_actividad**

#### Listado de Actividades Programadas Asignadas Completadas
>**host/namespace**/#/monitor/actividad/completada/listado/**:user_type**

#### Listado de Actividades Programadas Asignadas Completadas Ver

>**host/namespace**/#/monitor/actividad/completada/ver/**:user_type**/**:id_actividad**

####  asd
