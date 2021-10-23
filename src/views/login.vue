<template lang="pug">
c-screen-center
  c-component
    header {{ $t('login.title') }}
    c-api-form(:resource="login" @submit.prevent="login()")
      c-api-errors
      c-api-input(field="email")
        c-text-field(:placeholder="$t('login.email')" v-model="email")
      c-api-input(field="password")
        c-text-field(password :placeholder="$t('login.password')" v-model="password")
      c-button(type="submit") {{ $t('login.login') }} 
    hr
    div(class="links-area")
      a(href='#') {{ $t('login.reset-password') }}
      a(href='#') {{ $t('login.register') }}
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ref } from 'vue'

export default defineComponent({
    setup() {
      let email = ref('')
      let password = ref('')
      let login = async () => {}

      return {
        email,
        password,
        login
      }
    },
})
</script>

<style scoped>
.links-area {
  display: flex;
  flex-direction: row;
  align-items: stretch;
}

.links-area > *:last-child {
  border-left: 1px var(--ciu-muted-on-surface) solid;
  margin-left: var(--ciu-spacing);
  padding-left: var(--ciu-spacing);
}
</style>
