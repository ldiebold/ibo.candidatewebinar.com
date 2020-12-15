<template>
  <q-page>
    <MCandidatesTable :entities="users">
      <template #top-right>
        <MShowTutorialVideoButton
          class="q-mr-sm"
          title="Manage Candidates"
        />
      </template>
    </MCandidatesTable>
  </q-page>
</template>

<script>
import { MCandidatesTable } from '@ldiebold/quasar-ui-process-model-components/src'

export default {
  name: 'CandidatesPage',

  components: {
    MCandidatesTable
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
