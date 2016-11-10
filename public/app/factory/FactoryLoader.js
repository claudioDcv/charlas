// some.factory.js
angular
    .module('sistemaCharlas')
    .factory('FactoryLoader', FactoryLoader);

FactoryLoader.$inject = [];
function FactoryLoader() {

  var wrap = document.getElementById('my-wrapper');
  var container = document.createElement('div');
      container.className = 'sistema-charlas-loader sistema-charlas-loader-hide';
  this.subContainer = document.createElement('div');
  var block = document.createElement('div');

  var p = document.createElement('p');
  this.txt = document.createTextNode('');
  this.img = document.createElement('img');
  this.img.src = './images/ajax-loader.gif';

  p.appendChild(this.txt);

  block.appendChild(this.img);
  block.appendChild(p);

  this.subContainer.appendChild(block);
  container.appendChild(this.subContainer);
  wrap.appendChild(container);

  function deleteChild(myNode){
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
    return myNode;
  }

  function crearContenidoLoader(message){
    deleteChild(p);
    this.txt = document.createTextNode(message);
    p.appendChild(this.txt);
    block.appendChild(p);
  }

  return {

    activa: false,

    activar: function(message) {
      var message = message || '';
      if (this.activa) {
        console.log('Loader ya se encuentra activo');
      }else{
        crearContenidoLoader(message);
        this.activa = true;
        container.className = 'sistema-charlas-loader sistema-charlas-loader-show';
      }

    },
    desactivar: function() {
      crearContenidoLoader();
      this.activa = false;
      container.className = 'sistema-charlas-loader sistema-charlas-loader-hide';
    }
  };
}
