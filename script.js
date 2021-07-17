const gameContainer = document.getElementById("game");
let noClicking = false;
const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];


// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}
let count = 0;
let lst = [];
const vals =[];
// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);
  const nvl =  event.target.getAttribute('class');
  event.target.style.backgroundColor = nvl;
  count++;
  event.target.style.pointerEvents = 'none';
  lst.push(event.target);
  console.log(event.target);
  

  if(count===2) 
  {
    noClicking = true;

    if(lst[0].getAttribute('class')===lst[1].getAttribute('class'))
    {

      lst[0].style.backgroundColor = lst[0].getAttribute('class'); 
      lst[1].style.backgroundColor = lst[0].getAttribute('class');
      lst[0].removeEventListener("click", handleCardClick);
      lst[1].removeEventListener("click", handleCardClick);
      lst = [] ;
      noClicking = false;
      
    }
    else if(lst[0].getAttribute('class')!=lst[1].getAttribute('class')){
      setTimeout(function(){
        lst[0].style.backgroundColor = '';
        lst[1].style.backgroundColor = '';
        lst[0].style.pointerEvents = 'auto';
        lst[1].style.pointerEvents = 'auto';
        lst = [] ;
        noClicking = false;
        
      },'1000');
      

    }
    count =0;
   
  }
  

}

// when the DOM loads
createDivsForColors(shuffledColors);

function randColor()
{
     const color1 = Math.floor(Math.random()*256)
     const color2 = Math.floor(Math.random()*256)
     const color3 = Math.floor(Math.random()*256)
     return `rgb(${color1},${color2},${color3})`;
}
const letters = document.querySelectorAll('.letter')
setInterval(function(){
    for (let letter of letters)
    {
        letter.style.color = randColor()
    }
    
}, 1000);

