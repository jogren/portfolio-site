<template>
  <div class="content-container about-container">
    <header class="img-header">
      <div>
        <h3>Software Engineer</h3>
      </div>
      <img src="../../public/JacobOgren.jpg"/>
      <div>
        <h3>Teacher & Mentor</h3>
      </div>
    </header>
    <div class="list-container">  
      <article>
        <ul style="list-style-type:square;">
          <li>UI/UX Enthusiast</li>
          <li>Creative problem-solver and lover of learning</li>
          <li>Hands-on experience building intuitive and accessible applications</li>
        </ul>
      </article>
      <article>
        <ul style="list-style-type:square;">
          <li>Focused on teaching front-end development to new engineers</li>
          <li>Passionate about blending professional and technical skills</li>
        </ul>
      </article>
    </div>
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
    min-height: 400px;
    animation: scale-up 0.7s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  }

  .about-container {
    background-color: #0ce9ff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px 15px;
  }

  .about-container img {
    object-fit: cover;
    object-position: 100% 25%;
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }

  .img-header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }

  .img-header div {
    width: 100px;
  }

  .list-container {
    display: flex;
  }

  h3 {
    text-align: center;
    font-weight: 500;
    font-size: 22px;
  }

  .about-container ul li {
    margin-bottom: 12px;
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

  @media only screen and (max-width: 880px) {
    .content-container {
      width: 100%;
      margin-top: 0px;
      position: absolute;
      top: 200px;
    }
  }

  @media only screen and (max-width: 570px) {
    .content-container {
      min-height: fit-content;
    }
    
    .about-container {
      padding: 20px 10px;
    }

    .about-container ul li {
      font-size: 12px;
    }
  }
</style>
