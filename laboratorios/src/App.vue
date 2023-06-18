<template>
  <div class=bar-nav>
    <header class="hero">
      <nav class="nav container">
        <div class="nav__logo">
          <router-link to="/" class="nav__title">Software de Gestion de Laboratorios</router-link>
        </div>
        <ul class="nav__link nav__link--menu">
          <li class="nav__items">
            <router-link to="/sesion" class="nav__links">Inicio Sesion</router-link>
          </li>
          <li class="nav__items">
            <router-link to="/registro" class="nav__links">Registrarse</router-link>
          </li>
          <img src="images/close.svg" class="nav__close">
        </ul>
        <div class="nav__menu">
          <img src="images/menu.svg" class="nav__img">
        </div>
      </nav>
      <center>
        <li class="nav__general">
          <router-link to="/general" class="nav__general">General</router-link>
        </li>
      </center>

    </header>
    <router-view />
  </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.hero {
  width: 100%;
  position: relative;
  display: grid;
  grid-template-rows: 100px 1fr;
  color: #fff;
}

.hero::before {
  content: "";
  position: absolute;
  z-index: -1;
}

.hero__container {
  max-width: 800px;
  --padding-container: 0;
  display: grid;
  grid-auto-rows: max-content;
  align-content: center;
  gap: 2em;
  padding-bottom: 50px;
  text-align: center;
}

.hero__title {
  font-size: 3rem;
}

.hero__paragraph {
  margin-bottom: 5px;
  margin-top: 10px;
}

.nav {
  --padding-container: 0;
  height: 100%;
  display: flex;
  align-items: center;
}

.nav__title {
  font-size: 40px;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  margin-right: 40rem;  /*ajustar los botones*/
  text-align: center;
  font-weight: 700;
  text-shadow: 2px 1px 2px black,
    1px 1px 1px black,
    -2px 1px 2px black,
    2px -1px 2px black;
}

.nav__link {
  margin-left: auto;
  padding: 0;
  display: grid;
  margin-left: auto;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  gap: 2em;
  font-size: 20px;
  text-shadow: 2px 1px 2px grey,
    1px 1px 1px grey,
    -2px 1px 2px grey,
    2px -1px 2px grey;
}

.nav__items {
  list-style: none;
}

.nav__links {
  color: #fff;
  text-decoration: none;
}

.nav__menu {
  margin-left: auto;
  cursor: pointer;
  display: none;
}

.nav__img {
  display: block;
  width: 30px;
}

.nav__close {
  display: var(--show, none); 
}




.nav__general {
  list-style: none;
}

.nav__general {
  color: #ffffff;
  font:bold;
  text-align: center;
  text-decoration: none;
  margin-left: 33rem;
  margin-top: -30px;
  display: grid;
  grid-auto-columns: max-content;
  font-size: 22px;
  text-shadow: 2px 1px 2px rgb(106, 106, 106),
    1px 1px 1px rgb(109, 109, 109),
    -2px 1px 2px rgb(115, 115, 115),
    2px -1px 2px rgb(71, 71, 71);
}

</style>
