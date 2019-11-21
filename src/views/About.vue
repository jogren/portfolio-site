<template>
  <div class="content-container about-container">
    <div class="img-cropper">
      <img src="../../public/JacobOgren.jpg"/>
    </div>
    <ul style="list-style-type:square;">
      <li>Full-Stack Software Engineer and UI/UX Enthusiast</li><br />
      <li>Self-starter and lover of learning</li><br />
      <li>Hands-on experience building intuitive and accessible applications</li><br />
      <li>Teacher and Mentor</li><br />
      <li>Aspiring to join a team that values hard work, collaboration, and developer growth</li>
    </ul>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
.content-container {
  padding: 50px;
  margin-top: 10%;
  width: 50%;
  animation: scale-up 0.7s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}

.about-container {
  background-color: #0ce9ff;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.about-container img {
  object-fit: cover;
  object-position: 100% 25%;
  width: 120px;
  height: 120px;
  border-radius: 50%;
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
