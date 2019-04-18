<template>
<div>
    <h1 v-if="Globals.user"> {{Globals.user.firstName}}'s  Friends List</h1>
    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="friend in friends" :key="friend.id">
          <th scope="row">{{friend.firstName}}</th>
          <td>{{friend.lastName}}</td>
        </tr>
      </tbody>
    </table>
</div>
</template>

<script>
import { Globals } from '@/models/api';
import { GetFriends } from '@/models/users.js';

export default {
  data: () => ({
    Globals: Globals,
    friends: [],
  }),
  async mounted() {
    this.friends = await GetFriends();
  },
};
</script>

<style>

</style>
