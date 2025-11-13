<template>
  <div class="text-white" style="background-color: #23283a;">
    <b-container class="p-0">
      <div class="d-flex align-items-center vh-100">
        <div class="w-100">
          <h1>Create a new account</h1>

          <b-row class="mt-4">
            <b-col cols="6">
              <label>Login</label>
              <b-form-input v-model="login" />
              <label class="mt-2">Password</label>
              <b-form-input v-model="password" type="password" />
              <label class="mt-2">Confirm password</label>
              <b-form-input v-model="confirmPassword" type="password" />
              <label class="mt-2">Captcha</label>
              <div class="d-flex">
                <div class="p-2 rounded w-100 mr-1 text-center" style="background-color: #f0f0f0;">
                  <div v-html="captcha"></div>
                </div>
                <b-button variant="info" class="pl-4 pr-4" @click="getCaptcha">
                  <b-icon-arrow-repeat />
                </b-button>
              </div>
              <b-form-input class="mt-2" v-model="captchaCode" />
              <div class="d-flex justify-content-end">
                <b-button class="mt-3" variant="primary" @click="createAccount">Create</b-button>
              </div>
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
  captchaId = '';
  captchaCode = '';
  captcha = '';

  async createAccount() {
    const response = await fetch('http://localhost/account', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        login: this.login,
        password: this.password,
        captchaId: this.captchaId,
        captchaCode: this.captchaCode,
      })
    });
    const payload = await response.json();

    if (payload.status === 'failed') {
      this.$bvModal.msgBoxOk(payload.message, { centered: true });
      this.captchaCode = '';
      this.getCaptcha();
    }

    if (payload.status === 'success') {
      this.$bvModal.msgBoxOk(payload.message, { centered: true });
      this.login = '';
      this.password = '';
      this.confirmPassword = '';
      this.captchaCode = '';
    }
  }

  async getCaptcha() {
    const response = await fetch('http://localhost/captcha');
    const payload = await response.json();

    this.captchaId = payload.data.captchaId;
    this.captcha = payload.data.captcha;
  }

  mounted() {
    this.getCaptcha();
  }
}
</script>