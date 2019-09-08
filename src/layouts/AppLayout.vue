<template>
  <q-layout view="lHh Lpr lFf">
    <q-header reveal class="text-red">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="./../statics/img/fire-logo.jpg">
          </q-avatar>
          Fire Protection ltd.
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
      <q-page padding style="padding-top: 66px">
        <q-page-sticky elevated expand position="top">
          <q-tabs class="text-red" align="left">
            <q-route-tab to="/home" label="Home" />
            <q-route-tab to="/aboutus" label="About us" />
            <q-route-tab to="/projects" label="Projects" />
            <q-route-tab to="/services" label="Services" />
            <q-route-tab to="/contactus" label="Contact us" />
            <q-btn icon="phone" label="Contact us" stack glossy color="red" />
          </q-tabs>
        </q-page-sticky>
        <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
          <q-btn fab icon="keyboard_arrow_up" color="accent" />
        </q-page-scroller>
      </q-page>
    </q-page-container>

  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
import { QAvatar, QTabs, QRouteTab, QFooter, QPageSticky, QPageScroller } from 'quasar'

export default {
  name: 'AppLayout',
  data () {
    return {
      leftDrawerOpen: false,
    }
  },
  components: {
    QAvatar,
    QTabs,
    QRouteTab,
    QFooter,
    QPageSticky,
    QPageScroller
  },
  methods: {
    openURL
  }
}
</script>

<style lang="stylus">
  .q-header
    background: rgba(0,0,0, 0.00)
</style>
