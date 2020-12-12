canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d")
var background_image = "https://i.postimg.cc/KzWwHPcq/racing.gif";
var car1_image = "th.jpeg";
var car1_x = 10;
var car1_y = 10;
var car1_width = 70;
var car1_height = 70;
var car2_image = "th.jpeg";
var car2_x = 10;
var car2_y = 10;
var car2_width = 70;
var car2_height = 70;


function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground();
    background_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadCar1();
    car1_imgTag.src = car1_image;
    
    car2_imgTag = new Image();
    car2_imgTag.onload = uploadCar2();
    car2_imgTag.src = car2_image
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadCar1(){
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadCar2(){
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

windows.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keypressed = e.KeyCode;
    console.log(keyPressed);
    if(keyPressed == "38"){
        up();
        console.log("up");
    }
    if(keyPressed == "40"){
        down();
        console.log(keyPressed);
    }
    if(keyPressed == "37"){
        left();
        console.log(keyPressed)
    }
    if(keyPressed == "39"){
        right();
        console.log(keyPressed);
    }
}

windows.addEventListener("keydown", my_keydown1)

function my_keydown1(e){
    keypressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == "87"){
        up();
        console.log("up")
    }
    if(keyPressed == "65"){
        left();
        console.log("left")
    }
    if(keyPressed == "83"){
        down();
        console.log("down");
    }
    if(keyPressed == "68"){
        right();
        console.log("right")
    }   
}
