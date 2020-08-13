<template>
  <div class="container">
    <h1>Form Select</h1>
    <div>
      <ul>
        <li>v-model</li>
        <li>value/change</li>
      </ul>
    </div>
    <div class="group">
      <h2>using v-model</h2>
      <select :id="name1" :name="name1" v-model="value1">
        <option value="1">option 1</option>
        <option value="2">option 2</option>
        <option value="3">option 3</option>
        <option value="4">option 4</option>
        <option value="5">option 5</option>
      </select>
      <div>
        <span>value = {{ value1 }}</span>
      </div>
    </div>
    <div class="group">
      <h2>using value/change</h2>
      <select :id="name2" :name="name2" :value="value2" @change="value2 = $event.target.value">
        <option value="1">option 1</option>
        <option value="2">option 2</option>
        <option value="3">option 3</option>
        <option value="4">option 4</option>
        <option value="5">option 5</option>
      </select>
      <div>
        <span>value = {{ value2 }}</span>
      </div>
    </div>
    <div class="group">
      <h2>using component</h2>
      <select-box :name="name3" :value="value3" @change="updateValue3"></select-box>
      <div>
        <span>value = {{ value3 }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.container {
  width: 80%;
  height: 100%;
  margin: 0 auto;
  background-color: #ededed;
}
.group {
  margin: 20px 0;
  padding: 10px;
}
.data {
  margin: 20px 0;
}
</style>

<script>
import SelectBox from '../components/SelectBox.vue'

export default {
  name: 'FormSelect',
  components: { SelectBox },
  data() {
    return {
      name1: 'select-field1',
      value1: '1',
      name2: 'select-field2',
      value2: '2',
      name3: 'select-field3',
      value3: '3'
    }
  },
  methods: {
    updateValue3(value) {
      //console.log('updateValue3', value)
      this.value3 = value
    }
  }
}
</script>
