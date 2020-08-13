<template>
  <label :for="name">
    <span>{{ name }}:</span>
    <select :id="name" :name="name" v-model="proxyValue">
      <option value="1">option 1</option>
      <option value="2">option 2</option>
      <option value="3">option 3</option>
      <option value="4">option 4</option>
      <option value="5">option 5</option>
    </select>
  </label>
</template>

<script>
export default {
  name: 'SelectBox',
  props: {
    name: {
      type: String,
      require: true
    },
    value: {
      type: String,
      require: true
    }
  },
  computed: {
    proxyValue: {
      get() {
        return this.value
      },
      set(newValue) {
        //console.log('setter', newValue)
        this.$emit('change', newValue)
      }
    }
  },
  data() {
    return {}
  }
}
</script>
