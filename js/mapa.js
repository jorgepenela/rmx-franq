mapaCompleto = document.getElementById('mapaCompleto');
const areas = document.querySelectorAll('area');
const map = document.getElementById('map');
const cerrar = document.querySelectorAll('.cerrar');  

const aim = document.querySelectorAll('.aim');
window.addEventListener('load',function(){
  map.scrollLeft = 171;
  map.scrollTop = 327;

})  

// disparo evento al ingresar en una provincia
for(const area of areas){
  area.addEventListener('click',function(e){
    // alert("hacer algo con "+area.dataset.city);

    const activo = area.dataset.city;
    const activoId = 'aim-'+activo;    
    const aimActivo = document.getElementById(activoId);
    
    cerrarBox();
      
    aimActivo.style.display= "block";
    
  })
}

for(const cer of cerrar){
  cer.addEventListener('click',function(){
    cerrarBox();
  })
}

for(const ai of aim){
  ai.addEventListener('click',function(){
    cerrarBox();
  })
}

function cerrarBox(){
  for(const ai of aim){
    ai.style.display = "none";              
  }  
}
