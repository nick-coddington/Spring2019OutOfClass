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
            <router-link class="nav-link" to="/Myfriends">My Friends</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/Pending">Pending Requests</router-link>
          </li>
        </ul>
        <div>
        <h1> Pending Requests</h1>
        <table class="table table-light">
          <thead>
            <tr>
              <th scope="col">Name</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="request1 in requests1" :key="request1.id">
              <th scope="row">{{request1.firstName}} {{request1.lastName}}</th>
              <td><button @click="accept(request1.user_id_1)" class="btn btn-primary">Accept</button></td>
              <td><button @click="block(request1.user_id_1)" class="btn btn-primary">Block</button></td>
            </tr>
            <tr v-for="request2 in requests2" :key="request2.id">
              <th scope="row">{{request2.firstName}} {{request2.lastName}}</th>
              <td><button @click="accept(request2.user_id_2)" class="btn btn-primary">Accept</button></td>
              <td><button @click="block(request2.user_id_2)" class="btn btn-primary">Block</button></td>
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
import { getrequests1, getrequests2, accept, block } from '@/models/users';
import toastr from 'toastr';

export default {
  data: () => ({
    Globals: Globals,
    requests1: [],
    requests2: [],
  }),
  async mounted() {
    let data = Globals.user.person_id;
    this.requests1 = await getrequests1({ user_id_1: data, user_id_2: data, userName: Globals.user.userName });
    this.requests2 = await getrequests2({ user_id_1: data, user_id_2: data, userName: Globals.user.userName });
  },
  methods: {
    async accept(data) {
      try{
        if (data < Globals.user.person_id) {
          const x = await accept({ user_id_1: data , user_id_2: Globals.user.person_id });
          toastr.success("You're now friends!")
        } else {
          const x = await accept({ user_id_1: Globals.user.person_id, user_id_2: data });
          toastr.success("You're now friends!")
        } 
      } catch (error) {
          Globals.errors.push(error);
          toastr.error(error.message);
        }
    },
    async block(data) {
      try{
        if (data < Globals.user.person_id) {
          const x = await block({ user_id_1: data , user_id_2: Globals.user.person_id });
          toastr.success("You've Blocked this user!")
        } else {
          const x = await block({ user_id_1: Globals.user.person_id, user_id_2: data });
          toastr.success("You've blocked this user!")
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
