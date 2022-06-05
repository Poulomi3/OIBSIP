let screen=document.getElementById('screen');
buttons=document.querySelectorAll('button');
let screenValue='';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        console.log('Button text is',buttonText);
        if(buttonText=='x'){
            buttonText='*';
            screenValue+=buttonText;
            screen.value=screenValue;
        }
        else if(buttonText=='÷'){
            buttonText='/';
            screenValue+=buttonText;
            screen.value=screenValue;
        }
        else if(buttonText=='clear'){
            
            screenValue=''
            screen.value=screenValue;
         }
        else if(buttonText=='enter'){
            screen.value=eval(screenValue);
        }
        else if(buttonText=='del'){
            console.log(typeof screenValue);
            screenValue=screenValue.slice(0,(screenValue.length-1));
            screen.value=screenValue;
        }
        else if(buttonText=='%'){
            console.log(typeof screenValue);


        }
        else{
            screenValue+=buttonText;
            screen.value=screenValue;
        }
    })
}
