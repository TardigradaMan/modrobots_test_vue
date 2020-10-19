<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/img/logo80.svg" />
    <HelloModrobots
      msg="Изменил json файл, для возможности использования
    json-server, добавив два route для меню и формы"
    />
  </div>
</template>

<script>
import HelloModrobots from '@/components/HelloModrobots.vue'

export default {
  name: 'Home',
  components: {
    HelloModrobots
  }
}
</script>
