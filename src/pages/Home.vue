<template>
  <div class="home-container">
    <q-carousel
      class='carousel'
      animated
      v-model="slide"
      navigation
      infinite
      autoplay
      transition-prev="slide-right"
      transition-next="slide-left"
    >
      <q-carousel-slide :name="1" img-src="./../statics/img/fire-protection-professionals-banner-image.jpg" />
      <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
      <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
    </q-carousel>

    <div class="q-gutter-xl items-start q-ma-md">
      <q-img src="./../statics/img/FP_project.png"></q-img>
      <q-img src="./../statics/img/FP_project_2.png"></q-img>
      <q-img src="./../statics/img/FP_project_3.png"></q-img>
      <q-img src="./../statics/img/FP_project_4.png"></q-img>
      <q-img src="./../statics/img/FP_project_5.png"></q-img>
      <q-img src="./../statics/img/FP_project_6.png"></q-img>
    </div>
  </div>
</template>

<script>
import { QImg, QSeparator, QCarousel, QCarouselSlide } from 'quasar'

export default {
  name: 'Home',
  components: {
    QImg,
    QSeparator,
    QCarousel,
    QCarouselSlide
  },
  data() {
    return {
      slide: 1
    }
  }
}
</script>

<style lang="stylus">
  .q-page-container
    margin-top: -99px
  .carousel
    height: 100vh
  .q-gutter-xl > .q-img
    width: auto
    min-width: 28%
    margin-top: 2rem
    margin-left: 2rem
    filter: grayscale(100%)
  .q-gutter-xl > .q-img:hover
    filter: grayscale(0)
  .q-img__content > div
    background: rgba(0,0,0,0.07)
</style>
