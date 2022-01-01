var arrow=document.getElementsByClassName('arrow');
var slide=document.getElementById("slide");
arrow[0].onclick=function(){
slide.style.transform='translateX(0px)';
}
arrow[1].onclick=function(){
    slide.style.transform='translateX(-1000px)';
}
arrow[2].onclick=function(){
    slide.style.transform='translateX(-1800px)';
}