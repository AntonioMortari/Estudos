var h = document.getElementById('hora')
var m = document.getElementById('min')
var s = document.getElementById('seg')

var hoje = new Date()

var hora = hoje.getHours()
var min = hoje.getMinutes()
var seg = hoje.getSeconds()

// if (hora.lentgh == 1){
//     var hora = "0" + hora
// }

// if (min.lentgh == 1){
//     var min = "0" + min
// }

// if (seg.lentgh == 1){
//     var seg = "0" + seg
// }

h.innerHTML = `${hora}`
m.innerHTML = `${min}`
s.innerHTML = `${seg}` 
