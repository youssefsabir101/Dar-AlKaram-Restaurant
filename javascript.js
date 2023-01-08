var btntop=document.getElementById("topbtn");
window.onscroll=function(){
    if(document.documentElement.scrollTop>500){
        btntop.style.display="block";
    }
    else{
        btntop.style.display="none";
    }
}

btntop.addEventListener("click",function(){
    window.scroll({
        top:0,
        left:0,
        behavior:'smooth'
    });
});