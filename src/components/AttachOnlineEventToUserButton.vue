<template>
  <BDialogButton
    v-bind="$attrs"
    v-on="$listeners"
    ref="dialogButton"
  >
    <q-card-section>
      <AttachOnlineEventToUserForm
        @success="response => {
          $emit('success', response)
          $refs.dialogButton.hide()
        }"
        :user="user"
      />
    </q-card-section>
  </BDialogButton>
</template>

<script>
import { BDialogButton } from '@agripath/quasar-ui-base-components/src'
import AttachOnlineEventToUserForm from 'components/AttachOnlineEventToUserForm.vue'

export default {
  props: {
    user: {
      required: true,
      type: Object
    }
  },

  components: {
    BDialogButton,
    AttachOnlineEventToUserForm
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
