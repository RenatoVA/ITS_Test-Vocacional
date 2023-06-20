function htmlCarreras(){
    /* Solo hay variables o constantes en JS */
    const xhttp = new XMLHttpRequest(); //Un objeto request para un servicio 
    xhttp.onload = function(){
        // Aquí se obtiene la respuesta del servicio 
        //tihs.responseText
        //alert(this.responseText);
        document.getElementById("result-option").innerHTML = this.responseText
    }
    xhttp.open("GET","carreras.html",true); //Te conecta por GET a la página de forma asíncrona
    xhttp.send();
}

function htmlAdmision(){
    /* Solo hay variables o constantes en JS */
    const xhttp = new XMLHttpRequest(); //Un objeto request para un servicio 
    xhttp.onload = function(){
        // Aquí se obtiene la respuesta del servicio 
        //tihs.responseText
        //alert(this.responseText);
        document.getElementById("result-option").innerHTML = this.responseText
    }
    xhttp.open("GET","admision.html",true); //Te conecta por GET a la página de forma asíncrona
    xhttp.send();
}
function htmlBeneficios(){
    /* Solo hay variables o constantes en JS */
    const xhttp = new XMLHttpRequest(); //Un objeto request para un servicio 
    xhttp.onload = function(){
        // Aquí se obtiene la respuesta del servicio 
        //tihs.responseText
        //alert(this.responseText);
        document.getElementById("result-option").innerHTML = this.responseText
    }
    xhttp.open("GET","beneficios.html",true); //Te conecta por GET a la página de forma asíncrona
    xhttp.send();
}

function htmlContacto(){
    /* Solo hay variables o constantes en JS */
    const xhttp = new XMLHttpRequest(); //Un objeto request para un servicio 
    xhttp.onload = function(){
        // Aquí se obtiene la respuesta del servicio 
        //tihs.responseText
        //alert(this.responseText);
        document.getElementById("result-option").innerHTML = this.responseText
    }
    xhttp.open("GET","contacto.html",true); //Te conecta por GET a la página de forma asíncrona
    xhttp.send();
}