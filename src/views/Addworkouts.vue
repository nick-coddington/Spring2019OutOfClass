<template>
  <div class="row">
    <div class="col-lg-6">
      <div class="card">
        <div class="card-header text-white bg-dark">
          <ul class="nav nav-pills card-header-pills">
          <li class="nav-item">
            <router-link class="nav-link" to="/Workouts">Workouts</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/Addworkouts">Add a Workout</router-link>
          </li>
        </ul>
        </div>
        <div class="card-body">
        <h4 class="card-title">Add Workout</h4>
        <p divclass="card-text">
            <form @submit.prevent="submit">
                <div class="form-group">
                  <label for="person_id">ID Number</label>
                  <select v-model="data.Fitness_Persons_person_id" id="person_id" class="form-control">
                    <option selected> Select ID</option>
                    <option>
                    {{Globals.user.person_id}}
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
                <div class="form-group">
                  <label for="repsDone">Reps Completed</label>
                  <input type="text" v-model="data.repsDone"
                    class="form-control"
                    name="repsDone"
                    id="repsDone"
                    aria-describedby="helprepsDone"
                    placeholder="Reps Completed"
                    required>
                  <small id="helprepsDone"
                  class="form-text text-muted">Input the amount of reps you completed.</small>
                </div>
                <div class="form-group">
                  <label for="setsCompleted">Sets Completed</label>
                  <input type="text" v-model="data.setsDone"
                    class="form-control"
                    name="setsDone"
                    id="setsDone"
                    aria-describedby="helpsetsDone"
                    placeholder="Sets Complted"
                    required>
                  <small id="helpsetsDone"
                  class="form-text text-muted">Input the sets you did.</small>
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
import { GetExercises, getID } from '@/models/exercises';
import { addWorkout } from '@/models/workouts';
import toastr from 'toastr';

export default {
  data: () => ({
    exercises: [],
    data: {},
    newWorkout: null,
    Globals: Globals,
  }),
  async mounted() {
    this.exercises = await GetExercises();
  },
  methods: {
    async submit() {
      try {
        const m = await addWorkout(this.data);
        this.newWorkout = m;
        toastr.success("You've Successfully added an exercise to your Workout!");
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
