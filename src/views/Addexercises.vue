<template>
  <div class="row">
    <div class="col-lg-6">
      <div class="card">
        <div class="card-header text-white bg-dark">
          <ul class="nav nav-pills card-header-pills">
          <li class="nav-item">
            <router-link class="nav-link" to="/Exercises">Exercises</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/Addexercises">Add an Exercise</router-link>
          </li>
        </ul>
        </div>
        <div class="card-body">
        <h4 class="card-title">Add Exercise</h4>
        <p divclass="card-text">
            <form @submit.prevent="submit">
                <div class="form-group">
                  <label for="exerciseName">Exercise Name</label>
                  <input type="text" v-model="data.exerciseName"
                    class="form-control"
                    name="exerciseName"
                    id="exerciseName"
                    aria-describedby="helpexerciseName"
                    placeholder="Exercise Name"
                    required>
                  <small id="helpexerciseName"
                  class="form-text text-muted">Add the name of the Exercise</small>
                </div>
                <div class="form-group">
                  <label for="defaultReps">Default Reps</label>
                  <input type="text" v-model="data.defaultReps"
                    class="form-control"
                    name="defaultReps"
                    id="defaultReps"
                    aria-describedby="helpdefaultReps"
                    placeholder="Default Reps"
                    required>
                  <small id="helpdefaultReps"
                  class="form-text text-muted">Input the default reps per set</small>
                </div>
                <div class="form-group">
                  <label for="defaultSets">Default Sets</label>
                  <input type="text" v-model="data.defaultSets"
                    class="form-control"
                    name="defaultSets"
                    id="defaultSets"
                    aria-describedby="helpdefaultSets"
                    placeholder="Default Sets"
                    required>
                  <small id="helpdefaultSets" class="form-text text-muted">Input the default sets</small>
                </div>
                <div class="form-group">
                  <label for="exerciseDescription">Exercise Description</label>
                  <input type="exerciseDescription" v-model="data.exerciseDescription"
                    class="form-control"
                    name="exerciseDescription"
                    id="exerciseDescription"
                    placeholder="Exercise Description"
                    required>
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
import { addExercise } from '@/models/exercises';
import toastr from 'toastr';

export default {
  data: () => ({
    data: {},
    newExercise: null,
  }),
  methods: {
    async submit() {
      try {
        const m = await addExercise(this.data);
        this.newExercise = m;
        toastr.success("You've Successfully added the Exercise!");
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