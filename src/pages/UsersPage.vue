<template>
  <q-page>
    <MUsersTable
      style="height: calc(100vh - 50px)"
      fetch
      :role="$MUser.getSessionUser().role"
    >
      <template #top-right>
        <MShowTutorialVideoButton
          class="q-mr-sm"
          title="Managing Users"
        />
      </template>
    </MUsersTable>
  </q-page>
</template>

<script>

export default {
  name: 'UsersPage',

  components: {

  },

  data () {
    return {}
  },

  created () {
  },

  computed: {

  }
}
</script>
