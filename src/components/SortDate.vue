<template>
  <div class="sort-date">
    <div class="wrapper">
      <h3 class="sort-date__title">980</h3>
      <select v-model="sortParam" class="sort-date__select">
        <option value="0">по возрастанию</option>
        <option value="1">по убыванию</option>
      </select>
      <ul class="sort-date__list">
        <li
          class="sort-date__item"
          v-for="item of sortedList"
          :key="item.value"
        >
          {{ item.value }}
        </li>
      </ul>
    </div>
    <h3></h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dateList: [],
      sortParam: '0'
    }
  },
  created() {
    const initialValue = 980
    for (let index = 0; index < 1041; index++) {
      this.dateList.push({
        value: String(initialValue + index),
        text: String(initialValue + index)
      })
    }
  },
  mounted() {
    document.querySelectorAll('.sort-date__item').forEach(li => {
      li.addEventListener('click', this.selectItem)
    })
  },
  beforeDestroy() {
    document.querySelectorAll('.sort-date__item').forEach(li => {
      li.removeEventListener('click', this.selectItem)
    })
  },
  computed: {
    sortedList() {
      switch (this.sortParam) {
        case '0':
          return this.dateList.slice(0).sort((d1, d2) => {
            return Number(d1.value) - Number(d2.value)
          })
        case '1':
          return [...this.dateList].sort((d1, d2) => {
            return Number(d2.value) - Number(d1.value)
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
        item => item.text == event.target.innerText
      )
      title.textContent = selectedItem.text
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
