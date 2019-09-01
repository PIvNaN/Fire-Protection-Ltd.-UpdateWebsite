<template>
  <div class="hello">
    <Menu/>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import Menu from '../components/Menu'

export default {
  name: 'Home',
  components : {
    Menu
  },
  data () {
    return {
      msg: 'Home page'
    }
  }
}
</script>

<style scoped lang="stylus">

</style>
