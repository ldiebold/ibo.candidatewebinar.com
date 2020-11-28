<template>
  <RManageModelTable
    v-if="models.length"
    :model-class="$MUser"
    :entities="models"
    role="ibo"
    :merge-fields="mergeFields"
    style="height: calc(100vh - 50px)"
    :search="{
      fields: ['name', 'email', 'online_events']
    }"
    :update-button-props="{
      formProps: {
        inputProps: {
          filled: true
        }
      }
    }"
  >
    <template #body-cell-online_events="props">
      <td class="text-left">
        <OnlineEventUserChip
          v-for="onlineEventUser in getOnlineEventUsers(props.row)"
          :key="onlineEventUser.id"
          :online-event-user="onlineEventUser"
        />

        <AttachOnlineEventToUserButton
          label="Attach"
          no-caps
          rounded
          unelevated
          color="primary"
          dense
          padding="xs sm"
          :user="props.row"
        />
      </td>
    </template>
  </RManageModelTable>
</template>

<script>
import { RManageModelTable } from '@agripath/quasar-ui-rest-components/src'
import OnlineEventUserChip from './OnlineEventUserChip.vue'
import AttachOnlineEventToUserButton from './AttachOnlineEventToUserButton.vue'

export default {
  props: {
    models: {
      required: true,
      type: Array
    }
  },

  components: {
    RManageModelTable,
    OnlineEventUserChip,
    AttachOnlineEventToUserButton
  },

  computed: {

  },

  methods: {
    getOnlineEventUsers (candidate) {
      return this.$MOnlineEventUser.query()
        .where('user_id', candidate.id)
        .all()
    }
  },

  data () {
    const vm = this

    return {
      mergeFields: {
        online_events: {
          label: 'Online Events',
          format (row) {
            return vm.$MUser.query()
              .with('online_events')
              .find(row.id)
              .online_events.map(onlineEvent => {
                return onlineEvent.title
              })
              .join(', ')
          }
        }
      }
    }
  }
}

</script>
