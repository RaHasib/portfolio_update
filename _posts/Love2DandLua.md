---
date: '2024-09-22T11:50:54.000Z'
title: >-
  Making a Simple Game Using Love2D and Lua
tagline: '#love #lua #game'
preview: >-
 game, 2d, love , lua
image: >-
  https://images.unsplash.com/flagged/photo-1562599838-8cc871c241a5?q=80&w=2824&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
---

# Making a Simple Game Using Love2D and Lua

In this post, I'll walk you through a simple game I built using **Love2D**, a framework for 2D game development, and **Lua**, a lightweight scripting language. The game involves spawning birds on the screen and clicking them to score points. There's also background music and a timer to add some challenge.

---

## Prerequisites

Before you begin, make sure you have the following:

- **Love2D framework** installed on your computer.
- Basic understanding of **Lua** programming.
- Necessary assets (sprites, music) placed in the appropriate directories.

---

## Steps to Follow
---
## Project Structure

Before diving into the code, here's the basic structure of the project:

```plaintext
my-game/
│
├── sprites/
│   ├── birds/
│   │   ├── birdOne.png
│   │   ├── birdTwo.png
│   │   ├── birdThree.png
│   │   ├── birdFour.png
│   │   ├── birdFive.png
│   │   ├── birdSix.png
│   ├── crosshairs.png
│   ├── skyTwo.png
│   ├── Font/
│   │   └── NotoEmoji-VariableFont_wght.ttf
│
├── music/
│   └── background.mp3
│
└── main.lua
```

---

### 2. Loading Assets and Variables

In the `main.lua` file, start by loading assets such as sprites and music, and initialize variables that will manage the game state, score, and bird properties.

```lua
-- Load necessary assets and initialize variables
function love.load()
    initializeVariables()
    loadSprites()
    loadBackgroundMusic()

    for i = 1, 10 do
        spawnBird()
    end

    love.mouse.setVisible(false)
end
```
---

### 3. Initialize Variables
   Set up the game state, bird scaling, fonts, and score tracking.

```lua
function initializeVariables()
    target = {x = 300, y = 300, radius = 50}
    score = 0
    timer = 0
    gameState = 1  -- 1: Start screen, 2: In-game
    birdScale = 0.04
    musicPlaying = true
    emojiSize = 30
    gameFont = love.graphics.newFont(30)
    emojiFont = love.graphics.newFont('sprites/Font/NotoEmoji-VariableFont_wght.ttf', emojiSize)

    birds = {}  -- Table to store bird objects
end
```
---

### 4. Load Sprites and Music
   Load the images and music for your game. Birds are stored in a table, and the background is scaled to fit the window size.

```lua
function loadSprites()
sprites = {}
sprites.sky = love.graphics.newImage('sprites/skyTwo.png')

    -- Scale background to fit the game window
    local backgroundWidth, backgroundHeight = sprites.sky:getWidth(), sprites.sky:getHeight()
    backgroundScaleX = 1083 / backgroundWidth
    backgroundScaleY = 610 / backgroundHeight

    sprites.birds = {
        love.graphics.newImage('sprites/birds/birdOne.png'),
        love.graphics.newImage('sprites/birds/birdTwo.png'),
        -- Add more birds...
    }
    sprites.target = love.graphics.newImage('sprites/crosshairs.png')
end

function loadBackgroundMusic()
backgroundMusic = love.audio.newSource('sprites/music/background.mp3', 'stream')
backgroundMusic:setLooping(true)
backgroundMusic:setVolume(0.5)
backgroundMusic:play()
end
```
---

### 5. Bird Spawning
   Each bird has random starting positions and speeds. This function creates new birds and adds them to the birds table.

```lua
function spawnBird()
local bird = {
x = math.random(0, love.graphics.getWidth()),
y = math.random(0, love.graphics.getHeight()),
speedX = math.random(50, 150),
speedY = math.random(-50, 50),
sprite = sprites.birds[math.random(1, #sprites.birds)],
hit = false
}
table.insert(birds, bird)
end
```
---

### 6. Updating Game Logic
   In the love.update() function, update bird positions and check if the timer has expired.

```lua
function love.update(dt)
updateBirds(dt)

    -- Decrease timer
    if timer > 0 then
        timer = timer - dt
    elseif timer < 0 then
        timer = 0
        gameState = 1  -- Go back to start screen
    end
end

function updateBirds(dt)
for _, bird in ipairs(birds) do
if bird.hit then
bird.y = bird.y + bird.fallSpeed * dt
if bird.y > love.graphics.getHeight() then
respawnBird(bird)
end
else
bird.x = bird.x + bird.speedX * dt
bird.y = bird.y + bird.speedY * dt
end
end
end
```
---

### 7. Drawing the Game
   Render the background, birds, score, and crosshair in the love.draw() function.

```lua
function love.draw()
love.graphics.draw(sprites.sky, 0, 0, 0, backgroundScaleX, backgroundScaleY)
for _, bird in ipairs(birds) do
love.graphics.draw(bird.sprite, bird.x, bird.y, 0, birdScale, birdScale)
end
love.graphics.print("Score: " .. score, 10, 10)
love.graphics.print("Time: " .. math.ceil(timer), 300, 10)

    -- Draw crosshair
    local mouseX, mouseY = love.mouse.getPosition()
    love.graphics.draw(sprites.target, mouseX - sprites.target:getWidth() / 2, mouseY - sprites.target:getHeight() / 2)
end
```
---

### 8. Handle Mouse Events
   In the love.mousepressed() function, handle click events, check for bird hits, and manage background music toggling.

```lua
function love.mousepressed(x, y, button, istouch, presses)
if button == 1 then
handleLeftClick(x, y)
end
end

function handleLeftClick(x, y)
if gameState == 1 then
startGame()
elseif gameState == 2 then
checkBirdHit(x, y)
end

    if isMusicTogglePressed(x, y) then
        toggleMusic()
    end
end

function startGame()
gameState = 2
timer = 10
score = 0
end
```
---

### 9. Check Bird Hits and Toggle Music
   Check if a bird was hit by the player's click and allow toggling of background music.

```lua
function checkBirdHit(x, y)
for _, bird in ipairs(birds) do
local birdCenterX = bird.x + bird.sprite:getWidth() * birdScale / 2
local birdCenterY = bird.y + bird.sprite:getHeight() * birdScale / 2
if not bird.hit and distanceBetween(x, y, birdCenterX, birdCenterY) < bird.sprite:getWidth() * birdScale / 2 then
bird.hit = true
bird.fallSpeed = 200
score = score + 1
break
end
end
end

function isMusicTogglePressed(x, y)
return x > love.graphics.getWidth() - emojiSize - 10 and x < love.graphics.getWidth() - 10 and y > 10 and y < emojiSize + 10
end

function toggleMusic()
if musicPlaying then
backgroundMusic:pause()
else
backgroundMusic:play()
end
musicPlaying = not musicPlaying
end
```
---
### 10. Helper Functions
Finally, add utility functions like calculating the distance between two points.

```lua
function distanceBetween(x1, y1, x2, y2)
return math.sqrt((x2 - x1)^2 + (y2 - y1)^2)
end
```

---

> That's it! You now have a simple bird-clicking game built with Love2D and Lua. Try adding more features, like different levels, sound effects, or power-ups, to make the game more engaging. 💖