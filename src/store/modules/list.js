import axios from 'axios'
export default {
  state: {
    error: false,
    listData: []
  },
  mutations: {
    SET_ERROR: state => {
      state.error = true
    },
    SET_LIST_DATA: (state, data) => {
      state.listData = data
    }
  },
  actions: {
    async getListMenu({ commit }) {
      try {
        // let { data } = await axios.get('http://localhost:3000/data') // для json-server

        let { data } = await axios.get('db.json')

        commit('SET_LIST_DATA', data)
      } catch (error) {
        commit('SET_ERROR')
        console.error(
          new Error(`Не удалось отправить данные. Код ошибки: ${error}`)
        )
      }
    }
  }
}
