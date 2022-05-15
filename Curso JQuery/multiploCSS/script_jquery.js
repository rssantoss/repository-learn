$(function(){
    $('#azul').click(function(){
        $('p').css("color", "blue");
        $('p').fadeOut('slow');
        $('p').delay(3000);
        $('p').fadeIn('slow');
    });
    $('#vermelho').click(function(){
        $('p').css("color", "red");
        $('#mensagem')
            .text("Cor alterada com sucesso")
            .css({color:'red', border:'1px solid red', backgroundColor:'F08080'})
            .delay(3000)
            .addClass('green');
        $('button').removeClass('red');
    });
});