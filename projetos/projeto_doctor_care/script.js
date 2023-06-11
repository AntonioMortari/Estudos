//Menu fixo// 
window.addEventListener('scroll', function(){
    var header = document.getElementById('section1-header')
    header.classList.toggle('hscroll' , window.scrollY > 0)
})

//Menu hamburguer

var btn_mobile = document.getElementById('btn-mobile')

function toggleMenu(){
    var nav = document.getElementById('section1-nav')
    nav.classList.toggle('active')
}

btn_mobile.addEventListener('click', toggleMenu)