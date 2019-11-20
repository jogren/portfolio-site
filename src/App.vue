<template>
  <main id="app">
    <div id="nav">
      <router-link to="/">About</router-link> |
      <a href="https://alumni.turing.io/alumni/jacob-ogren" target="_blank">Work</a> |
      <a href="https://alumni.turing.io/sites/default/files/resumes/Resume_Jacob_Ogren.pdf" target="_blank">Resume</a> |
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
  background-color: #3e3b39;
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
  border-bottom: #fff 1px solid;
}

#nav {
  padding: 30px 0px;
  width: 50%;
  margin: auto 0;
  border-bottom: #fff 1px solid;
}

#nav a {
  font-weight: bold;
  color: #fff;
  opacity: 0.5;
}

#nav a.router-link-exact-active {
  color: #fff;
  opacity: 1;
}
</style>
