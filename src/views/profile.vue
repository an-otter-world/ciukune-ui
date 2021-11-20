<template lang="pug">
c-component
  header
    h1 Profile
  c-api-form(:resource="user")
    c-api-errors
    c-api-input(field="email")
      c-text-field(:placeholder="$t('profile.email')" v-model="email")
    c-api-input(field="username" patch)
      c-text-field(:placeholder="$t('profile.username')" v-model="username")
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
