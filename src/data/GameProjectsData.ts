import ProjectData from '@/data/ProjectData'

export default [
    new ProjectData("project-1", "Echoes Unbound", "img/projects/EU_MainMenu.png", `
    <div class="paragraph">
    <div class="paragraph center">
    <img src="img/projects/EU_MainMenu.png" class="banner" />
    </div>
     <strong>Echoes Unbound</strong> is my senior project I worked on for a semester. It is a tower defense game similar to Bloons Tower Defense, that also takes inspiration from Pokemon. 
     In the game you are able to catch creatures called echoes while taking on different levels filled with enemy robots. Currently the Demo from my senior project only has 12 Echoes, 5 Enemies, and 2 fully playable levels.
     I plan on continuing this project though, so there will be more to come!
    </div>
    <div class="paragraph center">\
        <video src="img/projects/EU_Gameplay.mp4" autoplay loop muted playsinline class="gif"></video>
        <video src="img/projects/EU_Fusions.mp4" autoplay loop muted playsinline class="gif"></video>
    </div>
    <div class="notice">
     Trailer and Download Version Coming Soon!
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Two Playable Levels</li>
        <li>5 Enemy Types</li>
        <li>12 Catchable Echoes</li>
        <li>2 Player Abilities (Bomb & Freeze)</li>
        <li>Echo Fusions</li>
        <li>Echo Upgrades</li>
        <li>And more to come!!!</li>
        </ul>
    </div>
    `, "#5183ee", true, true),
    new ProjectData("project-2", "Science Vs Fantasy", "img/projects/SvF3.png", `
    <div class="paragraph">
     <strong>Science Vs Fantasy</strong> was a Solo project I worked on for a semester. It is very similar to Plants vs Zombies, but with new towers, enemies, and a science vs fantasy theme.
    </div>
    <div class="paragraph center">
        <img src="img/SvF-Gif1.gif" class="gif" />
        <img src="img/SvF-Gif2.gif" class="gif" />
    </div>
    <div class="paragraph center">
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>One Playable Level</li>
        <li>3 Enemy Types</li>
        <li>4 Unique Towers</li>
        <li>Laser Beam instead of lawnmowers</li>
        </ul>
    </div>
    `, "#23bd69"),
    new ProjectData("project-3", "Jump the Plank", "img/projects/JP.png", `
    <div class="paragraph">
        <strong>Jump the Plank</strong> was a group project I worked on for a semester. It is a 2D platformer where the the player has to dodge obstacles and fight enemies to reach the end of each level. There are also boss fights in certain levels.
    </div>
    <div class="paragraph center">
        Trailer coming soon
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>4 Levels in different environments</li>
        <li>2 Boss Fights (Davy Jones and Cthulhu)</li>
        <li>Plenty of different enemies and traps</li>
        </ul>
        My Contributions :
        <ul>
        <li>Player, Cannon, Davy Jones, and Cthulhu's sprites and animations</li>
        <li>Cthulhu's Boss Fight: attacks, behavior, cutscenes, etc.</li>
        <li>Level Design for all 4 levels and boss arenas</li>
        <li>Made the tileset for Levels 1,2 and Davy Jones Arena</li>
        <li>Davy Jones' death cutscene</li>
        <li>Camera Behavior</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        Playable version coming soon!
        </div>
    </div>
    `, "#383838"),
        new ProjectData("project-4", "Higher or Lower - IMDB Edition", "img/projects/HL1.png", `
    <div class="paragraph">
        <strong>Higher or Lower - IMDB Edition</strong> was a mobile version of the higher or lower game concept, using IMDB ratings as comparison points. This was built using React Native.
    </div>
    <div class="paragraph center">
        <img src="img/projects/HL2.png" class="pc-screenshot" />
        <img src="img/projects/HL3.png" class="pc-screenshot" />
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Mobile Game</li>
        <li>Choose which movie has a higher IMDB rating</li>
        <li>Can choose a genre of movies to play</li>
        </ul>
    </div>
    `, "#5a78af"),
];