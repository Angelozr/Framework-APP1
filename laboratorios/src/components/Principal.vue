<template>
  <body>
    <img src="../assets/princi.jpg" alt="">
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  margin: 0px;
  padding: 0px ;
  box-sizing: border-box;
}

/* Estilos del body */
body {
  background-color: white;
  font-family: 'Times New Roman', Times, serif;
}

/* Estilos del Titulo */
.h1 {
  font-size: 100%;
  position: fixed;
  color: rgb(14, 162, 195);
  right: 10px;
}

.container {
  display: flex; /*movimiento del contenedor*/
  height: 55px;  /*Ajusta el anchor del fondo color azul*/
  justify-content: center;
  margin-top: 0px; /*Establece la posicion de altura del titulo*/
  background-color: #2e86c1;
  color: aliceblue;

}

nav a { /*ajustes de la barra de navegacion*/
  color: #2e86c1;
  text-decoration: none;
  font-weight: bolder;
  font-size: 2.1rem;
  padding: 0 2rem;
  /* Ajuste de espacio entre elementos de la barra de navegación */
}

nav a:hover {
  background-color: #ffffffa1;
  cursor: pointer;
  color: #000000;
}

nav ul {
  position: fixed;
  background-color: rgba(128, 128, 128, 0);
  width: 1 2rem;
  right: 35rem;
  /*alinear hacia derecha o izquierda la barra*/
  top: 4000px;
  /*Ajustar la barra hacia abajo o arriba*/  
  
}
/* Estilos de la imagen de fondo*/
img {
  background-image: url('../assets/princi.jpg');
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

/* Estilos de la barra de navegación para dispositivos con pantalla grande */
@media screen and (min-width: 600px) {
  body {
    font-size: 14px;
  }
  
  .container {
    flex-direction: column;
  }

}
</style>
