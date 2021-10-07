<template>
  <div id="app">

    <router-view path="$router.key" />
    <Footer/>

  </div>
</template>

<script>
import './styles/global.css'

import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Footer,
  }
}
</script>

<style>
  
</style>
