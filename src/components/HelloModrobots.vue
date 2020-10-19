<template>
  <div class="wrapper">
    <h2>{{ msg }}</h2>
    <h3>Cсылки</h3>
    <ul>
      <li>
        <a
          href="https://github.com/TardigradaMan/modrobots_test_vue"
          target="_blank"
          rel="noopener"
          >GitHub</a
        >
      </li>
      <li>
        <a href="https://vuex.vuejs.org" target="_blank" rel="noopener"
          >Firebase</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
h2 {
  margin: 40px 100px;
  text-align: center;
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
