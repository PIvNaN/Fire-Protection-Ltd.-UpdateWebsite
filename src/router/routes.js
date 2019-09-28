import AppLayout from './../layouts/AppLayout'
import Home from './../pages/Home'
import AboutUs from './../pages/AboutUs'
import Projects from './../pages/Projects'
import Services from './../pages/Services'
import ContactUs from './../pages/ContactUs'

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
      },
      {
        path: '/projects',
        component: Projects
      },
      {
        path: '/services',
        component: Services
      },
      {
        path: '/contactus',
        component: ContactUs
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
