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
