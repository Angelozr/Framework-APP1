<template>
   <body>
    <header>
        <h1>Mis datos</h1>
    </header>
    <main>
        <form onsubmit="actualizarDatos(event)">
            <h2>Editar datos personales</h2>
            <label for="correo">Correo electrónico:</label>
            <input type="email" id="correo" name="correo" value="juan.castillo@example.com">
            <br>
            <label for="telefono">Teléfono:</label>
            <input type="tel" id="telefono" name="telefono" value="555-1234">
            <br>
            <label for="domicilio">Domicilio:</label>
            <input type="text" id="domicilio" name="domicilio" value="Avenida Eloy Alfaro">
            <br>
            <input type="submit" value="Guardar cambios">
        </form>
        <section>
            <h2>Datos personales</h2>
            <p><strong>C.I:</strong> <span id="mostrar-c.i">1316671468</span></p>
            <p><strong>Nombre:</strong> <span id="mostrar-nombre">Juan Andres</span></p>
            <p><strong>Apellido:</strong> <span id="mostrar-apellido">Castillo</span></p>
            <p><strong>Correo electrónico:</strong> <span id="mostrar-correo">juan.castillo@example.com</span></p>
            <p><strong>Teléfono:</strong> <span id="mostrar-telefono">555-1234</span></p>
            <p><strong>Domicilio:</strong> <span id="mostrar-domicilio">Avenida Eloy Alfaro</span></p>
            <p><strong>Área:</strong> Ingenieria en TI</p>
        </section>
    </main>
    
</body>
</template>
  

<script>
import Swal from 'sweetalert2';

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    actualizarDatos(event) {
      event.preventDefault(); // previene el comportamiento por defecto de enviar el formulario
      // Obtiene los valores actualizados del formulario
      var correo = document.getElementById("correo").value;
      var telefono = document.getElementById("telefono").value;
      var domicilio = document.getElementById("domicilio").value;

      // Actualiza los valores de los elementos de la sección "Datos personales"
      document.querySelector("section p:nth-of-type(4)").innerHTML = "<strong>Correo electrónico:</strong> " + correo;
      document.querySelector("section p:nth-of-type(5)").innerHTML = "<strong>Teléfono:</strong> " + telefono;
      document.querySelector("section p:nth-of-type(6)").innerHTML = "<strong>Domicilio:</strong> " + domicilio;

      // Muestra un mensaje de confirmación con SweetAlert2
      Swal.fire({
        icon: 'success',
        title: '¡Datos actualizados!',
        text: 'Los datos se actualizaron correctamente.',
        timer: 2000,
        showConfirmButton: false,
      });
    },
  },
  mounted() {
    this.$swal = Swal; // Configura SweetAlert2 como un método global
  },
}
</script>



<style>
header {
    background-color: #2e86c1;
    color: white;
    padding: 20px;
}

h1 {
    margin: 0;
}

form {
    margin: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

label {
    display: inline-block;
    width: 100px;
}

input[type="text"], input[type="email"], input[type="tel"] {
    width: 200px;
    padding: 5px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

input[type="submit"] {
    background-color: #2e86c1;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
}

section {
    margin: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

h2 {
    margin-top: 0;
}



</style>
  