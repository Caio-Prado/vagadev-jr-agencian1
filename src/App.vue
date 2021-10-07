<template>
  <div id="app">

    <Home/>
    <Footer/>

  </div>
</template>

<script>
import './styles/global.css'

import Footer from './components/Footer'
import Home from './pages/Home.vue'

export default {
  name: 'App',
  components: {
    Home,
    Footer,
  }
}
</script>

<style>
  
</style>
