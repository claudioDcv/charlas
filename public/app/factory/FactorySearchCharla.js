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
