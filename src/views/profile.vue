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
import { getLogin } from '../lib/api'

export default defineComponent({
  setup() {
    let login = getLogin()
    let user = login.nested(login => login.currentUser)
    let email = user.field(login => login.email)
    let username = user.field(login => login.username, (login, value) => login.username = value)

    return {
      user,
      email,
      username,
    }
  }
})
</script>
