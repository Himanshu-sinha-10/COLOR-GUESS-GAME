var numSquares=6;
var colors=generateRandomColors(numSquares);
var colorDisplay=document.getElementById("colorDisplay");
var squares=document.querySelectorAll(".square");
var messageDisplay=document.querySelector("#message");
var pickedColor=pickColor();
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easybtn");
var hardBtn=document.querySelector("#hardbtn");

easyBtn.addEventListener("click",function(){
   easyBtn.classList.add("selected");
   hardBtn.classList.remove("selected");
   numSquares=3;
   colors=generateRandomColors(numSquares);
   pickedColor=pickColor();
   colorDisplay.textContent=pickedColor;
   for(var i=0;i<squares.length;i++){
    if(colors[i])
    {
        squares[i].style.backgroundColor=colors[i];
    }
    else{
        squares[i].style.display="none";
    }
   }
  
});

hardBtn.addEventListener("click",function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares=6;
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++){
     
     
         squares[i].style.backgroundColor=colors[i];
         squares[i].style.display="none";
         squares[i].style.display="block";
    }

     
});

colorDisplay.textContent=pickedColor;

resetButton.addEventListener("click",function(){
//generate all new colors
colors=generateRandomColors(numSquares);
//pick a new random color from array
pickedColor=pickColor();
//change colorDisplay to match new color
colorDisplay.textContent=pickedColor;
//change the colors of the squares on the page
for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor=colors[i];

}
h1.style.backgroundColor="steelblue";
messageDisplay.textContent="";
resetButton.textContent="new colors"

});

for(var i=0;i<squares.length;i++)
{
    squares[i].style.backgroundColor=colors[i];
   
    squares[i].addEventListener("click",function(){

      var clickedColor=this.style.backgroundColor; //getting the clicked color by user

      if(clickedColor===pickedColor) //comparing the clicked color with the picked color
      {
          messageDisplay.textContent="Correct!!";
          resetButton.textContent="Play Again?";
          changeColor(pickedColor); //to change all the squares color to the color which is correct at the end
          h1.style.backgroundColor=pickedColor;
          messageDisplay.style.color="green";
      }
      else{
          this.style.backgroundColor="#232323";
          messageDisplay.textContent="Try Again";
          messageDisplay.style.color="red";
      }
    });
   
}
function changeColor(color){
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor=color;
    }
}
function pickColor(){
    var random=Math.floor(Math.random()*colors.length); //Math.random()*n - to get random numbers between 0 and n(excluding n)
    return colors[random];                              //Math.floor(Math.random())- Math.floor is used to eliminate all decimal part of the random no. selected
}



function generateRandomColors(num)
{
    //make an array
    var arr=[];
    //repeat num times
     for(var i=0;i<num;i++)
     {
         //get random color and push into array
         arr.push(randomColor());
     }
    //return that array
    return arr;
}

function randomColor(){
    //pick a 'red' from 0-255
    var r=Math.floor(Math.random()*256);
    //pick a 'green' from 0-255
    var g=Math.floor(Math.random()*256);
    //pick a 'blue' from 0-255
     var b=Math.floor(Math.random()*256);
     return "rgb("+r+", "+g+", "+b+")";
}