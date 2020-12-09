<template>
  <q-table
    v-bind="$attrs"
    v-on="$listeners"
    :data="users"
    :columns="columns"
  >
    <template #top>
      <div class="text-h6">
        Candidates
      </div>

      <q-space />

      <CreateCandidateButton
        round
        icon="add"
      />
    </template>

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

    <template #body-cell-edit="props">
      <td class="text-center">
        <UpdateCandidateButton
          flat
          icon="edit"
          round
          dense
          color="blue-4"
          :candidate="props.row"
        />
      </td>
    </template>

    <template #body-cell-delete="props">
      <td class="text-center">
        <MDeleteButton
          :model="props.row"
          model-name="User"
          flat
          icon="delete"
          round
          dense
          color="red-4"
        />
      </td>
    </template>
  </q-table>
</template>

<script>
import { MDeleteButton } from '@agripath/quasar-ui-base-components/src'
import CreateCandidateButton from 'components/CreateCandidateButton.vue'
import UpdateCandidateButton from 'components/UpdateCandidateButton.vue'
import AttachOnlineEventToUserButton from 'components/AttachOnlineEventToUserButton.vue'
import OnlineEventUserChip from 'components/OnlineEventUserChip.vue'

export default {
  props: {
    users: {
      required: true,
      type: Array
    }
  },

  components: {
    MDeleteButton,
    CreateCandidateButton,
    UpdateCandidateButton,
    AttachOnlineEventToUserButton,
    OnlineEventUserChip
  },

  computed: {
    columns () {
      return [
        {
          align: 'left',
          field: 'name',
          label: 'Name',
          name: 'name'
        },
        {
          align: 'left',
          field: 'email',
          label: 'Email',
          name: 'email'
        },
        {
          align: 'left',
          field: 'role',
          label: 'Role',
          name: 'role'
        },
        {
          align: 'left',
          field: 'online_events',
          label: 'Online Events',
          name: 'online_events'
        },
        {
          align: 'center',
          field: 'edit',
          label: 'Edit',
          name: 'edit'
        },
        {
          align: 'center',
          field: 'delete',
          label: 'Delete',
          name: 'delete'
        }
      ]
    }
  },

  methods: {
    getOnlineEventUsers (candidate) {
      return this.$MOnlineEventUser.query()
        .where('user_id', candidate.id)
        .all()
    }
  },

  data () {
    return {

    }
  }
}

</script>
