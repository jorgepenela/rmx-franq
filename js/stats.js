const altoOfi2005 = document.querySelector('#altoOfi2005');
const cantOfi2005 = document.querySelector('#cantOfi2005');
const altoOfi2010 = document.querySelector('#altoOfi2010');
const cantOfi2010 = document.querySelector('#cantOfi2010');
const altoOfi2015 = document.querySelector('#altoOfi2015');
const cantOfi2015 = document.querySelector('#cantOfi2015');
const altoOfi2018 = document.querySelector('#altoOfi2018');
const cantOfi2018 = document.querySelector('#cantOfi2018');
const altoOfi2021 = document.querySelector('#altoOfi2021');
const cantOfi2021 = document.querySelector('#cantOfi2021');
let j = 0;


// Con esta funcion elevamos el numero del contador 
var myFunc01 = function(max, destino) {
  var i = 0;
  // store the interval id to clear in future
  var intr = setInterval(function() {
    destino.innerHTML = i;
    // clear the interval if `i` reached 100
    if (++i == max+1) {
      clearInterval(intr);
    }
    
  }, 15)

}

function estadisticas(){
    altoOfi2005.style.height = '5px';
    altoOfi2010.style.height = '40px';
    altoOfi2015.style.height = '120px';
    altoOfi2018.style.height = '170px';
    altoOfi2021.style.height = '200px';
    myFunc01(3, cantOfi2005);
    myFunc01(28, cantOfi2010);
    myFunc01(86, cantOfi2015);
    myFunc01(133, cantOfi2018);
    myFunc01(150, cantOfi2021);
}

window.addEventListener('scroll',function(){
  
  if(window.pageYOffset > 400){
    j = j+1;
    
    if(j< 3){
      estadisticas()
    }
    
  }
}, false)  

