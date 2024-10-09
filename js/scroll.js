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
