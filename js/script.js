$(document).ready(function(){
    $("button").click(function(){
        if($("#intro p").css("display")=="block"){
            $("#intro p").hide();
            $(this).html("Mostrar");
        }else{
            $("#intro p").show();
            $(this).html("Ocultar");
        }
    });


    $("#img-lampada").click(function(){
        if($(this).attr("src").match("-on")){
            $(this).attr("src", "./images/lampada-off.gif");
        }else{
            $(this).attr("src", "./images/lampada-on.gif");
        }
    });
});
