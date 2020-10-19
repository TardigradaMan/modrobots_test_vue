<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/img/logo80.svg" />
    <HelloWorld
      msg="Изменил json файл, для возможности использования
    json-server, добавив два route для меню и формы"
    />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
