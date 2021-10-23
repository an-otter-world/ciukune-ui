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


export default defineComponent({
  name: 'App',
  components: {
    LoginView,
    Navbar
  },
  setup() {
    const loading = ref(false)
    const currentUser = ref(undefined)

    onMounted(async () => {
    })

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