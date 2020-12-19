var string="This is a string";
 console.log(string);
  var num=100; 
  console.log(num);
   var bool=true;
    console.log(bool);
     var object;
      console.log(object);
       object=null;
        console.log(null);
         //examples of array 
         //integers
          var arr1=[1,2,3,4]; 
          console.log(arr1) 
          var arr2=["name",12,true];
           console.log(arr2);
            //array storing list of arrays
             var arr3=[[1,2],[2,3],[3,4]];
              console.log(arr3);
               //access the first element of an array
                console.log(arr3[1]); 
                //access the second element of the first element of the array 
                console.log(arr3[1][1]);
                 arr3.push("my name"); 
                 console.log(arr3);
                  arr3.pop();
                   console.log(arr3);
    // var object=18
    // var computerPaddle = createSprite(x,y,width,height);
    // function reset(){

   // }
   // reset();
   // if(object<20){
   //  text("text",x,y);
   //}
   //
   //for(var i=0;i<400;i++){
   //  text("hi",x,y);
   // switch(value){
  // case1:text("text",x,y);
  //break;
  //case2:text("text",x,y);
  //break;
  //default:break;
  //}
  //engine world bodies
   //}
   //}
   //class=bluprint of an object
   //object contains properties and functions
   // class form{
   // constructor{used for constructing properties of an object}
   // function {

   //}
   // var objectname = new class();
   // database concepts are ref On val
   // ref = refering the data
   // On = listening the value
   // val = value of  node
   // get data and update data
  // form creation
  //

var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;

function preload(){
  track = loadImage("../images/track.jpg");
  car1_img = loadImage("../images/car1.png");
  car2_img = loadImage("../images/car2.png");
  car3_img = loadImage("../images/car3.png");
  car4_img = loadImage("../images/car4.png");
  ground = loadImage("../images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
