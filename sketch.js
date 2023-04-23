var gameState = "wait"
var bgimg, splashscreen, playbutton, howbutton
var playimg, level1img, leftwall, rightwall, level2img, level3img

var score1 = 0
var score2 = 0
var score3 = 0




function preload() {

    bgimg = loadImage("splashscreenimg.png")
    level1img = loadImage("level1bg.jpg")
    level2img = loadImage("bglevel2.png")
    level3img = loadImage("level3.jpeg")

    platform1img = loadImage("platform1.png")
    platform2img = loadImage("platform2.png")
    
    aestronaut = loadImage("aestronautAlien-removebg-preview.png")
    gameOverImg = loadImage("gameover.png")
    popUpImg = loadImage("Aboutgame.png")
    spikes = loadImage("spikes.png")
    playerimg = loadImage("alien.gif")
    bgmusic = loadSound("sound/bgMusic.mp3")
    coinCollecting = loadSound("sound/coincollectsound.mp3")
    jumpSound = loadSound("sound/jump.mp3")
    gameOverSound = loadSound("sound/gameoversound.mp3")
    coinimg = loadImage("cherry.png")
}


function setup() {
    createCanvas(windowWidth, windowHeight)

    playbutton = createImg("play_btn.png")
    playbutton.position(width / 2 - 250, height - 145)
    playbutton.size(160, 150)

    playbutton.hide()


    soundbutton = createImg("sound_btn.png")
    soundbutton.position(width / 2 + 80, height - 150)
    soundbutton.size(150, 150)
    soundbutton.hide()


    mutebutton = createImg("mute.png")
    mutebutton.position(width / 2 + 70, height - 150)
    mutebutton.size(165, 150)
    mutebutton.hide()


    level1popbutton = createImg("AboutGame.png")
    level1popbutton.position(width / 7, height / 5)
    level1popbutton.size(1000, 500)
    level1popbutton.hide()


    invisibleground = createSprite(width / 2, height - 50, width, 10)
    // invisibleground.addImage(spikes)
    // invisibleground.debug = true
    invisibleground.setCollider("rectangle", 0, 0, invisibleground.width / 1.75, invisibleground.height / 10)

    invisibleground.visible = false



    leftwall = createSprite(width / 2 - width / 4, height / 2, 10, height)
    leftwall.visible = false

    rightwall = createSprite(width - width / 4, height / 2, 10, height)
    rightwall.visible = false



    platform0 = createSprite(50, height - 70)
    platform0.addImage(platform1img)
    platform0.scale = 0.5
    platform0.visible = false
    platform0.setCollider("rectangle", 0, 0, platform0.width / 1.75, platform0.height / 2)

    platform1 = createSprite(width / 4 + 50, height - 120)
    platform1.addImage(platform1img)
    platform1.scale = 1
    platform1.visible = false
    platform1.setCollider("rectangle", 0, -10, platform1.width / 1.75, platform1.height / 4)
    // platform1.debug = true



    platform2 = createSprite(200, height / 2)
    platform2.addImage(platform2img)
    platform2.scale = 0.5
    platform2.visible = false
    platform2.setCollider("rectangle", 0, -10, platform2.width / 1.75, platform2.height / 4)
    // platform2.debug = true


    platform3 = createSprite(width / 2, height / 4)
    platform3.addImage(platform1img)
    platform3.scale = 0.5
    platform3.visible = false
    platform3.setCollider("rectangle", 0, 0, platform3.width / 1.75, platform3.height / 4)


    platform4 = createSprite(width - 400, height / 2)
    platform4.addImage(platform2img)
    platform4.scale = 0.5
    platform4.visible = false
    platform4.setCollider("rectangle", 0, 0, platform4.width / 2.5, platform4.height / 4)

    // platform3.debug = true
    // platform4.debug = true

    player = createSprite(50, height - 100)
    player.addImage(playerimg)
    player.scale = 0.5
    player.visible = false
    // player.debug = true
    player.setCollider("circle", 0, 50, 40)


    // collectables level1
    coin = createSprite(platform2.x-20,platform2.y-(platform2.height/5.7))
    coin.addImage("coin1", coinimg)
    coin.scale = 0.5
    coin.visible = false
    // coin.debug=true

    coin1 = createSprite(platform3.x-20,platform3.y-(platform3.height/5.5))
    coin1.addImage("coin2", coinimg)
    coin1.scale = 0.5
    coin1.visible = false


    coin2 = createSprite(platform4.x-20,platform4.y-(platform4.height/5.7))
    coin2.addImage("coin3", coinimg)
    coin2.scale =0.5
    coin2.visible = false


    coinscore = createSprite(width - width / 6, 50)
    coinscore.addImage("scorecoin", coinimg)
    coinscore.scale =0.5
    coinscore.visible = false


    level1endwall = createSprite(width - 10, height - 100, 20, height / 2)
    level1endwall.visible = false



    // bgmusic = loadSound("sound/bgMusic.mp3")
    // coinCollecting = loadSound("sound/coincollectsound.mp3")
    // jumpSound = loadSound("sound/jump.mp3")
    // gameOverSound


    // collectibles level 2
    coin3 = createSprite(platform2.x-20,platform2.y-(platform2.height/5.7))
    coin3.addImage("coin1", coinimg)
    coin3.scale = 0.5
    coin3.visible = false

    coin4 = createSprite(platform3.x-20,platform3.y-(platform3.height/5.5))
    coin4.addImage("coin2", coinimg)
    coin4.scale = 0.5
    coin4.visible = false


    coin5 = createSprite(platform4.x-20,platform4.y-(platform4.height/5.7))
    coin5.addImage("coin3", coinimg)
    coin5.scale = 0.5
    coin5.visible = false



    // collectibles level 3


    coin6 =createSprite(platform2.x-20,platform2.y-(platform2.height/5.7))
    coin6.addImage("coin1", coinimg)
    coin6.scale = 1
    coin6.visible = false

    coin7 = createSprite(platform3.x-20,platform3.y-(platform3.height/5.5))
    coin7.addImage("coin2", coinimg)
    coin7.scale = 1
    coin7.visible = false


    coin8 =  createSprite(platform4.x-20,platform4.y-(platform4.height/5.7))
    coin8.addImage("coin3", coinimg)
    coin8.scale = 1
    coin8.visible = false

}


function draw() {

    if (gameState === "wait") {

        if (!bgmusic.isPlaying()) {

            bgmusic.play()
        }

        background(bgimg)
        playbutton.show()
        soundbutton.show()
        invisibleground.visible = false
        leftwall.visible = false
        rightwall.visible = false



    }


    playbutton.mousePressed(() => {
        gameState = "play"
        playbutton.hide()
        soundbutton.show()

    })


    if (gameState === "play") {
        background(level1img)
        soundbutton.position(0, 0)
        mutebutton.position(0, 0)
        level1popbutton.show()

        playbutton.hide()


        soundbutton.mousePressed(() => {
            soundbutton.hide()
            mutebutton.show()
            bgmusic.play()
        })
        mutebutton.mousePressed(() => {
            soundbutton.show()
            mutebutton.hide()
            bgmusic.stop()

        })
    }



    level1popbutton.mousePressed(() => {
        gameState = "level1"
        image(level1img, 0, 0, width, height)
        level1popbutton.hide()
    })


    if (gameState === "level1") {
        image(level1img, 0, 0, width, height)
        player.visible = true
        if (player.isTouching(invisibleground)) {
            gameState = "end"
        }
        coin.visible = true
        coin1.visible = true
        coin2.visible = true
        coinscore.visible = true
        level1popbutton.hide()
        PLAYLEVEL1()
        soundbutton.mousePressed(() => {
            soundbutton.hide()
            mutebutton.show()
            bgmusic.play()
        })
        mutebutton.mousePressed(() => {
            soundbutton.show()
            mutebutton.hide()
            bgmusic.stop()

        })
        if (platform1.isTouching(leftwall)) {
            platform1.velocityX = 2
        }

        else if (platform1.isTouching(rightwall)) {
            platform1.velocityX = -2
        }
        player.velocityY += 0.8
        player.collide(platform0)

    }



    if (gameState == "level2") {
        background(level2img)
        platform1.visible = true
        platform2.visible = true
        platform3.visible = true
        platform4.visible = true


        if (player.isTouching(invisibleground)) {
            gameState = "end"
        }

        if (platform1.isTouching(leftwall)) {
            platform1.velocityX = 2
        }

        else if (platform1.isTouching(rightwall)) {
            platform1.velocityX = -2
        }


        player.velocityY += 0.8
        player.collide(platform0)

    }



    if (gameState == "level3") {
        background(level3img)
        platform1.visible = true
        platform2.visible = true
        platform3.visible = true
        platform4.visible = true


        if (player.isTouching(invisibleground)) {
            gameState = "end"
        }

        if (platform1.isTouching(leftwall)) {
            platform1.velocityX = 2
        }

        else if (platform1.isTouching(rightwall)) {
            platform1.velocityX = -2
        }


        player.velocityY += 0.8
        player.collide(platform0)

        if (platform2.isTouching(topwall) || platform2.isTouching(bottomwall)) {
            if (platform2.isTouching(topwall)) {
                platform2.velocityY = 2
            }

            if (platform2.isTouching(bottomwall)) {
                platform2.velocityY = -2
            }
        }

        if (platform3.isTouching(topwall) || platform3.isTouching(bottomwall)) {
            if (platform3.isTouching(topwall)) {
                platform3.velocityY = 2
            }

            if (platform3.isTouching(bottomwall)) {
                platform3.velocityY = -2
            }
        }



        if (platform4.isTouching(topwall) || platform4.isTouching(bottomwall)) {
            if (platform4.isTouching(topwall)) {
                platform4.velocityY = 2
            }

            if (platform4.isTouching(bottomwall)) {
                platform4.velocityY = -2
            }
        }

    }



    drawSprites()

    if (gameState === "end") {

        GameOver()

    }

    if (gameState === "level1") {

        // player movement... added 2 april

        textSize(60)
        fill("red")
        stroke(0)
        strokeWeight(2)
        text(" : " + score1, coinscore.x + (coinscore.width / 4), 70)

        if (keyIsDown(RIGHT_ARROW)) {
            player.x += 5

        }

        if (keyIsDown(LEFT_ARROW)) {
            player.x -= 5

        }

        if (keyDown("space")) {
            player.velocityY = -15
        }





        if (player.isTouching(platform1)) {
            //jumpsound.play()
            player.velocityX = 0
            player.velocityY = 0

        }



        if (player.isTouching(platform2)) {
            //jumpsound.play()
            player.velocityX = 0
            player.velocityY = 0
        }



        if (player.isTouching(platform3)) {
            //jumpsound.play()
            player.velocityX = 0
            player.velocityY = 0
        }

        if (player.isTouching(platform4)) {
            //jumpsound.play()
            player.velocityX = 0
            player.velocityY = 0
        }



        if (player.isTouching(coin) || player.isTouching(coin1) || player.isTouching(coin2)) {
            coinCollecting.play()
            if (player.isTouching(coin)) {
                coin.remove()
                score1 += 10
            }
            if (player.isTouching(coin1)) {
                coin1.remove()
                score1 += 10
            }
            if (player.isTouching(coin2)) {
                coin2.remove()
                score1 += 10
            }

        }




    }


    if (score1 == 30) {
        platform1.x = width - 100
        platform1.velocityX = 0

        if (player.isTouching(level1endwall)) {
            level1over()
        }
    }



    if (gameState == "level2") {
        textSize(60)
        fill("red")
        stroke(0)
        strokeWeight(2)
        text(" : " + score2, coinscore.x + (coinscore.width / 4), 70)

        //   player movement
        if (keyDown(RIGHT_ARROW)) {
            player.x += 5

        }

        if (keyDown(LEFT_ARROW)) {
            player.x -= 5

        }

        if (keyDown("space")) {
            player.velocityY = -15
        }



        // standing on platforms

        if (player.isTouching(platform1)) {
            //jumpsound.play()
            player.velocityX = 0
            player.velocityY = 0

        }



        if (player.isTouching(platform2)) {
            //jumpsound.play()
            player.velocityX = 0
            player.velocityY = 0
        }



        if (player.isTouching(platform3)) {
            //jumpsound.play()
            player.velocityX = 0
            player.velocityY = 0
        }

        if (player.isTouching(platform4)) {
            //jumpsound.play()
            player.velocityX = 0
            player.velocityY = 0
        }




        // level 2 player touching coin
        if (player.isTouching(coin3) || player.isTouching(coin4) || player.isTouching(coin5)) {
            if (player.isTouching(coin3)) {
                coin3.remove()
                score2 += 10

            }
            if (player.isTouching(coin4)) {
                coin4.remove()
                score2 += 10

            }
            if (player.isTouching(coin5)) {
                coin5.remove()
                score2 += 10

            }
        }


        if (score2 >= 30) {
            rightwall.remove()
        }

        if (player.isTouching(level1endwall))
            level2over()

    }




    if (gameState == "level3") {
        textSize(60)
        fill("red")
        stroke(0)
        strokeWeight(2)
        text(" : " + score3, coinscore.x + (coinscore.width / 4), 70)


        if (keyDown("space")) {
            player.velocityY = -5
        }

        if (keyDown("right_arrow")) {
            player.x += 5
        }


        if (keyDown("left_arrow")) {
            player.x -= 5
        }


        if (player.isTouching(platform1)) {

            player.velocityX = 0
            player.velocityY = 0

        }
        if (player.isTouching(platform2)) {

            player.velocityX = 0
            player.velocityY = 0

        }
        if (player.isTouching(platform3)) {

            player.velocityX = 0
            player.velocityY = 0

        }

        if (player.isTouching(platform4)) {

            player.velocityX = 0
            player.velocityY = 0

        }


        if (player.isTouching(coin6) || player.isTouching(coin7) || player.isTouching(coin8)) {

            if (player.isTouching(coin6) && player.isTouching(platform2)) {
                coin6.remove()
                platform2.remove()
                coinCollecting.play()
                score3 += 10
            }
            if (player.isTouching(coin7) && player.isTouching(platform3)) {
                coin7.remove()
                platform3.remove()

                coinCollecting.play()

                score3 += 10
            }
            if (player.isTouching(coin8) && player.isTouching(platform4)) {
                coin8.remove()
                platform4.remove()
                coinCollecting.play()

                score3 += 10
            }

            if (player.isTouching(topwall) || player.isTouching(bottomwall)) {
                
              if  (player.isTouching(topwall)){
                gameState = "end"}

                if  (player.isTouching(bottomwall)){
                    gameState = "end"}
            }



            if (score3 >= 30) {
                win()
            }

        }




    }


}



function PLAYLEVEL1() {
    invisibleground.visible = false

    platform0.visible = true
    platform1.visible = true
    platform2.visible = true
    platform3.visible = true
    platform4.visible = true
    // platform1.velocityX=2


}




function level1over() {
    swal({
        title: "You have done it!! ",
        text: " LEVEL 1 CLEARED!!",
        imageUrl: "levelupnew.PNG",
        imageSize: '200x200',
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'LEVEL 2 !!!',
    },
        function (isConfirm) {
            Level2()
        })

}



// level 2


function Level2() {
    gameState = "level2"
    score1 = 0
    platform1.x = width / 2
    platform1.velocityX = 2
    player.x = 100
    player.collide(platform0)
    // platform0.debug = true
    coin3.visible = true
    coin4.visible = true
    coin5.visible = true
}

function Level3() {
    gameState = "level3"
    topwall = createSprite(width / 2, 50, width, 20)
    bottomwall = createSprite(width / 2, height - 100, width, 20)

    // topwall.debug = true
    // bottomwall.debug = true
    topwall.visible = false
    bottomwall.visible = false

    score1 = 0
    score2 = 0
    platform1.x = width / 2
    platform1.velocityX = 2
    player.x = 100
    player.collide(platform0)
    // platform0.debug = true

    platform2.velocityY = -2
    platform3.velocityY = 2
    platform4.velocityY = -2

    coin6.visible = true
    coin7.visible = true
    coin8.visible = true



}

function PLAYLEVEL2() {
    invisibleground.visible = false

    platform0.visible = true
    platform1.visible = true
    platform2.visible = true
    platform3.visible = true
    platform4.visible = true



    // platform1.velocityX=2


}





function level2over() {
    swal({
        title: "You have done it!! ",
        text: " LEVEL 2 CLEARED!!",
        imageUrl: "levelupnew.PNG",
        imageSize: '200x200',
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'LEVEL 3 !!!',
    },
        function () {
            Level3()
        })

}




function win() {
        player.remove()
    swal({
        title: "KUDOS !! YOU DID IT !!!",
        text: "CONGRATULATIONS ",
        textSize: 50,
        imageUrl: "win.png",
        imageSize: "500x300",
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'OK',
    },

        function () {

            window.location.reload();
        });

}



function GameOver() {
    score1 = 0
    player.remove()
    swal({
        title: "YOU LOST IT !!",
        text: "TRY AGAIN ",
        textSize: 50,
        imageUrl: "gameover.png",
        imageSize: "500x300",
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'OK',
    },

        function () {

            window.location.reload();
        });

}


























