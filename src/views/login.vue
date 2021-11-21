<template>
<c-screen-center>
  <c-component>
    <header> {{ $t('login.title') }}</header>
    <c-api-form :operation="login" @submit.prevent="login.execute()">
      <c-api-errors/>
      <c-api-input field="email">
        <c-text-field :placeholder="$t('login.email')" v-model="email"/>
      </c-api-input>
      <c-api-input field="password">
        <c-text-field password :placeholder="$t('login.password')" v-model="password"/>
      </c-api-input>
      <c-button type="submit"> {{ $t('login.reset-password') }}</c-button>
      <hr/>
      <div class="links-area">
        <a href='#'>{{ $t('login.reset-password') }}</a>
        <a href='#'>{{ $t('login.register') }}</a>
      </div>
    </c-api-form>
  </c-component>
</c-screen-center>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import { useLoginMutation, bindRefs } from '../graphql'

export default defineComponent({
    setup() {
      const email = ref('')
      const password = ref('')
      const login = bindRefs(useLoginMutation, {email, password})

      return {
        login,
        email,
        password,
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
