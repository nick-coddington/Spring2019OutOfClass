<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="card text-center">
        <div class="card-header text-white bg-dark">
          <ul class="nav nav-pills card-header-pills">
          <li class="nav-item">
            <router-link class="nav-link active" to="/Exercises">Exercises</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Addexercises">Add an Exercise</router-link>
          </li>
        </ul>
        <div>
            <h1> Exercise List:</h1>
            <table class="table table-dark">
              <thead>
                <tr>
                  <th scope="col">Exercise Name</th>
                  <th scope="col">Default Reps</th>
                  <th scope="col">Default Sets</th>
                  <th scope="col">Exercise Description</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="exercise in exercises" :key="exercise.id">
                  <th scope="row">{{exercise.exerciseName}}</th>
                  <td>{{exercise.defaultReps}}</td>
                  <td>{{exercise.defaultSets}}</td>
                  <td>{{exercise.exerciseDescription}}</td>
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
import { GetExercises } from '@/models/exercises.js';

export default {
  data: () => ({
    Globals: Globals,
    exercises: [],
  }),
  async mounted() {
    this.exercises = await GetExercises();
  },
};
</script>

<style>

</style>
