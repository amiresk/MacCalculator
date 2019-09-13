

// set screen display on '0'
var screenResult = '0';

var bufferReg;
// buffer array to store all pressed keys and pass them to eval fuction
var bufferArray = [];

// access screen <div> element by id name
var displayDigit = document.getElementById('display');

// access keys by class name
var keyBtn = document.getElementsByClassName('key-digi');

////access operator's keys by class name

//var opBtn = document.getElementsByClassName('key-op');


// update the screen and show the value on display
var updateScreen = (clickObj) => {

    var btnText = clickObj.target.innerText;

    if(screenResult === '0')
        screenResult = '';

    screenResult +=btnText;
    displayDigit.innerText = screenResult;

};

//iterate 
for(let i=0; i<keyBtn.length; i++){

        keyBtn[i].addEventListener('click', updateScreen, false);
        

}

// access OPERATOR keys by class name
var opBtn = document.getElementsByClassName('key-op');

var operationReg = (clickobj) =>{
    
    var operator = clickobj.target.innerText;
    
    switch(operator){
        
        case '+':
            //store the digit from the screen to the buffer
            bufferReg = screenResult;
            //set screen to 0 
            screenResult = '0';
            displayDigit.innerText = screenResult;
            bufferArray.push(bufferReg);
            bufferArray.push('+');
        
            break;
            
        case '-':
            //store the digit from the screen to the buffer
            bufferReg = screenResult;
            //set screen to 0 
            screenResult = '0';
            displayDigit.innerText = screenResult;
            bufferArray.push(bufferReg);
            bufferArray.push('-');
        
            break;
            
        case '×':
            //store the digit from the screen to the buffer
            bufferReg = screenResult;
            //set screen to 0 
            screenResult = '0';
            displayDigit.innerText = screenResult;
            bufferArray.push(bufferReg);
            bufferArray.push('*');
        
            break;
        
        case '÷':
            //store the digit from the screen to the buffer
            bufferReg = screenResult;
            //set screen to 0 
            screenResult = '0';
            displayDigit.innerText = screenResult;
            bufferArray.push(bufferReg);
            bufferArray.push('/');
        
            break;
            
        case '%':
            
            //store the digit from the screen to the buffer
            bufferReg = screenResult;         
            // conver String to integer in order to divid the input to 100
            var num = parseInt(bufferReg);
            var str = num/100;
            bufferReg = str.toString();
            //set screen to 0 
            screenResult = '0';
            displayDigit.innerText = screenResult;                
            bufferArray.push(bufferReg);
            bufferArray.push('*');

            break;  
            
         case '+/-':
            //store the digit from the screen to the buffer
            bufferReg = screenResult;         
            // conver String to integer in order to multiply the input to -1 (to generate negetive number)
            var num = parseInt(bufferReg);
            var str = num * -1;
            bufferReg = str.toString();
            //set screen to 0 
            screenResult = bufferReg;
            displayDigit.innerText = screenResult;  
            // we do not want to push it to the bufferArray until we click another operator buttton...

            break;  
        
        case '=':
            // store the secong digit after storing operator in the last status
            bufferArray.push(screenResult);
            //use "EVAL()" to pars the combined array element
            var calcResult = eval(bufferArray.join(" "));
            // store the result to the variables screen
            screenResult = calcResult;
            // show the result on the screen
            displayDigit.innerText = screenResult;
            //finaly empty the buffer array
            bufferArray = [];
            
          
        
        default:
                                    
            break;
        
    }
    

    
};

for(let i=0; i<opBtn.length; i++){
    
    opBtn[i].addEventListener('click', operationReg, false);
    
}

// access A/C keys by id name

var clearBtn = document.getElementById('op-clean');

clearBtn.onclick =() => {

                screenResult = '0';
                // clean up the buffer
                bufferArray = [];
                //set the screen to Zero
                displayDigit.innerHTML = screenResult;

};

var decimalBtn = document.getElementById('op-num-float');

decimalBtn.onclick =() =>{
                    
                   //check the screen doese not content any '.' symbole
                  if(!screenResult.includes('.'))
                      screenResult += '.';
                  displayDigit.innerText = screenResult;
};
