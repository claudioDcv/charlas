var express = require('express');
var app = express();
var bodyParser = require('body-parser')

var SistemCharlasHelper = function() {

    this.obtainDr = function(dr) {
            switch (dr) {
                case "1":
                    return "DR Metropolitana Norte";
                    break;
                default:
                    return "DR General Ejemplo";
            }
        }
        //Genera codigos aleatorios de una extension determinada
    this.randomString = function(length, chars) {
        var mask = '';
        if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
        if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (chars.indexOf('#') > -1) mask += '0123456789';
        if (chars.indexOf('!') > -1) mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
        if (chars.indexOf(' ') > -1) mask += ' ';
        var result = '';
        for (var i = length; i > 0; --i) result += mask[Math.floor(Math.random() * mask.length)];
        return result;
    }
}
var sistemCharlasHelper = new SistemCharlasHelper();


app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(5000, function() {
    console.log('Iniciado en puerto 5000!');
});

app.use(bodyParser.json())
    //Dummy Services
app.post('/api/public/aceptar-inscripcion-charla', function(req, res) {
    var body = req.body;
    console.log(body.data);
    setTimeout(function() {
        res.json({
            metaData: {
                namespace: 'com.sitema.charlas.ex.messagge.test',
                page: 'TODO',
                coversationId: '12345678901234567890',
                transactionId: '###'
            },
            data: {
                'id': body.data.data.id,
                'codigo': sistemCharlasHelper.randomString(6, '#A'),
                'dr': body.data.data.dr,
                'tema': body.data.data.tema,
                'direccion': 'Dirección Regional Iquique, Tarapacá 470',
                'fecha': new Date().getTime(),
                'tipo': 'Presencial',
                'tipo': 'e-Learning',
                'asistio': true,
                'estado': '2',
                'participante': {
                    'nombre': body.data.nombre,
                    'apellido': body.data.apellido,
                    'email': body.data.email
                }
            }
        });
    }, 500);
});

app.post('/api/public/get-charla-por-id', function(req, res) {
    var id = req.body.data.id;
    var dr = req.body.data.dr;
    var data = {
        metaData: {
            namespace: 'com.sitema.charlas.ex.messagge.test',
            page: 'TODO',
            coversationId: '12345678901234567890',
            transactionId: '###'
        },
        data: {
            'id': sistemCharlasHelper.randomString(4, '#'),
            'dr': sistemCharlasHelper.obtainDr(dr),
            'tema': 'Nuevos Contribuyentes',
            'direccion': 'Dirección Regional Iquique, Tarapacá 470',
            'fecha': new Date().getTime(),
            'fechaFin': new Date().getTime() + 1000000,
            'cupos': 50,
            'asisitentes': 20,
            'estado': '0',
            'monitor': {
                'id': sistemCharlasHelper.randomString(4, '#'),
                'nombre': 'Alicia Bravo'
            }
        }
    };
    setTimeout(function() {
        res.json(data);
    }, 500);
});

app.post('/api/public/get-charla-por-codigo', function(req, res) {
    var codigo = req.body.data.codigo;
    var data;
    switch (codigo) {
        case 'AAA111':
            data = {
                metaData: {
                    namespace: 'com.sitema.charlas.ex.messagge.test',
                    page: 'TODO',
                    coversationId: '12345678901234567890',
                    transactionId: '###'
                },
                data: {
                    'id': 5,
                    'codigo': codigo,
                    'dr': 'Dirección Regional Iquique',
                    'tema': 'Nuevos Contribuyentes',
                    'direccion': 'Dirección Regional Iquique, Tarapacá 470',
                    'fecha': new Date().getTime(),
                    'tipo': 'Presencial',
                    'tipo': 'e-Learning',
                    'asistio': true,
                    'estado': '2'
                }
            };
            break;
        case 'AAA222':
            data = {
                metaData: {
                    namespace: 'com.sitema.charlas.ex.messagge.test',
                    page: 'TODO',
                    coversationId: '12345678901234567890',
                    transactionId: '###'
                },
                data: {
                    'id': 5,
                    'codigo': codigo,
                    'dr': 'Dirección Regional Iquique',
                    'tema': 'Nuevos Contribuyentes',
                    'direccion': 'Dirección Regional Iquique, Tarapacá 470',
                    'fecha': new Date().getTime(),
                    'tipo': 'Presencial',
                    'tipo': 'e-Learning',
                    'asistio': false,
                    'estado': '2'
                }
            };
            break;
        default:
            data = {
                metaData: {
                    namespace: 'com.sitema.charlas.ex.messagge.test',
                    page: 'TODO',
                    coversationId: '12345678901234567890',
                    transactionId: '###'
                },
                data: -1
            }
    }

    setTimeout(function() {
        res.json(data);
    }, 500);
});

app.post('/api/public/get-charlas', function(req, res) {
    var dr = req.body.data.dr;
    var data = {
        metaData: {
            namespace: 'com.sitema.charlas.ex.messagge.test',
            page: 'TODO',
            coversationId: '12345678901234567890',
            transactionId: '###'
        },
        data: {
            'expositor': sistemCharlasHelper.obtainDr(dr),
            'data': [{
                'id': 1,
                'dr': 'Dirección Regional Iquique',
                'tema': 'Nuevos Contribuyentes',
                'direccion': 'Dirección Regional Iquique, Tarapacá 470',
                'fecha': new Date().getTime(),
                'cupos': 40,
                'estado': '0'
            }, {
                'id': 2,
                'dr': 'Dirección Regional Iquique',
                'tema': 'Nuevos Contribuyentes',
                'direccion': 'Dirección Regional Iquique, Tarapacá 470',
                'fecha': new Date().getTime(),
                'cupos': 50,
                'estado': '0'
            }, {
                'id': 3,
                'dr': 'Oficina Alto Hospicio',
                'tema': 'Facturación Electrónica',
                'direccion': 'Dirección Regional Iquique, Tarapacá 470',
                'fecha': new Date().getTime(),
                'cupos': 21,
                'estado': '0'
            }, {
                'id': 4,
                'dr': 'Dirección Regional Iquique',
                'tema': 'Nuevos Contribuyentes',
                'direccion': 'Dirección Regional Iquique, Tarapacá 470',
                'fecha': new Date().getTime(),
                'cupos': 40,
                'estado': '0'
            }, {
                'id': 5,
                'dr': 'Dirección Regional Iquique',
                'tema': 'Nuevos Contribuyentes',
                'direccion': 'Dirección Regional Iquique, Tarapacá 470',
                'fecha': new Date().getTime(),
                'cupos': 40,
                'estado': '0'
            }, {
                'id': 5,
                'dr': 'Dirección Regional Iquique',
                'tema': 'Nuevos Contribuyentes',
                'direccion': 'Dirección Regional Iquique, Tarapacá 470',
                'fecha': new Date().getTime(),
                'cupos': 40,
                'estado': '0'
            }]
        }
    };

    setTimeout(function() {
        res.json(data);
    }, 500);
});
app.post('/api/public/create-nueva-charla', function(req, res) {

    res.json("todo");
});

app.post('/api/monitor/get-charla-por-id', function(req, res) {
    var id = req.body.data.id;
    var dr = req.body.data.dr;
    setTimeout(function() {
        res.json({
            metaData: {
                namespace: 'com.sitema.charlas.ex.messagge.test',
                page: 'TODO',
                coversationId: '12345678901234567890',
                transactionId: '###'
            },
            data: {
                'identificacion': {
                    'id': id,
                    'dr': sistemCharlasHelper.obtainDr(dr),
                    'tema': 'Nuevos Contribuyentes',
                    'direccion': 'Dirección Regional Iquique, Tarapacá 470',
                    'fecha': new Date().getTime(),
                    'cupos': 50,
                    'estado': '0',
                    'rut': '12345678-9',
                    'nombre': 'Edgardo Andres Torres Tobar'
                },
                listado: [{
                    id: 1,
                    rut: '16751256-9',
                    email: 'aa@aa.cl',
                    fechaNacimiento: '24/05/1988',
                    comuna: 'puente alto',
                    nombre: 'Claudio Rojas R',
                    'codigo': sistemCharlasHelper.randomString(6, '#A'),
                    asistio: true
                }, {
                    id: 2,
                    rut: '11635475-6',
                    email: 'aa@aa.cl',
                    fechaNacimiento: '24/05/1988',
                    comuna: 'puente alto',
                    nombre: 'Patricia Rodriguez Serrano',
                    'codigo': sistemCharlasHelper.randomString(6, '#A'),
                    asistio: false
                }, {
                    id: 1,
                    rut: '9442167-5',
                    email: 'aa@aa.cl',
                    fechaNacimiento: '24/05/1988',
                    comuna: 'puente alto',
                    nombre: 'Jorge Rojas U',
                    'codigo': sistemCharlasHelper.randomString(6, '#A'),
                    asistio: true
                }, {
                    id: 1,
                    rut: '16751256-9',
                    email: 'aa@aa.cl',
                    fechaNacimiento: '24/05/1988',
                    comuna: 'puente alto',
                    nombre: 'Claudio Rojas R',
                    'codigo': sistemCharlasHelper.randomString(6, '#A'),
                    asistio: true
                }, {
                    id: 2,
                    rut: '11635475-6',
                    email: 'aa@aa.cl',
                    fechaNacimiento: '24/05/1988',
                    comuna: 'puente alto',
                    nombre: 'Patricia Rodriguez Serrano',
                    'codigo': sistemCharlasHelper.randomString(6, '#A'),
                    asistio: false
                }, {
                    id: 1,
                    rut: '9442167-5',
                    email: 'aa@aa.cl',
                    fechaNacimiento: '24/05/1988',
                    comuna: 'puente alto',
                    nombre: 'Jorge Rojas U',
                    'codigo': sistemCharlasHelper.randomString(6, '#A'),
                    asistio: false
                }, {
                    id: 1,
                    rut: '16751256-9',
                    email: 'aa@aa.cl',
                    fechaNacimiento: '24/05/1988',
                    comuna: 'puente alto',
                    nombre: 'Claudio Rojas R',
                    'codigo': sistemCharlasHelper.randomString(6, '#A'),
                    asistio: true
                }, {
                    id: 2,
                    rut: '11635475-6',
                    email: 'aa@aa.cl',
                    fechaNacimiento: '24/05/1988',
                    comuna: 'puente alto',
                    nombre: 'Patricia Rodriguez Serrano',
                    'codigo': sistemCharlasHelper.randomString(6, '#A'),
                    asistio: false
                }, {
                    id: 1,
                    rut: '9442167-5',
                    nombre: 'Jorge Rojas U',
                    'codigo': sistemCharlasHelper.randomString(6, '#A'),
                    asistio: true
                }, {
                    id: 1,
                    rut: '16751256-9',
                    email: 'aa@aa.cl',
                    fechaNacimiento: '24/05/1988',
                    comuna: 'puente alto',
                    nombre: 'Claudio Rojas R',
                    'codigo': sistemCharlasHelper.randomString(6, '#A'),
                    asistio: true
                }, {
                    id: 2,
                    rut: '11635475-6',
                    email: 'aa@aa.cl',
                    fechaNacimiento: '24/05/1988',
                    comuna: 'puente alto',
                    nombre: 'Patricia Rodriguez Serrano',
                    'codigo': sistemCharlasHelper.randomString(6, '#A'),
                    asistio: true
                }, {
                    id: 1,
                    rut: '9442167-5',
                    email: 'aa@aa.cl',
                    fechaNacimiento: '24/05/1988',
                    comuna: 'puente alto',
                    nombre: 'Jorge Rojas U',
                    'codigo': sistemCharlasHelper.randomString(6, '#A'),
                    asistio: true
                }]

            }
        });
    }, 500);
});


app.post('/api/monitor/get-charlas-por-monitor-id', function(req, res) {
    var id = req.body.data.id;
    setTimeout(function() {
        var data = {
            metaData: {
                namespace: 'com.sitema.charlas.ex.messagge.test',
                page: 'TODO',
                coversationId: '12345678901234567890',
                transactionId: '###'
            },
            data: [{
                'id': sistemCharlasHelper.randomString(4, '#'),
                'dr': 'Dirección Regional Iquique',
                'tema': 'Nuevos Contribuyentes',
                'direccion': 'Dirección Regional Iquique, Tarapacá 470',
                'fecha': new Date().getTime(),
                'fechaFin': new Date().getTime() + 1000000,
                'cupos': 50,
                'asisitentes': 20,
                'estado': '0',
                'monitorId': id
            }, {
                'id': sistemCharlasHelper.randomString(4, '#'),
                'dr': 'Dirección Regional Iquique',
                'tema': 'Nuevos Contribuyentes',
                'direccion': 'Dirección Regional Iquique, Tarapacá 470',
                'fecha': new Date().getTime(),
                'fechaFin': new Date().getTime() + 1000000,
                'cupos': 50,
                'asisitentes': 20,
                'estado': '0',
                'monitorId': id
            }, {
                'id': sistemCharlasHelper.randomString(4, '#'),
                'dr': 'Dirección Regional Iquique',
                'tema': 'Nuevos Contribuyentes',
                'direccion': 'Dirección Regional Iquique, Tarapacá 470',
                'fecha': new Date().getTime(),
                'fechaFin': new Date().getTime() + 1000000,
                'cupos': 340,
                'asisitentes': 20,
                'estado': '0',
                'monitorId': id
            }, {
                'id': sistemCharlasHelper.randomString(4, '#'),
                'dr': 'Dirección Regional Iquique',
                'tema': 'Nuevos Contribuyentes',
                'direccion': 'Dirección Regional Iquique, Tarapacá 470',
                'fecha': new Date().getTime(),
                'fechaFin': new Date().getTime() + 1000000,
                'cupos': 40,
                'asisitentes': 20,
                'estado': '0',
                'monitorId': id
            }, {
                'id': sistemCharlasHelper.randomString(4, '#'),
                'dr': 'Dirección Regional Iquique',
                'tema': 'Nuevos Contribuyentes',
                'direccion': 'Dirección Regional Iquique, Tarapacá 470',
                'fecha': new Date().getTime(),
                'fechaFin': new Date().getTime() + 1000000,
                'cupos': 45,
                'asisitentes': 43,
                'estado': '0',
                'monitorId': id
            }, {
                'id': sistemCharlasHelper.randomString(4, '#'),
                'dr': 'Dirección Regional Iquique',
                'tema': 'Nuevos Contribuyentes',
                'direccion': 'Dirección Regional Iquique, Tarapacá 470',
                'fecha': new Date().getTime(),
                'fechaFin': new Date().getTime() + 1000000,
                'cupos': 55,
                'asisitentes': 55,
                'estado': '0',
                'monitorId': id
            }, {
                'id': sistemCharlasHelper.randomString(4, '#'),
                'dr': 'Dirección Regional Iquique',
                'tema': 'Nuevos Contribuyentes',
                'direccion': 'Dirección Regional Iquique, Tarapacá 470',
                'fecha': new Date().getTime(),
                'fechaFin': new Date().getTime() + 1000000,
                'cupos': 56,
                'asisitentes': 12,
                'estado': '0',
                'monitorId': id
            }]
        };
        res.json(data);
    }, 500);
});




/**************** ADMIN *******************************************************/
app.post('/api/admin/get-all-actividades', function(req, res) {
    var id = req.body.data.id;
    var data = {
        metaData: {
            namespace: 'com.sitema.charlas.ex.messagge.test',
            page: 'TODO',
            coversationId: '12345678901234567890',
            transactionId: '###'
        },
        data: [{
            'id': sistemCharlasHelper.randomString(4, '#'),
            'descriptor': sistemCharlasHelper.randomString(4, 'a#') + '/' + sistemCharlasHelper.randomString(4, 'a#') + '.pdf',
            'duracion': 138,
            'descripcion': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'nombre_actividad': 'Nombre de actividad',
            'programa': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'destinatario': 'Contribuyentes',
            'modalidad': 'Presencial',
            'objetivo': 'Objetivo de la Actividad',
            'is_activa': true,
            'metodologia': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'tipo_programa': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'idAdmin': id,
            'temario': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.'
        }, {
            'id': sistemCharlasHelper.randomString(4, '#'),
            'descriptor': sistemCharlasHelper.randomString(4, 'a#') + '/' + sistemCharlasHelper.randomString(4, 'a#') + '.pdf',
            'duracion': 138,
            'descripcion': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'nombre_actividad': 'Nombre de actividad',
            'programa': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'destinatario': 'Contribuyentes',
            'modalidad': 'Presencial',
            'objetivo': 'Objetivo de la Actividad',
            'is_activa': true,
            'metodologia': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'tipo_programa': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'idAdmin': id,
            'temario': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.'
        }, {
            'id': sistemCharlasHelper.randomString(4, '#'),
            'descriptor': sistemCharlasHelper.randomString(4, 'a#') + '/' + sistemCharlasHelper.randomString(4, 'a#') + '.pdf',
            'duracion': 138,
            'descripcion': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'nombre_actividad': 'Nombre de actividad',
            'programa': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'destinatario': 'Contribuyentes',
            'modalidad': 'Presencial',
            'objetivo': 'Objetivo de la Actividad',
            'is_activa': true,
            'metodologia': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'tipo_programa': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'idAdmin': id,
            'temario': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.'
        }, {
            'id': sistemCharlasHelper.randomString(4, '#'),
            'descriptor': sistemCharlasHelper.randomString(4, 'a#') + '/' + sistemCharlasHelper.randomString(4, 'a#') + '.pdf',
            'duracion': 138,
            'descripcion': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'nombre_actividad': 'Nombre de actividad',
            'programa': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'destinatario': 'Contribuyentes',
            'modalidad': 'Presencial',
            'objetivo': 'Objetivo de la Actividad',
            'is_activa': true,
            'metodologia': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'tipo_programa': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'idAdmin': id,
            'temario': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.'
        }, {
            'id': sistemCharlasHelper.randomString(4, '#'),
            'descriptor': sistemCharlasHelper.randomString(4, 'a#') + '/' + sistemCharlasHelper.randomString(4, 'a#') + '.pdf',
            'duracion': 138,
            'descripcion': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'nombre_actividad': 'Nombre de actividad',
            'programa': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'destinatario': 'Contribuyentes',
            'modalidad': 'Presencial',
            'objetivo': 'Objetivo de la Actividad',
            'is_activa': true,
            'metodologia': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'tipo_programa': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'idAdmin': id,
            'temario': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.'
        }, {
            'id': sistemCharlasHelper.randomString(4, '#'),
            'descriptor': sistemCharlasHelper.randomString(4, 'a#') + '/' + sistemCharlasHelper.randomString(4, 'a#') + '.pdf',
            'duracion': 138,
            'descripcion': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'nombre_actividad': 'Nombre de actividad',
            'programa': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'destinatario': 'Contribuyentes',
            'modalidad': 'Presencial',
            'objetivo': 'Objetivo de la Actividad',
            'is_activa': true,
            'metodologia': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'tipo_programa': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'idAdmin': id,
            'temario': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.'
        }, {
            'id': sistemCharlasHelper.randomString(4, '#'),
            'descriptor': sistemCharlasHelper.randomString(4, 'a#') + '/' + sistemCharlasHelper.randomString(4, 'a#') + '.pdf',
            'duracion': 138,
            'descripcion': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'nombre_actividad': 'Nombre de actividad',
            'programa': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'destinatario': 'Contribuyentes',
            'modalidad': 'Presencial',
            'objetivo': 'Objetivo de la Actividad',
            'is_activa': true,
            'metodologia': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'tipo_programa': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'idAdmin': id,
            'temario': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.'
        }, {
            'id': sistemCharlasHelper.randomString(4, '#'),
            'descriptor': sistemCharlasHelper.randomString(4, 'a#') + '/' + sistemCharlasHelper.randomString(4, 'a#') + '.pdf',
            'duracion': 138,
            'descripcion': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'nombre_actividad': 'Nombre de actividad',
            'programa': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'destinatario': 'Contribuyentes',
            'modalidad': 'Presencial',
            'objetivo': 'Objetivo de la Actividad',
            'is_activa': true,
            'metodologia': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'tipo_programa': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'idAdmin': id,
            'temario': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.'
        }, {
            'id': sistemCharlasHelper.randomString(4, '#'),
            'descriptor': sistemCharlasHelper.randomString(4, 'a#') + '/' + sistemCharlasHelper.randomString(4, 'a#') + '.pdf',
            'duracion': 138,
            'descripcion': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'nombre_actividad': 'Nombre de actividad',
            'programa': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'destinatario': 'Contribuyentes',
            'modalidad': 'Presencial',
            'objetivo': 'Objetivo de la Actividad',
            'is_activa': true,
            'metodologia': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'tipo_programa': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'idAdmin': id,
            'temario': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.'
        }, {
            'id': sistemCharlasHelper.randomString(4, '#'),
            'descriptor': sistemCharlasHelper.randomString(4, 'a#') + '/' + sistemCharlasHelper.randomString(4, 'a#') + '.pdf',
            'duracion': 138,
            'descripcion': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'nombre_actividad': 'Nombre de actividad',
            'programa': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'destinatario': 'Contribuyentes',
            'modalidad': 'Presencial',
            'objetivo': 'Objetivo de la Actividad',
            'is_activa': true,
            'metodologia': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'tipo_programa': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'idAdmin': id,
            'temario': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.'
        }, {
            'id': sistemCharlasHelper.randomString(4, '#'),
            'descriptor': sistemCharlasHelper.randomString(4, 'a#') + '/' + sistemCharlasHelper.randomString(4, 'a#') + '.pdf',
            'duracion': 138,
            'descripcion': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'nombre_actividad': 'Nombre de actividad',
            'programa': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'destinatario': 'Contribuyentes',
            'modalidad': 'Presencial',
            'objetivo': 'Objetivo de la Actividad',
            'is_activa': true,
            'metodologia': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'tipo_programa': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'idAdmin': id,
            'temario': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.'
        }, {
            'id': sistemCharlasHelper.randomString(4, '#'),
            'descriptor': sistemCharlasHelper.randomString(4, 'a#') + '/' + sistemCharlasHelper.randomString(4, 'a#') + '.pdf',
            'duracion': 138,
            'descripcion': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'nombre_actividad': 'Nombre de actividad',
            'programa': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'destinatario': 'Contribuyentes',
            'modalidad': 'Presencial',
            'objetivo': 'Objetivo de la Actividad',
            'is_activa': true,
            'metodologia': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'tipo_programa': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'idAdmin': id,
            'temario': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.'
        }, {
            'id': sistemCharlasHelper.randomString(4, '#'),
            'descriptor': sistemCharlasHelper.randomString(4, 'a#') + '/' + sistemCharlasHelper.randomString(4, 'a#') + '.pdf',
            'duracion': 138,
            'descripcion': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'nombre_actividad': 'Nombre de actividad',
            'programa': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'destinatario': 'Contribuyentes',
            'modalidad': 'Presencial',
            'objetivo': 'Objetivo de la Actividad',
            'is_activa': true,
            'metodologia': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'tipo_programa': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'idAdmin': id,
            'temario': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.'
        }]
    };
    setTimeout(function() {
        res.json(data);
    }, 500);
});

app.post('/api/admin/get-all-actividades-historicas', function(req, res) {
    var id = req.body.data.id;
    var data = {
        metaData: {
            namespace: 'com.sitema.charlas.ex.messagge.test',
            page: 'TODO',
            coversationId: '12345678901234567890',
            transactionId: '###'
        },
        data: [{
            'id': sistemCharlasHelper.randomString(4, '#'),
            'descriptor': sistemCharlasHelper.randomString(4, 'a#') + '/' + sistemCharlasHelper.randomString(4, 'a#') + '.pdf',
            'duracion': 138,
            'descripcion': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'nombre_actividad': 'Nombre de actividad',
            'programa': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'destinatario': 'Contribuyentes',
            'modalidad': 'Presencial',
            'objetivo': 'Objetivo de la Actividad',
            'is_activa': true,
            'metodologia': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'tipo_programa': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'idAdmin': id,
            'temario': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.'
        }, {
            'id': sistemCharlasHelper.randomString(4, '#'),
            'descriptor': sistemCharlasHelper.randomString(4, 'a#') + '/' + sistemCharlasHelper.randomString(4, 'a#') + '.pdf',
            'duracion': 138,
            'descripcion': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'nombre_actividad': 'Nombre de actividad',
            'programa': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'destinatario': 'Contribuyentes',
            'modalidad': 'Presencial',
            'objetivo': 'Objetivo de la Actividad',
            'is_activa': true,
            'metodologia': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'tipo_programa': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'idAdmin': id,
            'temario': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.'
        }, {
            'id': sistemCharlasHelper.randomString(4, '#'),
            'descriptor': sistemCharlasHelper.randomString(4, 'a#') + '/' + sistemCharlasHelper.randomString(4, 'a#') + '.pdf',
            'duracion': 138,
            'descripcion': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'nombre_actividad': 'Nombre de actividad',
            'programa': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'destinatario': 'Contribuyentes',
            'modalidad': 'Presencial',
            'objetivo': 'Objetivo de la Actividad',
            'is_activa': true,
            'metodologia': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'tipo_programa': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'idAdmin': id,
            'temario': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.'
        }, {
            'id': sistemCharlasHelper.randomString(4, '#'),
            'descriptor': sistemCharlasHelper.randomString(4, 'a#') + '/' + sistemCharlasHelper.randomString(4, 'a#') + '.pdf',
            'duracion': 138,
            'descripcion': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'nombre_actividad': 'Nombre de actividad',
            'programa': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'destinatario': 'Contribuyentes',
            'modalidad': 'Presencial',
            'objetivo': 'Objetivo de la Actividad',
            'is_activa': true,
            'metodologia': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'tipo_programa': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'idAdmin': id,
            'temario': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.'
        }, {
            'id': sistemCharlasHelper.randomString(4, '#'),
            'descriptor': sistemCharlasHelper.randomString(4, 'a#') + '/' + sistemCharlasHelper.randomString(4, 'a#') + '.pdf',
            'duracion': 138,
            'descripcion': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'nombre_actividad': 'Nombre de actividad',
            'programa': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'destinatario': 'Contribuyentes',
            'modalidad': 'Presencial',
            'objetivo': 'Objetivo de la Actividad',
            'is_activa': true,
            'metodologia': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'tipo_programa': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'idAdmin': id,
            'temario': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.'
        }, {
            'id': sistemCharlasHelper.randomString(4, '#'),
            'descriptor': sistemCharlasHelper.randomString(4, 'a#') + '/' + sistemCharlasHelper.randomString(4, 'a#') + '.pdf',
            'duracion': 138,
            'descripcion': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'nombre_actividad': 'Nombre de actividad',
            'programa': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'destinatario': 'Contribuyentes',
            'modalidad': 'Presencial',
            'objetivo': 'Objetivo de la Actividad',
            'is_activa': true,
            'metodologia': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'tipo_programa': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'idAdmin': id,
            'temario': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.'
        }, {
            'id': sistemCharlasHelper.randomString(4, '#'),
            'descriptor': sistemCharlasHelper.randomString(4, 'a#') + '/' + sistemCharlasHelper.randomString(4, 'a#') + '.pdf',
            'duracion': 138,
            'descripcion': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'nombre_actividad': 'Nombre de actividad',
            'programa': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'destinatario': 'Contribuyentes',
            'modalidad': 'Presencial',
            'objetivo': 'Objetivo de la Actividad',
            'is_activa': true,
            'metodologia': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'tipo_programa': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'idAdmin': id,
            'temario': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.'
        }, {
            'id': sistemCharlasHelper.randomString(4, '#'),
            'descriptor': sistemCharlasHelper.randomString(4, 'a#') + '/' + sistemCharlasHelper.randomString(4, 'a#') + '.pdf',
            'duracion': 138,
            'descripcion': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'nombre_actividad': 'Nombre de actividad',
            'programa': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'destinatario': 'Contribuyentes',
            'modalidad': 'Presencial',
            'objetivo': 'Objetivo de la Actividad',
            'is_activa': true,
            'metodologia': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'tipo_programa': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'idAdmin': id,
            'temario': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.'
        }, {
            'id': sistemCharlasHelper.randomString(4, '#'),
            'descriptor': sistemCharlasHelper.randomString(4, 'a#') + '/' + sistemCharlasHelper.randomString(4, 'a#') + '.pdf',
            'duracion': 138,
            'descripcion': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'nombre_actividad': 'Nombre de actividad',
            'programa': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'destinatario': 'Contribuyentes',
            'modalidad': 'Presencial',
            'objetivo': 'Objetivo de la Actividad',
            'is_activa': true,
            'metodologia': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'tipo_programa': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'idAdmin': id,
            'temario': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.'
        }, {
            'id': sistemCharlasHelper.randomString(4, '#'),
            'descriptor': sistemCharlasHelper.randomString(4, 'a#') + '/' + sistemCharlasHelper.randomString(4, 'a#') + '.pdf',
            'duracion': 138,
            'descripcion': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'nombre_actividad': 'Nombre de actividad',
            'programa': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'destinatario': 'Contribuyentes',
            'modalidad': 'Presencial',
            'objetivo': 'Objetivo de la Actividad',
            'is_activa': true,
            'metodologia': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'tipo_programa': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'idAdmin': id,
            'temario': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.'
        }, {
            'id': sistemCharlasHelper.randomString(4, '#'),
            'descriptor': sistemCharlasHelper.randomString(4, 'a#') + '/' + sistemCharlasHelper.randomString(4, 'a#') + '.pdf',
            'duracion': 138,
            'descripcion': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'nombre_actividad': 'Nombre de actividad',
            'programa': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'destinatario': 'Contribuyentes',
            'modalidad': 'Presencial',
            'objetivo': 'Objetivo de la Actividad',
            'is_activa': true,
            'metodologia': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'tipo_programa': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'idAdmin': id,
            'temario': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.'
        }, {
            'id': sistemCharlasHelper.randomString(4, '#'),
            'descriptor': sistemCharlasHelper.randomString(4, 'a#') + '/' + sistemCharlasHelper.randomString(4, 'a#') + '.pdf',
            'duracion': 138,
            'descripcion': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'nombre_actividad': 'Nombre de actividad',
            'programa': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'destinatario': 'Contribuyentes',
            'modalidad': 'Presencial',
            'objetivo': 'Objetivo de la Actividad',
            'is_activa': true,
            'metodologia': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'tipo_programa': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'idAdmin': id,
            'temario': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.'
        }, {
            'id': sistemCharlasHelper.randomString(4, '#'),
            'descriptor': sistemCharlasHelper.randomString(4, 'a#') + '/' + sistemCharlasHelper.randomString(4, 'a#') + '.pdf',
            'duracion': 138,
            'descripcion': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'nombre_actividad': 'Nombre de actividad',
            'programa': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'destinatario': 'Contribuyentes',
            'modalidad': 'Presencial',
            'objetivo': 'Objetivo de la Actividad',
            'is_activa': true,
            'metodologia': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'tipo_programa': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.',
            'idAdmin': id,
            'temario': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem nesciunt doloribus saepe optio iure exercitationem ut velit, aut voluptatem quibusdam in est modi vitae dolore illum temporibus.'
        }]
    };
    setTimeout(function() {
        res.json(data);
    }, 500);
});


////////////////////////////////////////////////////////////////////////////////
app.post('/api/admin/actividad-get', function(req, res) {
    var body = req.body;
    console.log(body.data);
    setTimeout(function() {
        res.json({
            metaData: {
                namespace: 'com.sitema.charlas.ex.messagge.test',
                page: 'TODO',
                coversationId: '12345678901234567890',
                transactionId: '###'
            },
            data: {
              "id" : body.data.id,
              "duracion": 122,
              "temario": sistemCharlasHelper.randomString(50, 'Aa# '),
              "tipo_programa": sistemCharlasHelper.randomString(50, 'Aa# '),
              "metodologia": sistemCharlasHelper.randomString(900, 'Aa# '),
              "activa": false,
              "objetivo": sistemCharlasHelper.randomString(50, 'Aa#'),
              "modalidad": '1',
              "documento": Math.random() >= 0.5 ? '' : 'http://www.google.cl',
              "destinatario": sistemCharlasHelper.randomString(50, 'Aa#'),
              "programa": sistemCharlasHelper.randomString(50, 'Aa#'),
              "descripcion": sistemCharlasHelper.randomString(50, 'Aa#'),
              "nombre": sistemCharlasHelper.randomString(50, 'Aa#')
                }
        });
    }, 500);
});

app.post('/api/admin/actividad-create', function(req, res) {
    var body = req.body;
    console.log(body.data);
    setTimeout(function() {
        res.json({
            metaData: {
                namespace: 'com.sitema.charlas.ex.messagge.test',
                page: 'TODO',
                coversationId: '12345678901234567890',
                transactionId: '###'
            },
            data: {
                'id': sistemCharlasHelper.randomString(4, '#'),
                "duracion": sistemCharlasHelper.randomString(3, '#'),
                "temario": sistemCharlasHelper.randomString(50, 'Aa#'),
                "tipo_programa": 1,
                "metodologia": sistemCharlasHelper.randomString(50, 'Aa#'),
                "activa": false,
                "objetivo": sistemCharlasHelper.randomString(50, 'Aa#'),
                "modalidad": sistemCharlasHelper.randomString(50, 'Aa#'),
                "destinatario": sistemCharlasHelper.randomString(50, 'Aa#'),
                "programa": sistemCharlasHelper.randomString(50, 'Aa#'),
                "descripcion": sistemCharlasHelper.randomString(50, 'Aa#'),
                "nombre": sistemCharlasHelper.randomString(50, 'Aa#')
                }
        });
    }, 500);
});

app.post('/api/admin/actividad-edit', function(req, res) {
    var body = req.body;
    console.log(body.data);
    setTimeout(function() {
        res.json({
            metaData: {
                namespace: 'com.sitema.charlas.ex.messagge.test',
                page: 'TODO',
                coversationId: '12345678901234567890',
                transactionId: '###'
            },
            data: {
                "id" : body.id,
                "duracion": sistemCharlasHelper.randomString(3, '#'),
                "temario": sistemCharlasHelper.randomString(50, 'Aa#'),
                "tipo_programa": 1,
                "metodologia": sistemCharlasHelper.randomString(50, 'Aa#'),
                "activa": false,
                "objetivo": sistemCharlasHelper.randomString(50, 'Aa#'),
                "modalidad": sistemCharlasHelper.randomString(50, 'Aa#'),
                "destinatario": sistemCharlasHelper.randomString(50, 'Aa#'),
                "programa": sistemCharlasHelper.randomString(50, 'Aa#'),
                "descripcion": sistemCharlasHelper.randomString(50, 'Aa#'),
                "nombre": sistemCharlasHelper.randomString(50, 'Aa#')
                }
        });
    }, 500);
});

app.post('/api/admin/actividad-delete', function(req, res) {
    var body = req.body;
    console.log(body.data);
    setTimeout(function() {
        res.json({
            metaData: {
                namespace: 'com.sitema.charlas.ex.messagge.test',
                page: 'TODO',
                coversationId: '12345678901234567890',
                transactionId: '###'
            },
            data: {
                "id" : body.id,
                "duracion": sistemCharlasHelper.randomString(3, '#'),
                "temario": sistemCharlasHelper.randomString(50, 'Aa#'),
                "tipo_programa": 1,
                "metodologia": sistemCharlasHelper.randomString(50, 'Aa#'),
                "activa": false,
                "objetivo": sistemCharlasHelper.randomString(50, 'Aa#'),
                "modalidad": sistemCharlasHelper.randomString(50, 'Aa#'),
                "destinatario": sistemCharlasHelper.randomString(50, 'Aa#'),
                "programa": sistemCharlasHelper.randomString(50, 'Aa#'),
                "descripcion": sistemCharlasHelper.randomString(50, 'Aa#'),
                "nombre": sistemCharlasHelper.randomString(50, 'Aa#')
                }
        });
    }, 500);
});
