const steps = document.querySelector('#steps');
const formTitle = document.querySelector('#formTitle');
const filled = document.querySelector('.filled');
const step1 = document.querySelector('#step1');
const setp2 = document.querySelector('#step2');
const setp3 = document.querySelector('#step3');

const botones = document.querySelectorAll('#form button');


// Pasar de secciones ----------------------------------------
for(const boton of botones){
    boton.addEventListener('click', function(e){
   
        // console.log(e.target.id)

        if(e.target.id=='continuar1'){
            e.preventDefault();
                    
            const ciudad = document.querySelector('#ciudad');
            if (ciudad.value == "" || ciudad.value == null || ciudad.value==undefined) {
                ciudad.style.background = '#ffe2e2';
                document.querySelector('#ciudades label').innerText = 'Ciudad / Área / Barrio* - Obligatorio';        
            } else {            
                ciudad.style.background = '#fff';
                document.querySelector('#ciudades label').innerText = 'Ciudad / Área / Barrio*';

                pasar('Paso 2/3','Contanos sobre vos',50,step2);
            }        
            
        }
        
        else if(e.target.id=='continuar2'){
            e.preventDefault();
            pasar('Paso 3/3','Pongámonos en contacto',90,step3);
        }

        else if(e.target.id=='volver2'){
            e.preventDefault();
            pasar('Paso 1/3','¿Dónde abrirías tu oficina RE/MAX?',5,step1);
            
        }
        else if(e.target.id=='volver3'){
            e.preventDefault();
            pasar('Paso 2/3','Contanos sobre vos',50,step2);
        }
        
    })
}
/*
document.getElementById('continuar3').addEventListener('click',function(){
    document.getElementById('formulario').submit();
})
*/

function pasar(paso, titulo, relleno, mostrar){
    steps.innerText = paso;
    formTitle.innerText = titulo;
    filled.style.width = relleno+'%'; 
    step1.style.display ='none';step2.style.display ='none';step3.style.display ='none';
    mostrar.style.display='block';

    window.location.href = "#form";
}

// STEP 1 ----------------------------------------------------------
// selecciono pais, activo provincias
const pais = document.querySelector('#pais');
const provincia = document.querySelector('#provincia')

pais.addEventListener('change', function(){
    document.querySelector('#provincias').style.display = "block";

    cargarProvincias();
})

// Cargo provincias segun pais seleccionado.  
const provArg = '<option disabled selected value> Elegir Provincia </option><option value="gba">Buenos Aires</option><option value="caba">Capital Federal</option><option value="catamarca">Catamarca</option><option value="chaco">Chaco</option><option value="chubut">Chubut</option><option value="cordoba">Córdoba</option><option value="corrientes">Corrientes</option><option value="entreRios">Entre Ríos</option><option value="formosa">Formosa</option><option value="jujuy">Jujuy</option><option value="laPampa">La Pampa</option><option value="laRioja">La Rioja</option><option value="mendoza">Mendoza</option><option value="misiones">Misiones</option><option value="neuquen">Neuquén</option><option value="rioNegro">Río Negro</option><option value="salta">Salta</option><option value="sanJuan">San Juan</option><option value="sanLuis">San Luis</option><option value="santaCruz">Santa Cruz</option><option value="santaFe">Santa Fe</option><option value="santiagoDelEstero">Santiago del Estero</option><option value="tierraDelFuego">Tierra del Fuego</option><option value="tucuman">Tucumán</option>';
const provUru = '<option disabled selected value> Elegir Departamento </option><option value="artigas">Artigas</option><option value="canelones">Canelones</option><option value="cerroLargo">Cerro Largo</option><option value="colonia">Colonia</option><option value="durazno">Durazno</option><option value="flores">Flores</option><option value="florida">Florida</option><option value="lavalleja">Lavalleja</option><option value="maldonado">Maldonado</option><option value="montevideo">Montevideo</option><option value="paysandu">Paysandú</option><option value="rioNegro">Río Negro</option><option value="rivera">Rivera</option><option value="rocha">Rocha</option><option value="salto">Salto</option><option value="sanJose">San José</option><option value="soriano">Soriano</option><option value="tacuarembo">Tacuarembó</option><option value="treintaYTres">Treinta y Tres</option>';
const cuantasOficinas = document.querySelector('#cuantasOficinas');

function cargarProvincias(){
    if(pais.value=='argentina'){
        document.querySelector('#provincia').innerHTML = provArg;
        cuantasOficinas.innerHTML='Hay 144 oficinas<br/>RE/MAX en Argentina';

    }else if(pais.value=='uruguay'){
        document.querySelector('#provincia').innerHTML = provUru;
        cuantasOficinas.innerHTML='Hay 6 Oficinas<br/>RE/MAX en Uruguay';
    }
}

provincia.addEventListener('change',function(e){
    //console.log(e.target.value);
    oficinasPorProvincia(e.target.value);
})
// Cambio el mensaje de cantidad de oficnas segun provincia selccionad
function oficinasPorProvincia(provincia){
    if(provincia=='gba'){
            cuantasOficinas.innerHTML= "Hay 44 oficinas<br/>RE/MAX en G.B.A.";
    }else if(provincia=='caba'){
        cuantasOficinas.innerHTML= "Hay 59 oficinas<br/>RE/MAX en C.A.B.A.";
    }
    else if(provincia=='cordoba'){
        cuantasOficinas.innerHTML= "Hay 8 oficinas<br/>RE/MAX en Córdoba.";
    }
    else if(provincia=='jujuy'){
        cuantasOficinas.innerHTML= "Hay 1 oficina<br/>RE/MAX en Jujuy.";
    }
    else if(provincia=='laPampa'){
        cuantasOficinas.innerHTML= "Hay 1 oficina<br/>RE/MAX en La Pampa.";
    }
    else if(provincia=='mendoza'){
        cuantasOficinas.innerHTML= "Hay 3 oficinas<br/>RE/MAX en Mendoza.";
    }
    else if(provincia=='misiones'){
        cuantasOficinas.innerHTML= "Hay 1 oficina<br/>RE/MAX en Misiones.";
    }
    else if(provincia=='neuquen'){
        cuantasOficinas.innerHTML= "Hay 3 oficinas<br/>RE/MAX en Neuquén.";
    }
    else if(provincia=='rioNegro'){
        cuantasOficinas.innerHTML= "Hay 4 oficinas<br/>RE/MAX en Río Negro.";
    }
    else if(provincia=='salta'){
        cuantasOficinas.innerHTML= "Hay 1 oficina<br/>RE/MAX en Salta.";
    }
    else if(provincia=='sanJuan'){
        cuantasOficinas.innerHTML= "Hay 1 oficina<br/>RE/MAX en San Juan.";
    }
    else if(provincia=='santaFe'){
        cuantasOficinas.innerHTML= "Hay 18 oficinas<br/>RE/MAX en Santa Fe.";
    }
    // uruguay
    else if(provincia=='montevideo'){
        cuantasOficinas.innerHTML= "Hay 5 oficinas<br/>RE/MAX en Montevideo";
    }
    else if(provincia=='maldonado'){
        cuantasOficinas.innerHTML= "Hay 1 oficina<br/>RE/MAX en Maldonado.";
    }
    else{
        cuantasOficinas.innerHTML ='¡Bien pensado!<br/>Sería la primera oficina <br/>RE/MAX en la zona.';
    } 
}

// Activo ciudades
document.querySelector('#provincia').addEventListener('change',function(){
    document.querySelector('#ciudades').style.display="block";
})

// STEP 2 ----------------------------------------------------------

const profesion = document.querySelector('#profesion');

profesion.addEventListener('change',function(e){
    if(profesion.value=='otra'){
        document.querySelector('#otraProfesion').className ='';
    }else{
        document.querySelector('#otraProfesion').className ='hidden';
    }
})