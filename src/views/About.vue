<template>
  <div class="content-container about-container">
    <header class="img-header">
      <img src="../../public/JacobOgren.jpg"/>
    </header>
    <ol>
      <li>Full-Stack Software Engineer & UI/UX Enthusiast passionate about bringing innovative ideas to life through clean, maintainable, and reusable code</li>
      <li>Experienced teacher and mentor focused on coaching front-end development to new engineers and blending professional skills with technical</li>
      <li>Customer-centric believer that no problem is too large  and that making the web more intentional and accessible is key in unlocking its potential</li>
      <li>More than anything, I’m curious and aspire to join a team that is comfortable asking questions that start with "Why?"</li>
    </ol>
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
    justify-content: center;
    width: 100%;
    margin-bottom: 5%;
  }

  .list-container {
    display: flex;
  }

  ol {
    list-style: none;
    counter-reset: list-counter;
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
  }
  ol li {
    counter-increment: list-counter;
    display: flex;
    font-size: 0.85rem;
    margin-bottom: 1rem;
  }
  ol li::before {
    content: "0" counter(list-counter);
    font-weight: bold;
    font-size: 3rem;
    margin-right: 0.5rem;
    font-family: 'Abril Fatface', serif;
    line-height: 1;
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
