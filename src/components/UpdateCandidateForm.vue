<template>
  <div>
    <q-input
      filled
      v-model="form.name"
      label="Name"
      class="q-mb-md"
    />

    <q-input
      filled
      v-model="form.email"
      label="Email"
      class="q-mb-md"
    />

    <br>

    <q-btn
      label="Update"
      color="primary"
      @click="handleSubmit"
    />
  </div>
</template>

<script>
import { User } from '@ldiebold/process-orm-classes'

export default {
  props: {
    candidate: {
      required: true,
      type: User
    }
  },

  components: {

  },

  computed: {

  },

  methods: {
    generateRandomPassword () {
      var pwdChars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
      var pwdLen = 10
      this.form.password = Array(pwdLen).fill(pwdChars).map(function (x) { return x[Math.floor(Math.random() * x.length)] }).join('')
    },

    handleSubmit () {
      this.candidate.$update(this.form)
        .then(this.handleSuccess)
        .catch(this.handleError)
    },

    handleSuccess (response) {
      this.$emit('input', false)
      this.$emit('success', response)
    },

    handleError (error) {
      console.log(error)
    }
  },

  created () {
    Object.keys(this.form).forEach(fieldKey => {
      if (this.candidate[fieldKey]) {
        this.form[fieldKey] = this.candidate[fieldKey]
      }
    })
  },

  data () {
    return {
      form: {
        name: null,
        email: null
      }
    }
  }
}

</script>
