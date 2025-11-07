<template>
  <div id="app">
    <b-navbar type="light" fixed="top">
      <b-container class="p-0">
        <b-navbar-brand href="#" class="text-white">Lineage2JS</b-navbar-brand>

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

    <router-view />

    <footer class="footer mt-auto" style="background-color: #131529; border-top: 2px solid #1e2135">
      <div class="container py-5">
        <div class="row">
          <div class="col-lg-6 mb-4">
            <h5 class="fw-bold mb-3 text-light">
              <!-- <img src="images/logo.png" width="24" height="24" class="me-2 align-bottom" alt=""> -->
              Lineage2JS
            </h5>
            <p class="text-white-50">THESE SERVERS ARE GAME EMULATOR WITH ITS IMPROVEMENTS. USAGE OUR SERVICE IS FOR INFORMATION ONLY.</p>
          </div>
          <div class="col-lg-3 col-md-6 mb-4">
            <h6 class="fw-bold text-light">Community</h6>
            <ul class="list-unstyled">
              <li><a class="text-white text-decoration-none text-white-50" href="#">Forum</a></li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-6 mb-4">
            <h6 class="fw-bold text-light">Support</h6>
            <ul class="list-unstyled">
              <li><a class="text-white text-decoration-none text-white-50" href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div class="pt-4 mt-4 text-center" style="border-top: 2px solid #1e2135 !important">
          <p class="mb-0 text-white-50">Copyright © 2025 Lineage2JS. All rights reserved.</p>
        </div>
      </div>
    </footer>
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
