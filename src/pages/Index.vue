<template>
  <q-page padding>
    <div class="row justify-center">
      <q-card style="width: 350px">
        <q-card-section>
          Dashboard...
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>

export default {
  name: 'PageIndex',

  data () {
    return {
      user: null
    }
  },

  methods: {
    handleLogin () {
      this.$axios.post('https://api.process.test/login', {
        email: 'luke@ldiebold.com',
        password: ''
      })
    },

    handleGetUser () {
      this.$axios.get('https://api.process.test/api/user')
        .then(response => {
          this.user = response.data
        })
    }
  }
}
</script>
