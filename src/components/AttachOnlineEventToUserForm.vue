<template>
  <div
    v-bind="$attrs"
    v-on="$listeners"
  >
    <OnlineEventSelect
      filled
      v-model="online_event_id"
      label="event"
      style="min-width: 250px;"
      option-value="id"
      emit-value
      map-options
    />

    <q-btn
      class="q-mt-md"
      label="attach"
      @click="handleAttachClicked"
    />
  </div>
</template>

<script>
import OnlineEventSelect from 'components/OnlineEventSelect.vue'

export default {
  props: {
    user: {
      required: true,
      type: Object
    }
  },

  components: {
    OnlineEventSelect
  },

  computed: {

  },

  methods: {
    handleAttachClicked () {
      this.$MOnlineEventUser.$create({
        user_id: this.user.id,
        online_event_id: this.online_event_id
      })
        .then(response => {
          this.$emit('success', response)
        })
    }
  },

  data () {
    return {
      online_event_id: null
    }
  }
}

</script>
