function htmlUInfo(html){
    /* Solo hay variables o constantes en JS */
    const xhttp = new XMLHttpRequest(); //Un objeto request para un servicio 
    xhttp.onload = function(){
        // Aquí se obtiene la respuesta del servicio 
        //tihs.responseText
        //alert(this.responseText);
        document.getElementById("result-option").innerHTML = this.responseText
    }
    xhttp.open("GET",html,true); //Te conecta por GET a la página de forma asíncrona
    xhttp.send();
}
function htmlModalidades(html){
    /* Solo hay variables o constantes en JS */
    const xhttp = new XMLHttpRequest(); //Un objeto request para un servicio 
    xhttp.onload = function(){
        // Aquí se obtiene la respuesta del servicio 
        //tihs.responseText
        //alert(this.responseText);
        document.getElementById("modalidades").innerHTML = this.responseText
    }
    xhttp.open("GET",html,true); //Te conecta por GET a la página de forma asíncrona
    xhttp.send();
}

