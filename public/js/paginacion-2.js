$(document).ready(function(){	
    let ini=0,fin=0,pages=[], direccion = "";

    if(url == ""){
        direccion = "/page/";
    }else{
        if(url == "age"){
            direccion = "/peliculas/fecha/" + dato + "/page/";
        }else{
            direccion = "/peliculas/genero/" + dato + "/page/";
        }
    }

    console.log('hola');
    console.log("local data -- " + local_data);
    console.log("num_page -- " + num_page);    
    
    if(num_page<=5){
        ini=1;
        if(local_data<9)
            fin=local_data;
        else
            fin=9;
    }else if(num_page>=local_data-4){
        if(local_data<=9)
            ini=1;
        else
            ini=local_data-9;
        fin=local_data;
    }else{
        ini = num_page-4;
        fin = num_page+4;
    }
    
    if (num_page>1){
        $('#paginas').append('<li class="page-item"><a class="page-link" href="'+ direccion +'1" id="1" arial-label="Previous"><span aria-hidden="true">&laquo</span><span class="sr-only">Previous</span></a></li>');
    }

    if(local_data >= 2){
        for (var i = ini; i <= fin; i++) {
            $('#paginas').append('<li class="page-item"><a class="page-link" href="'+direccion + i+'" id="'+i+'">'+i+'</a></li>');
        }
    }
    
    if (num_page<local_data){
        $('#paginas').append('<li class="page-item"><a class="page-link" href="'+ direccion + (num_page+1) +'" aria-label="Next"><span aria-hidden="true">&raquo;</span><span class="sr-only">Next</span></a></li>');
    }	
    $("#" + num_page).addClass("active");
});