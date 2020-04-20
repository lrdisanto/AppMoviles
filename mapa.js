
document.querySelector('#todos').addEventListener('click', function(){
  obtenerdatos();
});

function obtenerdatos(){
  var texto = document.getElementById("busqueda").value;

const api = new XMLHttpRequest();
api.open("GET", "https://restcountries.eu/rest/v2/all", true);


api.send();

api.onreadystatechange = function(){
      if(this.status == 200 && this.readyState ==4 ){

          let datos = JSON.parse(this.responseText);
          console.log(datos);
          let resul = document.querySelector('#resultado');
          resul.innerHTML = '';
           
              let i = 0;
              for(let item of datos){
                  i++;
                
                  i++;
                

                  var jsona = item.region;
             
                   if( jsona == texto ){
                       
                       

                   resul.innerHTML += `<div id="div"><p>Pais:</p>${item.name} </div>`
                   resul.innerHTML += `-------------------`
                          

                      }

                    }
      }
    }
}

