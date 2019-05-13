<template>
  <div class="home text-center">
      <div class="site-wrapper-inner">
        <div class="container">
          <div class="col">
            <h1 class="cover-heading">Welcome to the Tiger's Den</h1>
            <p class="lead">This is an app that allows you to follow friends,
              add workouts, and create routines to follow.</p>
            <p class="lead">
              <a href="/About" class="btn btn-lg btn-dark">Learn more</a>
            </p>
            <h2> See who might be using the app already!</h2>
            <vSelect
            label="name"
            v-model="input"
            autocomplete
            @input="search(data.firstName)"
            :options="people"
            :close-on-select="true"
            :searchable="true"
            :clearable="true">
            </vSelect>
            <img alt="Tiger Logo" src="../assets/tigerden.jpeg">
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Globals } from '@/models/api';
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
import {search} from '@/models/users';

export default {
  data: () => ({
    data: {},
    Globals: Globals,
    people: [],
  }),

  name: 'home',

  components: {
    vSelect
  },
  methods: {
    async search(data) {
        people = await search(this.data);
    },
  }
};
</script>
