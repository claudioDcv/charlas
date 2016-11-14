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
            next:'glyphicon glyphicon-arrow-right',
            previous:'glyphicon glyphicon-arrow-left',
            up:'glyphicon glyphicon-arrow-up',
            down:'glyphicon glyphicon-arrow-down'
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
