var btn = document.getElementById('burguer')
var btnclose = document.getElementById('close')

function openMenu(){
    var menu = document.getElementById('menu-mobile')
    menu.classList.add('active')
    btn.style.display = 'none'
    btnclose.style.display = 'block'
}

function closeMenu(){
    var menu = document.getElementById('menu-mobile')
    menu.classList.remove('active')
    btn.style.display = 'block'
    btnclose.style.display = 'none'
}

btn.addEventListener('click', openMenu)
btnclose.addEventListener('click', closeMenu)