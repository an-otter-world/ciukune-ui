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
import { childResource, fieldRef } from '@dontnod/wlh'

export default defineComponent({
  setup() {
    let login = getLogin()
    let user = childResource(login, login => login.currentUser)
    let email = fieldRef(user, user => user.email, (user, value) => user.email = value)
    let username = fieldRef(user, user => user.username, (user, value) => user.username = value)

    return {
      user,
      email,
      username,
    }
  }
})
</script>
