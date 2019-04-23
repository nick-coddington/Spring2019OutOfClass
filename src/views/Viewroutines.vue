<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="card text-center">
        <div class="card-header text-white bg-dark">
          <ul class="nav nav-pills card-header-pills">
          <li class="nav-item">
            <router-link class="nav-link" to="/Routines">Go Back</router-link>
          </li>
        </ul>
        <div>
          <h1>Routine Information</h1>
            <table class="table table-light">
              <thead>
                <tr>
                  <th scope="col">Exercise Name</th>
                  <th scope="col">Default Reps</th>
                  <th scope="col">Default Sets</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="routine in routines" :key="routine.id">
                  <th scope="row">{{routine.exerciseName}}</th>
                  <td>{{routine.defaultReps}}</td>
                  <td>{{routine.defaultSets}}</td>
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
import { routineexercises } from '@/models/routines';

export default {
  data: () => ({
    Globals: Globals,
    routines: [],
  }),
  async mounted() {
    let data = Globals.routine;
    console.log(data);
    this.routines = await routineexercises({ routine_id: data });
  },
};
</script>

<style>

</style>
