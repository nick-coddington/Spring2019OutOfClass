<template>
<div>
  <div class="row">
    <div class="col-lg-12">
      <div class="card text-center">
        <div class="card-header text-white bg-dark">
          <ul class="nav nav-pills card-header-pills">
          <li class="nav-item">
            <router-link class="nav-link active" to="/Friends">Users</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Myfriends">My Friends</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Pending">Pending Requests</router-link>
          </li>
        </ul>
        <div>
        <h1> List of Users</h1>
        <table class="table table-light">
          <thead>
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <th scope="row">{{user.firstName}}</th>
              <td>{{user.lastName}}</td>
              <td><button @click="addFriend(user.person_id)" class="btn btn-primary">Add Friend</button></td>
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
import { GetUsers, addFriend } from '@/models/users';
import toastr from 'toastr';

export default {
  data: () => ({
    Globals: Globals,
    users: [],
  }),
  async mounted() {
    this.users = await GetUsers();
  },
  methods: {
    async addFriend(data) {
      try {
        if (data < Globals.user.person_id) {
          const x = await addFriend({ user_id_1: data, user_id_2: Globals.user.person_id });
          toastr.success("You've Successfully Sent a Friend Request.");
        } else {
          const x = await addFriend({ user_id_1: Globals.user.person_id, user_id_2: data });
          toastr.success("You've Successfully Sent a Friend Request.");
        }
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
