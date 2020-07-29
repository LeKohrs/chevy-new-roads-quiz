<template>
  <section class="questions">
    <h3>{{ question.question }}</h3>
    <div class="questions__answers">
      <img alt="Chevy Get Grilled Image" :src="question.imgUrl_2x">
      <div class="questions__wrapper">
        <ul class="questions__answer-list">
          <li>
            <div class="label">
              <input type="radio" id="answer-one" name="answer" :value="question.answer[0].answer" v-model="picked">
              <label for="answer-one">{{ question.answer[0].answer }}</label>
            </div>
          </li>
          <li>
            <div class="label">
              <input type="radio" id="answer-two" name="answer" :value="question.answer[1].answer" v-model="picked">
              <label for="answer-two">{{ question.answer[1].answer }}</label>
            </div>
          </li>
          <li>
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
    </div>
  </section>
</template>

<script>
export default {
  name: 'List',
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
    },
    input() {
      return this.$store.state.questions[this.status].input
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
    },
  },
}
</script>

<style lang="scss" scoped>
  $siteOrange: #DF7507;
  $siteGreen: #8EA25D;
  $siteWhite: #ffffff;
  $selectOutline: #F1F2F2;

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
  
  .questions__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 356px;
   }
  .questions__answer-list {
    margin-bottom: 15px;

    .label {
      display: flex;
      align-items: flex-start;
    }
  }
  .questions__answers {
    display: flex;
    justify-content: flex-start;
    max-height: 400px;

    @include respond-to(mobileOnly) {
      flex-direction: column;
      max-height: auto;
      max-height: 1000px;
    }

    img {
      flex-grow: 2;
      margin-right: 50px;
      width: 45%;
      height: auto;
      object-fit: cover;

      @include respond-to(mobileOnly) {
        width: 100%;
        object-fit: contain;
      }
    }
    li {
      // margin-bottom: 25px;
      padding: 20px;
      padding-left: 0;
      font-family: din-2014, sans-serif; 
      font-weight: 200; 
      font-style: normal;
      
      input {
        margin-right: 16px;
      }
    }
    li.correctAnswer,
    li.incorrectAnswer {
      border: 1px solid $selectOutline;
    }
  }
  .questions__status {
    padding: 15px 20px;
    max-width: 500px;
    opacity: 0;
    visibility: hidden;
    transition: .5s;

    @include respond-to(mobileOnly) {
      max-width: 100%;
    }
    
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
    p {
      font-size: 14px;
      font-weight: 400;
    }
  }
  
</style>