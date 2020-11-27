<template>
  <BDialogButton
    v-bind="$attrs"
    v-on="$listeners"
    ref="dialogButton"
  >
    <q-card-section>
      <UpdateCandidateForm
        @success="$refs.dialogButton.hide()"
        :candidate="candidate"
      />
    </q-card-section>
  </BDialogButton>
</template>

<script>
import { BDialogButton } from '@ldiebold/quasar-ui-process-base-components/src'
import UpdateCandidateForm from 'components/UpdateCandidateForm.vue'

export default {
  props: {
    candidate: {
      required: true,
      type: Object
    }
  },

  components: {
    BDialogButton,
    UpdateCandidateForm
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
