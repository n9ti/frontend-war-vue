<template lang="html">
  <section class="section">
    <h1 class="title is-1">Frontend War Room</h1>
    <h2 class="subtitle is-3">Here you can find your allies and enemies.</h2>
    <div class="columns is-multiline is-tablet">
      <div class="column is-12-tablet">
        <h1 class="title is-2">Allies</h1>
      </div>
      <enemies v-for="allie in allies" :path='allie' :key="allie" class="column is-12-tablet"></enemies>
      <div class="column is-12-tablet">
        <h1 class="title is-2">Enemies</h1>
      </div>
      <enemies v-for="enemie in enemies" :path='enemie' :key="enemies" class="column is-6-tablet"></enemies>
    </div>
  </section>
</template>

<script>
import Enemies from './Enemies'

export default {
  name: 'Home',
  components: {
    Enemies
  },
  data () {
    return {
      allies: ['vuejs/vue'],
      enemies: ['facebook/react', 'angular/angular']
    }
  }
}
</script>

<style lang="css">
</style>
