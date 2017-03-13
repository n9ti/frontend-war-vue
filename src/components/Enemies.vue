<template lang="html">
  <div class="">
    <div class="box">
      <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img :src="info.organization.avatar_url" alt="">
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong class="title">{{ info.name }}</strong>
              <p class="subtitle">{{ info.description }}</p>
            </p>
          </div>
        </div>
      </article>

      <hr>

      <nav class="level is-mobile">
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Stars</p>
            <router-link :to="'/' + path" class="title">{{ info.stargazers_count }}</router-link>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Open Issues</p>
            <p class="title">{{ info.open_issues_count }}</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Forks</p>
            <p class="title">{{ info.forks_count }}</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Pull Requests</p>
            <p class="title">{{ info.pull_requests_count }}</p>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import { fetchRepository } from '../services/api'

export default {
  props: ['path'],
  data () {
    return {
      info: {
        organization: {}
      }
    }
  },
  created () {
    let vm = this
    fetchRepository(this.path).then((repositoryInfo) => {
      vm.info = repositoryInfo
    })
  }
}
</script>

<style lang="css">
</style>
