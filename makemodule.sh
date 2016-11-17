#!/bin/sh

make_folder(){
  #$1 nombre del directorio
  mkdir "./$1"
  echo "directorio: ./$1 creado"
}

content_js(){
  cat <<EOF >$1
// $2.js
(function() {
  'use strict';

  $2.\$inject = [];
  function $2(){
    var vm = this;

  }
})();
EOF
}
content_js_module(){
  #$1 ruta
  #$2 nombre modulo
  #$3 scope
  cat <<EOF >$1
// $2.module.js
(function() {
  'use strict';

  angular.module('$3')
    .controller('$2',$2);
})();
EOF
}

make_html(){
  #$1 ruta
  #$2 nombre modulo
  #$3 scope
  cat <<EOF >$1
<!-- CUERPO de app $3 controller $2-->
<div class="web-sii cuerpo app-$3 module-$2">
  <div class="container">

  </div>
</div>
<!-- FIN CUERPO -->
EOF
}

make_module(){
  #$1 nombre del directorio
  #$2 ruta
  mkdir "$2/$1"
  touch "$2/$1/$1.html"
  touch "$2/$1/$1.js"
  touch "$2/$1/$1.module.js"

  content_js "$2/$1/$1.js" $1
  content_js_module "$2/$1/$1.module.js" $1 $3
  make_html "$2/$1/$1.html" $1 $3
  echo "Modulo: ./$2/$1 creado"
}






control=0
name="no-name"
ruta="./"
scope="sistemaCharlas"
while [ $control -ne 3 ]; do
        echo "Seleccione Opción"
        echo "1 Crear directorio"
        echo "2 Crear Modulo"
        echo "3 salir"
        read control

        case $control in
          1 )
          echo "Ingrese nombre de directorio: "
          read name
          make_folder $name
            ;;
          2 )
          echo "modulo ruta app: "
          read name ruta scope



          make_module $name $ruta $scope
            ;;
          3 )
          echo "Saliendo..."
            ;;
        esac

done
