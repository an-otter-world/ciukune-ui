<template lang="pug">
w-navbar
  template(v-slot:brand)
    h1 Ciu Kune
  router-link(to="/") Home
  template(v-slot:end)
    w-dropdown
      template(#header)
        w-icon(icon="user-circle")
      w-router-link(to="/profile" icon="user-circle") {{ $t('navbar.profile') }}
      w-router-link(to="/admin" icon="user-circle") {{ $t('navbar.admin') }}
      logout-button
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import LogoutButton from './logout-button.vue'

export default defineComponent({
  components: {
    LogoutButton
  },
  setup() {
    return {
    }
  },
})
</script>
