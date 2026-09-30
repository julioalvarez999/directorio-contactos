let contactos = [];

const nombre = document.getElementById("nombre");
const telefono = document.getElementById("telefono");
const btnAgregar = document.getElementById("btnAgregar");
const listaContactos = document.getElementById("listaContactos");
const mensajeVacio = document.getElementById("mensajeVacio");

function mostrarContactos(lista) {
  listaContactos.innerHTML = "";

  if (lista.length === 0) {
    mensajeVacio.style.display = "block";
    return;
  }

  mensajeVacio.style.display = "none";

  lista.forEach(function (contacto) {
    const li = document.createElement("li");
    li.classList.add("contacto");

    li.innerHTML = `
      <div class="datos">
        <span class="nombre-contacto">${contacto.nombre}</span>
        <span class="telefono-contacto">${contacto.telefono}</span>
      </div>
    `;

    listaContactos.appendChild(li);
  });
}

btnAgregar.addEventListener("click", function () {
  const nombreIngresado = nombre.value.trim();
  const telefonoIngresado = telefono.value.trim();

  if (nombreIngresado === "" || telefonoIngresado === "") {
    return;
  }

  contactos.push({
    id: Date.now(),
    nombre: nombreIngresado,
    telefono: telefonoIngresado
  });

  nombre.value = "";
  telefono.value = "";

  mostrarContactos(contactos);
});
