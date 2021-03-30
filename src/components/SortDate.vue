<template>
  <div class="sort-date">
    <div class="wrapper">
      <h3 class="sort-date__title">980</h3>
      <select v-model="sortParam" class="sort-date__select">
        <option value="0">по возрастанию</option>
        <option value="1">по убыванию</option>
      </select>
      <ul class="sort-date__list">
        <li class="sort-date__item" v-for="item of sortedList" :key="item">
          {{ item }}
        </li>
      </ul>
    </div>
    <h3></h3>
    {{ sortParam }}
    {{ sortedList }}
  </div>
</template>

<script>
import { range } from '../utils/range'

export default {
  data() {
    return {
      dateList: [],
      sortParam: '0'
    }
  },
  created() {
    this.dateList = range(980, 1041)
  },

  mounted() {
    document
      .querySelector('.sort-date__list')
      .addEventListener('click', this.selectItem)
  },
  beforeDestroy() {
    document
      .querySelector('.sort-date__list')
      .removeEventListener('click', this.selectItem)
  },
  computed: {
    sortedList() {
      switch (this.sortParam) {
        case '0':
          return this.dateList.slice(0).sort((d1, d2) => {
            return d1 - d2
          })
        case '1':
          return this.dateList.slice(0).sort((d1, d2) => {
            return d2 - d1
          })

        default:
          return this.dateList
      }
    }
  },
  methods: {
    selectItem(event) {
      const title = document.querySelector('.sort-date__title')
      const selectedItem = this.dateList.find(
        item => item == event.target.innerText
      )
      title.textContent = selectedItem
    }
  }
}
</script>

<style lang="scss" scoped>
.sort-date {
  &__list {
    list-style: none;
    margin: 0;
    padding: 0;
    padding-top: 20px;
  }
  &__title {
    font-size: 28px;
  }
  &__item {
    cursor: pointer;
  }
}
</style>
