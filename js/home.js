jQuery(document).ready(function ($) {
    var pageURL = $(location).attr("href");
    var pathArray = pageURL.replace("http://", "").split('/');
    var newPathname = "";

    if (pageURL.indexOf("localhost:") > 0 || pageURL.indexOf("edwinmqr2018-001-site1.ctempurl.com")>0)
    {
        newPathname = "http://" + pathArray[0]
    }
    else{
    for (i = 0; i < 2; i++) {
        newPathname += pathArray[i];
        newPathname += "/";
    }
        newPathname = "http://" + newPathname.substring(0, newPathname.length - 1)
    }

    console.log(newPathname);

    $('#slider1').tinycarousel({
        interval: false,
        bullets: true,
        animationTime: 250,
    });

    $('#slider2').tinycarousel({
        interval: true,
        bullets: true,
        intervalTime: 5000,
        animationTime: 200
    });
    $('#slider3').tinycarousel({
        interval: true,
        bullets: false,
        animationTime: 3000,
        infinite: true,
        intervalTime: 3000
    });


    $('#ce1').click(function ($) {
        location.href = newPathname + "/Comoestamos";
    });
    $('#ce2').click(function ($) {
        location.href = newPathname + "/Comoestamos/IndicadoresCobertura";
    });
    $('#ce3').click(function ($) {
        location.href = newPathname + "/Comoestamos/IndicadoresProgramasSociales";
    });

    $('#qq1').click(function ($) {
        location.href = newPathname + "/Quequeremos";
    });
    $('#qq2').click(function ($) {
        location.href = newPathname + "/Quequeremos/MetasCobertura";
    });


    $('#ppo1').click(function ($) {
        location.href = newPathname + "/Quehacemos";
    });

    $('#ppo2').click(function ($) {
        location.href = newPathname + "/Quehacemos/PactoNacionalRegional";
    });

    $('#ppo3').click(function ($) {
        location.href = newPathname + "/Quehacemos/Estrategias";
    });

    $('#ppo4').click(function ($) {
        location.href = newPathname + "/Quehacemos/PlanesSectoriales";
    });

    $('#ppo5').click(function ($) {
        location.href = newPathname + "/Quehacemos/MatrizCias";
    });

    $('#ppo7').click(function ($) {
        location.href = newPathname + "/Quehacemos/IndicadoresSectoriales";
    });

    $('#ppo9').click(function ($) {
        location.href = newPathname + "/Quehacemos/IndicadoresSectoriales";
    });

    $('#ppo6').click(function ($) {
        location.href = newPathname + "/Quehacemos/MatrizPcm";
    });


    $('#qeh1').click(function ($) {
        location.href = newPathname + "/Quehacemos/PactoNacionalRegional";
    });

    $('#qeh2').click(function ($) {
        location.href = newPathname + "/Quehacemos/ProgramasSocialesPresupuestales";
    });

    $('#qeh3').click(function ($) {
        location.href = newPathname + "/Quehacemos/MecanismosIncentivos";
    });

    $('#qeh4').click(function ($) {
        location.href = newPathname + "/Quehacemos/ProyectosMejora";
    });

    $('#qeh5').click(function ($) {
        location.href = newPathname + "/Quehacemos/IncidenciaDesarrollo";
    });

    $('#qeh6').click(function ($) {
        location.href = newPathname + "/Quehacemos/ReporteMetas";
    });

});
