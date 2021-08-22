window.addEventListener('DOMContentLoaded',function(){
    const menu = document.querySelector('.icono-menu')
    if(menu){
        menu.addEventListener('click', () => {
            const panel = document.querySelector('.ul-class')
            panel.classList.toggle('new')
        })
    }
})
