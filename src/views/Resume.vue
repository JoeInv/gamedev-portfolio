<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm <strong>Joe Inverso</strong>, a current student at Penn College of Technology, majoring in Game and Simulation. I'm seeking an internship at a game studio to apply my skills on real world projects and continue to grow as a developer.
      <br />
      <br /> I have experience with Unity, C#, React Native, Python, and other tools commonly used in game development. I've worked on several game projects, both solo and in teams, which you can check out on the <router-link to="/game-projects">Projects</router-link> page.
      <br />
      <br /> You can find my full resume below, and feel free to
      <router-link to="/contact">contact me</router-link> with any opportunities.
      <br />

      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="d/resume-en.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF</a>
        <div style="clear:both"></div>
      </div>
    </div>
    <div class="photo">
      <img src="img/Profile.png" alt="Photo of Joe Inverso" />
    </div>

    <div style="clear:both"></div>


  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Resume",
  components: {
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
}

.photo {
  margin-top: 50px;
  margin-left: 100px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }
}
</style>