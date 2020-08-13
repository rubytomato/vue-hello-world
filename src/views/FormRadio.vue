<template>
  <div class="container">
    <h1>Form Radio</h1>
    <div>
      <ul>
        <li>v-model</li>
        <li>checked/change</li>
      </ul>
    </div>
    <div class="group">
      <h2>using v-model</h2>
      <label
        v-for="period in periodList"
        :key="`${radioButtonName1}-${period.id}`"
        :for="`${radioButtonName1}-${period.id}`"
      >
        <input
          type="radio"
          :id="`${radioButtonName1}-${period.id}`"
          :name="radioButtonName1"
          :value="period.value"
          v-model="checked1"
        />
        <span>{{ period.name }}</span>
      </label>
      <div class="data">
        <span>value = {{ checked1 }}</span>
      </div>
    </div>
    <div class="group">
      <h2>using checked/change</h2>
      <label
        v-for="period in periodList"
        :key="`${radioButtonName2}-${period.id}`"
        :for="`${radioButtonName2}-${period.id}`"
      >
        <input
          type="radio"
          :id="`${radioButtonName2}-${period.id}`"
          :name="radioButtonName2"
          :value="period.value"
          :checked="period.value === checked2"
          @change="checked2 = $event.target.value"
        />
        <span>{{ period.name }}</span>
      </label>
      <div class="data">
        <span>value = {{ checked2 }}</span>
      </div>
    </div>
    <div class="group">
      <h2>using component</h2>
      <radio-button
        v-for="period in periodList"
        :key="`${radioButtonName3}-${period.id}`"
        :content="period"
        :name="radioButtonName3"
        :checked-value="checked3"
        @change="updateValue3"
      ></radio-button>
      <div class="data">value = {{ checked3 }}</div>
      <div>
        <input type="text" v-model="checked3" />
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
import RadioButton from '../components/RadioButton.vue'

const periodList = [
  {
    id: 1,
    name: 'RED',
    value: 'red'
  },
  {
    id: 2,
    name: 'BLUE',
    value: 'blue'
  },
  {
    id: 3,
    name: 'GREEN',
    value: 'green'
  }
]

export default {
  name: 'FormRadio',
  components: {
    RadioButton
  },
  data() {
    return {
      periodList: periodList,
      checked1: 'blue',
      radioButtonName1: 'my-radio1',
      checked2: 'green',
      radioButtonName2: 'my-radio2',
      checked3: 'red',
      radioButtonName3: 'my-radio3'
    }
  },
  methods: {
    updateValue1(value) {
      //console.log('updateValue1', value)
      this.checked1 = value
    },
    updateValue2(event) {
      //console.log('updateValue2', event.target.value)
      this.checked2 = event.target.value
    },
    updateValue3(value) {
      //console.log('updateValue3', value)
      this.checked3 = value
    }
  }
}
</script>
