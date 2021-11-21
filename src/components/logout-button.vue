<template lang="pug">
a(@click="logout()" href="#" class="logout-button")
  div(class="c-router-link c-flex-row")
    c-icon(icon="sign-out-alt")
    div {{ $t("logout-button.logout") }}
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useLogout } from '../plugins/urql'

export default defineComponent({
  setup() {
    return { 
      ...useLogout()
    }
  },
})
</script>

<style>
.logout-button > svg {
  margin-right: var(--ciu-spacing);
}
</style>

