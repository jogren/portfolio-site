<template>
  <div class="content-container about-container">
    <h1>This is an about page</h1>
    <p>Content about Jacob</p>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
.content-container {
  margin-top: 10%;
  width: 50%;
  animation: scale-up 0.7s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}

.about-container {
  background-color: #0ce9ff;
}

@keyframes scale-up {
  0% { 
    transform: scaleY(0.1);
    transform-origin: 0% 100%; 
  }
  100% {
    transform: scaleY(1);
    transform-origin: 0% 100%;
   }
}

</style>
