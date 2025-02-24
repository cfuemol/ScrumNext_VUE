import { createRouter, createWebHistory } from 'vue-router';
import Login from '../src/views/login.vue';
import Registro from '../src/views/Register.vue'

const routes = [
    { path: '/',
     name: 'Login',
     component: Login 
    },
    {
      path: '/registro',
      name: 'Registro',
      component: Registro
    }
  ];
  
const router = createRouter({
history: createWebHistory(),
routes,
});

export default router;