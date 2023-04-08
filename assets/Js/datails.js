const detail = document.getElementById('main-detail')
const urlParams = location.search
const params = new URLSearchParams (urlParams)
const id = params.get("id")
const datos = data.eventos

let targeta = datos.find(evento => evento.name == id)
console.log(datos)
console.log(targeta)

function eventos(evento){
    let card = ""
    card = `<div class="card m-2 carta" style="width: 18rem;">
                <img class="w-100 " src="${evento.image}" alt="Card image cap">
                <div class="card-body">
                    <div class="table-responsive">
                        <h4 class="card-title">${evento.name}</h4>
                        <p class="card-text">${evento.description}</p>
                        <table class="table table-primary">
                            <thead>
                                <tr>
                                    <th colspan="2" scope="col">Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="">
                                    <td scope="row">Category</td>
                                    <td>${evento.category}</td>
                                </tr>
                                <tr class="">
                                    <td scope="row">Place</td>
                                    <td>${evento.place}</td>
                                </tr>
                                <tr class="">
                                    <td scope="row">Date</td>
                                    <td>${evento.date}</td>
                                </tr>
                                <tr class="">
                                    <td scope="row">Price</td>
                                    <td>${evento.price}</td>
                                </tr>
                                <tr class="">
                                    <td scope="row">Capacity</td>
                                    <td>${evento.capacity}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>`
    return card
}
detail.innerHTML = eventos(targeta)

/* <div class="card m-2 carta" style="width: 18rem;">
            <img class="w-100 " src="../images/Concierto-de-musica1.jpg" alt="Card image cap">
            <div class="card-body">
                <div class="table-responsive">
                    <h4 class="card-title">Metallica in concert</h4>
                    <p class="card-text">The only concert of the most emblematic band in the world</p>
                    <table class="table table-primary">
                        <thead>
                            <tr>
                                <th colspan="2" scope="col">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="">
                                <td scope="row">Date</td>
                                <td>2021-12-12</td>
                            </tr>
                            <tr class="">
                                <td scope="row">Place</td>
                                <td>Room A</td>
                            </tr>
                            <tr class="">
                                <td scope="row">Price</td>
                                <td>5</td>
                            </tr>
                            <tr class="">
                                <td scope="row">Capacity</td>
                                <td>5449886</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div> */