$(document).ready(function(){
  $(".btn_openNav").click(function(){
    $(".sidenav").css("width", "210px");
  });
  
  $(".btn_closeNav").click(function(){
    $(".sidenav").css("width", "0px");
  });
});