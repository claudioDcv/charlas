(function () {
  'use strict'

  angular
    .module('sistemaCharlas')
    .directive('modalCancelCharla', ModalCancelCharla);

  ModalCancelCharla.$inject = ['ServiceHTTP','$location','$timeout'];
  function ModalCancelCharla (ServiceHTTP,$location,$timeout) {
    return {
      restrict: 'E',
      scope: {
        idc: '@',
        'tema' : '@',
      },
      templateUrl: './app/directives/DirectiveModal/DirectiveModal.html',
      link: function ($scope, element, attrs) {

              $scope.cancelarInscripcionAction = function(){
                $('#modal-cancel-charla-' + $scope.idc).modal('hide');

                var result = ServiceHTTP.delInscripcion($scope.idc);

                $timeout(function () {
                  $location.path('public');
                }, 500);
              }
              /*
              element.on('click', function () {
                console.log($scope.idc);
                  element.css('background-color', 'red');
              });
              element.on('mouseenter', function () {
                  element.css('background-color', 'yellow');
              });
              element.on('mouseleave', function () {
                  element.css('background-color', 'white');
              });
              */
          }
    }
  }

})();
/*

@: vinculación en un solo sentido, al crearse el ámbito de la directiva el valor de esta propiedad se asigna al nuevo ámbito de tal forma que las modificaciones dentro de la directiva no afectan al ámbito del padre pero sí a la contra. El valor de la propiedad debe ser evaluada {{}} en la declaración del atributo.
=: vinculación en ambos sentidos, espera que el valor de la propiedad sea una referencia al modelo, no una expresión evaluable como en el caso anterior. La vinculación se hace en ambos sentidos de tal forma que las modificaciones tanto fuera como dentro de la directiva del modelo afectan a ambos.
&: vinculación de métodos que permite invocar desde la directiva a métodos declarados en el ámbito del padre


var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';

  $scope.items = [
    {"src":"http://t3.gstatic.com/images?q=tbn:ANd9GcR1Kp2JmcnxhBOf66aN_JqMWl3h_okOQKFX_kEqwr9mRe5iPomy", "alt":"image 001"},
    {"src":"http://t3.gstatic.com/images?q=tbn:ANd9GcQAoT9UmjmunwFTAA19_n1auOFR_JG017_TUru-E91T7nIH8HyU", "alt":"image 002"},
    {"src":"http://t2.gstatic.com/images?q=tbn:ANd9GcTfntbVv3pl5wFCe6IdkaMVrme_Au9TD8Z_xE95Ezv6jz8oK4nT", "alt":"image 003"},
    {"src":"http://t1.gstatic.com/images?q=tbn:ANd9GcSAOralDJGSVtfirbHG5VdFqG8fTqXMh7C4Xd_aHCy176SKNQqK", "alt":"image 004"},
    {"src":"http://fc08.deviantart.net/fs70/f/2012/122/0/c/landscape_wallpaper_by_nickchoubg-d4yaep3.png", "alt":"image 005"},
  ];

});

app.directive('thumbnail', [function() {
  return {
    restrict: 'CA',
    replace: false,
    transclude: false,
    scope: {
            index: '=index',
            item: '=itemdata'
    },
    template: '<a href="#"><img src="{{item.src}}" alt="{{item.alt}}" /></a>',
    link: function(scope, elem, attrs) {

    if (parseInt(scope.index)==0) {
      angular.element(attrs.options).css({'background-image':'url('+ scope.item.src +')'});
    }

      elem.bind('click', function() {

        var src = elem.find('img').attr('src');

        // call your SmoothZoom here
        angular.element(attrs.options).css({'background-image':'url('+ scope.item.src +')'});
      });
    }
  }
}]);
*/
