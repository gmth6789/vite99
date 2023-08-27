<script setup>
import { ref, computed } from 'vue'
import Home from './pages/Home.vue'
import Mission from './pages/Mission.vue'
import Rank from './pages/Rank.vue'
import Profile from './pages/Profile.vue'
import NotFound from './pages/NotFound.vue'

const routes = {
'/': Home,
'/mission': Mission,
'/rank': Rank,
'/profile': Profile

}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<template>
  <a href="#/">Home</a> |
  <a href="#/mission">Mission</a> |
  <a href="#/rank">Rank</a> |
  <a href="#/profile">Profile</a> |
  <a href="#/non-existent-path">Broken Link</a>
  <component :is="currentView" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
