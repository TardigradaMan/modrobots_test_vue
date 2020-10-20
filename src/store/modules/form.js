// import axios from 'axios'
export default {
  state: {
    error: false
  },
  mutations: {
    SET_ERROR: state => {
      state.error = true
    }
  },
  actions: {
    async submitFormData({ commit }, formData) {
      try {
        // await axios.post('http://localhost:3000/form', formData)
        console.log(formData)
      } catch (error) {
        commit('SET_ERROR')
        console.log(
          new Error(`Не удалось отправить данные. Код ошибки: ${error}`)
        )
      }
    }
  }
}
