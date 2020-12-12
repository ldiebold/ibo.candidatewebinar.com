
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/candidates', component: () => import('pages/CandidatesPage.vue') },
      { path: '/events', component: () => import('pages/EventsPage.vue') },
      { path: '/structure', component: () => import('pages/StructurePage.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/BlankLayout.vue'),
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import('pages/Login.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
