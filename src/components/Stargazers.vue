<template lang="html">
  <section class="section">
    <enemies :path='path'></enemies>
    <br>
    <div class="columns is-multiline is-mobile">
      <div class="column is-2" v-for="stargazer in  stargazers">
        <img :src="stargazer.avatar_url" alt="" width="100%" height="100%">
      </div>
      <infinite-loading :on-infinite="fetchStargazers" ref="infiniteLoading" spinner="waveDots" class="column is-12-mobile has-text-centered">
        <span slot="no-results"><h1 class="title is-3">No results</h1></span>
        <span slot="no-more"></span>
      </infinite-loading>
    </div>
  </section>
</template>

<script>
import { fetchStargazers } from '../services/api'
import InfiniteLoading from 'vue-infinite-loading'
import Enemies from './Enemies'

export default {
  components: {
    Enemies,
    InfiniteLoading
  },
  computed: {
    path () {
      let vm = this
      return vm.$route.params.owner + '/' + vm.$route.params.repo
    }
  },
  data () {
    return {
      page: 0,
      stargazers: []
    }
  },
  methods: {
    fetchStargazers () {
      let vm = this
      vm.page++
      fetchStargazers(vm.path, vm.page, 30).then((stargazers) => {
        vm.stargazers = vm.stargazers.concat(stargazers.data)
        vm.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
      }).catch((err, data) => {
        console.log(err.message)
        vm.$refs.infiniteLoading.$emit('$InfiniteLoading:complete')
      })
    }
  },
  created () {
    let vm = this
    vm.fetchStargazers()
  }
}
</script>

<style lang="css">
</style>
