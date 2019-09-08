<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/home" label="Home" />
        <q-route-tab to="/aboutus" label="About us" />
        <q-route-tab to="/projects" label="Projects" />
        <q-route-tab to="/servise" label="Servise" />
        <q-route-tab to="/contactus" label="Contact us" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
import { QAvatar, QTabs, QRouteTab, QFooter } from 'quasar'

export default {
  name: 'AppLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  },
  components: {
    QAvatar,
    QTabs,
    QRouteTab,
    QFooter
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
