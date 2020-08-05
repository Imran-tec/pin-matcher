
function getOutput(){
   return document.getElementById('output').value;
}

function printOutput(number){
    document.getElementById('output').value = number;
}

function BackspaceButton(){
document.getElementById('backspace').addEventListener('click',function(){
var output = getOutput();
outputDigit = output.substr(0, output.length - 1);
printOutput(outputDigit);
})
}

BackspaceButton();

var numbers = document.getElementsByClassName('button');
for (let i = 0; i < numbers.length; i++) {
     numbers[i].addEventListener('click',function(){
         var output = getOutput();
         output = output + this.innerText;
         printOutput(output);
         
     }) 
}
BackspaceButton();

document.getElementById('clear').addEventListener('click',function(){
 document.getElementById('output').value = '';
})



                //   submit -area

document.getElementById('submit-btn').addEventListener('click',function(){
    var generatePin = document.getElementById('pin-output').value;
    var inputPin  = getOutput();
    if(generatePin == '' || inputPin == '' ){
        alert('input field has No Value');
    }
   else if(generatePin == inputPin ){
        notifyDisplay('match', 'block');
        notifyDisplay('no-match', 'none');
    }
    else{
        notifyDisplay('no-match', 'block');
        notifyDisplay('match', 'none');
    }
   
})

function notifyDisplay(id, value){
document.getElementById(id).style.display = value ;
document.getElementById(id).style.display = value;
}

            //  generatePin
            
document.getElementById('generate-pin-area').addEventListener('click',function(){
    notifyDisplay('match', 'none');
    notifyDisplay('no-match', 'none');
})
 
document.getElementById('generate-pin').addEventListener('click',function(){
    var randomDigit = randomNumber();
    document.getElementById('pin-output').value = randomDigit;
    printOutput('');

})


function randomNumber(){
    var result = Math.round(1000 + Math.random() * 9000);
    return result;
}
           