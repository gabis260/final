function obtenerEmpleados() {
    fetch('/api/empleados')
      .then(response => response.json())
      .then(data => {
        // Actualizar la tabla de empleados con los datos obtenidos
        const tbody = document.getElementById('empleados-tabla').getElementsByTagName('tbody')[0];
        tbody.innerHTML = '';
        data.forEach(empleado => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${empleado.id}</td>
            <td>${empleado.nombre}</td>
            <td>${empleado.email}</td>
            <!-- Agrega más columnas según tus necesidades -->
          `;
          tbody.appendChild(row);
        });
      })
      .catch(error => console.error('Error al obtener empleados:', error));
  }
  
  // Llamar a la función obtenerEmpleados() al cargar la página
  window.onload = obtenerEmpleados;


  function crearEmpleado() {
    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
  
    const nuevoEmpleado = {
      nombre: nombreInput.value,
      email: emailInput.value,
      password: passwordInput.value
    };
  
    fetch('/api/empleados', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(nuevoEmpleado)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data.mensaje);
      // Aquí puedes realizar acciones adicionales, como limpiar los campos del formulario
      // o actualizar la tabla de empleados después de crear un nuevo empleado
      nombreInput.value = '';
      emailInput.value = '';
      passwordInput.value = '';
      obtenerEmpleados(); // Asumiendo que tienes una función `obtenerEmpleados` para actualizar la tabla
    })
    .catch(error => {
      console.error('Error al crear empleado:', error);
    });
  }


  // En tu archivo empleados.js
const crearEmpleadoForm = document.getElementById('crear-empleado-form');
crearEmpleadoForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevenir el envío del formulario por defecto
  crearEmpleado();
});