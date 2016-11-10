angular.module('sistemaCharlas')
  .service('ServiceUsuario',ServiceUsuario);

  function ServiceUsuario(store) {
    return {
      setData : setData,
      getData : getData,
      deleteData : deleteData
    };

    //Private
    function setData(usuario){
      console.log(usuario);
      store.set('usuario',usuario);
    }
    function getData(){
      return store.get('usuario');
    }
    function deleteData(){
      store.remove('usuario');
    }
  }
