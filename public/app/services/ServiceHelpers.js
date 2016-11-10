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
