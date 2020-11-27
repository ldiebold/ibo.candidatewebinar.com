<template>
  <div
    v-bind="$attrs"
    v-on="$listeners"
  >
    <q-input
      filled
      v-model="form.name"
      label="Name"
      class="q-mb-md"
      hint="(Full Name is Best)"
    />

    <q-input
      filled
      v-model="form.email"
      label="Email"
      class="q-mb-md"
    />

    <!-- <q-input
      filled
      :type="passwordVisible ? 'text' : 'password'"
      v-model="form.password"
      label="Password"
      class="q-mb-md"
    >
      <template #append>
        <q-icon
          :name="passwordVisible ? 'visibility' : 'visibility_off'"
          class="cursor-pointer"
          @click="passwordVisible = !passwordVisible"
        />
      </template>

      <template #after>
        <q-btn
          icon="refresh"
          flat
          round
          @click="generateRandomPassword"
        />
      </template>
    </q-input> -->

    <OnlineEventSelect
      filled
      v-model="form.event_ids"
      option-value="id"
      emit-value
      map-options
      multiple
      menu-anchor="top left"
      menu-self="bottom left"
      label="Information Session"
      hint="Please double check the time is right!"
    />

    <br />

    <q-btn
      label="Create"
      color="primary"
      @click="handleSubmit"
      :loading="creating"
    />
  </div>
</template>

<script>
import OnlineEventSelect from 'components/OnlineEventSelect.vue'

export default {
  props: {

  },

  components: {
    OnlineEventSelect
  },

  computed: {

  },

  mounted () {
    // this.showSuccessDialog({ name: 'wooky' })
  },

  methods: {
    showSuccessDialog (user) {
      const firstName = user.name.split(' ')[0]

      this.$q.dialog({
        title: `An account has been created for ${firstName}!`,
        message: `<p>${firstName} has also been sent an <strong>email</strong> with their <strong>username</strong> and <strong>password</strong>.</p>
        <p>Shoot 'em a quick <strong>message/call</strong> to confirm that they...</p>
          <ul>
            <li><strong>Received</strong> the email</li>
            <li>Can <strong>login</strong> okay</li>
          </ul>
        👍👏🔷`,
        html: true
      })
    },

    generateRandomPassword () {
      var pwdChars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
      var pwdLen = 10
      this.form.password = Array(pwdLen).fill(pwdChars).map(function (x) { return x[Math.floor(Math.random() * x.length)] }).join('')
    },

    handleSubmit () {
      this.creating = true
      this.$MUser.$create(this.form)
        .then(this.handleSuccess)
        .catch(this.handleError)
    },

    handleSuccess (response) {
      this.creating = false

      this.$emit('input', false)
      this.$emit('success', response)

      this.showSuccessDialog(response.data)
    },

    handleError (error) {
      this.creating = false
      this.$emit(error.message)
    }
  },

  data () {
    return {
      passwordVisible: false,

      creating: false,

      form: {
        name: null,
        email: null,
        role: 'candidate',
        // password: null,
        event_ids: []
      }
    }
  }
}

</script>
