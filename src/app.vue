<template lang="pug">
w-screen-center(v-if="fetching")
  w-loading-overlay(:loading="true")
div(v-else-if="loggedIn")
  navbar
  router-view
login-view(v-else)
</template>

<script lang="ts">
import LoginView from './views/login.vue'
import Navbar from './components/navbar.vue'
import { defineComponent, computed } from 'vue'
import { useCurrentUserQuery } from './graphql'


export default defineComponent({
  name: 'App',
  components: {
    LoginView,
    Navbar
  },
  setup() {
    const {data: currentUser, fetching } = useCurrentUserQuery()

    return {
      fetching,
      loggedIn: computed(() => !!(currentUser.value?.currentUser)),
      username: computed(() => currentUser.value?.currentUser?.username)
    }
  },
})
</script>

<style>

#app {
  height: 100vh;
}
</style>