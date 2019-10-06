<template>
  <div class="about-us-container">
    <q-img
      data-aos="fade-up" 
      data-aos-delay="500" 
      data-aos-duration="1000"
      src="./../statics/img/about_us_top_image.png"
     />
    <p class="q-pa-xl text-body1" 
      data-aos="fade-up" 
      data-aos-delay="800" 
      data-aos-duration="1000"
    >Файер Протекшън е фирма, създадена през 2008 година в гр. Стара Загора.
Вече 10 години се изграждаме и доказваме в областта на комплексното пожарообезопасяване на сгради и обекти, противопожарно обследване, пожарна безопасност, проектиране и поддръжка на пожарогасителни системи.
Предлагаме противопожарна техника и инсталации в гр. Стара Загора и страната.</p>

  </div>
</template>

<script>
import { QMenu, QSeparator, QImg } from 'quasar'

export default {
  name: 'AboutUs',
  components: {
    QMenu,
    QSeparator,
    QImg
  }
}
</script>
