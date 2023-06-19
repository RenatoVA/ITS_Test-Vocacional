function TestAjax(name,table){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        //Asi se obtiene la respueta del servicio
        //this.responseText
        //alert(this.responseText);
        document.getElementById(name).innerHTML = this.responseText;
    }
    xhttp.open("GET", table, true);
    xhttp.send();
}
