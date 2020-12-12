<template>
  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
    v-if="visible"
  >
    <q-layout view="lHh Lpr lFf">
      <q-header elevated>
        <q-toolbar>
          <q-btn
            flat
            dense
            round
            icon="mdi-menu"
            aria-label="Menu"
            @click="leftDrawerOpen = !leftDrawerOpen"
          />

          <q-toolbar-title>
            IBO
          </q-toolbar-title>

          <MSelectAppButton
            icon="mdi-apps"
            dense
            flat
            current-app-name="ibo"
            :user="user"
          />

          <q-btn
            flat
            icon="mdi-logout"
            round
            @click="handleLogout"
          />
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        bordered
        content-class="bg-grey-1"
      >
        <q-list>
          <q-item-label
            header
            class="text-grey-8"
          >
            Menu
          </q-item-label>

          <q-item
            v-for="item in menuItems"
            :key="item.label"
            clickable
            :to="item.to"
          >
            <q-item-section>
              <q-item-label>
                {{ item.label }}
              </q-item-label>
              <q-item-label caption>
                {{ item.description }}
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-drawer>

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </transition>
</template>

<script>
import { MSelectAppButton } from '@ldiebold/quasar-ui-process-model-components/src'

export default {
  name: 'MainLayout',
  components: { MSelectAppButton },
  methods: {
    handleLogout () {
      this.visible = false
      const vm = this
      this.$auth.logout()
        .then(() => {
          setTimeout(() => {
            vm.$router.go('/login')
          }, 300)
        })
    }
  },

  mounted () {
    setTimeout(() => {
      this.visible = true
    }, 400)
  },

  computed: {
    user () {
      return this.$MUser.getSessionUser()
    }
  },

  data () {
    return {
      leftDrawerOpen: false,

      visible: false,

      menuItems: [
        {
          icon: 'person',
          label: 'Candidates',
          description: 'manage candidate accounts',
          to: '/candidates'
        },
        {
          icon: 'calendar',
          label: 'Events',
          description: 'create and edit events',
          to: '/events'
        },
        {
          icon: 'mdi-chart-tree',
          label: 'Structure',
          description: 'Your businesses structure',
          to: '/structure'
        }
      ]
    }
  }
}
</script>
