<template>
  <div class="menu-page">
    <ul class="menu-page__nav">
      <Dropdown
        class="nav-item"
        :item="dataListMenu"
        @make-folder="makeFolder"
        @add-item="addItem"
      ></Dropdown>
    </ul>
    <main class="menu-page__body">
      <h3 class="menu-page__title">
        Очень интересный текст
      </h3>
    </main>
  </div>
</template>

<script>
import Dropdown from './ItemDropMenu'
import { mapState } from 'vuex'
export default {
  components: {
    Dropdown
  },

  methods: {
    makeFolder: function(item) {
      this.set(item, 'children', [])
      this.addItem(item)
    },
    addItem: function(item) {
      item.Childs.push({
        name: 'new stuff'
      })
    }
  },
  computed: {
    ...mapState({
      dataListMenu: state => state.list.listData
    })
  },
  mounted() {
    this.$store.dispatch('getListMenu')
  }
}
</script>

<style lang="scss" scoped>
.menu-page {
  display: grid;
  grid-template: 1fr auto/230px auto;
  padding-top: 20px;
  font-size: 12px;

  &__nav {
    list-style: none;
    grid-column: 1/2;
    width: 190px;

    padding: 0 10px;
    margin: 0;
  }
}
</style>
