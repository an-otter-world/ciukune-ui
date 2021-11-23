<template lang="pug">
a(@click="logout()" href="#" class="logout-button")
  div(class="router-link flex-row")
    w-icon(icon="sign-out-alt")
    div {{ $t("logout-button.logout") }}
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useLogout } from '../lib/urql'

export default defineComponent({
  setup() {
    return { 
      ...useLogout()
    }
  },
})
</script>

<style lang="scss">
.logout-button {
  svg {
    margin-right: var(--spacing);
  }
}
</style>

