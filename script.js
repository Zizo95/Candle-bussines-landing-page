const body = document.querySelector("body");
const lavender = document.querySelector(".lavender");
const rose = document.querySelector(".rose");
const coconut = document.querySelector(".coconut");
const lemon = document.querySelector(".lemon");

const candleOne = document.querySelector(".candle-one");
const candleTwo = document.querySelector(".candle-two");
const candleThree = document.querySelector(".candle-three");
const candleFour = document.querySelector(".candle-four");


rose.addEventListener("mouseover", function (){
candleOne.style.display = "none";
candleTwo.style.display = "inline";
body.style.background = "rgba(255,64,89,0.63)";
})
rose.addEventListener("mouseout", function (){
  candleOne.style.display = "inline";
  candleTwo.style.display = "none";
  body.style.background = "rgba(163, 48, 137, 61%)";
  })


  coconut.addEventListener("mouseover", function (){
    candleOne.style.display = "none";
    candleThree.style.display = "inline";
    body.style.background = "black";
    })
    coconut.addEventListener("mouseout", function (){
      candleOne.style.display = "inline";
      candleThree.style.display = "none";
      body.style.background = "rgba(163, 48, 137, 61%)";
      })



      lemon.addEventListener("mouseover", function (){
        candleOne.style.display = "none";
        candleFour.style.display = "inline";
        body.style.background = "rgba(243,235,47,100%)";
        })
        lemon.addEventListener("mouseout", function (){
          candleOne.style.display = "inline";
          candleFour.style.display = "none";
          body.style.background = "rgba(163, 48, 137, 61%)";
          })

