export const buscardor = document.getElementById("barraBuscar");
export const check = document.getElementById("check-box");
console.log(check)
export function eventos(evento) {
  const section = document.createElement("section");
  section.className = "d-flex justify-content-center flex-wrap secbor py-4";
  section.innerHTML = "";
  for (let eventoRecorrido of evento) {
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
                            </div>`;
  }
  return section;
}

export function eventosUP(evento) {
  const section = document.createElement("section");
  section.className = "d-flex justify-content-center flex-wrap secbor py-4";
  section.innerHTML = "";
  for (let eventoRecorrido of evento) {
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
                            </div>`;
  }
  return section;
}

export function filtroP(eventos){
  let filtrado = eventos.filter(evento => {
    let date = evento.date.split('-')
    return parseInt(date[0]) < 2023
  })
  return filtrado
}

export function filtroUp(eventos){
  let filtrado = eventos.filter(evento => {
    let date = evento.date.split('-')
    return parseInt(date[0]) >= 2023
  })
  return filtrado
}

export function pintarCategorias(eventos) {
  const categories = [];
  eventos.forEach((evento) => {
    if (categories.indexOf(evento.category) === -1) {
      categories.push(evento.category);
    }
  });

  console.log(categories)
  let fragment = document.createDocumentFragment();
  categories.forEach((category, i) => {
    console.log(category , i)
    fragment.appendChild(templateCheckbox(i, category));
  });
  console.log(fragment)
  console.log(check);
  check.appendChild(fragment);
  asignarEventos(categories);
}

export function filtroTexto(eventos, texto) {
  if (!texto) {
    return eventos;
  } else {
    let filtro = eventos.filter((evento) => {
      return (
        evento.name.toLowerCase().includes(texto.toLowerCase()) ||
        evento.category.toLowerCase().includes(texto.toLowerCase())
      );
    });
    return filtro;
  }
}

export function marcar() {
  const checkboxes = document.querySelectorAll(".form-check-input");
  const checkedCategories = Array.from(checkboxes)
    .filter((check) => check.checked)
    .map((ch) => ch.value);

  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    const category = card.dataset.category;
    const name = card.querySelector(".card-title").textContent.toLowerCase();
    if (
      checkedCategories.length === 0 &&
      name.includes(buscardor.value.toLowerCase())
    ) {
      card.style.display = "block";
    } else {
      if (
        checkedCategories.includes(category) &&
        name.includes(buscardor.value.toLowerCase())
      ) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    }
  });
}

export function templateCheckbox(index, category) {
  let template = document.createElement("div");
  template.className =
    "form-check form-check-inline col-xs-1 col-md-4 col-sm-7 col-lg-1";
  let inputCheck = document.createElement("input");
  inputCheck.className = "form-check-input";
  inputCheck.type = "checkbox";
  inputCheck.id = `inlineCheckbox${index}`;
  inputCheck.value = category;
  let label = document.createElement("label");
  label.className = "form-check-label";
  label.htmlFor = `inlineCheckbox${index}`;
  label.innerText = category;
  template.append(inputCheck, label);
  console.log(template)
  return template;
}

export function asignarEventos(categories) {
  for (let i = 0; i < categories.length; i++) {
    let checkbox = document.getElementById(`inlineCheckbox${i}`);
    checkbox.addEventListener("click", marcar);
  }
}
