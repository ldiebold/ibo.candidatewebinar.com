<template>
  <q-page>
    <MOnlineEventsTable
      style="height: calc(100vh - 50px)"
      :online-events="online_events"
      hide-delete-button
      hide-create-button
      hide-update-button
      disable-header-menu
      :visible-columns="['title', 'description', 'start_time', 'end_time', 'private_link']"
    >
      <template #top-right>
        <MShowTutorialVideoButton
          class="q-mr-sm"
          title="Online Events"
        />
      </template>
    </MOnlineEventsTable>
  </q-page>
</template>

<script>

export default {
  name: 'EventsPage',

  components: {
  },

  created () {
    this.$MOnlineEvent.$get()
  },

  computed: {
    online_events () {
      return this.$MOnlineEvent.all()
    }
  }
}
</script>
