<template>
    <container>
        <div class="col">
            <div v-if="Globals.user">
              <ul>
                  <li>First Name: {{Globals.user.firstName}}</li>
                  <li>Last Name: {{Globals.user.lastName}}</li>
                  <li>First Name: {{Globals.user.birthday}}</li>
              </ul>
        </div>
      </div>
    </container>
</template>

<script>
import { Globals } from '@/models/api';

export default {
    data: () => ({
        Globals: Gloabls,
    })
}
</script>

<style>

</style>
