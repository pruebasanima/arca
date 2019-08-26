$(document).ready(function(){
    $(".wrapper_flag_recaudacion").click(function(){
        $(".wrapper_flag_recaudacion").addClass("animated fadeOutRight");
        $(".wrapper_img_recaudacion").removeClass("d-none fadeOutRight");
        $(".wrapper_img_recaudacion").addClass("animated fadeInRight");
    });

    $(".wrapper_img_recaudacion").click(function(){
        $(".wrapper_flag_recaudacion").removeClass("fadeOutRight");
        $(".wrapper_img_recaudacion").addClass("fadeOutRight");
        $(".wrapper_flag_recaudacion").addClass("fadeInRight");
    });
  });