const select = document.getElementById("animations");
const canvas = document.createElement("canvas");
document.body.insertBefore(canvas, document.body.firstChild)
canvas.width = 600
canvas.height = 600
const c = canvas.getContext('2d');
const playerImage = new Image();
playerImage.src = "images/shadow_dog.png"
playerImage.onload = ()=> c.drawImage(playerImage, 0, 0)

const spriteWidth  = 575
const spriteHeight = 523

var gameFrames = 0;
var time = 5;

var playerState = "idle"

select.addEventListener("change", function(e)
{
    playerState = e.target.value
})

const spriteAnimations = [];
const animationStates = [
    {
        name: "idle",
        frames: 7
    },

    {
        name: "jump",
        frames: 7
    },

    {
        name: "fall",
        frames: 7
    },

    {
        name: "run",
        frames: 9
    },

    {
        name: "dizzled",
        frames: 11
    },

    {
        name: "sit",
        frames: 5
    },

    {
        name: "roll",
        frames: 7
    },

    {
        name: "bite",
        frames: 7
    },

    {
        name: "die",
        frames: 12
    },

    {
        name: "takeDamage",
        frames: 4
    }
]

animationStates.forEach((state, index)=>
{
    var result = [];
    var positionY = index * spriteHeight;
    for(let i =0; i<state.frames; i++)
    {
        var positionX = i * spriteWidth
        result.push({x: positionX, y: positionY});
    }
    spriteAnimations[state.name] = result;
})

function animate()
{
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height)
    let position = Math.floor(gameFrames / time)  % spriteAnimations[playerState].length
    var frameX = position * spriteWidth;
    var frameY = spriteAnimations[playerState][position].y
    c.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight)
    gameFrames++;
}
animate();
console.log(spriteAnimations)