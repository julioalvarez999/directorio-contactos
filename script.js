let contactos = [];

const nombre = document.getElementById("nombre");
const telefono = document.getElementById("telefono");
const btnAgregar = document.getElementById("btnAgregar");
const listaContactos = document.getElementById("listaContactos");
const mensajeVacio = document.getElementById("mensajeVacio");
const contador = document.getElementById("contador");

function actualizarContador() {
  contador.textContent = contactos.length;
}

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

    const datos = document.createElement("div");
    datos.classList.add("datos");

    const nombreContacto = document.createElement("span");
    nombreContacto.classList.add("nombre-contacto");
    nombreContacto.textContent = contacto.nombre;

    const telefonoContacto = document.createElement("span");
    telefonoContacto.classList.add("telefono-contacto");
    telefonoContacto.textContent = contacto.telefono;

    const btnEliminar = document.createElement("button");
    btnEliminar.classList.add("btnEliminar");
    btnEliminar.textContent = "Eliminar";

    btnEliminar.addEventListener("click", function () {
      contactos = contactos.filter(function (item) {
        return item.id !== contacto.id;
      });

      actualizarContador();
      mostrarContactos(contactos);
    });

    datos.appendChild(nombreContacto);
    datos.appendChild(telefonoContacto);

    li.appendChild(datos);
    li.appendChild(btnEliminar);

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

  actualizarContador();
  mostrarContactos(contactos);
});
