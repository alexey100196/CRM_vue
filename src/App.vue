<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
    <router-view/>
  </div>
</template>

<script>
  // import EmptyLayout from '@/Layouts/EmptyLayout'
  export default {
    computed: {
      layout() {
        console.log(this.$route.meta)
      }
    }
  }
</script>
<style lang="scss">
  @import '~materialize-css/dist/css/materialize.css';
  @import 'assets/index.css';
</style>
