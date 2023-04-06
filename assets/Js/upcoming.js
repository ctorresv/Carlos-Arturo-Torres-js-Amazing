const mainCards = document.getElementById('main-up')
/* Datos eventos */
const evento = data.eventos

/* console.log(evento[0].date[0]) */

/* const date = evento[0].date

console.log(date.split('-')) */

const section = document.createElement('section')
section.className = "d-flex justify-content-center flex-wrap secbor py-4"



console.log(section)

function filtro(eventos){
    let filtrado = []
    for (recor of eventos){
        let date = recor.date.split('-')
        if (date[0] == "2022"){
            filtrado.push(recor)
            
        }
    }
    return filtrado
}
filtro(evento)

function eventos(evento){
    for (eventoRecorrido of evento){
        section.innerHTML += `<div class="card m-2" style="width: 18rem;">
                                <img src="${eventoRecorrido.image}" class="card-img-top img" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${eventoRecorrido.name}</h5>
                                    <p class="card-text">${eventoRecorrido.category}</p>
                                    <div class="priceBtn">
                                        <p>Price: ${eventoRecorrido.price}</p>
                                        <a href="./assets/pages/detail.html" class="btn btn-primary">More information</a>
                                    </div>
                                </div>
                            </div>`
    }
    return section
}

mainCards.appendChild(eventos(filtro(evento)))