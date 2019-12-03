<template>
  <div>
    <form v-if="!this.submitFormStatus">
      <p @click="toggleSendMessage" class='back-btn'>◀ back</p>
      <label> Name:
        <input type="text"/>
      </label>
      <label> Email:
        <input type="text"/>
      </label>
      <label> Message:
        <textarea type="text" class="message-body"/>
      </label>
      <button @click="toggleSubmitFormStatus">Submit</button>
    </form>
    <transition v-else name="fade">
      <p>Thanks so much for connecting! I will be in touch soon.</p>
    </transition>
  </div>
</template>

<script>
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
    }
  },
  data() {
    return {
      submitFormStatus: false
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

  input {
    height: 30px;
    width: 70%;
  }

  .message-body {
    height: 150px !important;
    width: 70% !important;
    resize: none !important;
  }

  .fade-enter-active, .fade-leave-active {
  transition: opacity 3s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>