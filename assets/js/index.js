var sliders=[
  "/assets/imagenes/slider/scrum-proyectos-ti.png",
  "/assets/imagenes/slider/scrum-2.png",
  "/assets/imagenes/slider/scrum-3.jpg"
]
var current_slider=0;
var inter=-1;


$(document).ready(function(){
  $('#arrow-left').click(function () {
    before();
  });
    $('#arrow-right').click(function () {
        next();
      });
    $("#slider").hover(function(){
      console.log("hover");
      if(inter!=-1) return;
      inter = setInterval(function(){
        console.log("ejecuto hover");
        next();
      },2000);
      console.log(inter);
     });
  $("#slider").mouseleave(function(){
    console.log("salio del slider");
    window.clearInterval(inter);
    inter=-1;
  });
});
function next() {
  current_slider=(current_slider+1)%sliders.length;
  $('#slider').attr("src",sliders[current_slider]);
  console.log('next');
}
function before() {
  current_slider=(current_slider-1+sliders.length)%sliders.length;
  $('#slider').attr("src",sliders[current_slider]);
  console.log("before");
}
