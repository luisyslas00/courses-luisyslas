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


document.addEventListener('scroll',(e)=>{
    const scrollY = window.scrollY;
    const navbar = document.getElementById('navbar')
    const menu_row = document.getElementById('menu_row')
    if(scrollY>0){
        navbar.classList.remove('lg:bg-transparent')
        navbar.classList.add('lg:bg-amber-400')
        menu_row.classList.remove('lg:bg-transparent')
        menu_row.classList.add('lg:bg-amber-400')
        menu_row.classList.add('transition')
        menu_row.classList.add('ease-out')
        menu_row.classList.add('duration-700')
    }else{
        navbar.classList.add('lg:bg-transparent')
        navbar.classList.remove('lg:bg-amber-400')
        menu_row.classList.add('lg:bg-transparent')
        menu_row.classList.remove('lg:bg-amber-400')
    }
})

// const btnMenu = document.getElementById('btn_nav');
// const menu = document.getElementById('menu');
// const navbar = document.getElementById('navbar');
// const menuRow = document.getElementById('menu_row');

// if (btnMenu && menu) {
//     btnMenu.addEventListener('click', () => {
//         const isHidden = menu.classList.contains('hidden');
//         const iconPath = isHidden 
//             ? 'M6 18 18 6M6 6l12 12' 
//             : 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5';

//         document.querySelector('#btn_nav svg path').setAttribute('d', iconPath);

//         menu.classList.toggle('hidden', !isHidden);
//         menu.classList.toggle('block', isHidden);
//         menu.classList.remove(isHidden ? 'animate-desaparecerNav' : 'animate-aparecerNav');
//         menu.classList.add(isHidden ? 'animate-aparecerNav' : 'animate-desaparecerNav');
//     });

//     // Listener for the animation end to ensure visibility is correctly managed
//     menu.addEventListener('animationend', () => {
//         if (menu.classList.contains('animate-desaparecerNav')) {
//             menu.classList.add('hidden');
//         }
//     });
// }

// window.addEventListener('resize', () => {
//     if (window.innerWidth >= 1024 && menu) {
//         menu.classList.remove('animate-aparecerNav');
//     }
// });

// document.addEventListener('scroll', () => {
//     const scrollY = window.scrollY > 0;
//     const bgClass = scrollY ? 'lg:bg-amber-400' : 'lg:bg-transparent';

//     navbar?.classList.toggle('lg:bg-amber-400', scrollY);
//     navbar?.classList.toggle('lg:bg-transparent', !scrollY);
//     menuRow?.classList.toggle('lg:bg-amber-400', scrollY);
//     menuRow?.classList.toggle('lg:bg-transparent', !scrollY);
// });

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