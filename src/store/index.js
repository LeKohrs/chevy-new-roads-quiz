import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questions: [
      {
        question: "How many miles of interstate highway are in the U.S.?",
        imgUrl: require('../assets/200702_Chevy_Question1_Final.png'),
        imgUrl_2x: require('../assets/assests_2x/200702_Chevy_Question1_Final_2x.png'),
        answer: [
          { answer: "67,426 miles", image: "", correct: false },
          { answer: "46,876 miles", image: "", correct: true },
          { answer: "32,851 miles", image: "", correct: false },
        ],
        blurb:
          "Today’s interstate highway system has an impressive 46,876 miles of roadway. How many of those miles have you covered on road trips?",
        correct: "46,876 miles",
        questionType: "list",
        input: null
      },
      {
        question: "How many states only require a rear license plate?",
        imgUrl: require('../assets/200702_Chevy_Question2_Final.png'),
        imgUrl_2x: require('../assets/assests_2x/200702_Chevy_Question2_Final_2x.png'),
        answer: [
          { answer: "20", correct: true },
          { answer: "7", correct: false },
          { answer: "15", correct: false },
        ],
        blurb:
          "The following states only require a rear license plate: AL, AZ, AR, DE, FL, GA, IN, KS, KY, LA, MI, MS, NM, NC, OH, OK, PA, SC, TN, WV",
        correct: "20",
        questionType: "list",
        input: null
      },
      {
        question: "Where is the world’s largest convenience store located?",
        answer: [
          { answer: "Walcott, Iowa", correct: false, imgUrl: require('../assets/200702_Chevy_Question3c_Final.png'), imgUrl_2x: require('../assets/assests_2x/200702_Chevy_Question3c_Final_2x.png')},
          { answer: "Las Vegas, Nevada", correct: false, imgUrl: require('../assets/200702_Chevy_Question3b_Final.png'), imgUrl_2x: require('../assets/assests_2x/200702_Chevy_Question3b_Final_2x.png')},
          { answer: "New Braunfels, Texas", correct: true, imgUrl: require('../assets/200702_Chevy_Question3a_Final.png'), imgUrl_2x: require('../assets/assests_2x/200702_Chevy_Question3a_Final_2x.png') },
        ],
        blurb:
          "The Buc-ee’s® New Braunfels, Texas, location is the world’s biggest convenience store, at 68,000 square feet, which gives visitors plenty of options for road trip snacks. Plus, visitors can fill their vehicle’s tank from any of 120 fuel pumps outside.",
        correct: "New Braunfels, Texas",
        questionType: "listWithImage",
        input: null
      },
      {
        question: "How long did the first California to New York road trip take?",
        imgUrl: require('../assets/200702_Chevy_Question4_Final.png'),
        imgUrl_2x: require('../assets/assests_2x/200702_Chevy_Question4_Final_2x.png'),
        answer: [
          { answer: "94 days, 6 hours, and 2 minutes", correct: false },
          { answer: "43 days, 18 hours, and 57 minutes", correct: false },
          { answer: "63 days, 12 hours, and 30 minutes", correct: true },
        ],
        blurb:
          "A duo set out from San Francisco to complete the first cross-country road trip on May 23, 1903. With crude roads and a primitive car, it took them just over 63 days to reach New York City.",
        correct: "63 days, 12 hours, and 30 minutes",
        questionType: "list",
        input: null
      },
      {
        question: "Where is America’s highest-elevation paved road?",
        answer: [
          { answer: "New Hampshire", correct: false, imgUrl: require('../assets/200702_Chevy_Question5a_Final.png'), imgUrl_2x: require('../assets/assests_2x/200702_Chevy_Question5a_Final_2x.png')},
          { answer: "Colorado", correct: true, imgUrl: require('../assets/200702_Chevy_Question5b_Final.png'), imgUrl_2x: require('../assets/assests_2x/200702_Chevy_Question5b_Final_2x.png') },
          { answer: "Hawaii", correct: false, imgUrl: require('../assets/200702_Chevy_Question5c_Final.png'), imgUrl_2x: require('../assets/assests_2x/200702_Chevy_Question5c_Final_2x.png')},
        ],
        blurb:
          "Those with a fear of heights should avoid Mount Evans Scenic Byway, about 60 miles west of Denver, which climbs to 14,260 feet above sea level.",
        correct: "Colorado",
        questionType: "listWithImage",
        input: null
      },
      {
        question: "What’s the fastest legal speed limit in the U.S.?",
        imgUrl: require('../assets/200702_Chevy_Question6_Final.png'),
        imgUrl_2x: require('../assets/assests_2x/200702_Chevy_Question6_Final_2x.png'),
        answer: [
          { answer: "85 mph", correct: true },
          { answer: "75 mph", correct: false },
          { answer: "90 mph", correct: false },
        ],
        blurb:
          "Two toll road sections of SH-130 in Texas have a speed limit of 85 mph, the highest legal limit in the U.S. Sounds like a good place for a Camaro or Corvette!",
        correct: "85 mph",
        questionType: "list",
        input: null
      },
      {
        question: "Which state was first to issue license plates for cars?",
        answer: [
          { answer: "Massachusetts", correct: true, imgUrl: require('../assets/200702_Chevy_Question7c_Final.png'), imgUrl_2x: require('../assets/assests_2x/200702_Chevy_Question7c_Final_2x.png')},
          { answer: "Michigan", correct: false, imgUrl: require('../assets/200702_Chevy_Question7b_Final.png'), imgUrl_2x: require('../assets/assests_2x/200702_Chevy_Question7b_Final_2x.png')},
          { answer: "New York", correct: false, imgUrl: require('../assets/200702_Chevy_Question7a_Final.png'), imgUrl_2x: require('../assets/assests_2x/200702_Chevy_Question7a_Final_2x.png')},
        ],
        blurb:
          "Although some states and municipalities required homemade tags earlier, the first state-issued license plates were launched in Massachusetts in 1903.",
        correct: "Massachusetts",
        questionType: "listWithImage",
        input: null
      },
      {
        question: "Which is the longest interstate highway?",
        imgUrl: require('../assets/200702_Chevy_Question8_Final.png'),
        imgUrl_2x: require('../assets/assests_2x/200702_Chevy_Question8_Final_2x.png'),
        answer: [
          { answer: "I-75", correct: false },
          { answer: "I-40", correct: false },
          { answer: "I-90", correct: true },
        ],
        blurb:
          "Stretching from Seattle to Boston, I-90 runs 3,020 miles, crossing a total of 13 states.",
        correct: "I-90",
        questionType: "list",
        input: null
      },
      {
        question: "Which national park receives the most visitors annually?",
        answer: [
          { answer: "Grand Canyon National Park", correct: false, imgUrl: require('../assets/200702_Chevy_Question9b_Final.png'), imgUrl_2x: require('../assets/assests_2x/200702_Chevy_Question9b_Final_2x.png') },
          { answer: "Great Smoky Mountains National Park", correct: true, imgUrl: require('../assets/200702_Chevy_Question9c_Final.png'), imgUrl_2x: require('../assets/assests_2x/200702_Chevy_Question9c_Final_2x.png') },
          { answer: "Yellowstone National Park", correct: false, imgUrl: require('../assets/200702_Chevy_Question9a_Final.png'), imgUrl_2x: require('../assets/assests_2x/200702_Chevy_Question9a_Final_2x.png') },
        ],
        blurb:
          "With 12.5 million visits in 2019, Great Smoky Mountains National Park had more than double the visits of the runner-up, Grand Canyon National Park. Yellowstone was sixth at 4 million visits.",
        correct: "Great Smoky Mountains National Park",
        questionType: "listWithImage",
        input: null
      },
      {
        question: "How long is America’s longest road bridge?",
        imgUrl: require('../assets/200702_Chevy_Question10_Final.png'),
        imgUrl_2x: require('../assets/assests_2x/200702_Chevy_Question10_Final_2x.png'),
        answer: [
          { answer: "23.87 miles", correct: true },
          { answer: "16.45 miles", correct: false },
          { answer: "19.55 miles", correct: false },
        ],
        blurb:
          "The Lake Pontchartrain Causeway Bridge in Louisiana is 23.87 miles long—making it the longest continuous bridge over water in the country!",
        correct: "23.87 miles",
        questionType: "list",
        input: null
      },
    ],
    currentStatus: 0,
    started: false,
    finished: false,
    score: 0,
    selected: false,
    correct: false,
    incorrect: false
  },
  mutations: {
    nextQuestion: (state) => {
      state.currentStatus += 1;
      state.selected = false
    },
    previousQuestion: (state) => {
      if (state.currentStatus > 0) {
        state.currentStatus -= 1;
        state.selected = false;
      }
    },
    resetQuestions: (state) => {
      state.currentStatus = 0;
      state.started = false;
      state.finished = false;
      state.score = 0;
    },
    started: (state) => {
      state.started = true;
      state.finished = false;
    },
    finished: (state) => {
      state.finished = true;
      state.started = false;
    },
    scorePoint: (state) => {
      state.score += 1;
    },
    selected: (state) => {
      state.selected = true
    },
    correct: (state) =>{
      state.correct = true
    },
    incorrect: (state) => {
      state.incorrect = true
    },
    resetCorrect: (state) => {
      state.correct = false
    },
    resetIncorrect: (state) => {
      state.incorrect = false
    },
    setAnswer: (state, val) => {
      state.questions[state.currentStatus].input = val
    }
  },
  actions: {},
  modules: {},
});
