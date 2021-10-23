<template lang="pug">
c-component
  header
    h1 Profile
  c-api-form(:resource="currentUser")
    c-api-errors
    c-api-input(field="email")
      c-text-field(:placeholder="$t('profile.email')" v-model="email")
    c-api-input(field="username" patch)
      c-text-field(:placeholder="$t('profile.username')" v-model="username")
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ref } from 'vue'

export default defineComponent({
  async setup() {
    let currentUser = ref(undefined)
    let email = ref('')
    let username = ref('')

    return {
      currentUser,
      email,
      username,
    }
  }
})
</script>
