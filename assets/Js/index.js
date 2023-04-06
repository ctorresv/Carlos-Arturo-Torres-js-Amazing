const mainCards = document.getElementById('main-id')
/* Datos eventos */
const evento = data.eventos

console.log(evento)

const section = document.createElement('section')
section.className = "d-flex justify-content-center flex-wrap secbor py-4"



console.log(section)

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
mainCards.appendChild(eventos(evento))



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


