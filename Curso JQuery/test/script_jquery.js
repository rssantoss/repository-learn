$(function(){
    $('#azul').click(function(){
        $('p').css("color", "blue");
        $('p').fadeOut('slow');
        $('p').delay(3000);
        $('p').fadeIn('slow');
    });
    $('#vermelho').click(function(){
        $('p').css("color", "red");
        $('p').fadeOut('slow'); //fast //argumento por numero //slow
        $('p').delay(3000); //Pausa
        $('p').fadeIn(5000); //fast //argumento por numero //slow
    });
});