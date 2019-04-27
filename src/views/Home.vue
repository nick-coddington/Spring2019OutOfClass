<template>
  <div class="home text-center">
      <div class="site-wrapper-inner">
        <div class="container">
          <profile />
          <div class="col">
            <h1 class="cover-heading">Welcome to the Tiger's Den</h1>
            <p class="lead">This is an app that allows you to follow friends,
              add workouts, and create routines to follow.</p>
            <p class="lead">
              <a href="/About" class="btn btn-lg btn-dark">Learn more</a>
            </p>
            <img alt="Tiger Logo" src="../assets/tigerden.jpeg">
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Profile from '@/components/Profile.vue';
import { Globals } from '@/models/api';

export default {
  data: () => ({
    Globals: Globals,
  }),

  name: 'home',

  components: {
    Profile,
  },
};
</script>
