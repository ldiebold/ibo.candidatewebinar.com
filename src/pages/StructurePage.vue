<template>
  <q-page>
    <MUserStructureDiagram
      class="full-width"
      style="height: calc(100vh - 57px);"
    />

    <q-page-sticky
      position="top-right"
      :offset="[18, 18]"
    >
      <MShowTutorialVideoButton
        class="q-mr-sm"
        title="Structure"
      />
    </q-page-sticky>
  </q-page>
</template>

<script>
import MUserStructureDiagram from '@ldiebold/quasar-ui-process-model-components/src/components/MUserStructureDiagram.vue'
export default {
  name: 'StructurePage',

  components: { MUserStructureDiagram }
}
</script>
