<template>
  <q-page>
    <MOnlineEventsTable
      style="height: calc(100vh - 50px)"
      :hide-delete-button="!$MUser.getSessionUser().isSuperAdmin"
      :hide-create-button="!$MUser.getSessionUser().isSuperAdmin"
      :hide-update-button="!$MUser.getSessionUser().isSuperAdmin"
      :disable-header-menu="!$MUser.getSessionUser().isSuperAdmin"
      :role="$MUser.getSessionUser().role"
      :visible-columns="['title', 'description', 'start_time', 'end_time', 'recurrence', 'private_link']"
      fetch
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

  },

  computed: {

  }
}
</script>
