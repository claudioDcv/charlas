angular.module('sistemaCharlas')
  .service('ServiceStore',ServiceStore);


  function ServiceStore(store) {
    return {
      setUltimaCharlaInscrita : setUltimaCharlaInscrita,
      getUltimaCharlaInscrita : getUltimaCharlaInscrita,
      deleteUltimaCharlaInscrita : deleteUltimaCharlaInscrita
    };

    //Private
    function setUltimaCharlaInscrita(objCharla){
      store.set('sistemaCharlas.ultimaCharlaInscrita',objCharla);
    }
    function getUltimaCharlaInscrita(){
      return store.get('sistemaCharlas.ultimaCharlaInscrita');
    }
    function deleteUltimaCharlaInscrita(){
      store.remove('sistemaCharlas.ultimaCharlaInscrita');
    }
  }
