const value=document.getElementById('value');
const buttons=document.querySelectorAll('.btn');
const changeColor=document.getElementById('reset-color');


let count=0;

buttons.forEach(button=>{
    button.addEventListener("click",e=>{
        const Classes=e.currentTarget.classList;

        if(Classes.contains('decrease')){
            count--;
        }else if(Classes.contains('increase')){
            count++;
        }
        else{
            count=0;
        }

        if (count > 0) {
            value.style.color = 'black';
            changeColor.style.backgroundColor="green";

          } else if (count < 0) {
            value.style.color = 'red';
            changeColor.style.backgroundColor="yellow";

          } else {
            value.style.color = '#333';
            changeColor.style.backgroundColor="red";

          }

       value.textContent=count;

    })
})
