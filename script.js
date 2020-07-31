
function getOutput(){
   return document.getElementById('output').value;
}
function printOutput(number){
    document.getElementById('output').value = number;
}

function inputBackspace(){
document.getElementById('backspace').addEventListener('click',function(){
var output = getOutput();
outputDigit = output.substr(0, output.length - 1);
printOutput(outputDigit);
})
}

inputBackspace();

var numbers = document.getElementsByClassName('button');
for (let i = 0; i < numbers.length; i++) {
     numbers[i].addEventListener('click',function(){
         var output = getOutput();
         output = output + this.innerText;
         printOutput(output);
         
     }) 
}
inputBackspace();

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
        notifyDisplay('match', 'no-match');
         
    }
    else{
        notifyDisplay('no-match', 'match');
    }
   
})

function notifyDisplay(id1, id2){
document.getElementById(id1).style.display = 'block';
document.getElementById(id2).style.display = 'none';
}

            //  generatePin

 
document.getElementById('generate-pin').addEventListener('click',function(){
    var randomDigit = randomNumber();
    document.getElementById('pin-output').value = randomDigit;
})
function randomNumber(){
    var result = Math.round(1000 + Math.random() * 9000);
    return result;
}
           