<template>
  <q-page>
    <CandidatesTableDynamic :models="users" />
  </q-page>
</template>

<script>
import CandidatesTableDynamic from 'components/CandidatesTableDynamic.vue'

export default {
  name: 'UsersPage',

  components: {
    CandidatesTableDynamic
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
