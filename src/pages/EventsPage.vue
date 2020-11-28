<template>
  <q-page>
    <!-- <OnlineEventsTable
      style="height: calc(100vh - 50px)"
      :online-events="online_events"
    /> -->

    <OnlineEventsTableDynamic
      style="height: calc(100vh - 50px)"
      :online-events="online_events"
    />
  </q-page>
</template>

<script>
import OnlineEvent from '../models/OnlineEvent'
import OnlineEventsTableDynamic from 'components/OnlineEventsTableDynamic.vue'

export default {
  name: 'EventsPage',

  components: {
    OnlineEventsTableDynamic
  },

  created () {
    this.$MOnlineEvent.$get()
  },

  computed: {
    online_events () {
      return OnlineEvent.all()
    }
  }
}
</script>
