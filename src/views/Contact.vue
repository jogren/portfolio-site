<template>
  <div class="content-container contact-container">
    <MessageForm v-if="this.sendMessage" v-bind:sendMessage="sendMessage" v-bind:toggleSendMessage="toggleSendMessage"/>
    <div v-else class="contact-links">
      <h1>get in touch</h1>
      <a href="tel:+16126556411"><img src="../../public/phone-solid.svg"/> 612.655.6411</a>
      <a href="mailto:jogren0044@gmail.com"><img src="../../public/envelope-solid.svg"/> jogren0044@gmail.com</a>
      <a href="https://www.linkedin.com/in/jacobogren/" target="_blank"><img src="../../public/linkedin-in-brands.svg"/> linkedin.com/in/jacobogren/</a>
      <a href="https://github.com/jogren" target="_blank"><img src="../../public/github-brands.svg"/> github.com/jogren</a>
      <a href="https://alumni.turing.io/alumni/jacob-ogren" target="_blank"><img src="../../public/graduation-cap-solid.svg"/> alumni.turing.io/alumni/jacob-ogren</a>
      <button @click="toggleSendMessage">Send Me a Message!</button>
    </div>
  </div>
</template>

<script>
import MessageForm from '../components/MessageForm';

export default {
  name: 'Contact',
  components: {
    MessageForm
  },
  methods: {
    toggleSendMessage() {
      this.sendMessage = !this.sendMessage;
    }
  },
  data() {
    return {
      sendMessage: false
    }
  }
}
</script>

<style scoped>
.contact-container {
  background-color: #ffd60c;
  position: relative;
}

h1 {
  font-weight: 500;
}

.contact-links a {
  text-decoration: none;
  display: block;
  color: #3e3b39;
  margin-bottom: 12px;
}

.contact-links img {
  height: 15px;
}

.contact-links button {
  background-color: #ffd60c;
  border: 1px solid #3e3b39;  
  color: #3e3b39;
  font-size: 14px;
  font-weight: 500;
  padding: 5px;
  margin-top: 20px;
}

.contact-links button:hover {
  background-color: #3e3b39;
  border: 1px solid #3e3b39;  
  color: #ffd60c;
}

@media only screen and (max-width: 570px) {
  h1 {
    margin-top: 0px;
  }

  .contact-container {
    padding: 30px 14px;
  }
}

</style>