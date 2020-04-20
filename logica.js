
        arrayvar1=[];   
        arrayvar2=[];
        arrayvar3=[];
    document.querySelector('#todos').addEventListener('click', function(){
        historial1(arrayvar1); busca(); mostrarhistorial1();
        historial2(arrayvar2);  mostrarhistorial2(); historial3(  arrayvar3); 
        mostrarhistorial3();

        
        
            
            
            });
            
            
///////////////////////////////////////Función que hace todas las busquedas 



            function busca() {
                 var texto1= document.getElementById("busqueda").value;
                console.log(texto1);
                var texto2= document.getElementById("busqueda2").value;
                console.log(texto2);
                var texto3= document.getElementById("busqueda5").value;
                console.log(texto3);
            
         
                
            
        
           
                if (texto1 != '' && texto2 != '' && texto3 != '') {
           
        
        
                let url = `https://restcountries.eu/rest/v2/all`
                const api = new XMLHttpRequest();
                api.open('GET',url,true );
                api.send();
            
                api.onreadystatechange = function() {
            
                    if(this.status == 200 && this.readyState == 4) {
                        let datos= JSON.parse(this.responseText);
                        console.log(datos);
                        let resultado = document.querySelector('#resultado');
                        
                        let i=0;
                        resultado.innerHTML='';
                        for(let item of datos) {
                        
                            i ++;
            
                            var reg = item.region;
                            var subre = item.subregion;
                            var horario = item.timezones;
                            var paisss= item.nombre; 
                          
                            if( reg == texto1 && subre == texto2 && horario == texto3 ){
            
                                
                            resultado.innerHTML += `<div>
                            <br>
                            <img src="${item.flag}" style="width:80px; height:auto;">
                            <br>
                            <a href="https://www.google.com/maps/place/${item.name}"> Ver ubicación </a>
                            <br>
                            <a href="https://www.despegar.com/vuelos/pais/${item.name}"> Ver vuelos disponibles </a>
                            <br>
                            <a href="https://www.lonelyplanet.com/${item.name}"> Conoce mas sobre ${item.name}  </a>
                            <br>
                            <label> Nombre : ${item.name} </label>
                            <br>
                            <label> Capital : ${item.capital} </label>
                            <br>
                            <label> Codigo de area : ${item.callingCodes} </label>
                            <br>
                            <label> Cantidad de poblacion : ${item.population} </label>
                            <br>
                            <label> Continente : ${item.region} </label>
                            <br>
                            <label> Subregion : ${item.subregion} </label>
                            <br>
                            <label> Zona horaria : ${item.timezones} </label>
                            <br>
                            <label> Gentilicio : ${item.demonym} </label>
                            
                            
                            <br>
                            <br>
                            <button value="Compartir con un amigo" onClick="mostrarFormulario('${item.name}','${item.region}','${item.subregion}','${item.capital}')"> Compartir con un amigo </button>
                            
                            </div>`
                  
            
                    }      
        
                    
        
                    
            
                
            
                }
                
                }
                
            } 
        }
        
        if (texto1 == '' && texto2 == '' && texto3 != ' ' ) {
        
            let url = `https://restcountries.eu/rest/v2/all`
            const api = new XMLHttpRequest();
            api.open('GET',url,true );
            api.send();
        
            api.onreadystatechange = function() {
        
                if(this.status == 200 && this.readyState == 4) {
                    let datos= JSON.parse(this.responseText);
                    console.log(datos);
                    let resultado = document.querySelector('#resultado');
        
                    let i=0;
                    resultado.innerHTML='';
                    for(let item of datos) {
                        i ++;
        
                        var horario = item.timezones;
                      
                        if( horario == texto3 ){
        
                      
                            resultado.innerHTML += `<div >
                            <br>
                            <img src="${item.flag}" style="width:80px; height:auto;">
                            <br>
                            <br>
                            <a href="https://www.google.com/maps/place/${item.name}"> Ver ubicación </a>
                            <br>
                            <a href="https://www.despegar.com/vuelos/pais/${item.name}"> Ver vuelos disponibles </a>
                            <br>
                            <a href="https://www.lonelyplanet.com/${item.name}"> Conoce mas sobre ${item.name}  </a>
        
                            <br>
                            <label> Nombre : ${item.name} </label>
                            <br>
                            <label> Capital : ${item.capital} </label>
                            <br>
                            <label> Codigo de area : ${item.callingCodes} </label>
                            <br>
                            <label> Cantidad de poblacion : ${item.population} </label>
                            <br>
                            <label> Continente : ${item.region} </label>
                            <br>
                            <label> Subregion : ${item.subregion} </label>
                            <br>
                            <label> Zona horaria : ${item.timezones} </label>
                            <br>
                            <label> Gentilicio : ${item.demonym} </label>
                            
                            
                            <br>
                            <br>
                        
                            
                        
                            <button value="Compartir con un amigo" onClick="mostrarFormulario('${item.name}','${item.region}','${item.subregion}','${item.capital}')"> Compartir con un amigo </button>
                        </div>`
                  
            
                       
                        
                    }
                 
        
                }
                
               
            }
        
            }
                
        }
        
        if (texto1 == '' && texto2 != '' && texto3 == '') {
        
        
            let url = `https://restcountries.eu/rest/v2/all`
            const api = new XMLHttpRequest();
            api.open('GET',url,true );
            api.send();
        
            api.onreadystatechange = function() {
        
                if(this.status == 200 && this.readyState == 4) {
                    let datos= JSON.parse(this.responseText);
                    console.log(datos);
                    let resultado = document.querySelector('#resultado');
        
                    let i=0;
                    resultado.innerHTML='';
                    for(let item of datos) {
                        i ++;
        
                        var sub = item.subregion;
                      
                        if( sub == texto2 ){
        
                      
                            resultado.innerHTML += `<div >
                            <br>
                            <img src="${item.flag}" style="width:80px; height:auto;">
                            <br>
                            <br>
                            <a href="https://www.google.com/maps/place/${item.name}"> Ver ubicación </a>
                            <br>
                            <a href="https://www.despegar.com/vuelos/pais/${item.name}"> Ver vuelos disponibles </a>
                            <br>
                            <a href="https://www.lonelyplanet.com/${item.name}"> Conoce mas sobre ${item.name}  </a>
        
                            <br>
                            <label> Nombre : ${item.name} </label>
                            <br>
                            <label> Capital : ${item.capital} </label>
                            <br>
                            <label> Codigo de area : ${item.callingCodes} </label>
                            <br>
                            <label> Cantidad de poblacion : ${item.population} </label>
                            <br>
                            <label> Continente : ${item.region} </label>
                            <br>
                            <label> Subregion : ${item.subregion} </label>
                            <br>
                            <label> Zona horaria : ${item.timezones} </label>
                            <br>
                            <label> Gentilicio : ${item.demonym} </label>
                            
                            
                            <br>
                            <br>
                        
                          
                            <button value="Compartir con un amigo" onClick="mostrarFormulario('${item.name}','${item.region}','${item.subregion}','${item.capital}')"> Compartir con un amigo </button>
                        
                        </div>`
                  
            
                        
                       
                        
                    }
                 
        
                }
                
               
            }
        
            }
                
            
        }
        if (texto1 != '' && texto2 != '' && texto3 == '') {
        
            let url = `https://restcountries.eu/rest/v2/all`
                const api = new XMLHttpRequest();
                api.open('GET',url,true );
                api.send();
            
                api.onreadystatechange = function() {
            
                    if(this.status == 200 && this.readyState == 4) {
                        let datos= JSON.parse(this.responseText);
                        console.log(datos);
                        let resultado = document.querySelector('#resultado');
            
                        let i=0;
                        resultado.innerHTML='';
                        for(let item of datos) {
                            i ++;
            
                            var reg = item.region;
                            var subre = item.subregion;
                            
                          
                            if( reg == texto1 && subre == texto2 ){
            
                                resultado.innerHTML += `<div >
                                <br>
                                <img src="${item.flag}" style="width:80px; height:auto;">
                                <br>
                                <br>
                                <a href="https://www.google.com/maps/place/${item.name}"> Ver ubicación </a>
                                <br>
                                <a href="https://www.despegar.com/vuelos/pais/${item.name}"> Ver vuelos disponibles </a>
                                <br>
                            <a href="https://www.lonelyplanet.com/${item.name}"> Conoce mas sobre ${item.name}  </a>
            
                                <br>
                                <label> Nombre : ${item.name} </label>
                                <br>
                                <label> Capital : ${item.capital} </label>
                                <br>
                                <label> Codigo de area : ${item.callingCodes} </label>
                                <br>
                                <label> Cantidad de poblacion : ${item.population} </label>
                                <br>
                                <label> Continente : ${item.region} </label>
                                <br>
                                <label> Subregion : ${item.subregion} </label>
                                <br>
                                <label> Zona horaria : ${item.timezones} </label>
                                <br>
                                <label> Gentilicio : ${item.demonym} </label>
                                
                                
                                <br>
                                <br>
                            
                            
                                <button value="Compartir con un amigo" onClick="mostrarFormulario('${item.name}','${item.region}','${item.subregion}','${item.capital}')"> Compartir con un amigo </button>
                            </div>`
                      
                
                  
            
                    }      
        
                    
        
                    
            
                
            
                }
                }
            } 
        }
        
        if (texto1 == '' && texto2 != '' && texto3 != '') {
            let url = `https://restcountries.eu/rest/v2/all`
            const api = new XMLHttpRequest();
            api.open('GET',url,true );
            api.send();
        
            api.onreadystatechange = function() {
        
                if(this.status == 200 && this.readyState == 4) {
                    let datos= JSON.parse(this.responseText);
                    console.log(datos);
                    let resultado = document.querySelector('#resultado');
        
                    let i=0;
                    resultado.innerHTML='';
                    for(let item of datos) {
                        i ++;
        
                        var horario = item.timezones;
                        var subre = item.subregion;
                        
                      
                        if( horario == texto3 && subre == texto2 ){
        
                      
                            resultado.innerHTML += `<div>
                            <br>
                            <img src="${item.flag}" style="width:80px; height:auto;">
                            <br>
                            <br>
                            <a href="https://www.google.com/maps/place/${item.name}"> Ver ubicación </a>
                            <br>
                            <a href="https://www.despegar.com/vuelos/pais/${item.name}"> Ver vuelos disponibles </a>
                            <br>
                            <a href="https://www.lonelyplanet.com/${item.name}"> Conoce mas sobre ${item.name}  </a>
        
                            <br>
                            <label> Nombre : ${item.name} </label>
                            <br>
                            <label> Capital : ${item.capital} </label>
                            <br>
                            <label> Codigo de area : ${item.callingCodes} </label>
                            <br>
                            <label> Cantidad de poblacion : ${item.population} </label>
                            <br>
                            <label> Continente : ${item.region} </label>
                            <br>
                            <label> Subregion : ${item.subregion} </label>
                            <br>
                            <label> Zona horaria : ${item.timezones} </label>
                            <br>
                            <label> Gentilicio : ${item.demonym} </label>
                            
                            
                            <br>
                            <br>
                        
                        
                            <button value="Compartir con un amigo" onClick="mostrarFormulario('${item.name}','${item.region}','${item.subregion}','${item.capital}')"> Compartir con un amigo </button>
                        </div>`
                  
            
              
        
                }      
        
                
        
                
        
            
        
            }
            }
        } 
        }
        
        if (texto1 != '' && texto2 == '' && texto3 == '') {
            let url = `https://restcountries.eu/rest/v2/all`
            const api = new XMLHttpRequest();
            api.open('GET',url,true );
            api.send();
        
            api.onreadystatechange = function() {
        
                if(this.status == 200 && this.readyState == 4) {
                    let datos= JSON.parse(this.responseText);
                    console.log(datos);
                    let resultado = document.querySelector('#resultado');
        
                    let i=0;
                    resultado.innerHTML='';
                    for(let item of datos) {
                        i ++;
        
                        var reg = item.region;
                        
                        
                      
                        if( reg == texto1){
        
                      
                            resultado.innerHTML += `<div >
                            <br>
                            <img src="${item.flag}" style="width:80px; height:auto;">
                            <br>
                            <br>
                            <a href="https://www.google.com/maps/place/${item.name}"> Ver ubicación </a>
                            <br>
                            <a href="https://www.despegar.com/vuelos/pais/${item.name}"> Ver vuelos disponibles </a>
                            <br>
                            <a href="https://www.lonelyplanet.com/${item.name}"> Conoce mas sobre ${item.name}  </a>
                            <br>
                            <label> Nombre : ${item.name} </label>
                            <br>
                            <label> Capital : ${item.capital} </label>
                            <br>
                            <label> Codigo de area : ${item.callingCodes} </label>
                            <br>
                            <label> Cantidad de poblacion : ${item.population} </label>
                            <br>
                            <label> Continente : ${item.region} </label>
                            <br>
                            <label> Subregion : ${item.subregion} </label>
                            <br>
                            <label> Zona horaria : ${item.timezones} </label>
                            <br>
                            <label> Gentilicio : ${item.demonym} </label>
                            
                            
                            <br>
                            <br>
                        
                        
                            <button value="Compartir con un amigo" onClick="mostrarFormulario('${item.name}','${item.region}','${item.subregion}','${item.capital}')"> Compartir con un amigo </button>
                        </div>`
                  
            
              
        
                }      
        
                
        
                
        
            
        
            }
            }
        } 
        }
        
        if (texto1 != '' && texto2 == '' && texto3 != '') {
            let url = `https://restcountries.eu/rest/v2/all`
            const api = new XMLHttpRequest();
            api.open('GET',url,true );
            api.send();
        
            api.onreadystatechange = function() {
        
                if(this.status == 200 && this.readyState == 4) {
                    let datos= JSON.parse(this.responseText);
                    console.log(datos);
                    let resultado = document.querySelector('#resultado');
        
                    let i=0;
                    resultado.innerHTML='';
                    for(let item of datos) {
                        i ++;
        
                        var reg = item.region;
                        var horario= item.timezones;
                        
                      
                        if( reg == texto1 && horario == texto3){
        
                      
                            resultado.innerHTML += `<div>
                            <br>
                            <img src="${item.flag}" style="width:80px; height:auto;">
                            <br>
                            <br>
                            <a href="https://www.google.com/maps/place/${item.name}"> Ver ubicación </a>
                            <br>
                            <a href="https://www.despegar.com/vuelos/pais/${item.name}"> Ver vuelos disponibles </a>
                            <br>
                            <a href="https://www.lonelyplanet.com/${item.name}"> Conoce mas sobre ${item.name}  </a>
        
                            <br>
                            <label> Nombre : ${item.name} </label>
                            <br>
                            <label> Capital : ${item.capital} </label>
                            <br>
                            <label> Codigo de area : ${item.callingCodes} </label>
                            <br>
                            <label> Cantidad de poblacion : ${item.population} </label>
                            <br>
                            <label> Continente : ${item.region} </label>
                            <br>
                            <label> Subregion : ${item.subregion} </label>
                            <br>
                            <label> Zona horaria : ${item.timezones} </label>
                            <br>
                            <label> Gentilicio : ${item.demonym} </label>
                            
                            
                            <br>
                            <br>
                        
                        
                            <button value="Compartir con un amigo" onClick="mostrarFormulario('${item.name}','${item.region}','${item.subregion}','${item.capital}')"> Compartir con un amigo </button>
                        </div>`
                  
            
        
                }      
        
                
        
                
        
            
        
            }
            }
        } 
        }
        
        
            
            }
           


          
        
                 
///////////////////////////////////////Función que guarda el historial del primer filtro 
   
function historial1(arrayvar1) {

  
       
let var1= document.getElementById("busqueda").value;
let historyy=JSON.parse(localStorage.getItem('historial'));
if (historyy) {
    for (let i=0 ; i <historyy.lenght; i++) 
    {
        arrayvar1.push(historyy[i]);
    }
}


arrayvar1.push(var1);

if( arrayvar1.length >= 6 ){
    let i = arrayvar1.indexOf(arrayvar1[0] );
    arrayvar1.splice( i, 1 );
  }

localStorage.setItem('history', JSON.stringify(arrayvar1));

}
      



///////////////////////////////////////Función que guarda el historial del segundo filtro 

function historial2(arrayvar2) {

  
       
    let var2= document.getElementById("busqueda2").value;
    let historyy2=JSON.parse(localStorage.getItem('historial2'));
    if (historyy2) {
        for (let i=0 ; i <historyy2.lenght; i++) 
        {
            arrayvar2.push(historyy[i]);
        }
    }
    
    
    arrayvar2.push(var2);
    
    if( arrayvar2.length >= 6 ){
        let i = arrayvar2.indexOf(arrayvar2[0] );
        arrayvar2.splice( i, 1 );
      }
    
    localStorage.setItem('history2', JSON.stringify(arrayvar2));
    
    }
 
    
    ///////////////////////////////////////Función que guarda el historial del tercer filtro 
    
    function historial3(arrayvar3) {
    
      
           
        let var3= document.getElementById("busqueda5").value;
        let historyy3=JSON.parse(localStorage.getItem('historial3'));
        if (historyy3) {
            for (let i=0 ; i <historyy3.lenght; i++) 
            {
                arrayvar3.push(historyy3[i]);
            }
        }
        
        
        arrayvar3.push(var3);
        
        if( arrayvar3.length >= 6 ){
            let i = arrayvar3.indexOf(arrayvar3[0] );
            arrayvar3.splice( i, 1 );
          }
        
        localStorage.setItem('history3', JSON.stringify(arrayvar3));
        
        }
       

 ///////////////////////////////////////Función que muestra el historial del tercer filtro        


function mostrarhistorial1() {
    histo = JSON.parse(localStorage.getItem("history"));
        select.innerHTML= '';
        option.innerHTML= '';
       for(x=0; x < histo.length; x++){    
           $("#select").append("<option value="+x+"> "+histo[x]+"</option>");
         }
  } 

///////////////////////////////////////Función que muestra el historial del segundo filtro 
  
  function mostrarhistorial2() {
    histo2 = JSON.parse(localStorage.getItem("history2"));
        select2.innerHTML= '';
        option2.innerHTML= '';
       for(x=0; x < histo2.length; x++){    
           $("#select2").append("<option value="+x+"> "+histo2[x]+"</option>");
         }
  } 


  ///////////////////////////////////////Función que muestra el historial del primer filtro 

  function mostrarhistorial3() {
    histo3 = JSON.parse(localStorage.getItem("history3"));
        select3.innerHTML= '';
        option3.innerHTML= '';
       for(x=0; x < histo3.length; x++){    
           $("#select3").append("<option value="+x+"> "+histo3[x]+"</option>");
         }
  } 



  ///////////////////////////////////////Función que muestra el formulario para enviarle un pais a un amigo

  function mostrarFormulario(nombrepais,nombreregion,nombresubregion,nombrecapital) {

    document.getElementById("resultado").style.display = "none";
    document.getElementById("container").style.display = "none";
    console.log(nombrepais);
    
    console.log(nombreregion);
    console.log(nombresubregion);

    console.log(nombrecapital);


 
    let resultado = document.querySelector('#formu');

    resultado.innerHTML += `

    
    
    <div class="sinresul">
    <div class="container" id="container">
        <div class="section">
        
    <form id="formulariomoviles">
    
    <h2 id="h2moviles"> Enviale este país a un amigo!</h2>
    

    Datos principales del paìs: <input id="input" value="${nombrepais},${nombreregion}">
    <br>
    <br>
    Datos secundarios del paìs: <input id="input" value="${nombresubregion},${nombrecapital}">
    Dirección de su email: <input id="input" style="text-align: center;" type="email" name="direccionemail" placeholder="Ej.: usuario@servidor.com">
    <br>
    <br>
    Tu nombre y apellido: <input id="input" style="text-align: center;" type="text" id="lname" name="lname" placeholder="Nombre y Apellido">
    <br>
    <br>
    Asunto: <input id="input" style="text-align: center;"type="text" id="asunto" name="asunto" placeholder="Asunto">
    <br>
    <br>
    Dejale aca una descripcion:<input id="input" style="text-align: center;" name="comentarios" rows="10" cols="40" placeholder="Escriba aquí el texto del mensaje">
    <br>
    <br>
    <input id="botonn" style="align:center; text-align:center"type="submit" value="Enviar este email" />
    
    
<input type="submit" value="Volver" onclick = "location='buscar.html'"/>
    
    </form>
  
    </div>
    </div>
    </div>
    `
			

  
  }
  


