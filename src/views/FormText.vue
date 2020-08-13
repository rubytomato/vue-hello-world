<template>
  <div class="container">
    <h1>Form Text</h1>
    <div>
      <ul>
        <li>v-model</li>
        <li>value/input</li>
      </ul>
    </div>
    <div class="group">
      <h2>using v-model</h2>
      <label :for="name1">
        <span>{{ name1 }}:</span>
        <input type="text" :id="name1" :name="name1" v-model="value1" />
      </label>
      <div>
        <span>value = {{ value1 }} : null = {{ value1 === null }}</span>
      </div>
    </div>
    <div class="group">
      <h2>using value/input</h2>
      <label :for="name2">
        <span>{{ name2 }}:</span>
        <input type="text" :id="name2" :name="name2" :value="value2" @input="value2 = $event.target.value" />
      </label>
      <!-- :value="value2" -->
      <!-- @input="value2 = $event.target.value" -->
      <!-- v-model="proxyValue" -->
      <div>
        <span>value = {{ value2 }} : null = {{ value2 === null }}</span>
      </div>
    </div>
    <div class="group">
      <h2>using component</h2>
      <div>
        <text-field :name="name3" :input-value="value3" value-name="value3" @input="proxyValue3"></text-field>
        <div>
          <span>value = {{ value3 }} : null = {{ value3 === null }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
body {
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
</style>

<script>
import TextField from '../components/TextField.vue'

export default {
  name: 'FormText',
  components: {
    TextField
  },
  data: function() {
    return {
      name1: 'text-field1',
      value1: null,
      name2: 'text-field2',
      value2: null,
      name3: 'text-field3',
      value3: '',
      name4: 'text-field4',
      value4: 'abc'
    }
  },
  computed: {
    proxyValue: {
      get() {
        return this.value2
      },
      set(newVal) {
        this.value2 = newVal ? newVal : null
      }
    }
  },
  methods: {
    updateValue3(value) {
      // console.log('updateValue3', value)
      this.value3 = value
    },
    proxyValue3(name, value) {
      this[name] = value
    }
  }
}
</script>
