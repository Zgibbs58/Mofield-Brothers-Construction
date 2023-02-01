function changeBg(){
    var navbar = document.getElementById('navbar');
    var scrollValue = window.scrollY;
    if(scrollValue > 75){
        navbar.classList.add('navbarTransition');
        
    } else {
        navbar.classList.remove('navbarTransition');
        
    }
}
window.addEventListener('scroll', changeBg);


const navItem = document.getElementsByClassName('nav-link')

for(var i = 0; i < navItem.length; i++) {
  (function(index) {
    navItem[index].addEventListener("click", function() {
        setTimeout(function () {
            closeBtn.click()
        }, 500)
     })
  })(i);
}


