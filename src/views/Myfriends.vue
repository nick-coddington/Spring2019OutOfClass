<template>
<div>
  <div class="row">
    <div class="col-lg-12">
      <div class="card text-center">
        <div class="card-header text-white bg-dark">
          <ul class="nav nav-pills card-header-pills">
          <li class="nav-item">
            <router-link class="nav-link" to="/Friends">Users</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/Myfriends">My Friends</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Pending">Pending Requests</router-link>
          </li>
        </ul>
        <div>
        <h1> My Friends</h1>
        <table class="table table-light">
          <thead>
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="friend1 in friends1" :key="friend1.id">
              <th scope="row">
                {{friend1.firstName}}</th>
              <td>
                {{friend1.lastName}}</td>
            </tr>
            <tr v-for="friend2 in friends2" :key="friend2.id">
              <th scope="row">
                {{friend2.firstName}}</th>
              <td>
                {{friend2.lastName}}</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </div>
  </div>
  </div>
</div>
</template>

<script>
import { Globals } from '@/models/api';
import { getFriends1, getFriends2 } from '@/models/users';

export default {
  data: () => ({
    Globals: Globals,
    friends1: [],
    friends2: [],
  }),
  async mounted() {
    let data = Globals.user.person_id;
    this.friends1 = await getFriends1({ user_id_1: data, user_id_2: data });
    this.friends2 = await getFriends2({ user_id_1: data, user_id_2: data });
  },
};
</script>

<style>

</style>
