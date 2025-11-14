import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '@/pages/Main';
import Register from '@/pages/Register';
//import Login from '@/pages/Login';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      name: 'main',
      path: '/',
      component: Main
    },
    {
      name: 'register',
      path: '/register/',
      component: Register
    },
    // {
    //   name: 'login',
    //   path: '/login/',
    //   component: Login
    // }
  ],
  scrollBehavior() {        
    // Default - scroll up
    return { x: 0, y: 0 }
  }
});