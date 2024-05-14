function iniciarSesion() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Realizar una solicitud al backend para iniciar sesión
    // Puedes utilizar fetch o XMLHttpRequest para hacer la solicitud
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
      // Manejar la respuesta del backend
      console.log(data);
    })
    .catch(error => {
      console.error('Error al iniciar sesión:', error);
    });
  }
  
  function pagarNomina() {
    // Realizar una solicitud al backend para pagar la nómina
    fetch('/api/nomina/pago', {
      method: 'POST'
    })
    .then(response => response.json())
    .then(data => {
      // Manejar la respuesta del backend
      console.log(data);
    })
    .catch(error => {
      console.error('Error al pagar la nómina:', error);
    });
  }