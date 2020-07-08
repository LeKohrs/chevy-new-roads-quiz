<template>
  <section class="results">
    <div class="results__text">
      <h2>You got <span :class="color">{{ score }}/10</span> correct!</h2>
      <p>Inspired to plan your next journey? Keep reading for our expert advice and recommendations for mapping out your own perfect road trip, no matter where you’d like to travel or what types of destinations interest you.</p>
    </div>
    <img alt="Chevy Get Grilled Image" src="../assets/assests_2x/200702_Chevy_Results_Final_2x.png">
  </section>
</template>

<script>
export default {
  name: 'Results',

  data() {
    return {
    }
  },
  computed: {
    score() {
      return this.$store.state.score
    },
    color() {
      if (this.score < 5) {
        return 'yellow'
      } else {
        return 'green'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  $siteOrange: #DF7507;
  $siteGreen: #8EA25D;

  // Mixin for using media queries in sass
  $respond-to-queries: (
    mobileOnly: 'all and (max-width: 567px)',
    tablet: 'all and (min-width: 568px)',
    tabletOnly: 'and (min-width: 568px) and (max-width: 833px)',
    tabletDown: 'all and (max-width: 833px)',
    desktop: 'all and (min-width: 834px)',
    full: 'all and (min-width: 1024px)',
    x-large: 'all and (min-width: 1440px)'
  );

  @mixin respond-to($query) {
    $media_query: $query;
    @if map-has-key($respond-to-queries, $query) {
      $media_query: map-get($respond-to-queries, $query);
    }

    @media #{$media_query} {
      @content;
    }
  }

  h2 {
    margin: 0;
    margin-bottom: 19px;
    font-size: 60px;
    line-height: 68px;
  }
  img {
    margin-left: 71px;
    width: 450px;
    height: auto;
    max-height: 300px;
    object-fit: cover;
    flex-grow: 2;

    @include respond-to(tabletDown) {
      margin-bottom: 20px;
      margin-left: 0;
      width: 100%;
      order: 1;
    }
  }
  
  .green {
    color: $siteGreen;
  }
  .yellow {
    color: $siteOrange;
  }
  .results {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 57px;
    max-width: 900px;

    @include respond-to(tabletDown) {
      flex-direction: column; 
      align-items: flex-start;
      max-width: 100%;
      margin: 0;
    }

    &__text {
      max-width: 380px;

      @include respond-to(tabletDown) {
        order: 2;
      }
      
      p {
        font-weight: 400; 

        @include respond-to(tabletDown) {
          margin-bottom: 30px;
        }
      }
    }
  }
  

</style>
