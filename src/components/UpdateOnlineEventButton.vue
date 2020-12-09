<template>
  <BDialogButton
    v-bind="$attrs"
    v-on="$listeners"
    ref="dialogButton"
  >
    <q-card-section>
      <UpdateOnlineEventForm
        @success="$refs.dialogButton.hide()"
        :online-event="onlineEvent"
      />
    </q-card-section>
  </BDialogButton>
</template>

<script>
import { BDialogButton } from '@agripath/quasar-ui-base-components/src'
import UpdateOnlineEventForm from 'components/UpdateOnlineEventForm.vue'

export default {
  props: {
    onlineEvent: {
      required: true,
      type: Object
    }
  },

  components: {
    BDialogButton,
    UpdateOnlineEventForm
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
