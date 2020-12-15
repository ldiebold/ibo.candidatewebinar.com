<template>
  <RManageModelTable
    v-bind="$attrs"
    v-on="$listeners"
    :data="onlineEvents"
    :columns="columns"
    :pagination="initialPagination"
    :model-class="$MOnlineEvent"
    role="ibo"
    :merge-fields="merrgeFields"
    :search="{
      fields: ['title', 'description']
    }"
  >
    <template
      v-for="(_, slot) of $scopedSlots"
      v-slot:[slot]="scope"
    >
      <slot
        :name="slot"
        v-bind="scope"
      />
    </template>
  </RManageModelTable>
</template>

<script>
import { RManageModelTable } from '@agripath/quasar-ui-rest-components/src'

export default {
  props: {
    onlineEvents: {
      required: true,
      type: Array
    }
  },

  components: {
    RManageModelTable
  },

  computed: {
    columns () {
      return [
        {
          align: 'left',
          field: 'title',
          label: 'Title',
          name: 'title'
        },
        {
          align: 'left',
          field: 'description',
          label: 'Description',
          name: 'description'
        },
        {
          align: 'left',
          field: 'start_time',
          label: 'Start',
          name: 'start_time'
        },
        {
          align: 'left',
          field: 'end_time',
          label: 'End',
          name: 'end_time'
        },
        {
          align: 'center',
          field: 'automated',
          label: 'Automated',
          name: 'automated'
        }
      ]
    }
  },

  methods: {

  },

  data () {
    const vm = this
    return {
      merrgeFields: {
        end_time: {
          format (onlineEvent) {
            return vm.$dayjs(onlineEvent.start_time).format('DD/MM/YYYY h:mmA')
          }
        },

        start_time: {
          format (onlineEvent) {
            return vm.$dayjs(onlineEvent.start_time).format('DD/MM/YYYY h:mmA')
          }
        }
      },

      initialPagination: {
        descending: false,
        rowsPerPage: 20
        // rowsNumber: xx if getting data from a server
      }
    }
  }
}

</script>
