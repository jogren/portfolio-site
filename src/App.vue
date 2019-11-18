<template>
  <main id="app">
    <div id="nav">
      <router-link to="/">About</router-link> |
      <router-link to="/work">Work</router-link> |
      <router-link to="/resume">Resume</router-link> |
      <router-link to="/contact">Contact</router-link>
    </div>
    <Header />
    <router-view />
  </main>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  font-family: 'Heebo', sans-serif;
  font-weight: 100;
}

body {
  height: 100vh;
  width: 100%;
  margin: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 70%;
  height: 70%;
  position: relative;
  margin: 0 auto;
  display: flex;
}

#nav {
  padding: 30px 0px;
  width: 50%;
  margin: auto 0;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
