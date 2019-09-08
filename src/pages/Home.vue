<template>
  <div class="home-container">
    <q-img src="./../statics/img/fire-protection-professionals-banner-image.jpg">
      <div class="absolute-full text-subtitle2 flex flex-center">
        <h1>Fire Protection ltd.</h1>
      </div>
    </q-img>
  </div>
</template>

<script>
import { QImg } from 'quasar'
import { QSeparator } from 'quasar'

export default {
  name: 'Home',
  components: {
    QImg,
    QSeparator
  }
}
</script>

<style>
  .q-img__content > div {
    background: rgba(0,0,0,0.07);
  }
</style>
