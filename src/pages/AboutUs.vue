<template>
  <div class="about-us-container">
    <Menu/>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import Menu from '../components/Menu'

export default {
  name: 'AboutUs',
  components : {
    Menu
  },
  data () {
    return {
      msg: 'About us'
    }
  }
}
</script>

<style scoped lang="stylus">

</style>
