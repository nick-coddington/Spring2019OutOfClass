import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Friends from './views/Friends.vue';
import Workouts from './views/Workouts.vue';
import Routines from './views/Routines.vue';
import Exercises from './views/Exercises.vue';

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
      path: '/workouts',
      name: 'workouts',
      component: Workouts,
    },
    {
      path: '/routines',
      name: 'routines',
      component: Routines,
    },
    {
      path: '/exercises',
      name: 'exercises',
      component: Exercises,
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
