
            var screenResult = '0';
            var bufferReg;
            var bufferArray = [];
        
            var percentagBtn = document.getElementById('op-percentage');
            var decimalBtn = document.getElementById('op-num-float');
            var clearBtn = document.getElementById('op-clean');


            var displayDigit = document.getElementById('display-result');


            var keyBtn = document.getElementsByClassName('key-digi');
            var calcOperatorBtn = document.getElementsBylassName('key-op');

            var updateScreen = (clickObj) => {

                var btnText = clickObj.target.innerText;

                if(screenResult === '0')
                    screenResult = '';

                screenResult +=btnText;
                displayDigit.innerText = screenResult;

            };
            



            var operationReg = (clickobj) => {

                var operator = clickobj.target.innerText;

                switch (operator) {


                            case '+':

                                 bufferReg = screenResult;
                                  screenResult ='0';
                                  displayDigit.innerText = screenResult;
                                  bufferArray.push(bufferReg);
                                  bufferArray.push('+');

                                  break;

                            case '-':

                                 bufferReg = screenResult;
                                  screenResult ='0';
                                  displayDigit.innerText = screenResult;
                                  bufferArray.push(bufferReg);
                                  bufferArray.push('-');

                                  break;

                            case '×':

                                 bufferReg = screenResult;
                                  screenResult ='0';
                                  displayDigit.innerText = screenResult;
                                  bufferArray.push(bufferReg);
                                  bufferArray.push('*');

                                  break;

                           case '÷':

                                 bufferReg = screenResult;
                                  screenResult ='0';
                                  displayDigit.innerText = screenResult;
                                  bufferArray.push(bufferReg);
                                  bufferArray.push('/');

                                  break;

                           case '=':

                                  bufferArray.push(screenResult);
                                  var evaluation = eval(bufferArray.join(" "));
                                  screenResult = evaluation + ' ';
                                  displayDigit.innerText = screenResult;
                                  bufferArray = [];

                                  break;

                            default:

                                break;
                        }


            };
            
            
            for(let i=0; i<keyBtn.length; i++){

                keyBtn[i].addEventListener("click", updateScreen, false);

            }

            for(let i=0; i<calcOperatorBtn.length; i++){

                calcOperatorBtn[i].addEventListener("click", operationReg , false);
            }


             clearBtn.onclick =() => {

                screenResult = '0';
                //bufferReg = undefined;
                bufferArray = [];
                displayDigit.innerHTML = screenResult;

              };

              decimalBtn.onclick =() =>{

                  if(!screenResult.includes('.'))
                      screenResult += '.';
                  displayDigit.innerText = screenResult;
              };
