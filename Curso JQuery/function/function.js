$(function(){
    $('button').click(function(){
        
        let x = [5, 2, 4, 6, 1, 3];
        for (let j = 1; j < x.length; j++){
            let valor = x[j];
            let i = j - 1;
            while (i >= 0 && x[i] > valor){
                x[i + 1] = x[i];
                i = i - 1;
            };
            x[i + 1] = valor;
            
        };
        alert(x);
    });
});