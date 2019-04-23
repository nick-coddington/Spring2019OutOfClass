<template>
  <div class="row">
    <div class="col-lg-6">
      <div class="card">
        <div class="card-header text-white bg-dark">
          <ul class="nav nav-pills card-header-pills">
          <li class="nav-item">
            <router-link class="nav-link" to="/Routines">Routines</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/Addroutines">Add a Routine</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Myroutines">My Routines</router-link>
          </li>
        </ul>
        </div>
        <div class="card-body">
        <h4 class="card-title">Add Routine</h4>
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
                  <label for="routineName">Routine Name</label>
                  <input type="text" v-model="data.routineName"
                    class="form-control"
                    name="routineName"
                    id="routineName"
                    aria-describedby="helproutineName"
                    placeholder="Routine Name"
                    required>
                  <small id="helproutineName"
                  class="form-text text-muted">Add the name of your new Routine</small>
                </div>
                <div class="form-group">
                  <label for="routineDescription">Routine Description</label>
                  <input type="text" v-model="data.routineDescription"
                    class="form-control"
                    name="routineDescription"
                    id="routineDescription"
                    aria-describedby="helproutineDescription"
                    placeholder="Routine Description"
                    required>
                  <small id="helproutineDescription"
                  class="form-text text-muted">Input the description of your Routine.</small>
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
import { addRoutine } from '@/models/routines';
import toastr from 'toastr';

export default {
  data: () => ({
    data: {},
    newRoutine: null,
    Globals: Globals,
  }),
  methods: {
    async submit() {
      try {
        const m = await addRoutine(this.data);
        this.newRoutine = m;
        toastr.success("You've Successfully created a New Routine!");
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
