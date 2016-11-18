#!/bin/sh

make_folder(){
  #$1 nombre del directorio
  mkdir "./$1"
  echo "creado  directorio:   $1"
}

content_js(){
  cat <<EOF >$1
// $2.js
'use strict';

function $2(){
  var vm = this;
      vm.data = {};
}
$2.\$inject = [];
EOF
}
content_js_module(){
  #$1 ruta
  #$2 nombre modulo
  #$3 scope
  cat <<EOF >$1
// $2.module.js
'use strict';
angular.module('$3').controller('$2',$2);
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
  echo "creado  Modulo:   $2/$1"
}


control=2
name="no-name"
ruta="./"
scope="sistemaCharlas"
nombreApp=""

echo "Nombre App"
read nombreApp

#while [ $control -ne 3 ]; do
        ##echo "Seleccione Opción"
        ##echo "1 Crear directorio"
        ##echo "2 Crear Modulo"
        ##echo "3 salir"
        ##read control

        #case $control in
          #1 )
          #echo "Ingrese nombre de directorio: "
          #read name
          #make_folder $name
          #  ;;
          ## CREACION DE CARPETAS
          archivo="./modules_seed/a"
          #Read file by line
          while IFS='' read -r line || [[ -n "$line" ]]; do
              make_folder $line
          done < "$archivo"

          #2 )
          #echo "Nombre Archivo"
          #read archivo
          archivo="./modules_seed/b"
          #Read file by line
          while IFS='' read -r line || [[ -n "$line" ]]; do
              make_module $line $nombreApp
          done < "$archivo"
          #make_module $name $ruta $nombreApp
          #  ;;
          #3 )
          echo "Saliendo..."
          #  ;;
        #esac

#done
