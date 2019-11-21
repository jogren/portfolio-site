<template>
  <div class="content-container contact-container">
    <h1>get in touch</h1>
    <a href="tel:+16126556411"><img src="../../public/phone-solid.svg"/> 612.655.6411</a>
    <a href="mailto:jogren0044@gmail.com"><img src="../../public/envelope-solid.svg"/> jogren0044@gmail.com</a>
    <a href="https://www.linkedin.com/in/jacobogren/" target="_blank"><img src="../../public/linkedin-in-brands.svg"/> linkedin.com/in/jacobogren/</a>
    <a href="https://github.com/jogren" target="_blank"><img src="../../public/github-brands.svg"/> github.com/jogren</a>
    <a href="https://alumni.turing.io/alumni/jacob-ogren" target="_blank"><img src="../../public/graduation-cap-solid.svg"/> alumni.turing.io/alumni/jacob-ogren</a>
  </div>
</template>

<script>
  
export default {
  name: 'Contact'
}
</script>

<style scoped>
.contact-container {
  background-color: #ffd60c;
}

.contact-container a {
  text-decoration: none;
  display: block;
  color: #3e3b39;
  margin-bottom: 12px;
}

h1 {
  font-weight: 500;
}

.contact-container img {
  height: 15px;
}

</style>