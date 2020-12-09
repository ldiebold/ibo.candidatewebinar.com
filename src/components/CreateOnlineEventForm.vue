<template>
  <div>
    <q-input
      filled
      v-model="form.title"
      label="Title"
      class="q-mb-md"
    />

    <q-input
      filled
      type="textarea"
      v-model="form.description"
      label="Description"
      class="q-mb-md"
    />

    <BDateTime
      filled
      v-model="form.start_time"
      label="Start"
      class="q-mb-md"
    />

    <BDateTime
      filled
      v-model="form.end_time"
      label="End"
      class="q-mb-md"
    />

    <q-toggle
      v-model="form.automated"
      label="automated"
      class="q-mb-md"
    />

    <br>

    <q-btn
      label="Create"
      color="primary"
      @click="handleSubmit"
    />
  </div>
</template>

<script>
import { BDateTime } from '@agripath/quasar-ui-base-components/src'

export default {
  props: {

  },

  components: {
    BDateTime
  },

  computed: {

  },

  methods: {
    handleSubmit () {
      this.$MOnlineEvent.$create(this.form)
        .then(this.handleSuccess)
        .catch(this.handleError)
    },

    handleSuccess (response) {
      this.$emit('input', false)
      this.$emit('success', response)
    },

    handleError (error) {
      console.log(error)
    }
  },

  data () {
    return {
      form: {
        title: null,
        description: null,
        start_time: null,
        end_time: null,
        automated: false
      }
    }
  }
}

</script>
