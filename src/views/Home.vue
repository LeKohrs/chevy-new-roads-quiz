<template>
  <div class="home">
    <img alt="Get Grilled intro Image" srcset="../assets/assests_2x/200702_Chevy_Intro_Final_2x.png 2x, ../assets/200702_Chevy_Intro_Final.png 1x" src="../assets/assests_2x/200702_Chevy_Intro_Final_2x.png">
    <h1>Get Grilled</h1>
    <p>Think you know all there is to know about road trips? Before you hit the open highway, we’re going to put your knowledge to the test with our quiz. Then, keep reading for our recommendations of even more great road trip destinations.</p>
  </div>
</template>

<script>

export default {
  name: 'Home',
  
}
</script>

<style scoped lang="scss">
  .home {
    text-align: center;
    h1 {
      margin-bottom: 16px;
    }
    p {
      position: relative;
      padding: 0;
      padding-bottom: 13px;
      left: 50%;
      max-width: 700px;
      font-size: 19px;
      transform: translateX(-50%);
    }
    img {
      width: 100%;
      max-width: 900px;
      margin: 0 0 30px;
      // height: 165px;
    }
  }
</style>