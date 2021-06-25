var x = window.matchMedia("(max-width: 950px)");

function insertBr(){

    if (x.matches) { // If media query matches
        document.getElementById('brScript').innerHTML = '<br>';
    } else {
        document.getElementById('brScript').innerHTML = '';
    }
     
}


// Register event listener
x.addListener(insertBr);

// Initial check
insertBr(x);