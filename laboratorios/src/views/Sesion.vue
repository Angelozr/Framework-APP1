<template>
    <body>
    <form onsubmit="Login()" class="formulario" id="formulario-login">
        <center>
            <h2>Inicio de Sesión</h2>
        </center>
        <div class="contenedor">
            <div class="input-contenedor">
                <i class="fas fa-envelope icon"></i>
                <input type="text" id="correo" name="correo" placeholder="Ingrese su correo electrónico">
            </div>
                <div class="input-contenedor">
                <i class="fas fa-key icon"></i>
                <input type="password" id="password" name="password" placeholder="Ingrese su contraseña"></div> 
            <center><input type="button" value="Iniciar sesión" class="button" id="boton" onclick="Login()"></center>
            <hr>
            <b><p>¿Aún no tienes Cuenta?<a class="link" href="../registro/Registro.html"> Registrate</a></p></b>
            <center><a href="../principa/principal.html" class="button1"><b>VOLVER A PÁGINA PRINCIPAL</b></a></center>
        </div>
    </form>
    <img src="../assets/inicio.jpg" alt="">
</body>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  
};

</script>

<style scoped>
h1 {
  text-align: center;
  background: rgba(17, 255, 0, 0);
  /* Establece el color de fondo del encabezado */
}
img {
  background-image: url('../assets/inicio.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  /* Define la fuente para todo el cuerpo */
  margin: 4;
  /* Margen del cuerpo */
}

* {
  box-sizing: border-box;
}

.contenedor {
  width: 99%;
  /* Ancho del contenedor */
  padding: 15px;
  /* Relleno del contenedor */
}

.formulario {
  background-color: rgba(237, 237, 237, 0.633);
  /* Color de fondo del formulario */
  margin: 0 auto;
  /* Margen del formulario */
  margin-top: 100px;
  /* Posición superior del formulario */
  padding: 3px;
  /* Relleno del formulario */
  border-radius: 50%;
  /* Radio de borde del formulario */
  max-width: 600px;
  /* Ancho máximo del formulario */
  transform: translate(0%, -20%);
  /* Establece la posición del formulario */
}

input[type="text"],
input[type="password"] {
  font-size: 20px;
  /* Establece el tamaño de fuente para los campos de texto */
  width: 100%;
  /* Ancho de los campos de texto */
  padding: 10px;
  border: none;
  /* Elimina el borde de los campos de texto */
}

.input-contenedor {
  margin-bottom: 15px;
  /* Define el margen inferior del contenedor de entrada */
  border: 1px solid rgba(0, 0, 0, 0.999);
}

.icon {
  min-width: 50px;
  /* Fijamos el ancho mínimo del icono */
  text-align: center;
  /* Alineamos el icono */
  color: #999;
  /* Color del icono */
}

.button {
  border: none;
  /* Elimina el borde del botón */
  width: 35%;
  /* Define el ancho del botón */
  color: rgb(0, 0, 0);
  /* Color del texto del botón */
  font-size: 20px;
  /* Tamaño de fuente del botón */
  background: #ffffff;
  /* Color de fondo del botón */
  padding: 15px 20px;
  /* Relleno del botón */
  border-radius: 5px;
  cursor: pointer;
  /* Establece el cursor del botón */
  text-align: center;
}

.button:hover {
  background: rgba(21, 173, 224, 0.786);
}

p {
  /* Centrar Parrafos */
  text-align: center;
}

.link {
  /* Estilo para los enlaces sin decoración, color y peso de fuente */
  text-decoration: none;
  color: rgba(255, 0, 0, 0.911);
  font-weight: 600;
}

.link:hover {
  /* Efecto para los enlaces con hover */
  color: rgba(0, 0, 0, 0.911);
}

.button1 {
  color: rgb(255, 0, 0);
}

@media (min-width: 768px) {

  /* Estilos para la presentación responsiva en dispositivos móviles */
  .formulario {
    margin-top: 200px;
    border-radius: 2%;
  }
}
</style>