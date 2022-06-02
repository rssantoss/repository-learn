var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment(){
    if (currentNumber > 9){
        currentNumber = 10;
        document.body.style.color = "blue";
    }
    
    else{
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
}

function decrement(){
    if (currentNumber < 1){
        currentNumber = 0;
        document.body.style.color = "red";
    }

    else{
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
}