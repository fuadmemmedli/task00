var baza = [
    {sekil:"./img/big-mac.jpg", yazi:"Big Mac", yazi2: 2 , },
    {sekil:"./img/flip-flops.jpg", yazi:"Flip Flops", yazi2:3, },
    {sekil:"./img/coca-cola-pack.jpg", yazi:"Coca-Cola Pack", yazi2:5, },

    {sekil:"./img/movie-ticket.jpg", yazi:"Movie Ticket", yazi2:21, },
    {sekil:"./img/book.jpg", yazi:"Book", yazi2:15, },
    {sekil:"./img/lobster-dinner.jpg", yazi:"Lobster Dinner", yazi2:45, },

    {sekil:"./img/video-game.jpg" , yazi:"Video Game", yazi2:100,},
    {sekil:"./img/amazon-echo.jpg" , yazi:"Amazon Echo", yazi2:125,},
    {sekil:"./img/year-of-netflix.jpg" , yazi:"Year of Netflix", yazi2:199,},

    {sekil:"./img/air-jordans.jpg" , yazi:"Air Jordans", yazi2:299,},
    {sekil:"./img/airpods.jpg" , yazi:"Airpods", yazi2:1500,},
    {sekil:"./img/gaming-console.jpg" , yazi:"Gaming Console", yazi2:300,}
    


]

for (let i = 0; i < 3; i++) {
    document.querySelector(".cards").innerHTML+=
    `
    <div class="card1">
                <img src="${baza[i].sekil}" alt="" width="120px" height="120px">
                <h4 class="h4">${baza[i].yazi}</h4>
                <h4 style="color: rgba(0,0,0,0.5);" class="pul">$${baza[i].yazi2}</h4>
                <button class="btn_sell" onclick="cix(${i})">Sell</button>
                <input type="text" class=" card_inp">
                <button class="btn_buy" onclick="elave(${i})">Buy</button>
            </div>
    `    
}

for (let i = 3; i < 6; i++) {
    document.querySelector(".cards2").innerHTML+=
    `
    <div class="card1">
                <img src="${baza[i].sekil}" alt="" width="120px" height="120px">
                <h4 class="h4">${baza[i].yazi}</h4>
                <h4 style="color: rgba(0,0,0,0.5);" class="pul">$${baza[i].yazi2}</h4>
                <button class="btn_sell" onclick=cix(${i})>Sell</button>
                <input type="text" class=" card_inp">
                <button class="btn_buy" onclick="elave(${i})">Buy</button>
            </div>
    `    
}

for (let i = 6; i < 9; i++) {
    document.querySelector(".cards3").innerHTML+=
    `
    <div class="card1">
                <img src="${baza[i].sekil}" alt="" width="120px" height="120px">
                <h4 class="h4">${baza[i].yazi}</h4>
                <h4 style="color: rgba(0,0,0,0.5);" class="pul">$${baza[i].yazi2}</h4>
                <button class="btn_sell" onclick=cix(${i})>Sell</button>
                <input type="text" class=" card_inp">
                <button class="btn_buy" onclick="elave(${i})">Buy</button>
            </div>
    `    
}
for (let i = 9; i < 12; i++) {
    document.querySelector(".cards4").innerHTML+=
    `
    <div class="card1">
                <img src="${baza[i].sekil}" alt="" width="120px" height="120px">
                <h4 class="h4">${baza[i].yazi}</h4>
                <h4 style="color: rgba(0,0,0,0.5);" class="pul">$${baza[i].yazi2}</h4>
                <button class="btn_sell" onclick=cix(${i})>Sell</button>
                <input type="text" class=" card_inp">
                <button class="btn_buy" onclick="elave(${i})">Buy</button>
            </div>
    `    
}
let x = 187000000000;


function elave(i) {
   
    x-=baza[i].yazi2;
    document.querySelector(".nav2 h1").innerHTML = x

}


function cix(i) {
   if (x<187000000000) {
    x+=baza[i].yazi2;
    document.querySelector(".nav2 h1").innerHTML = x
   }
       
    
}