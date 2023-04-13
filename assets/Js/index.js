import { eventos, filtroTexto, buscardor,marcar,pintarCategorias } from "./function.js";
const mainCards = document.getElementById("main-id");

let evento;
fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then((response) => response.json())
  .then((datos) => {
    evento = datos.events;
    console.log(evento);
    mainCards.appendChild(eventos(evento));
    pintarCategorias(evento);
  })
  .catch((err) => console.log(err));

let busquedaTexto = buscardor.addEventListener("input", () => {
  const filtrados = filtroTexto(evento, buscardor.value);
  eventos(filtrados);
  marcar();
});

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
