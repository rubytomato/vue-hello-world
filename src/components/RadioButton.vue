<template>
  <label :for="`${name}-${content.id}`">
    <!--チェックボックスとラジオボタンは、checked プロパティと change イベントを使用します-->
    <!--
    <input type="radio" id="my-radio1-x" name="my-radio1" value="red">
    -->
    <input type="radio" :id="`${name}-${content.id}`" :name="name" :value="content.value" v-model="proxyValue" />
    <!--
      :checked="content.value === checkedValue"
      @change="$emit('change', content.value)"
    -->
    <!--
      v-model="proxyValue"
    -->
    <span>{{ content.name }}</span>
  </label>
</template>

<script>
export default {
  name: 'RadioButton',
  props: {
    content: {
      type: Object,
      require: true
    },
    name: {
      type: String,
      require: true
    },
    checkedValue: {
      type: String,
      require: true
    }
  },
  computed: {
    proxyValue: {
      get() {
        return this.checkedValue
      },
      set(newValue) {
        // console.log('setter', newValue)
        this.$emit('change', newValue)
      }
    }
  },
  watch: {
    checkedValue(val, newVal) {
      // console.log(val, newVal)
    }
  }
}
</script>
