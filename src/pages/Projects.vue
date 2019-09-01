<template>
  <div class="projects-container">
    <Menu/>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import Menu from '../components/Menu'

export default {
  name: 'Projects',
  components : {
    Menu
  },
  data () {
    return {
      msg: 'Projects'
    }
  }
}
</script>

<style scoped lang="stylus">

</style>
