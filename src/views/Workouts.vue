<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="card text-center">
        <div class="card-header text-white bg-dark">
          <ul class="nav nav-pills card-header-pills">
          <li class="nav-item">
            <router-link class="nav-link active" to="/Workouts">Workouts</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Addworkouts">Add a Workout</router-link>
          </li>
        </ul>
        <div>
            <h1> Workout List:</h1>
            <table class="table table-dark">
              <thead>
                <tr>
                  <th scope="col">Workout Date</th>
                  <th scope="col">Rep Completed</th>
                  <th scope="col">Sets Completed</th>
                  <th scope="col">Exercise Name</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="workout in workouts" :key="workout.id">
                  <th scope="row">{{workout.workout_date}}</th>
                  <td>{{workout.repsDone}}</td>
                  <td>{{workout.setsDone}}</td>
                  <td>{{workout.exerciseName}}</td>
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
import { GetWorkouts } from '@/models/workouts'

export default {
  data: () => ({
    Globals: Globals,
    workouts: [],
  }),
  async mounted() {
    let data = Globals.user.person_id;
    this.workouts = await GetWorkouts({Fitness_Persons_person_id: data});
  },
};
</script>

<style>

</style>
