<template>
  <div id="app">
    <b-navbar type="light" variant="light">
      <b-container>
        <b-navbar-brand href="#">Lineage2JS</b-navbar-brand>

        <div class="d-flex justify-content-between w-100">
          <div>
            <b-nav>
              <b-nav-item to="/" :active="this.$route.fullPath === '/'">Главная</b-nav-item>
            </b-nav>
          </div>
          <div>
            <b-nav>
              <b-nav-item to="/registration" :active="this.$route.fullPath === '/registration'">Регистрация</b-nav-item>
              <b-nav-item to="/login" :active="this.$route.fullPath === '/login'">Войти</b-nav-item>
            </b-nav>
          </div>
        </div>
      </b-container>
    </b-navbar>

    <b-container class="p-0 mt-2">
      <router-view />
    </b-container>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class App extends Vue {
  
}
</script>

<style>

</style>
