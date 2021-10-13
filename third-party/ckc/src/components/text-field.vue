<template lang="pug">
div(class="text-field")
  input(
    :placeholder="placeholder"
    :type="password ? 'password' : 'text'"
    :value="modelValue"
    @input="valueChanged($event)"
  )

</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    placeholder: String,
    modelValue: String,
    password: Boolean,
  },
  emits: ['update:modelValue'],
  setup(_, { emit }) {
    function valueChanged(event: Event) {
      const input = event.target as HTMLInputElement
      emit('update:modelValue', input.value)
    }
    return {
      valueChanged,
    }
  },
})
</script>

<style lang="scss">
.text-field {
  display: grid;
  padding-top: calc(var(--font-size) * 0.8);

  > input {
    background: transparent;
    border-bottom: 1px var(--primary-dark) solid;
    border-left: none;
    border-right: none;
    border-top: none;
    color: inherit;
    font: var(--font);
    grid-area: 1 / 1;
    transition: border-bottom 0.2s;
    &:focus {
      outline: none;
      border-bottom: 1px var(--primary-light) solid;
      + .text-field-placeholder {
        font-size: 80%;
        transform: translate(0px, calc(var(--font-size) * -1.1));
      }
    }

    &:not(:placeholder-shown) + .text-field-placeholder {
      font-size: 80%;
      transform: translate(0px, calc(var(--font-size) * -1.1));
    }
  }
}

.text-field-placeholder {
  color: var(--hint-on-surface);
  opacity: 0.5;
  display: flex;
  font-size: 90%;
  grid-area: 1 / 1;
  transition-duration: 0.2s;
  transition-property: transform font-size;
  z-index: -1;
  > div {
    align-self: center;
  }
}

</style>
