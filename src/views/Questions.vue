<template>
  <div class="questions">
    <div class="questions__list-with-image" v-if="questionType == 'listWithImage'">
      <ListWithImage />
    </div>
    <div class="questions__list" v-if="questionType == 'list'">
      <List />
    </div>
  </div>
</template>

<script>
import List from '@/components/List.vue'
import ListWithImage from '@/components/ListWithImage.vue'

export default {
  name: 'Questions',
  components: {
    List,
    ListWithImage
  },
  computed: {
    questionType() {
      return this.$store.state.questions[this.$store.state.currentStatus].questionType
    }
  }
}
</script>

<style lang="scss" scoped>
  .questions {
    margin: 0 auto;
    max-width: 900px;
  }
  .questions__list {
    margin-bottom: 85px;
  }
  .questions__list-with-image {
    margin-bottom: 30px;
  }
</style>