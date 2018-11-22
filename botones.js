//Array que guarda el abecedario
const ABECEDARIO = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z']

//Boton ¡GRITA!
const GRITABTN = document.getElementById('grita');

//Los botones de ▲ del html
const BTNUP1 = document.getElementById('btnUp1');
const BTNUP2 = document.getElementById('btnUp2');
const BTNUP3 = document.getElementById('btnUp3');
const BTNUP4 = document.getElementById('btnUp4');
const BTNUP5 = document.getElementById('btnUp5');

//Los botones de ▼ del html
const BTNDOWN1 = document.getElementById('btnDown1');
const BTNDOWN2 = document.getElementById('btnDown2');
const BTNDOWN3 = document.getElementById('btnDown3');
const BTNDOWN4 = document.getElementById('btnDown4');
const BTNDOWN5 = document.getElementById('btnDown5');

//La etiqueta <p> que tendra los valores de cada letra del abecedario
const BOX1 = document.getElementById('box1');
const BOX2 = document.getElementById('box2');
const BOX3 = document.getElementById('box3');
const BOX4 = document.getElementById('box4');
const BOX5 = document.getElementById('box5');

//El valor inicial que tomara el sub del array del abecedario
var iniciadorCaja1 = 0
var iniciadorCaja2 = 0
var iniciadorCaja3 = 0
var iniciadorCaja4 = 0
var iniciadorCaja5 = 0

//El mensaje que deben decifrar
const MENSAJE = 'UCXPS'

//Acciones de los botones ▲,▼ al dar click
BTNUP1.addEventListener('click',(ev) => {
    if (iniciadorCaja1==0 && ev.isTrusted) {
      BOX1.innerHTML = `${ABECEDARIO[iniciadorCaja1]}`
      iniciadorCaja1++
    }else if (iniciadorCaja1<26 && ev.isTrusted) {
      BOX1.innerHTML = `${ABECEDARIO[iniciadorCaja1]}`
      iniciadorCaja1++
    }else {
      iniciadorCaja1=0
      BOX1.innerHTML = `${ABECEDARIO[iniciadorCaja1]}`
      iniciadorCaja1++
    }
});

BTNDOWN1.addEventListener('click',(ev) => {
  if (ev.isTrusted && iniciadorCaja1>0) {
     iniciadorCaja1--
     BOX1.innerHTML = `${ABECEDARIO[iniciadorCaja1]}`
  }else {
    iniciadorCaja1 = 25
    BOX1.innerHTML = `${ABECEDARIO[iniciadorCaja1]}`
    }
});

BTNUP2.addEventListener('click',(ev) => {
    if (iniciadorCaja2==0 && ev.isTrusted) {
      BOX2.innerHTML = `${ABECEDARIO[iniciadorCaja2]}`
      iniciadorCaja2++
    }else if (iniciadorCaja2<26 && ev.isTrusted) {
      BOX2.innerHTML = `${ABECEDARIO[iniciadorCaja2]}`
      iniciadorCaja2++
    }else {
      iniciadorCaja2=0
      BOX2.innerHTML = `${ABECEDARIO[iniciadorCaja2]}`
      iniciadorCaja2++
    }
});

BTNDOWN2.addEventListener('click',(ev) => {
  if (ev.isTrusted && iniciadorCaja2>0) {
     iniciadorCaja2--
     BOX2.innerHTML = `${ABECEDARIO[iniciadorCaja2]}`
  }else {
    iniciadorCaja2 = 25
    BOX2.innerHTML = `${ABECEDARIO[iniciadorCaja2]}`
    }
});

BTNUP3.addEventListener('click',(ev) => {
    if (iniciadorCaja3==0 && ev.isTrusted) {
      BOX3.innerHTML = `${ABECEDARIO[iniciadorCaja3]}`
      iniciadorCaja3++
    }else if (iniciadorCaja3<26 && ev.isTrusted) {
      BOX3.innerHTML = `${ABECEDARIO[iniciadorCaja3]}`
      iniciadorCaja3++
    }else {
      iniciadorCaja3=0
      BOX3.innerHTML = `${ABECEDARIO[iniciadorCaja3]}`
      iniciadorCaja3++
    }
});

BTNDOWN3.addEventListener('click',(ev) => {
  if (ev.isTrusted && iniciadorCaja3>0) {
     iniciadorCaja3--
     BOX3.innerHTML = `${ABECEDARIO[iniciadorCaja3]}`
  }else {
    iniciadorCaja3 = 25
    BOX3.innerHTML = `${ABECEDARIO[iniciadorCaja3]}`
    }
});

BTNUP4.addEventListener('click',(ev) => {
    if (iniciadorCaja4==0 && ev.isTrusted) {
      BOX4.innerHTML = `${ABECEDARIO[iniciadorCaja4]}`
      iniciadorCaja4++
    }else if (iniciadorCaja4<26 && ev.isTrusted) {
      BOX4.innerHTML = `${ABECEDARIO[iniciadorCaja4]}`
      iniciadorCaja4++
    }else {
      iniciadorCaja4=0
      BOX4.innerHTML = `${ABECEDARIO[iniciadorCaja4]}`
      iniciadorCaja4++
    }
});

BTNDOWN4.addEventListener('click',(ev) => {
  if (ev.isTrusted && iniciadorCaja4>0) {
     iniciadorCaja4--
     BOX4.innerHTML = `${ABECEDARIO[iniciadorCaja4]}`
  }else {
    iniciadorCaja4 = 25
    BOX4.innerHTML = `${ABECEDARIO[iniciadorCaja4]}`
    }
});

BTNUP5.addEventListener('click',(ev) => {
    if (iniciadorCaja5==0 && ev.isTrusted) {
      BOX5.innerHTML = `${ABECEDARIO[iniciadorCaja5]}`
      iniciadorCaja5++
    }else if (iniciadorCaja5<26 && ev.isTrusted) {
      BOX5.innerHTML = `${ABECEDARIO[iniciadorCaja5]}`
      iniciadorCaja5++
    }else {
      iniciadorCaja5=0
      BOX5.innerHTML = `${ABECEDARIO[iniciadorCaja5]}`
      iniciadorCaja5++
    }
});

BTNDOWN5.addEventListener('click',(ev) => {
  if (ev.isTrusted && iniciadorCaja5>0) {
     iniciadorCaja5--
     BOX5.innerHTML = `${ABECEDARIO[iniciadorCaja5]}`
  }else {
    iniciadorCaja5 = 25
    BOX5.innerHTML = `${ABECEDARIO[iniciadorCaja5]}`
    }
});

//Accion del boton ¡GRITA!
GRITABTN.addEventListener('click',() => {
  var respuesta = BOX1.innerHTML+BOX2.innerHTML+BOX3.innerHTML+BOX4.innerHTML+BOX5.innerHTML
  if (respuesta === MENSAJE) {
    alert('Felicidades eres todo un master en las claves')
  }else {
    alert('Lo siento ese no es el grito que esperaba')
  }
});
