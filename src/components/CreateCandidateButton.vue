<template>
  <BDialogButton
    v-bind="$attrs"
    v-on="$listeners"
    ref="dialogButton"
  >
    <q-card-section>
      <CreateCandidateForm
        style="min-width: 250px;"
        @success="() => $refs.dialogButton.hide()"
      />
    </q-card-section>
  </BDialogButton>
</template>

<script>
import { BDialogButton } from '@ldiebold/quasar-ui-process-base-components/src'
import CreateCandidateForm from 'components/CreateCandidateForm.vue'

export default {
  props: {

  },

  components: {
    BDialogButton,
    CreateCandidateForm
  },

  computed: {

  },

  methods: {

  },

  data () {
    return {

    }
  }
}

</script>
