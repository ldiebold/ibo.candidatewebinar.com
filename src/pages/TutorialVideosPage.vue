<template>
  <q-page>
    <MTutorialVideosTable
      fetch
      style="height: calc(100vh - 50px)"
    >
      <template #top-right>
        <MShowTutorialVideoButton
          class="q-mr-sm"
          title="Managing Tutorial Videos"
        />
      </template>
    </MTutorialVideosTable>
  </q-page>
</template>

<script>
import { MTutorialVideosTable } from '@ldiebold/quasar-ui-process-model-components/src'
export default {
  name: 'TutorialVideosPage',

  components: {
    MTutorialVideosTable
  }
}
</script>
