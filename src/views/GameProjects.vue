<template>
  <div>
    <h1>Projects</h1>

    <div style="margin-bottom: 30px;">
      Here are some of the projects I've made or worked on:
    </div>

    <ProjectsList v-bind:projects="projects" />

    <div style="margin-top: 20px;">
      More projects coming soon!
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import gameProjectsData from "@/data/GameProjectsData.ts";

export default Vue.extend({
  name: "GameProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: gameProjectsData,
    };
  },
});
</script>
