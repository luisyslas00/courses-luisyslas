if(document.getElementById('btn_nav')){
    const btnMenu = document.getElementById('btn_nav')
    const menu = document.getElementById('menu')
    btnMenu.addEventListener('click',()=>{
        if(menu.classList.contains('hidden')){
            document.querySelector('#btn_nav svg path').setAttribute('d','M6 18 18 6M6 6l12 12')
            // M6 18 18 6M6 6l12 12
            menu.classList.remove('hidden')
            menu.classList.remove('animate-desaparecerNav')
            menu.classList.add('animate-aparecerNav')
            menu.addEventListener('animationend', function() {
                menu.classList.add('block');
                menu.classList.remove('hidden')
            });
        }else{
            document.querySelector('#btn_nav svg path').setAttribute('d','M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5')
            // M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5
            menu.classList.remove('block')
            menu.classList.remove('animate-aparecerNav')
            menu.classList.add('animate-desaparecerNav')
            menu.addEventListener('animationend', function() {
                menu.classList.add('hidden');
            });
        }
    })
}

window.addEventListener('resize',()=>{
    const x = window.innerWidth;
    if(x>=1024){
        menu.classList.remove('animate-aparecerNav')
    }
})

const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
  counter.innerText = '0'

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target')
    const c = +counter.innerText

    const increment = target / 200
    // console.log(typeof target, target)

    if(c < target){
      counter.innerText = `${Math.ceil(c + increment)}`
      setTimeout(updateCounter, 1)
    } else {
      counter.innerText = target
    }
  }

  updateCounter()
})