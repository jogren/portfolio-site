<template>
  <div class="Header_container">
    <h1>jacob <br />
    <span class="header_bold">ogren</span></h1>
    <hr />
  </div>
</template>

<script>
export default {
  name: 'Header'  
}
</script>


<style scoped>
.Header_container {
  display: flex;
  align-items: center;
  width: 50%;
  position: absolute;
  top: 63%;
  left: 0px;
} 

h1 {
  text-align: center;
  color: #fff;
  font-size: 44px;
  padding-right: 15%; 
}

.header_bold {
  font-weight: 700;
}

hr {
  width: 100%;
  height: 0;
}

@media only screen and (max-width: 880px) {
  .Header_container {
    width: 100%;
    top: 0px;
  }
}
</style>