<template>
  <q-select
    v-bind="$attrs"
    v-on="$listeners"
    :options="options"
  />
</template>

<script>

export default {
  props: {

  },

  components: {

  },

  computed: {
    options () {
      return ['candidate', 'ibo', 'admin']
    }
  },

  methods: {

  },

  data () {
    return {

    }
  }
}

</script>
