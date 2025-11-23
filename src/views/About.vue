<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Joe Inverso</strong>, a Game and Simulation major at Penn College of Technology.<br/>
      </div>

      <div style="margin-top: 20px;">I've worked on various <router-link to="/game-projects">game projects</router-link>, both solo and in teams, using Unity and React Native. I'm passionate about game development and am always looking to grow my skills and knowledge in the field.</div>

      <div style="margin-top: 40px;">I'm <strong>currently seeking an internship</strong> at a game studio, where I can apply my skills in real world projects and continue to grow. You can reach me at <a href="mailto:jxi8@pct.edu">jxi8@pct.edu</a> or <router-link to="/contact">through here</router-link>, and you can find my <router-link to="/resume">resume here</router-link>.</div>
    </div>

    <div class="photo">
      <img src="img/Profile.png" alt="Profile Picture" /> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>