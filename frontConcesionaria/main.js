async function obtenerDatos() {
    const response = await fetch('http://localhost:8080/cliente/get');
    const datos = await response.json();
    return datos;
  }

  async function agregarDatos() {
    const datos = await obtenerDatos();
    console.log(datos);
    const tbody = document.querySelector('#clientes');
  
    if (tbody) {
      datos.forEach((dato) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${dato.id}</td>
          <td>${dato.nombre}</td>
          <td>${dato.edad}</td>
          <td>${dato.telefono}</td>
          <td>${dato.correo}</td>
          <td>${dato.direccion}</td>

        `;
        tbody.appendChild(tr);
      });
    }
  }
  
  

  window.addEventListener('load', agregarDatos);


  async function obtenerDatosEmpleados() {
    const response = await fetch('http://localhost:8080/empleado/get');
    const datos = await response.json();
    return datos;
}

async function agregarDatosEmpleado() {
    const datos = await obtenerDatosEmpleados();
    console.log(datos);
    const tbody = document.querySelector('#empleados');
  
    if (tbody) {
        datos.forEach((dato) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${dato.id}</td>
                <td>${dato.nombre}</td>
                <td>${dato.telefono}</td>
                <td>${dato.direccion}</td>
                <td>${dato.puesto}</td>
                <td>${dato.correo}</td>
            `;
            tbody.appendChild(tr);
        });
    }
}

window.addEventListener('load', agregarDatosEmpleado);


async function obtenerDatosProv() {
  const response = await fetch('http://localhost:8080/proveedor/get');
  const datos = await response.json();
  return datos;
}

async function agregarDatosProv() {
  const datos = await obtenerDatosProv();
  console.log(datos);
  const tbody = document.querySelector('#proveedores');

  if (tbody) {
      datos.forEach((dato) => {
          const tr = document.createElement('tr');
          tr.innerHTML = `
              <td>${dato.id}</td>
              <td>${dato.nombre}</td>
              <td>${dato.direccion}</td>
              <td>${dato.correo}</td>
              <td>${dato.telefono}</td>
              <td>${dato.codigoPostal}</td>
          `;
          tbody.appendChild(tr);
      });
  }
}

window.addEventListener('load', agregarDatosProv);


async function obtenerDatosServ() {
  const response = await fetch('http://localhost:8080/servicio/get');
  const datos = await response.json();
  return datos;
}

async function agregarDatosServ() {
  const datos = await obtenerDatosServ();
  console.log(datos);
  const tbody = document.querySelector('#servicios');

  if (tbody) {
      datos.forEach((dato) => {
          const tr = document.createElement('tr');
          tr.innerHTML = `
              <td>${dato.id}</td>
              <td>${dato.nombreCliente}</td>
              <td>${dato.nombreEmpleado}</td>
              <td>${dato.tipoServicio}</td>
              <td>${dato.fecha}</td>
              <td>${dato.costo}</td>
          `;
          tbody.appendChild(tr);
      });
  }
}

window.addEventListener('load', agregarDatosServ);


async function obtenerDatosSucurs() {
  const response = await fetch('http://localhost:8080/sucursal/get');
  const datos = await response.json();
  return datos;
}

async function agregarDatosSucurs() {
  const datos = await obtenerDatosSucurs();
  console.log(datos);
  const tbody = document.querySelector('#sucursales');

  if (tbody) {
      datos.forEach((dato) => {
          const tr = document.createElement('tr');
          tr.innerHTML = `
              <td>${dato.id}</td>
              <td>${dato.nombre}</td>
              <td>${dato.direccion}</td>
              <td>${dato.telefono}</td>
              <td>${dato.codigoPostal}</td>
          `;
          tbody.appendChild(tr);
      });
  }
}

window.addEventListener('load', agregarDatosSucurs);



async function obtenerDatosVehiculo() {
  const response = await fetch('http://localhost:8080/vehiculo/get');
  const datos = await response.json();
  return datos;
}

async function agregarDatosVehiculo() {
  const datos = await obtenerDatosVehiculo();
  console.log(datos);
  const tbody = document.querySelector('#vehiculos');

  if (tbody) {
      datos.forEach((dato) => {
          const tr = document.createElement('tr');
          tr.innerHTML = `
              <td>${dato.id}</td>
              <td>${dato.modelo}</td>
              <td>${dato.marca}</td>
              <td>${dato.anio}</td>
              <td>${dato.color}</td>
              <td>${dato.precio}</td>
              <td>${dato.tipo}</td>
          `;
          tbody.appendChild(tr);
      });
  }
}

window.addEventListener('load', agregarDatosVehiculo);


async function obtenerDatosVenta() {
  const response = await fetch('http://localhost:8080/venta/get');
  const datos = await response.json();
  return datos;
}

async function agregarDatosVenta() {
  const datos = await obtenerDatosVenta();
  console.log(datos);
  const tbody = document.querySelector('#ventas');

  if (tbody) {
      datos.forEach((dato) => {
          const tr = document.createElement('tr');
          tr.innerHTML = `
              <td>${dato.id}</td>
              <td>${dato.nombreCliente}</td>
              <td>${dato.nombreEmpleado}</td>
              <td>${dato.idVehiculo}</td>
              <td>${dato.cantidadPagada}</td>
              <td>${dato.fechaTransaccion}</td>
          `;
          tbody.appendChild(tr);
      });
  }
}

window.addEventListener('load', agregarDatosVenta);