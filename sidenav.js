var zmienna = 0;

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("all").setAttribute("onclick", "allClose()");
}
  
/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("all").removeAttribute("onclick");
} 

function allClose(){
  zmienna++;
  if(zmienna == 2){
    zmienna = 0;
    closeNav();
  }
  
}