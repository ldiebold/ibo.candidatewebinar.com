<template>
  <BDialogButton
    v-bind="$attrs"
    v-on="$listeners"
  >
    <q-card-section>
      <AttachOnlineEventToUserForm :user="user" />
    </q-card-section>
  </BDialogButton>
</template>

<script>
import { BDialogButton } from '@ldiebold/quasar-ui-process-base-components/src'
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
