<template>
  <div id="q-app">
    <AppLayout/>
  </div>
</template>

<script>
import AppLayout from './layouts/AppLayout'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  name: 'App',
  components: {
    AppLayout
  },
  created () {
    AOS.init()
    console.error(AOS);
    
  },
}
</script>
