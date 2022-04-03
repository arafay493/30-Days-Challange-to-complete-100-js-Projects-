(function(){
    const btn = document.querySelector('button')

    btn.addEventListener('click' , () => {
        const inp = document.querySelector('input')
        if (inp.value != "") {
            document.querySelector('#text').innerHTML = inp.value
            inp.value = ''
        }
        else{
            document.querySelector('.feedback').classList.add('show')
            setTimeout(() => {
                document.querySelector('.feedback').classList.remove('show')
            }, 2000)
        }
    })

})()