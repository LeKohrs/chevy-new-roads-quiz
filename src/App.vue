<template>
  <div id="app">
    <router-view/>
    <div class="nav">
      <div v-if="!started && !finished" v-on:click="start" class="nav__start button">Take the quiz <SvgArrow /></div>
      <div v-if="started" v-on:click="previousQuestion" :class="[{firstQuestion : firstQuestion}, 'nav__back', 'button']"><SvgArrow /> Back</div>
      <div v-if="started" class="nav__counter">Question {{ questionNumber }}/10</div>
      <div v-if="started" v-on:click="nextQuestion" class="nav__next button">Next <SvgArrow /></div>
      <div v-if="finished" v-on:click="startOver" class="nav__retake button"><SvgArrow /> Try again</div>
    </div>
  </div>
</template>

<script>
import SvgArrow from '@/components/arrow.vue'

export default {
  components: {
    SvgArrow,
  },
  data() {
    return {
      firstQuestion: true
    }
  },
  methods: {
    nextQuestion: function() {
      if(this.status >= 9) {
        this.$router.push("Results");
        this.$store.commit("finished")
      } else {
        this.$store.commit('nextQuestion')
        this.$store.commit('resetCorrect')
        this.$store.commit('resetIncorrect')
        let correctAnswer = document.getElementsByClassName('correctAnswer')[0]
        let incorrectAnswer = document.getElementsByClassName('incorrectAnswer')[0]
        let realAnswer = document.getElementsByClassName('realAnswer')[0]
        if(correctAnswer) {
          correctAnswer.classList.remove('correctAnswer')
        }
        if(incorrectAnswer) {
          incorrectAnswer.classList.remove('incorrectAnswer')
        }
        if(realAnswer) {
          realAnswer.classList.remove('realAnswer')
        }
        let options = document.getElementsByTagName('input')
        for (let option of options) {
          option.disabled = ''
        }
      }
    },
    previousQuestion: function() {
      this.$store.commit('previousQuestion')
    },
    startOver: function() {
      this.$store.commit('resetQuestions')
      this.$store.commit('resetCorrect')
      this.$store.commit('resetIncorrect')
      this.$router.push("/")
      for (let question of this.questions) {
        question.input = null
      }
    },
    start: function() {
      this.$store.commit('started')
      this.$router.push('Questions')
    }
  },
  computed: {
    questions() {
      return this.$store.state.questions
    },
    question() {
      return this.$store.state.questions[this.status]
    },
    status() {
      return this.$store.state.currentStatus
    },
    questionNumber() {
      return this.$store.state.currentStatus + 1
    },
    finished() {
      return this.$store.state.finished
    },
    started() {
      return this.$store.state.started
    }
  },
  watch: {
    status: function(val) {
      let question = this.question
      let input = question.input
      let selected
      let correct
      let incorrect
      let realAnswer
      if(this.status == 0) {
        this.firstQuestion = true
      } else {
        this.firstQuestion = false
      }
      this.$store.commit('resetCorrect')
      this.$store.commit('resetIncorrect')
      var checkExist = setInterval(function() {
        if (document.querySelector('input[value="' + input + '"')) {
          if(document.querySelector('.correctAnswer')) {
            document.querySelector('.correctAnswer').classList.remove('correctAnswer')
          }
          if(document.querySelector('.incorrectAnswer')) {
            document.querySelector('.incorrectAnswer').classList.remove('incorrectAnswer')
          }
          if(document.querySelector('.realAnswer')) {
            document.querySelector('.realAnswer').classList.remove('realAnswer')
          }
          if(input == question.correct) {
            selected = document.querySelector('input[value="' + input + '"')
            selected.parentNode.parentNode.classList.add('correctAnswer')
            correct = true
          } else {
            selected = document.querySelector('input[value="' + input + '"')
            selected.parentNode.parentNode.classList.add('incorrectAnswer')
            realAnswer = document.querySelector('input[value="' + question.correct + '"')
            realAnswer.parentNode.parentNode.classList.add('realAnswer')
            incorrect = true
          }
          let inputs = document.querySelectorAll('input')
          for (let input of inputs) {
            input.disabled = true
          }
          clearInterval(checkExist);
        }
      }, 100);
    },
  },
  created() {
    const mq = window.matchMedia( "(max-width: 833px)" )
    let app = document.getElementById('app');
    let payload = {
      msgType: 'childHeightChanged',
      height: app.clientHeight
    }
    parent.postMessage(payload)

    if(mq.matches) {
      window.onresize = function(e) {
        // payload = {
        //   msgType: 'childHeightChanged',
        //   height: app.clientHeight
        // }
        parent.postMessage(payload)
      }
    }
  }
}
</script>

<style lang="scss">
  $siteOrange: #DF7507;
  $siteGreen: #8EA25D;
  $siteTeal: #6e7a3b;
  $siteBlack: #000000;
  $siteGray-dark: #231F20;
  $siteGray: #D1D3D4;
  $siteGray-light: #E6E7E8;
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

// DIN 2014 Light 
// font-family: din-2014, sans-serif; 
// font-weight: 300; 
// font-style: normal; 

// DIN 2014 Regular 
// font-family: din-2014, sans-serif; 
// font-weight: 400; 
// font-style: normal; 

// DIN 2014 Demi 
// font-family: din-2014, sans-serif; 
// font-weight: 600; 
// font-style: normal; 


  html,
  body,
  #app {
    margin: 0;
    padding: 0;
    // overflow: hidden;
  }
  body {
    padding-bottom: 56.25%;
  }
  #app {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
    padding: 50px 30px 30px;
    max-width: 1200px;
    height: 573px;
    max-height: 573px;
    font-family: din-2014, sans-serif; 
    font-weight: 400; 
    font-style: normal; 

    @include respond-to(mobileOnly) {
      height: auto;
      max-height: 100%;
    }
  }
  ul {
    margin: 0;
    padding-left: 0;
  }
  li {
    list-style-type: none;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: din-2014, sans-serif;
    font-weight: 500; 
    font-style: normal; 
    color: $siteBlack;
  }
  h1 {
    margin: 0;
    font-size: 68px;
    line-height: 81px;
  }
  h2,
  h3 {
    font-size: 31px;
  }
  h3 {
    margin-top: 0;
  }
  h4 {
    font-size: 19px;
  }
  p {
    font-family: din-2014, sans-serif; 
    font-weight: 300; 
    font-style: normal; 
  }
  input[type="radio"] {
    opacity: 0;
  }
  label {
    position: relative;
    cursor: pointer;
    transition: .3s;

    &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: -35px;
      width: 18px;
      height: 18px;
      border-radius: 10px;
      border: 1px solid $siteGray-dark;
      transform: translateY(-50%);
      transition: .3s;
    }
    &:before {
      content: url('./assets/checkmark.svg');
      position: absolute;
      // height: 8px;
      width: 12px;
      top: 47%;
      left: -31px;
      transform: translateY(-50%);
      z-index: 2;
      transition: .3s;
    }
  }
  li.correctAnswer {

    label {
      color: $siteGreen;
      font-weight: 400;
    }
    label:after {
      border-color: $siteGreen;
      background-color: $siteGreen;
    }
  }
  li.incorrectAnswer {

    label {
      color: $siteOrange;
      font-weight: 400;
    }
    label:after {
      border-color: $siteOrange;
      background-color: $siteOrange;
    }
    label:before {
      content: url('./assets/x.svg');
      // height: 10px;
      width: 10px;
      top: 47%;
      left: -30px;
    }
  }
  li.realAnswer {
    label {
      color: $siteGreen;
      font-weight: 400;
    }
    label:after {
      border-color: $siteGreen;
      background-color: $siteGreen;
    }
    label:before {
      content: url('./assets/checkmark.svg');
      top: 49%;
    }
  }
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    max-width: 900px;
  }
  .button {
    display: inline-block;
    position: relative;
    font-family: din-2014, sans-serif; 
    font-weight: 400; 
    font-style: normal; 
    font-size: 14px;
  }
  .nav__start,
  .nav__next {
    padding: 12px 25px 12px 23px;

    &:hover {
      svg {
        transform: translateX(5px);
      }
    }

    svg {
      padding-left: 2px; 
      transform: translateX(0);
      transition: .3s;
    }
  }
  .nav__back,
  .nav__retake {
    padding: 12px 23px 12px 25px;

     &:hover {
      svg {
        transform: rotate(180deg) translateX(5px);
      }
    }

    svg {
      padding-right: 2px; 
      transform: rotate(180deg) translateX(0);
      transition: .3s;

    }
  }
  .nav__start {
    left: 50%;
    background-color: $siteGreen;
    transform: translateX(-50%);
  }
  .nav__start,
  .nav__retake {
    color: $siteWhite;
  }
  .nav__retake {
    background-color: $siteOrange;
  }
  .nav__next {
    background-color: $siteGray;
  }
  .nav__back {
    background-color: $siteGray-light;

    &.firstQuestion {
      pointer-events: none;
      color: $siteGray;

      svg {
        opacity: .1
      }
    }
  }
  .nav__next,
  .nav__back {
    .st0 {
      stroke: #000000;
    }
  }
  .nav__start,
  .nav__back,
  .nav__next,
  .nav__retake {
    cursor: pointer;
  }


</style>
