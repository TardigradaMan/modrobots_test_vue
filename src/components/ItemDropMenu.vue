<template>
  <!-- :style="{ marginLeft: marginLeft + 10 + 'px' } -->
  <li class="nav-item">
    <div
      :class="{
        bold: isOpen,
        'nav-item__name': item.ParentId,
        'nav-item__head': !item.ParentId
      }"
      @click="toggle"
    >
      <span class="nav-item__icon">
        <img src="../assets/img/menu-icon.png" />
      </span>
      {{ item.Name }}
      <span class="nav-item__toggle" v-if="isFolder">
        <i
          v-if="isOpen"
          :class="{
            'fa fa-angle-down': item.ParentId,
            'fa fa-angle-double-down': !item.ParentId
          }"
        ></i>
        <i
          v-if="!isOpen"
          :class="{
            'fa fa-angle-right': item.ParentId,
            'fa fa-angle-double-right': !item.ParentId
          }"
        ></i>
      </span>
    </div>
    <ul class="nav-item__list" v-show="isOpen" v-if="isFolder">
      <Dropdown
        class="nav-item"
        v-for="(child, index) in item.Childs"
        :key="index"
        :item="child"
        @add-item="$emit('add-item', $event)"
      ></Dropdown>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'Dropdown',
  props: {
    item: {
      type: [Array, Object]
    }
  },
  data() {
    return {
      isOpen: false,
      marginLeft: 0
    }
  },
  computed: {
    isFolder() {
      return this.item.Childs && this.item.Childs.length
    }
  },
  methods: {
    toggle() {
      if (this.isFolder) {
        this.isOpen = !this.isOpen
      }
    },
    makeFolder() {
      if (!this.isFolder) {
        this.$emit('make-folder', this.item)
        this.isOpen = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-item {
  cursor: pointer;
  margin: 15px 0;

  &__icon img {
    position: absolute;
    left: 2px;
    height: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
  &__head {
    position: relative;
    background-color: #fff;
    padding: 16px 30px;
    border-radius: 4px;
    text-align: left;
    z-index: 10;
    font-size: 14px;
    text-align: center;
    & .nav-item__icon img {
      display: none;
    }
    & .nav-item__toggle {
      font-size: 24px;
    }
  }
  &__name {
    background-color: #fff;
    position: relative;
    padding: 8px 30px;
    border-radius: 4px;
    text-align: left;
    z-index: 10;

    &::before {
      content: '';
      position: absolute;
      left: 24px;
      top: 0;
      height: 100%;
      width: 1px;
      background: rgb(209, 209, 209);
      z-index: 1;
    }

    &::after {
      content: url('../assets/img/bg_test.png');
      position: absolute;
      left: -20px;
      top: 50%;
      transform: translateY(-90%);
      z-index: 15;
    }
  }
  &__list {
    list-style: none;
    padding-left: 15px;
    position: relative;
    z-index: 2;

    overflow: hidden;
    &::before {
      content: '';
      position: absolute;
      left: 5px;
      top: -15px;
      height: calc(100% - 35px);
      width: 1px;
      background: rgb(209, 209, 209);
      z-index: 1;
    }
  }

  &__toggle {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
    color: rgb(182, 182, 182);
  }
}
.bold {
  font-weight: bold;
}
// ul {
//   padding-left: 1em;
//   line-height: 1.5em;
//   list-style-type: dot;
// }
</style>
