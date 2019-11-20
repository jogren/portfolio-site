<template>
  <div class="content-container about-container">
    <img src="../../public/JacobOgren.jpg"/>
    <ol type="i">
      <li>Software engineer and product marketing professional with work experience on cross-functional teams in the tech industry.</li><br />
      <li>As a self-starter and learner with a history of building intuitive and accessible applications, I aspire to join a team that values hard work, collaboration, and developer growth.</li>
    </ol>
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
  height: 150px;
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
