const mainCards = document.getElementById('main-past')
const check = document.getElementById('check-pas')
const buscardor = document.getElementById('barraBuscarP')
/* Datos eventos */

let evento;
fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then((response) => response.json())
  .then((datos) => {
    evento = datos.events;
    console.log(evento);
    mainCards.appendChild(eventos(filtro(evento)))
    check.innerHTML =  pintarCategorias(evento)
  })
  .catch((err) => console.log(err));

const section = document.createElement('section')
section.className = "d-flex justify-content-center flex-wrap secbor py-4"

function filtro(eventos){
    let filtrado = []
    for (recor of eventos){
        let date = recor.date.split('-')
        if (date[0] == "2021"){
            filtrado.push(recor)
            
        }
    }
    return filtrado
}

function eventos(evento){
    section.innerHTML = ''
    for (eventoRecorrido of evento){
        section.innerHTML += `<div class="card m-2" style="width: 18rem;" data-category="${eventoRecorrido.category}">
                                <img src="${eventoRecorrido.image}" class="card-img-top img" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${eventoRecorrido.name}</h5>
                                    <p class="card-text">${eventoRecorrido.category}</p>
                                    <div class="priceBtn">
                                        <p>Price: ${eventoRecorrido.price}</p>
                                        <a href="./detail.html?id=${eventoRecorrido.name}" class="btn btn-primary">More information</a>
                                    </div>
                                </div>
                            </div>`
    }
    return section
}

function pintarCategorias(eventos){
    const categories = []
    eventos.forEach((evento) => {
        if (categories.indexOf(evento.category) === -1) {
            categories.push(evento.category)
        }
    })
    console.log(categories)
    let template = categories.reduce((acc,act) => {
        return acc +  `<div class="form-check form-check-inline col-xs-1 col-md-4 col-sm-7 col-lg-1">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="${act}" onClick="marcar()">
        <label class="form-check-label" for="inlineCheckbox1">${act}</label>
        </div>`
    },'')
    return template
}

function marcar() {
    const checkboxes = document.querySelectorAll('.form-check-input')
    const checkedCategories = Array.from(checkboxes).filter(check => check.checked).map(ch => ch.value)
    
    const cards = document.querySelectorAll('.card')
    cards.forEach(card => {
      const category = card.dataset.category
      const name = card.querySelector('.card-title').textContent.toLowerCase();
      if (checkedCategories.length === 0 && name.includes(buscardor.value.toLowerCase())) {
        card.style.display = 'block'
      } else {
        if (checkedCategories.includes(category) && name.includes(buscardor.value.toLowerCase())) {
          card.style.display = 'block'
        } else {
          card.style.display = 'none'
        }
      }
    })
}

function filtroTexto(eventos,texto){
    eventos = filtro(evento)
    if (!texto) {
        return filtro(evento)
      } else {
        let filtro = eventos.filter(evento => {
          return evento.name.toLowerCase().includes(texto.toLowerCase()) || evento.category.toLowerCase().includes(texto.toLowerCase())
        })
        return filtro
      }
}

const checkboxes = document.querySelectorAll('.form-check-input')
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', marcar)
})

let busquedaTexto = buscardor.addEventListener('input', ()=>{
    const filtrados = filtroTexto(evento, buscardor.value)
    eventos(filtrados)
    marcar()
})

/* mainCards.appendChild(eventos(filtro(evento)))
check.innerHTML =  pintarCategorias(evento) */
