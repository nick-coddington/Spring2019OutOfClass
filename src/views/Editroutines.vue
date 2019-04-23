<template>
  <div class="row">
    <div class="col-lg-6">
      <div class="card">
        <div class="card-header text-white bg-dark">
          <ul class="nav nav-pills card-header-pills">
          <li class="nav-item">
            <router-link class="nav-link" to="/Routines">Go Back</router-link>
          </li>
        </ul>
        </div>
        <div class="card-body">
        <h4 class="card-title">Add Workout to Routine</h4>
        <p divclass="card-text">
            <form @submit.prevent="submit">
                <div class="form-group">
                  <label for="person_id">ID Number</label>
                  <select v-model="data.Fitness_Routines_routine_id" id="routine_id" class="form-control">
                    <option selected> Select ID</option>
                    <option>
                    {{Globals.routine}}
                    </option>
                  </select>
                  <small id="helppersonid">Please select your ID number from the drop down.</small>
                </div>
                <div class="form-group">
                  <label for="exerciseName">Exercise Name</label>
                  <select v-model="data.Fitness_Exercises_exercise_id" id="exercise_id" class="form-control">
                    <option  selected> Choose...</option>
                    <option v-for="exercise in exercises" :key="exercise.id">
                    {{exercise.exercise_id}}:{{exercise.exerciseName}}
                    </option>
                  </select>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
  </div>
</div>
</template>

<script>
import { Globals } from '@/models/api';
import { GetExercises } from '@/models/exercises';
import { addexercisetoroutine } from '@/models/routines';
import toastr from 'toastr';

export default {
  data: () => ({
    exercises: [],
    data: {},
    newRoutine: null,
    Globals: Globals,
  }),
  async mounted() {
    this.exercises = await GetExercises();
  },
  methods: {
    async submit() {
      try {
        const m = await addexercisetoroutine(this.data);
        this.newRoutine = m;
        toastr.success("You've Successfully added an exercise to your Routine!");
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
