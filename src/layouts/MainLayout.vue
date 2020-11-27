<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          IBO
        </q-toolbar-title>

        <q-btn
          flat
          icon="logout"
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
</template>

<script>

export default {
  name: 'MainLayout',
  components: {},
  methods: {
    handleLogout () {
      const vm = this
      this.$auth.logout()
        .then(() => {
          console.log(vm.$router)
          vm.$router.go('/login')
        })
    }
  },
  data () {
    return {
      leftDrawerOpen: false,

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
        }
      ]
    }
  }
}
</script>
