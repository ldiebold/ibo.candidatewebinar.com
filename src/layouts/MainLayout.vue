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
            CandidateWebinar
          </q-toolbar-title>

          <MSelectAppButton
            icon="mdi-apps"
            dense
            flat
            current-app-name="ibo"
            :user="user"
            class="q-mr-sm"
          />

          <MAccountButton
            flat
            class="shadow-1"
            round
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
            v-for="item in availableMenuItems"
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
            <q-item-section
              v-if="item.dot"
              side
            >
              <q-icon
                :color="item.dot.color"
                name="mdi-circle"
              />
              <q-tooltip v-if="item.dot.tooltip">
                {{ item.dot.tooltip }}
              </q-tooltip>
            </q-item-section>
          </q-item>
        </q-list>
      </q-drawer>

      <MTutorialVideoDialog
        v-if="introductionVideo"
        :video="introductionVideo"
        v-model="showIntroductionVideoDialog"
        @hide="handleIntroductionVideoHide"
      />

      <q-page-container>
        <router-view />

        <q-page-sticky
          :offset="[8, 68]"
          position="bottom-right"
        >
          <MUserFeedbackButton
            icon="mdi-message-outline"
            round
          />
        </q-page-sticky>
      </q-page-container>
    </q-layout>
  </transition>
</template>

<script>

export default {
  name: 'MainLayout',
  methods: {
    handleIntroductionVideoHide () {
      this.user.$update({
        seen_introduction_video: 1
      })
    },

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
    this.$MTutorialVideo.$get()

    if (!this.user.seen_introduction_video) {
      this.showIntroductionVideoDialog = true
    }

    setTimeout(() => {
      this.visible = true
    }, 400)
  },

  computed: {
    user () {
      return this.$MUser.getSessionUser()
    },

    introductionVideo () {
      return this.$MTutorialVideo.query()
        .where('title', 'IBO Introduction')
        .first()
    },

    availableMenuItems () {
      return this.menuItems.filter(menuItem => {
        return menuItem.roles.includes(this.user.role)
      })
    }
  },

  data () {
    return {
      leftDrawerOpen: false,

      showIntroductionVideoDialog: false,

      visible: false,

      menuItems: [
        {
          icon: 'person',
          label: 'Candidates',
          description: 'manage candidate accounts',
          to: '/candidates',
          roles: ['ibo', 'admin', 'super admin']
        },
        {
          icon: 'calendar',
          label: 'Events',
          description: 'Online Events',
          to: '/events',
          roles: ['ibo', 'admin', 'super admin']
        },
        {
          icon: 'mdi-chart-tree',
          label: 'Structure',
          description: 'Your businesses structure',
          to: '/structure',
          roles: ['ibo', 'admin', 'super admin']
        },
        {
          label: 'Tutorial Videos',
          description: 'Teach IBOs the site',
          to: '/tutorial-videos',
          roles: ['super admin'],
          dot: {
            color: 'secondary',
            tooltip: 'Only super admins can see this page'
          }
        },
        {
          label: 'Users',
          description: 'Manage All Users',
          to: '/users',
          roles: ['admin', 'super admin'],
          dot: {
            color: 'secondary',
            tooltip: 'Only super admins, and admins can see this page'
          }
        }
      ]
    }
  }
}
</script>
