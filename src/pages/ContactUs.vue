<template>
  <div class="contact-us-container">
    <Menu/>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import Menu from '../components/Menu'

export default {
  name: 'ContactUs',
  components : {
    Menu
  },
  data () {
    return {
      msg: 'Contact us'
    }
  }
}
</script>

<style scoped lang="stylus">

</style>
