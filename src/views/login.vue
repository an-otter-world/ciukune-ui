<template lang="pug">
w-screen-center
  w-component
    header {{ $t('login.title') }}
    w-api-form(:operation="login" @submit.prevent="login.execute()")
      w-api-errors
      w-api-input(field="email")
        w-text-field(:placeholder="$t('login.email')" v-model="email")
      w-api-input(field="password")
        w-text-field(password :placeholder="$t('login.password')" v-model="password")
      w-button(type="submit") {{ $t('login.reset-password') }}
      div(class="links-area")
        a(href='#') {{ $t('login.reset-password') }}
        a(href='#') {{ $t('login.register') }}
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useLoginMutation, bindRefs } from '../graphql'

const email = ref("");
const password = ref("");
const login = bindRefs(useLoginMutation, { email, password });
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
