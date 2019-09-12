
<!DOCTYPE html>
<html>
    <head>
         
        <title>Calculator</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
     
    </head>
    <body>
            <p style="font-size:100px; margin-bottom: 8px;">&#129409;</p>
          
            <div class= "grid-container">
                
                         <div id="display-result" class="display-digit" > 0 </div>

                         <div id="op-clean" class="key-digi decor2" >AC</div>
                         <div id="op-minus" class="key-op decor2" >+/-</div>
                         <div id="op-percentage" class="key-op decor2">%</div>
                         
                         <div id="op-division" class="key-op decor1">÷</div>

                         <div id="op-num-7" class="key-digi item5">7</div>
                         <div id="op-num-8" class="key-digi item6">8</div>
                         <div id="op-num-9" class="key-digi item7">9</div>
                         
                         <div id="op-multiply" class="key-op decor1" >×</div>

                         <div id="op-num-4" class="key-digi item9">4</div>
                         <div id="op-num-5" class="key-digi item10">5</div>
                         <div id="op-num-6" class="key-digi item11">6</div>
                         
                         <div id="op-minus" class="key-op decor1" >-</div>

                         <div id="op-num-1" class="key-digi item13">1</div>
                         <div id="op-num-2" class="key-digi item14">2</div>
                         <div id="op-num-3" class="key-digi item15">3</div>
                         
                         <div id="op-add" class="key-op decor1">+</div>

                         <div id="op-num-0" class="key-digi double-size">0</div>
                         <div id="op-float" class="key-digi item17">.</div> 
                         <div id="op-equal" class="key-op decor1">&#61;</div>
         </div>      

            <br><br>
            <h1  style="color: red; margin-left: 452px" id="prt"> Print the output here...</h1>   
         
    <script>

            var oneBtn = document.getElementById('op-num-1');
            var twoBtn = document.getElementById('op-num-2');
            var threeBtn = document.getElementById('op-num-3');
            var fourBtn = document.getElementById('op-num-4');
            var fiveBtn = document.getElementById('op-num-5');
            var sixBtn = document.getElementById('op-num-6');
            var sevenBtn = document.getElementById('op-num-7');
            var eightBtn = document.getElementById('op-num-8');
            var nineBtn = document.getElementById('op-num-9');
            var zeroBtn = document.getElementById('op-num-0');
            
            var decimalBtn = document.getElementById('op-num-float');
            
            var clearBtn = document.getElementById('op-clean');
            var percentag = document.getElementById('op-percentage');
            
            var displalyValElement = document.getElementById('display-result');
            
            
            var displayVal = '0';
            var pendingVal;
            var evalStringArray = [];
            
            var calcNumBtns = document.getElementsByClassName('key-digi');
            var calcOperatorBtn = document.getElementsByClassName('key-op');
            
            var updatDisplayVal = (clickObj) => {
                
                var btnText = clickObj.target.innerText;
                
                if(displayVal === '0')
                    displayVal = '';
                
                displayVal +=btnText;
                displalyValElement.innerText = displayVal;
                
            }
                    
            var performOperation = (clickobj) => {
                
                var operator = clickobj.target.innerText;

                switch (operator) {

                    
                            case '+':
                                 
                                  pendingVal = displayVal;
                                  displayVal ='0';
                                  displalyValElement.innerText = displayVal;
                                  evalStringArray.push(pendingVal);
                                  evalStringArray.push('+');
                                 
                                  break;
                                
                            case '-':
                                
                                  pendingVal = displayVal;
                                  displayVal ='0';
                                  displalyValElement.innerText = displayVal;
                                  evalStringArray.push(pendingVal);
                                  evalStringArray.push('-');

                                  break;                        

                            case '×':
                                
                                  pendingVal = displayVal;
                                  displayVal ='0';
                                  displalyValElement.innerText = displayVal;
                                  evalStringArray.push(pendingVal);
                                  evalStringArray.push('*');

                                  break;
                                  
                           case '÷':
                                
                                  pendingVal = displayVal;
                                  displayVal ='0';
                                  displalyValElement.innerText = displayVal;
                                  evalStringArray.push(pendingVal);
                                  evalStringArray.push('/');

                                  break;         
                                  
                           case '=':
                                
                                  evalStringArray.push(displayVal);
                                  var evaluation = eval(evalStringArray.join(" "));
                                  displayVal = evaluation + ' ';
                                  displalyValElement.innerText = displayVal;
                                  evalStringArray = [];

                                  break;                                

                            default:
                                    
                                break;
                        }
                
                
            }
            

            for(let i=0; i<calcNumBtns.length; i++){
                
                calcNumBtns[i].addEventListener("click", updatDisplayVal, false);           
                
            }
            
            for(let i=0; i<calcOperatorBtn.length; i++){            
                
                calcOperatorBtn[i].addEventListener("click", performOperation, false);
            }
            
            clearBtn.onclick =() => {
                
                      
                displayVal = '0';
                pendingVal = undefined;
                evalStringArray = [];
                displalyValElement.innerHTML = displayVal;
                
              }
              
              decimalBtn.onclick =() =>{
                 
                  if(!displayVal.includes('.'))
                      displayVal += '.';
                  displalyValElement.innerText = displayVal;
              }
            
      
        
    </script>


    </body>

</html>