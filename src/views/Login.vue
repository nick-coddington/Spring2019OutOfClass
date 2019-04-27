<template>
<div class="row">
    <div class="col-lg-6">
    <div class="card">
      <div class="card-header">
        <ul class="nav nav-pills card-header-pills">
          <li class="nav-item">
            <a class="nav-link" href="/Register">Register</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="/Login">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Single Sign in</a>
          </li>
        </ul>
      </div>
      <div class="card-body">
        <h4 class="card-title">Login</h4>
        <p divclass="card-text">
            <form @submit.prevent="submit">
                <div class="form-group">
                  <label for="Username">Username</label>
                  <input type="text" v-model="data.userName"
                    class="form-control"
                    name="Username"
                    id="Username"
                    aria-describedby="helpUsername"
                    placeholder="Username">
                </div>
                <div class="form-group">
                  <label for="Password">Password</label>
                  <input type="password" v-model="data.password"
                    class="form-control"
                    name="Password"
                    id="Password"
                    placeholder="Password">
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
            </form>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import { Globals } from '@/models/api';
import { Login } from '@/models/users';
import toastr from 'toastr';

export default {
  data: () => ({
    data: {},
    newUser: null,
  }),
  methods: {
    async submit() {
      try {
        const m = await Login(this.data);
        this.$router.push(Globals.redirectRoute);
        toastr.success("You've logged in successfully!");
      } catch (error) {
        Globals.errors.push(error);
        toastr.error(error.message);
      }
    },
  },
};
</script>

<style>
</style>
