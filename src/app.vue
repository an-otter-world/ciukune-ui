<template lang="pug">
c-screen-center(v-if="!currentUser")
  c-loading-overlay(:loading="loading")
    login-view
div(v-else)
  navbar
  router-view
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ref } from 'vue'
import { onMounted } from 'vue'
import LoginView from './views/login.vue'
import Navbar from './components/navbar.vue'
import { fieldRef, loadingRef, resourceRef } from '@dontnod/wlh'
import { getLogin } from './lib/api'


export default defineComponent({
  name: 'App',
  components: {
    LoginView,
    Navbar
  },
  setup() {
    const login = getLogin()
    const loading = loadingRef(login)
    const currentUser = fieldRef(login, async login => await login.currentUser)

    return {
      loading,
      currentUser
    }
  },
})
</script>

<style>

#app {
  height: 100vh;
}
</style>