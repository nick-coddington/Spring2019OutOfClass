<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="card text-center">
        <div class="card-header text-white bg-dark">
          <ul class="nav nav-pills card-header-pills">
          <li class="nav-item">
            <router-link class="nav-link" to="/Routines">Routines</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Addroutines">Add a Routine</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/Myroutines">My Routines</router-link>
          </li>
        </ul>
        <div>
            <h1>{{Globals.user.firstName}}'s Routine List:</h1>
            <table class="table table-light">
              <thead>
                <tr>
                  <th scope="col">Routine Name</th>
                  <th scope="col">Routine Description</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="routine in routines" :key="routine.id">
                  <th scope="row">{{routine.routineName}}</th>
                  <td>{{routine.routineDescription}}</td>
                  <td><button @click="view(routine.routine_id)" class="btn btn-primary">View</button></td>
                  <td><button @click="edit(routine.routine_id)" class="btn btn-primary">Edit</button></td>
                </tr>
              </tbody>
            </table>
        </div>
        </div>
    </div>
  </div>
</div>
</template>

<script>
import { Globals } from '@/models/api';
import { MyRoutines, GetMyRoutine } from '@/models/routines';

export default {
  data: () => ({
    Globals: Globals,
    routines: [],
  }),
  async mounted() {
    let data = Globals.user.person_id;
    this.routines = await MyRoutines({ Fitness_Persons_person_id: data });
  },
  methods: {
    async view(data) {
      Globals.routine = data;
      this.$router.push('/viewroutines');
    },
    edit() {
      this.$router.push('/editroutines');
    },
  },
};
</script>

<style>

</style>
