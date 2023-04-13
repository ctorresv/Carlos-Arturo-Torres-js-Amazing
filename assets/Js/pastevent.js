import { eventosUP,filtroTexto,buscardor,marcar,pintarCategorias,filtroP} from "./function.js";
const mainCards = document.getElementById('main-past')
/* Datos eventos */

let evento;
fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then((response) => response.json())
  .then((datos) => {
    evento = datos.events;
    console.log(evento);
    evento = filtroP(evento)
    mainCards.appendChild(eventosUP(evento))
    pintarCategorias(evento);
  })
  .catch((err) => console.log(err));

let busquedaTexto = buscardor.addEventListener('input', ()=>{
    const filtrados = filtroTexto(evento, buscardor.value)
    eventosUP(filtrados)
    marcar()
})


