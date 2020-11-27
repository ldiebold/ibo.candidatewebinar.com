<template>
  <q-chip
    :label="label"
    removable
    @remove="handleRemove"
  >
    <q-spinner
      class="q-ml-sm"
      color="white"
      v-if="removing"
    />
  </q-chip>
</template>

<script>
import dayjs from 'dayjs'

export default {
  props: {
    onlineEventUser: {
      required: true,
      type: Object
    }
  },

  components: {

  },

  computed: {
    onlineEvent () {
      return this.$MOnlineEvent.find(this.onlineEventUser.online_event_id)
    },

    label () {
      const startTime = dayjs(this.onlineEvent.start_time).format('ddd, DD MMM')
      return `${this.onlineEvent.title} - (${startTime})`
    }
  },

  methods: {
    handleRemove () {
      this.removing = true

      this.onlineEventUser.$delete()
        .then(this.handleRemoveSuccess)
        .catch(this.handleRemoveError)
    },

    handleRemoveSuccess () {
      this.removing = false
    },

    handleRemoveError (error) {
      this.removing = false
      this.$emit({
        color: 'red',
        message: error.message
      })
    }
  },

  data () {
    return {
      removing: false
    }
  }
}

</script>
