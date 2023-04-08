const mainCards = document.getElementById('main-id')
const check = document.getElementById('check-box')
const buscardor = document.getElementById('barraBuscar')
/* Datos eventos */
const evento = data.eventos

const section = document.createElement('section')
section.className = "d-flex justify-content-center flex-wrap secbor py-4"

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
                                        <a href="./assets/pages/detail.html?id=${eventoRecorrido.name}" class="btn btn-primary">More information</a>
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
    if (!texto) {
        return eventos
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

mainCards.appendChild(eventos(evento))
check.innerHTML =  pintarCategorias(evento)





/* <div class="form-check form-check-inline col-xs-1 col-md-4 col-sm-7 col-lg-1">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                <label class="form-check-label" for="inlineCheckbox1">Festival of the collectivities</label>
            </div> */


/* <div class="card m-2" style="width: 18rem;">
    <img src="./assets/images/Feria-de-comidas7.jpg" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Festival of the collectivities</h5>
        <p class="card-text">Food Fair</p>
        <div class="priceBtn">
            <p>Price: 5</p>
            <a href="./assets/pages/detail.html" class="btn btn-primary">More information</a>
        </div>
    </div>
</div> */


