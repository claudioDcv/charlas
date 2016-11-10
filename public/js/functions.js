$(document).ready(function() {
	/////////////////////////////////////////////////////////
  //traer menu por ajax/json

    var menu1 = new Array("Mi Sii", "Servicios online", "Ayuda", "Contacto");

    var menu2 = [];
    menu2[0] = [];
    menu2[1] = [
      "Inicio de actividades",
      "Modificaciones, Permisos y Notificación Electrónica",
      "Timbraje de Documentos",
      "Factura Electrónica",
      "Boleta de prestación de servicios de terceros",
      "Libros contables",
      "Impuestos mensuales",
      "Declaraciones juradas",
      "Renta",
      "Peticiones Administrativas",
      "Término de giro",
      "Información Tasación de Vehículos",
      "Situación Tributaria"
    ];
    menu2[2] = [];
    menu2[3] = [
      "Chat online",
      "Orientación y reclamos",
      "Sugerencias",
      "Denuncias sobre evasión",
      "Mesa de Ayuda"
    ];
    var menu3 = [];
    menu3[0] = [];
    menu3[1] = [];
    menu3[2] = [];
    menu3[3] = [];
    menu3[4] = [];
    menu3[5] = [];
    menu3[6] = new Array(
      "Declaraciones mensuales (F29 y F50)",
      "Consulta y seguimiento a declaraciones (F29 y F50)",
      "Solicitud Devolución IVA Exportador (F3600)",
      "Importador de Libros de Compras y Ventas",
      "Otras aplicaciones",
      "Información y ayuda (F29, F50 y F3600)"
    );
    menu3[7] = [];
    menu3[8] = [];
    menu3[9] = [];
    menu3[10] = [];
    menu3[11] = [];
    menu3[12] = [];
    menu3[13] = [];


    var menustring = ('<ul>');
    for(var i=0; i< menu1.length; i++){

      if(menu2[i].length >0){

        menustring = menustring + ('<li><span>'+menu1[i]);
        menustring = menustring + ('</span>');
        menustring = menustring + ('<ul>');
        for(c=0; c< menu2[i].length; c++){

          if(menu3[c].length > 0){
            menustring = menustring + ('<li><span>'+menu2[i][c]);
            menustring = menustring + ('</span>');
            menustring = menustring + ('<ul>');
            for(d=0; d< menu3[c].length; d++){
              menustring = menustring + ('<li><a href="#">'+menu3[c][d]);
              menustring = menustring + ('</a></li>');
            }
            menustring = menustring + ('</ul>');
          }else{
            menustring = menustring + ('<li><a href="#">'+menu2[i][c]);
            menustring = menustring + ('</a>');
          }
          menustring = menustring + ('</li>');
        }
        menustring = menustring + ('</ul>');

      }else{
        menustring = menustring + ('<li><a href="#">'+menu1[i]);
        menustring = menustring + ('</a>');
      }
      menustring = menustring + ('</li>');
    }
    menustring = menustring + ('</ul>');

    //alert(menustring);
    if(menu1.length===i){
      $("#my-menu").html(menustring);
      $("#my-menu").mmenu({
         // Options
         "navbars": [
                  {
                     "position": "top",
                     "content": [
                        "searchfield"
                     ]
                  },
              {
                     "position": "bottom",
                     "content": [
                        "<a data-target='#mm-0' href='#mm-0' class='mm-next mm-fullsubopen'><i class='fa fa-home' aria-hidden='true'></i> Inicio</a> <a href='#' id='closeMenu'><i class='fa fa-sign-out fa-flip-horizontal' aria-hidden='true'></i> Cerrar</a>"
                     ]
                  }
               ]
        }, {
         // configuration
         offCanvas: {
            pageSelector: "#my-wrapper"
         }
        });
        var API = $("#my-menu").data( "mmenu" );
        $("#abrirMenu").click(function() {
          API.open();
        });

        $("#closeMenu").click(function() {
         API.close();
        });

        $(".header").click(function() {
          API.close();
        });
        $('#my-menu').data('mmenu').bind('opened', function () {
        $('#abrirMenu').html("<i class='fa fa-sign-out fa-flip-horizontal' aria-hidden='true'></i>");
        });
        $('#my-menu').data('mmenu').bind('close', function () {
        $('#abrirMenu').html('<span class="sr-only">Mostrar menu</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span>');
      });
    }

  /////////////////////////////////////////////////////////


	  // FLECHAS
	  $(".arrow-click").click(function() {
		 $(this).find("span").toggleClass("glyphicon-menu-down");
		 $(this).find("span").toggleClass("glyphicon-menu-up");
	  });

      $(".acordeon .arrow-click").click(function() {
		 $temp = "#"+$(this).parent().parent().parent().parent().attr("id")+" span";
         $($temp).attr("class","glyphicon pull-right glyphicon-menu-down");
         if ($(this).hasClass("collapsed")) {
		  $(this).find("span").attr("class","glyphicon pull-right glyphicon-menu-up");
         } else {
          $(this).find("span").attr("class","glyphicon pull-right glyphicon-menu-down");
         }
	  });


      // CARRUSEL MOVIL
	  // getbootstrap.com
	  if ($("#carousel")) {
		  $("#carousel").swiperight(function() {
			$(this).carousel('prev');
		  });
		  $("#carousel").swipeleft(function() {
			$(this).carousel('next');
		   });
	  }


	  // CARRUSEL BANNERS
	  // http://kenwheeler.github.io/slick/
	  if ($('.multiple-items').length) {
		  $('.multiple-items').slick({
			  infinite: true,
			  lazyLoad: 'ondemand',
			  slidesToShow: 6,
			  slidesToScroll: 2,
			  autoplay: true,
			  autoplaySpeed: 2500,
			  responsive: [
				{
				  breakpoint: 1280,
				  settings: {
					slidesToShow: 5,
					slidesToScroll: 2,
					infinite: true
				  }
				},
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 4,
					slidesToScroll: 2
				  }
				},
				{
				  breakpoint: 768,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				  }
				},
				{
				  breakpoint: 500,
				  settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				  }
				}
		  ]
			});
	  }


	  // TABLAS
    if ($('.table-pagination').length) {
        $('.table-pagination').DataTable( {
            "columnDefs": [ {
                orderable: false,
                className: 'select-checkbox',
                targets: 0
            } ],
            "select": {
                style: 'multi',
                selector: 'td:first-child'
            },
            "paging": true,
            "ordering": true,
            "searching": true,
            "language": {
                "paginate": {
                    "first":      "Inicio",
                    "last":       "Fin",
                    "next":       "Siguiente",
                    "previous":   "Anterior"
                },
                "select": {
                    rows: {
                        _: "(%d filas seleccionadas)",
                        1: "(1 fila seleccionada)"
                    }
                },
                "search": "Buscador",
                "lengthMenu": "Mostrar _MENU_ elementos por página",
                "zeroRecords": "No se encontraron resultados",
                "info": "Página _PAGE_ de _PAGES_",
                "infoEmpty": "No se encontraron resultados",
                "infoFiltered": "(filtrados de un total de _MAX_ resultados)",
                "decimal":        "",
                "emptyTable":     "No se encontraron resultados",
                "infoPostFix":    "",
                "thousands":      ",",
                "loadingRecords": "Cargando...",
                "processing":     "Procesando...",
                "aria": {
                    "sortAscending":  ": Activar para ordenar ascendentemente",
                    "sortDescending": ": Activar para ordenar descendentemente"
                }
            },
            "order": [[ 1, 'asc' ]],
        } );
    }

    if ($('.table-scroll').length) {
        $('.table-scroll').DataTable( {
            "columnDefs": [ {
                orderable: false,
                className: 'select-checkbox',
                targets: 0
            } ],
            "select": {
                style: 'multi',
                selector: 'td:first-child'
            },
            "scrollY": "400px",
              "scrollCollapse": true,
              "paging": false,
            "ordering": true,
            "searching": true,
            "language": {
                "paginate": {
                    "first":      "Inicio",
                    "last":       "Fin",
                    "next":       "Siguiente",
                    "previous":   "Anterior"
                },
                "select": {
                    rows: {
                        _: "(%d filas seleccionadas)",
                        1: "(1 fila seleccionada)"
                    }
                },
                "search": "Buscador",
                "lengthMenu": "Mostrar _MENU_ elementos por página",
                "zeroRecords": "No se encontraron resultados",
                "info": "",
                "infoEmpty": "No se encontraron resultados",
                "infoFiltered": "(filtrados de un total de _MAX_ resultados)",
                "decimal":        "",
                "emptyTable":     "No se encontraron resultados",
                "infoPostFix":    "",
                "thousands":      ",",
                "loadingRecords": "Cargando...",
                "processing":     "Procesando...",
                "aria": {
                    "sortAscending":  ": Activar para ordenar ascendentemente",
                    "sortDescending": ": Activar para ordenar descendentemente"
                }
            },
            "order": [[ 1, 'asc' ]],
        } );
    }

    // POPOVERS
    $('[data-toggle="popover"]').popover();

    // TOOLTIP
    $('[data-toggle="tooltip"]').tooltip();

    /////////////////////////////////////////////////////////
    //agregar funcion del menu toggle
    var loc = window.location;
    var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 1);
    var url_absoluta = loc.href.substring(0, loc.href.length - ((loc.pathname + loc.search + loc.hash).length - pathName.length));

    var url_actual = loc.toString().split(url_absoluta);

    switch(url_actual[1]){
      case 'interior.html' : $("#item1").toggle(); break;
    }
    ///////////////////////////////////////////////////////// CLAUDIO.DCV //////.DS_Store$(function() {

});
