<template lang="pug">
c-component
  header
    h1 Profile
  c-api-form()
    c-api-errors
    c-api-input(field="email")
      c-text-field(:placeholder="$t('profile.email')")
    c-api-input(field="username" patch)
      c-text-field(:placeholder="$t('profile.username')")
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {

    return {
    }
  }
})
</script>
