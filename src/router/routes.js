
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },

  {
    path: '/criar-conta',
    component: () => import('layouts/AuthenticationLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Authentication/CreateAccount.vue') }
    ]
  },
  {
    path: '/entrar',
    component: () => import('layouts/AuthenticationLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Authentication/Login.vue') }
    ]
  },
  {
    path: '/perfil-empresa',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Profile/ProfileDetails.vue') }
    ]
  },

  {
    path: '/meu-perfil',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Profile/MyProfile.vue') }
    ]
  },
  {
    path: '/veiculo',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Trucks/Index.vue') },
      { path: 'criar', component: () => import('pages/Trucks/AddOrEdit.vue') },
      { path: 'editar/*', component: () => import('pages/Trucks/AddOrEdit.vue') },
      { path: '*', component: () => import('pages/Trucks/Show.vue') }
    ]
  },

  {
    path: '/servico',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Services/Index.vue') },
      { path: 'criar', component: () => import('pages/Trucks/AddOrEdit.vue') },
      { path: 'editar/*', component: () => import('pages/Trucks/AddOrEdit.vue') },
      { path: '*', component: () => import('pages/Trucks/Show.vue') }
    ]
  },
  {
    path: '/viagem',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/FreightJourney/Index.vue') },
      { path: 'criar', component: () => import('pages/FreightJourney/AddOrEdit.vue') },
      { path: 'editar/*', component: () => import('pages/FreightJourney/AddOrEdit.vue') },
      { path: '*', component: () => import('pages/FreightJourney/Show.vue') }
    ]
  },
  {
    path: '/carga',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Load/Index.vue') },
      { path: 'criar', component: () => import('pages/Load/AddOrEdit.vue') },
      { path: 'editar/*', component: () => import('pages/Load/AddOrEdit.vue') },
      { path: '*', component: () => import('pages/Load/Show.vue') }
    ]
  },
  {
    path: '/empresa',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Company/Index.vue') },
      { path: 'criar', component: () => import('pages/Company/AddOrEdit.vue') },
      { path: 'editar/*', component: () => import('pages/Company/AddOrEdit.vue') },
      { path: '*', component: () => import('pages/Company/Show.vue') }
    ]
  },


  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
