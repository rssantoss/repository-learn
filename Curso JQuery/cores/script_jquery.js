$(function(){
    $('#azul').click(function(){
        $('p').css("color", "blue");
        $('p').fadeOut('slow');
        $('p').delay(3000);
        $('p').fadeIn('slow');
    });
    $('#vermelho').click(function(){
        $('p').css("color", "red");
        $('#mensagem').text("Cor alterada com sucesso");
        $('mensagem').css('color', 'red');
        $('#mensagem').css('border', '1px solid red');
        $('#mensagem').delay(3000);
        $('#mensagem').fadeOut('fast');
    });
});