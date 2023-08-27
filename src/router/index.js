{/* <script setup>

import { ref, computed } from 'vue'
import Home from './views/Home.vue'
import Mission from './views/Mission.vue'
import Rank from './views/Rank.vue'
import Profile from './views/Profile.vue'
import NotFound from './views/NotFound.vue'

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
</template> */}