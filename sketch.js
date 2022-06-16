let spritesheet;
let spritedata;

let animation = [];

let sprites = [];

function preload() {
  spritedata = loadJSON('./img/data.json');
  spritesheet = loadImage('./img/stickman-removebg-preview.png');
}

function setup() {    
  createCanvas(window.innerWidth, window.innerHeight);
  let frames = spritedata.frames;
  for (let i = 0; i < frames.length; i++) {
    let pos = frames[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    animation.push(img);
  }

  for (let i = 0; i < 100; i++) {
      sprites[i] = new Sprite(animation, 0, i * 100, random(0.1, 0.4));
  }
}

function draw() {
  background(0);

  for (let sprite of sprites) {
    sprite.show();
    sprite.animate();
  }

//   image(animation[frameCount % animation.length], 0, 0);
}
