$(document).ready(function(){
    $(".wrapper_flag_recaudacion").click(function(){
        $(".wrapper_img_recaudacion").removeClass("d-none");
        $(".wrapper_flag_recaudacion").addClass("d-none");
    });

    $(".wrapper_img_recaudacion").click(function(){
        $(".wrapper_flag_recaudacion").removeClass("d-none");
        $(".wrapper_img_recaudacion").addClass("d-none");
    });
  });