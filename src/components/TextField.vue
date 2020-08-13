<template>
  <label :for="name">
    <span>{{ name }}:</span>
    <input type="text" :id="name" :name="name" v-model="proxyValue" />
  </label>
</template>

<script>
export default {
  name: 'TextField',
  props: {
    name: {
      type: String,
      require: true
    },
    valueName: {
      type: String,
      require: true
    },
    inputValue: {
      type: String,
      require: true
    }
  },
  computed: {
    proxyValue: {
      get() {
        return this.inputValue
      },
      set(newValue) {
        //console.log('setter', newValue)
        this.$emit('input', this.valueName, newValue ? newValue : null)
      }
    }
  },
  data() {
    return {}
  },
  watch: {
    inputValue(val, newVal) {
      //console.log(val, newVal)
    }
  }
}
</script>
