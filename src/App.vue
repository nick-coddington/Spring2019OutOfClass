<template>
  <div>
    <Nav />
      <div>
        <router-view/>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue';

export default {
  components: {
    Nav,
  },
};
</script>

<style lang="scss">

</style>
