<template>
  <q-page>
    <OnlineEventsTableDynamic
      style="height: calc(100vh - 50px)"
      :online-events="online_events"
      hide-delete-button
      hide-create-button
      hide-update-button
      disable-header-menu
      :visible-columns="['title', 'description', 'start_time', 'end_time']"
    >
      <template #top-right>
        <MShowTutorialVideoButton
          class="q-mr-sm"
          title="Online Events"
        />
      </template>
    </OnlineEventsTableDynamic>
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
