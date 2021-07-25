var astro, bath, drink, eat, move12, gym, background1, sleep, backgroundImg, brush;



function preload() {
  bath = loadAnimation("bath1.png", "bath2.png")
  drink = loadAnimation("drink1.png", "drink2.png")
  eat = loadAnimation("eat1.png", "eat2.png")
  move12 = loadAnimation("move.png", "move1.png")
  gym = loadAnimation("gym1.png", "gym2.png", "gym11.png", "gym12.png")
  brush = loadAnimation("brush.png")
  sleep = loadAnimation("sleep.png")
  backgroundImg = loadAnimation("iss.png")
}
function setup() {
  createCanvas(400, 400);

  background1 = createSprite(200, 200)
  background1.addAnimation("bgr", backgroundImg)
  background1.scale = 0.1


  astro = createSprite(200, 200, 5, 5)
  astro.addAnimation("idle", sleep)
  astro.scale = 0.05

}

function draw() {
  background(220);
  drawSprites()
  eating()
  gbat()
  driknking()
  moving()
  gyming()
  brushing()
  slepping()
}

function eating() {

  if (keyDown(UP_ARROW)) {
    astro.addAnimation("eating", eat)
    astro.changeAnimation("eating", eat)
  }


}

function gbat() {

  if (keyDown(DOWN_ARROW)) {
    astro.addAnimation("taking abth", bath)
    astro.changeAnimation("taking abth", bath)
  }

}


function driknking() {

  if (keyDown(LEFT_ARROW)) {
    astro.addAnimation("drinking", drink)
    astro.changeAnimation("drinking", drink)
  }

}

function moving() {

  if (keyDown(RIGHT_ARROW)) {
    astro.addAnimation("moving", move12)
    astro.changeAnimation("moving", move12)
  }

}

function gyming() {

  if (keyDown("g")) {
    astro.addAnimation("gym", gym)
    astro.changeAnimation("gym", gym)
  }

}

function brushing() {

  if (keyDown("b")) {
    astro.addAnimation("brush", brush)
    astro.changeAnimation("brush", brush)
  }
}

function slepping() {

  if (keyDown("s")) {

    astro.addAnimation("sleep", sleep)
    astro.changeAnimation("sleep", sleep)
  }
}
