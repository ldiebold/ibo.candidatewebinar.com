<template>
  <q-page padding>
    <CandidatesTable :users="users" />
  </q-page>
</template>

<script>
import CandidatesTable from 'components/CandidatesTable.vue'

export default {
  name: 'UsersPage',

  components: {
    CandidatesTable
  },

  created () {
    this.$MUser.$getCandidates({
      with: ['online_events']
    })

    this.$MOnlineEvent.$get()
  },

  data () {
    return {
      initialPagination: {
        rowsPerPage: 50
      }
    }
  },

  computed: {
    users () {
      return this.$MUser.query()
        .where('role', 'candidate')
        .get()
    }
  }
}
</script>
