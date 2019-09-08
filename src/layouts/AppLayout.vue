<template>
  <q-layout view="lHh Lpr lFf">
    <q-header reveal class="text-red">
      <q-toolbar class="row">
        <div class="col">
          <q-toolbar-title>
            <q-avatar>
              <img src="./../statics/img/fire-logo.jpg">
            </q-avatar>
            Fire Protection ltd.
          </q-toolbar-title>
        </div>
        <div class="col">
          <div class="helper-text text-accent row">
            <div class="col"></div>
            <div class="col">
              <q-icon name="phone"/>
              <b>+359/654 321</b>
            </div>
            <div class="col">
              <q-icon name="mail" />
              <b>fire-protect@gmail.com</b>
            </div>
          </div>
          <q-tabs class="text-accent">
            <q-route-tab to="/home" label="Home" />
            <q-route-tab to="/aboutus" label="About us" />
            <q-route-tab to="/projects" label="Projects" />
            <q-route-tab to="/services" label="Services" />
            <q-btn to="/contactus" icon="phone" label="Contact us" stack glossy color="accent" />
          </q-tabs>
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
      <q-page>
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
    box-shadow: 0px 1px 8px rgba(0,0,0,0.14)
  .q-header,
  .q-page-sticky
    background: rgba(255,255,255, 0.8)
  .helper-text
    margin: 11px 0
    .col
      text-align: end
  .material-icons
    margin-right: 4px
</style>
