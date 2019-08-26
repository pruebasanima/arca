$(document).ready(function(){
  $(".btn_openNav").click(function(){
    openNav();
  });
  
  $(".btn_closeNav").click(function(){
    closeNav();
  });

  $("#myOverlay").click(function(){
    closeNav();
  });

  function openNav() {
    $(".sidenav").removeClass("fadeOutLeft");
    $(".sidenav").css("width", "210px");
    $(".sidenav").addClass("animated fadeInLeft");
    $("#myOverlay").css("display", "block");
  }
  
  function closeNav() {
    $(".sidenav").removeClass("fadeInLeft");
    $(".sidenav").addClass("animated fadeOutLeft");
    $("#myOverlay").css("display", "none");
  }

});