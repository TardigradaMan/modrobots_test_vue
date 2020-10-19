<template>
  <form class="form" @submit.prevent="submitForm" novalidate="true">
    <input
      v-model.lazy.trim="$v.form.name.$model"
      class="form__input"
      :class="{ 'form__input--error': $v.form.name.$error }"
      type="text"
      placeholder="Имя"
    />
    <div class="form__error" v-if="!$v.form.name.required">
      Пожалуйста введите вашe Имя
    </div>
    <input
      v-model.lazy.trim="form.email"
      class="form__input"
      :class="{ 'form__input--error': $v.form.email.$error }"
      type="email"
      placeholder="Почта"
    />
    <div class="form__error" v-if="!$v.form.email.required">
      Пожалуйста введите ваш email
    </div>
    <div class="form__error" v-if="!$v.form.email.email">
      Пожалуйста введите ваш корректный email
    </div>
    <input
      v-model.lazy.trim="form.phone"
      class="form__input"
      :class="{ 'form__input--error': $v.form.phone.$error }"
      type="phone"
      placeholder="Телефон"
    />
    <div class="form__error" v-if="!$v.form.phone.required">
      Пожалуйста введите ваш номер телефона
    </div>
    <textarea
      v-model.lazy.trim="form.textfield"
      class="form__textfield"
      name=""
      id=""
      cols="30"
      rows="10"
      placeholder="Комментарий"
    ></textarea>
    <input class="form__button" type="submit" value="Отправить" />
    <p class="form__submit-status" v-if="submitStatus === 'OK'">
      Спасибо за заявку!
    </p>
    <p class="form__submit-status" v-if="submitStatus === 'ERROR'">
      Пожалуйста, заполните форму правильно.
    </p>
    <p class="form__submit-status" v-if="submitStatus === 'PENDING'">
      Отправка формы...
    </p>
  </form>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, numeric, email, minLength } from 'vuelidate/lib/validators'
export default {
  props: {
    submitStatus: {
      type: String,
      default: null
    }
  },
  mixins: [validationMixin],
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(2)
      },
      email: {
        required,
        email
      },
      phone: {
        required,
        numeric
      }
    }
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        textfield: ''
      }
    }
  },
  methods: {
    submitForm() {
      this.$emit('submit-form', this.form)
    }
  }
}
</script>
<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  margin: 0 auto;
  padding-top: 30px;
  &__error {
    display: none;
  }

  &__input,
  &__textfield {
    padding: 10px;
    width: 100%;
    margin-bottom: 15px;
  }
  &__input {
    display: block;
    &--error {
      border: 1px solid rgb(233, 58, 58);
      & + .form__error {
        display: block;
      }
    }
  }
  &__button {
    width: 80px;
  }
}
</style>
