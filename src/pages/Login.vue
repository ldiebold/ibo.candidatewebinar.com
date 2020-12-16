<template>
  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
  >
    <div v-if="visible">
      <q-btn
        class="q-mt-sm q-ml-sm"
        flat
        round
        icon="mdi-home"
        type="a"
        :href="homeUrl"
        color="grey-5"
      />

      <SanctumLoginPage
        v-if="visible"
        @success="handleSuccess"
      />
    </div>
  </transition>
</template>

<script>
import { SanctumLoginPage } from 'quasar-ui-sanctum'

export default {
  props: {

  },

  mounted () {
    setTimeout(() => {
      this.visible = true
    }, 300)
  },

  components: {
    SanctumLoginPage
  },

  computed: {
    homeUrl () {
      return process.env.HOME_URL
    }
  },

  methods: {
    handleSuccess (response) {
      this.visible = false
      setTimeout(() => {
        this.$router.push('/')
      }, 500)
    }
  },

  data () {
    return {
      visible: false
    }
  }
}

</script>
