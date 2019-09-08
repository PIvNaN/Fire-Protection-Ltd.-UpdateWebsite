import AppLayout from './../layouts/AppLayout'
import Home from './../pages/Home'
import AboutUs from './../pages/AboutUs'

const routes = [
  {
    path: '/applayout',
    component: AppLayout,
    children: [
      {
        path: '/home',
        component: Home
      },
      {
        path: '/aboutus',
        component: AboutUs
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
