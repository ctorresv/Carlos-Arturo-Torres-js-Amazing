import { filtroUp, filtroP } from "./function.js";
const tablaS = document.getElementById("pipo");
const eventoStatistics = document.getElementById("eventsStatics");
const upcomingEvents = document.getElementById("upcomingEvents");
const pastEvents = document.getElementById("pastEvents");
let evento;
fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then((response) => response.json())
  .then((datos) => {
    evento = datos.events;
    console.log(evento);
    tablaE(evento);
    tablaUp(filtroUp(evento));
    tablaUp(filtroP(evento));
  })
  .catch((err) => console.log(err));

function tablaUp(eventos) {
  console.log(eventos);
  const categories = [];
  eventos.forEach((evento) => {
    if (categories.indexOf(evento.category) === -1) {
      categories.push(evento.category);
    }
  });
  let fragment = document.createDocumentFragment();
  let categoria;
  let ganancia;
  let asistencia;
  categories.forEach((category) => {
    let contG = 0;
    let contA = 0;
    let contE = 0;
    let eventoCategoria = eventos.filter((evento) =>
      evento.category.includes(category)
    );
    categoria = category;
    eventoCategoria.forEach((ec) => {
      if (ec.assistance === undefined) {
        contG += parseInt(ec.estimate) * parseInt(ec.price);
        contA += parseInt(ec.capacity);
        contE += parseInt(ec.estimate);
      } else {
        contG += parseInt(ec.assistance) * parseInt(ec.price);
        contA += parseInt(ec.capacity);
        contE += parseInt(ec.assistance);
      }
    });
    asistencia = (
      ((contE / eventoCategoria.length) * 100) /
      (contA / eventoCategoria.length)
    ).toFixed(2);
    ganancia = contG;
    let ta = template(categoria, ganancia, `${asistencia}%`);
    fragment.appendChild(ta);
  });
  if (eventos[0].assistance === undefined) {
    upcomingEvents.appendChild(fragment);
  } else {
    pastEvents.appendChild(fragment);
  }
}

function tablaE(eventos) {
  let porcentajeMasAlto = 0;
  let porcentajeMasBajo = 100;
  let masCapacidad = 0;
  let eventoMAsBajo;
  let eventoMasAlto;
  let eventoMasCapacidad;
  let porcentaje;
  eventos.forEach((element) => {
    if (!isNaN(element.assistance)) {
      porcentaje =
        (parseInt(element.assistance) * 100) / parseInt(element.capacity);
    }
    if (porcentaje > porcentajeMasAlto) {
      porcentajeMasAlto = porcentaje;
      eventoMasAlto = element;
    }
    if (porcentaje < porcentajeMasBajo) {
      porcentajeMasBajo = porcentaje;
      eventoMAsBajo = element;
    }
    if (element.capacity > masCapacidad) {
      masCapacidad = element.capacity;
      eventoMasCapacidad = element;
    }
  });
  let ta = template(
    `${eventoMasAlto.name} ${porcentajeMasAlto}%`,
    `${eventoMAsBajo.name} ${porcentajeMasBajo}%`,
    `${eventoMasCapacidad.name} Capacidad: ${masCapacidad}`
  );
  eventoStatistics.appendChild(ta);
}

function template(categoria, ganacias, asistencia) {
  let tr = document.createElement("tr");
  let th1 = document.createElement("td");
  let th2 = document.createElement("td");
  let th3 = document.createElement("td");
  th1.innerText = categoria;
  th2.innerText = ganacias;
  th3.innerHTML = asistencia;
  tr.append(th1, th2, th3);
  return tr;
}
