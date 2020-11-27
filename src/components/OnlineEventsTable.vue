<template>
  <q-table
    v-bind="$attrs"
    v-on="$listeners"
    :data="onlineEvents"
    :columns="columns"
    :pagination="initialPagination"
  >
    <template #top>
      <div class="text-h5">
        Events
      </div>
    </template>

    <template #body-cell-start_time="props">
      <td>
        {{ $dayjs(props.row.start_time).format('DD/MM/YYYY h:mmA') }}
      </td>
    </template>

    <template #body-cell-end_time="props">
      <td>
        {{ $dayjs(props.row.end_time).format('DD/MM/YYYY h:mmA') }}
      </td>
    </template>

    <template #body-cell-automated="props">
      <td class="text-center">
        {{ props.row.automated ? 'yes' : 'no' }}
      </td>
    </template>
  </q-table>
</template>

<script>

export default {
  props: {
    onlineEvents: {
      required: true,
      type: Array
    }
  },

  components: {

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
    return {
      initialPagination: {
        descending: false,
        rowsPerPage: 20
        // rowsNumber: xx if getting data from a server
      }
    }
  }
}

</script>
