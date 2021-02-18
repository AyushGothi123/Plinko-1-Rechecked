const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var world;
var ground;
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;
function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
  ground = new Ground(600,700,1200,20);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}