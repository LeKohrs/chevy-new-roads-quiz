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

  .questions {
    margin: 0 auto;
    max-width: 900px;
    max-height: 500px;

    @include respond-to(mobileOnly) {
      max-width: 100%;
      max-height: 100%;
    }
  }
  .questions__list {
    margin-bottom: 85px;
  }
  .questions__list-with-image {
    margin-bottom: 30px;
  }
</style>