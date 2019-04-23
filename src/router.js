import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Friends from './views/Friends.vue';
import Myfriends from './views/Myfriends.vue';
import Pending from './views/Pending.vue';
import Workouts from './views/Workouts.vue';
import Addworkouts from './views/Addworkouts.vue';
import Routines from './views/Routines.vue';
import Exercises from './views/Exercises.vue';
import Addexercises from './views/Addexercises.vue';
import Register from './views/Register.vue';
import Login from './views/Login.vue';
import Addroutines from './views/Addroutines.vue';
import Myroutines from './views/Myroutines.vue';
import Editroutines from './views/Editroutines.vue';
import Viewroutines from './views/Viewroutines.vue';


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/friends',
      name: 'friends',
      component: Friends,
    },
    {
      path: '/myfriends',
      name: 'myfriends',
      component: Myfriends,
    },
    {
      path: '/pending',
      name: 'pending',
      component: Pending,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/workouts',
      name: 'workouts',
      component: Workouts,
    },
    {
      path: '/addworkouts',
      name: 'addworkouts',
      component: Addworkouts,
    },
    {
      path: '/routines',
      name: 'routines',
      component: Routines,
    },
    {
      path: '/editroutines',
      name: 'editroutines',
      component: Editroutines,
    },
    {
      path: '/viewroutines',
      name: 'viewroutines',
      component: Viewroutines,
    },
    {
      path: '/addroutines',
      name: 'addroutines',
      component: Addroutines,
    },
    {
      path: '/myroutines',
      name: 'myroutines',
      component: Myroutines,
    },
    {
      path: '/exercises',
      name: 'exercises',
      component: Exercises,
    },
    {
      path: '/addexercises',
      name: 'addexercises',
      component: Addexercises,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
