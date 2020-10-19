<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/page-for-form">Form</router-link> |
      <router-link to="/dropdown">Dropdown</router-link> |
      <router-link to="/list">SortDate</router-link>
    </div>

    <h2 class="wrapper__title">
      Добро пожаловать на страницу {{ $route.name }}
    </h2>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  padding: 0;
  background-color: rgb(233, 233, 233);
  color: #000;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.wrapper {
  max-width: 1280px;
  padding: 0 10px;
  &__title {
    margin: 0 0 20px;
  }
}
</style>
