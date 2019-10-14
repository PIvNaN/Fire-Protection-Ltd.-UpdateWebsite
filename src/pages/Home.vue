<template>
  <div class="home-container">
    <q-carousel
      class='carousel'
      animated
      arrows
      v-model="slide"
      infinite
      autoplay
      transition-prev="slide-right"
      transition-next="slide-left"
    >
      <q-carousel-slide :name="1" img-src="./../statics/img/fire-protection-professionals-banner-image.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Shop</div>
          <div class="text-subtitle1">Mountains</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">First stop</div>
          <div class="text-subtitle1">Mountains</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Sity</div>
          <div class="text-subtitle1">Mountains</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Some text</div>
          <div class="text-subtitle1">Mountains</div>
        </div>
      </q-carousel-slide>
    </q-carousel>

    <div class="q-gutter-xl items-start q-ma-md">
      <q-img 
        src="./../statics/img/FP_project.png"
        data-aos="fade-up" 
        data-aos-delay="500" 
        data-aos-duration="500"
      >
        <div class="absolute-bottom text-subtitle1 text-center q-pa-xs">
          Caption
        </div>
      </q-img>
      <q-img 
        src="./../statics/img/FP_project_2.png"
        data-aos="fade-up" 
        data-aos-delay="600" 
        data-aos-duration="500"
      >
        <div class="absolute-bottom text-subtitle1 text-center q-pa-xs">
          Caption
        </div>
      </q-img>
      <q-img 
        src="./../statics/img/FP_project_3.png"
        data-aos="fade-up" 
        data-aos-delay="700" 
        data-aos-duration="500"
      >
        <div class="absolute-bottom text-subtitle1 text-center q-pa-xs">
          Caption
        </div>
      </q-img>
      <q-img
        src="./../statics/img/FP_project_4.png"
        data-aos="fade-up" 
        data-aos-delay="800" 
        data-aos-duration="500"
      >
        <div class="absolute-bottom text-subtitle1 text-center q-pa-xs">
          Caption
        </div>
      </q-img>
      <q-img
        src="./../statics/img/FP_project_5.png"
        data-aos="fade-up" 
        data-aos-delay="900" 
        data-aos-duration="500"
      >
        <div class="absolute-bottom text-subtitle1 text-center q-pa-xs">
          Caption
        </div>
      </q-img>
      <q-img
        src="./../statics/img/FP_project_6.png"
        data-aos="fade-up" 
        data-aos-delay="1000" 
        data-aos-duration="500"
      >
        <div class="absolute-bottom text-subtitle1 text-center q-pa-xs">
          Caption
        </div>
      </q-img>
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
  .q-carousel
    height: calc(100vh - 99px)
  .q-gutter-xl > .q-img
    width: auto
    min-width: 28%
    margin-top: 2rem
    margin-left: 2rem
    filter: grayscale(100%)
  .q-gutter-xl > .q-img:hover
    filter: grayscale(0)
  .q-img
    cursor: pointer
  .q-img__content > div
    background: rgba(0,0,0,0.2)
  .custom-caption
    text-align: center
    padding: 12px
    color: white
    background-color: rgba(0, 0, 0, .3)
</style>
