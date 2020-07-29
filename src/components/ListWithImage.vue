<template>
  <section class="questions">
    <h3>{{ question.question }}</h3>
    <div class="questions__answers">
      <ul class="questions__answer-list">
        <li>
          <img alt="Chevy Get Grilled Image" :src="question.answer[0].imgUrl_2x">
          <div class="label">
            <input type="radio" id="answer-one" name="answer" :value="question.answer[0].answer" v-model="picked">
            <label for="answer-one">{{ question.answer[0].answer }}</label>
          </div>
        </li>
        <li>
          <img alt="Chevy Get Grilled Image" :src="question.answer[1].imgUrl_2x">
          <div class="label">
            <input type="radio" id="answer-two" name="answer" :value="question.answer[1].answer" v-model="picked">
            <label for="answer-two">{{ question.answer[1].answer }}</label>
          </div>
        </li>
        <li>
          <img alt="Chevy Get Grilled Image" :src="question.answer[2].imgUrl_2x">
          <div class="label">
            <input type="radio" id="answer-three" name="answer" :value="question.answer[2].answer" v-model="picked">
            <label for="answer-three">{{ question.answer[2].answer }}</label>
          </div>
        </li>
      </ul>
      <div :class="[{correct : correct}, {incorrect : incorrect}, 'questions__status']">
        <h4 v-if="correct">Correct!</h4>
        <h4 v-if="!correct">Incorrect!</h4>
        <p>{{ question.blurb }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ListWithImage',
  
  data() {
    return {
      picked: null,
    }
  },
  computed: {
    question() {
      return this.$store.state.questions[this.status]
    },
    status() {
      return this.$store.state.currentStatus
    },
    selected() {
      return this.$store.state.selected
    },
    correct() {
      return this.$store.state.correct
    },
    incorrect() {
      return this.$store.state.incorrect
    }
  },
  watch: {
    picked: function(val) {
      this.$store.commit('selected')
      let inputs = document.querySelectorAll('input')
      for (let input of inputs) {
        input.disabled = true
      }
      if(val == this.question.correct) {
        this.$store.commit('correct')
        this.$store.commit('resetIncorrect')
        this.$store.commit('scorePoint')
        let selected = document.querySelector('input[value="' + val + '"')
        selected.parentNode.parentNode.classList.add('correctAnswer')
      } else {
        this.$store.commit('incorrect')
        this.$store.commit('resetCorrect')
        let selected = document.querySelector('input[value="' + val + '"')
        selected.parentNode.parentNode.classList.add('incorrectAnswer')
        let realAnswer = document.querySelector('input[value="' + this.question.correct + '"')
        realAnswer.parentNode.parentNode.classList.add('realAnswer')
      }
      this.$store.commit('setAnswer', val)
    }
  }
}
</script>

<style lang="scss" scoped>
  $siteOrange: #DF7507;
  $siteGreen: #8EA25D;
  $siteWhite: #ffffff;

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

  input[type="radio"] {
    opacity: 0;
  }
  .label {
    display: flex;
    align-items: flex-start;
  }
  .questions {
    h3 {
      margin: 0;
      margin-bottom: 30px;
    }
  }
  .questions__answers {
    img {
      margin-right: 71px;
      margin-bottom: 18px;
      width: 100%;
    }
    ul {
      display: flex;
      justify-content: flex-start;
      margin-bottom: 15px;

      @include respond-to(mobileOnly) {
        flex-direction: column;
      }
    }
    li {
      margin-right: 60px;
      margin-bottom: 17px;
      width: calc(100% / 3);
      font-family: din-2014, sans-serif; 
      font-weight: 200; 
      font-style: normal; 

      @include respond-to(mobileOnly) {
        margin-right: 0;
        margin-bottom: 50px;
        width: 100%;
      }
      
      &:last-child {
        margin-right: 0;
      }
      input {
        margin-right: 16px;
      }
    }
  }
  .questions__status {
    padding: 15px 20px;
    opacity: 0;
    visibility: hidden;
    transition: .3s;
    
    &.correct {
      background-color: $siteGreen;
      opacity: 1;
      visibility: visible;
    }
    &.incorrect {
      background-color: $siteOrange;
      opacity: 1;
      visibility: visible;
    }
    h4,
    p {
      color: $siteWhite;
    }
    h4 {
      margin: 0;
    }
  }
</style>