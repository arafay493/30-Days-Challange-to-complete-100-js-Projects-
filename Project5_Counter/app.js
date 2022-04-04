(function(){
    var divValue = document.querySelector('.value')
    var btn = document.querySelectorAll('.btn')
    
    for(let i = 0 ; i <btn.length ; i++ ){
        btn[i].addEventListener('click' , function(){
            // For value change
            if(btn[i].classList.contains('btn1')){
                document.querySelector('.value').innerHTML--
            }
            else if(btn[i].classList.contains('btn2')){
                document.querySelector('.value').innerHTML++
            }
            
            // For Color Change
            if(document.querySelector('.value').innerHTML < 0){
                divValue.style.color = 'red'
            }
            else if(document.querySelector('.value').innerHTML > 0){
                divValue.style.color = 'green'
            }
            else{
                divValue.style.color = 'var(--mainBlack)'
            }
        })     
    }
})()