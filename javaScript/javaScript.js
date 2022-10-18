var oldScrollY = window.scrollY;
window.onscroll=function(e){
    const menu = document.getElementById("navBar");
    if (window.scrollY==0){
        menu.style.display='block';
    } else {
        menu.style.display='none';
    }
    oldScrollY = window.scrollY;
}