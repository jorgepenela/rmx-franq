//document.querySelector('body').classList.add('loading');

window.addEventListener('load',listo());

function listo(){
  
  setTimeout( 
    function(){
      document.querySelector('body').classList.remove('loading')
    }    
    ,500)
}


  

