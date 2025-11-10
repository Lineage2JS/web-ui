<template>
  <div class="text-white" style="background-color: #23283a;">
    <b-container class="p-0">
      <div class="d-flex align-items-center vh-100">
        <div class="w-100">
          <h1>Create a new account</h1>

          <b-row class="mt-4">
            <b-col cols="6">
              <label>Login</label>
              <b-input v-model="login" />
              <label class="mt-2">Password</label>
              <b-input v-model="password" type="password" />
              <label class="mt-2">Confirm password</label>
              <b-input v-model="confirmPassword" type="password" />
              <label class="mt-2">Captcha</label>
              <b-input v-model="captcha" />
              <b-button class="mt-3" variant="primary" @click="registration">Registration</b-button>
            </b-col>
          </b-row>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class Register extends Vue {
  login = '';
  password = '';
  confirmPassword = '';
  captcha = '';

  async registration() {
    const response = await fetch('http://localhost/account', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        login: this.login,
        password: this.password
      })
    });
    const payload = await response.json();

    if (payload.status === 'failed') {
      this.$bvModal.msgBoxOk('Такой аккаунт уже существует', { centered: true });
    }

    if (payload.status === 'success') {
      this.$bvModal.msgBoxOk('Регистрация успешна', { centered: true });
    }
  }
}
</script>