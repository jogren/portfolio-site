<template>
  <div>
    <form v-if="!this.submitFormStatus">
      <p @click="toggleSendMessage" @keyup.enter="toggleSendMessage" class="back-btn" tabindex="0">◀ back</p>
      <label> Name:*
        <input 
          type="text"
          v-model="name"/>
      </label>
      <label> Email:*
        <input 
          type="text"
          v-model="email"/>
      </label>
      <label> Company:
        <input 
          type="text"
          v-model="company"/>
      </label>
      <label> Message:*
        <textarea 
          type="text" 
          class="message-body"
          v-model="message"/>
      </label>
      <button :disabled="!name || !email || !message" @click="postMessage">Submit</button>
      <div class="message-error">
        <p v-if="this.error">Please submit a message under 250 characters. Thank you!</p>
      </div>
    </form>
    <transition v-else name="fade">
      <p>Thanks so much for connecting! I will be in touch soon.</p>
    </transition>
  </div>
</template>

<script>
import { postNewMessage } from '../apiCalls/apiCalls';

export default {
  name: 'MessageForm',
  props: ["sendMessage", "toggleSendMessage"],
  methods: {
    toggleSubmitFormStatus() {
      this.submitFormStatus = true;
      setTimeout(() => {
        this.toggleSendMessage();
        this.submitFormStatus = false; 
      }, 2000);
    },
    async postMessage() {
      try {
        await postNewMessage(this.name, this.email, this.company, this.message);
        this.submitFormStatus = true;
        setTimeout(() => {
          this.toggleSendMessage();
          this.submitFormStatus = false; 
        }, 2000);
      } catch(error){
        this.error = error.message;
      }
    }
  },
  data() {
    return {
      submitFormStatus: false,
      name: "",
      email: "",
      company: "",
      message: "",
      error: ""
    }
  }
}
</script>

<style scoped>
  .contact-container form {
    display: flex;
    flex-direction: column;
    margin-top: 10%;
  }

  form button {
    width: 100%;
    height: 30px;
    margin: 10px auto;
    font-size: 14px;  
    cursor: pointer;
  }

  .back-btn {
    position: absolute;
    top: 5px;
    left: 5px;
    margin: 0;
    cursor: pointer;
    color: #3e3b39;
    padding: 2px 5px;
    border: 1px solid transparent;
  }

  .back-btn:hover {
    border: 1px solid #3e3b39;  
  }

  label {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  label span {
    color: red;
  }

  input {
    height: 30px;
    width: 70%;
    font-size: 12px;
  }

  .message-body {
    height: 150px !important;
    width: 70% !important;
    resize: none !important;
    font-size: 12px;
  }

  .message-error {
    height: 20px;
  }

  .message-error p {
    text-align: center;
  }

  .fade-enter-active, .fade-leave-active {
  transition: opacity 3s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>