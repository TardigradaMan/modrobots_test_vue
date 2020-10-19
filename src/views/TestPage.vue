<template>
  <div class="page">
    <div class="wrapper">
      <AppForm
        :submitStatus="submitStatus"
        ref="formTestPage"
        @submit-form="submitForm"
      />
    </div>
  </div>
</template>

<script>
import AppForm from '@/components/Form.vue'
export default {
  components: {
    AppForm
  },
  data() {
    return {
      submitStatus: null
    }
  },

  methods: {
    async submitForm(formData) {
      const $v = this.$refs.formTestPage.$v
      $v.$touch()
      if ($v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.submitStatus = 'PENDING'

        // const formData = {
        //   name: formData.name,
        //   email: formData.email,
        //   phone: formData.phone,
        //   textfield: formData.textfield
        // }

        await this.$store.dispatch('submitFormData', formData)
        this.submitStatus = 'OK'
        $v.$reset()
        this.$refs.formTestPage.form = {}
      }
    }
  }
}
</script>

<style></style>
