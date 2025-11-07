<template>
  <div>
    <b-container class="p-0">
      <div class="d-flex align-items-center vh-100">
        <div class="w-100">
          <h1>Sing in</h1>

          <b-row class="mt-4">
            <b-col cols="6">
              <label>Login</label>
              <b-input v-model="login" />
              <label class="mt-2">Password</label>
              <b-input v-model="password" type="password" />
              <b-button class="mt-3" variant="primary" @click="registration">Login</b-button>
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
export default class Login extends Vue {
  
}
</script>