import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-1", "Science Vs Fantasy", "img/projects/SVF3.png", `
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

    <div class="paragraph center">
        <img class="phone-screenshot" src="https://fakeimg.pl/300x534/" alt="Optimistic Chubby Screenshot" />
        <img class="phone-screenshot" src="https://fakeimg.pl/300x534/" alt="Optimistic Chubby Screenshot" />
    </div>
    `, "#23bd69", true, true),
    new ProjectData("project-2", "Higher or Lower - IMDB Edition", "img/popcorn.png", `
    <div class="paragraph">
        <strong>Higher or Lower - IMDB Edition</strong> was a mobile version of the higher or lower game concept, using IMDB ratings as comparison points. This was built using React Native.
    </div>
    <div class="paragraph center">
        No Images Available at this time.
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
    new ProjectData("project-3", "Jump the Plank", "img/projects/project-3-icon.png", `
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
        Playable in the browser (WebGL) on <a href="https://some.where/nice" target="_blank">itch.io</a>.
        Source code is available on <a href="https://github.com/yourself" target="_blank">GitHub</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drawing Overload Screenshot" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drawing Overload Screenshot" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drawing Overload Screenshot" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drawing Overload Screenshot" />
    </div>
    `, "#383838"),
];