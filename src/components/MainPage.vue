<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>By Adrian Unruh</h2>
    <div class="row">
      <div class="column">
        <RandomRoll />
      </div>
      <div class="column">
        <SetRoll />
      </div>
    </div>
  </div>
</template>

<script>
import RandomRoll from './RandomRoll.vue'
import SetRoll from './SetRoll.vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    RandomRoll,
    SetRoll
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.column {
  float: left;
  width: 50%;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
