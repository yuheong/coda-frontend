<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <Header />
    </div>
  </header>

  <RouterView />
  <footer>
    <Footer />
  </footer>
</template>

<style scoped>
header {
  line-height: 1.5;
  margin-bottom: 40px;
}

</style>
