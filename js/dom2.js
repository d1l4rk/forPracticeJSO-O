
const pointDices = document.querySelectorAll(".point");
const h1 = document.querySelector(".main__text");


console.log(pointDices);



const randomChoise = () => randomRoll = Math.floor(Math.random()*6)+1;

const logicDices = (numDice) =>{
    let lenghtOfDice1 = 8;
    let lenghtOfDice2 = 17;

    switch (randomChoise()){
    case 1: 
        if(numDice == 1){  
            for(let i = 0; i <= lenghtOfDice1 ; i++){
                if(pointDices[i] == pointDices[4]){
                    continue;
                }
                pointDices[i].classList.toggle("to_hide");
            
            }
            return 1;

        }else if(numDice == 2){
            for(let i = 9; i <= lenghtOfDice2 ; i++){
                if(pointDices[i] == pointDices[13]){
                    continue;
                }
                pointDices[i].classList.toggle("to_hide");
            
            }
            return 1;
        }
        break;
    case 2:
        if(numDice == 1){
            for(let i = 0; i <= lenghtOfDice1 ; i++){
    
                if(pointDices[i] == pointDices[0] || pointDices[i] == pointDices[8] ){
                    continue;
                 }
                // if( ){
                //     continue;
                // }
                pointDices[i].classList.toggle("to_hide");
            }   
            return 2;
            
        }else if(numDice == 2){
            for(let i = 9; i <= lenghtOfDice2 ; i++){
    
                if(pointDices[i] == pointDices[9] || pointDices[i] == pointDices[17] ){
                    continue;
                 }
                pointDices[i].classList.toggle("to_hide");
            }   
            return 2;
        }
        break;
    
    case 3:
        if(numDice == 1){
            for(let i = 0; i <= lenghtOfDice1 ; i++){
    
                if(pointDices[i] == pointDices[0] || pointDices[i] == pointDices[8] || pointDices[i] == pointDices[4]){
                    continue;
                }
                pointDices[i].classList.toggle("to_hide");
                
            }
            return 3;

        }else if(numDice == 2){
            for(let i = 9; i <= lenghtOfDice2 ; i++){
    
                if(pointDices[i] == pointDices[9] || pointDices[i] == pointDices[13] || pointDices[i] == pointDices[17]){
                    continue;
                }
                pointDices[i].classList.toggle("to_hide");
                
            }
            return 3;
        }
        break;
    case 4:
        if(numDice == 1) {
            for(let i = 0; i <= lenghtOfDice1 ; i++){
    
                if(pointDices[i] == pointDices[0] || pointDices[i] == pointDices[2] || pointDices[i] == pointDices[6] || pointDices[i] == pointDices[8]){
                    continue;
                }
                pointDices[i].classList.toggle("to_hide");
                
            }
            return 4;

        }else if(numDice == 2){
            for(let i = 9; i <= lenghtOfDice2 ; i++){
    
                if(pointDices[i] == pointDices[9] || pointDices[i] == pointDices[11] || pointDices[i] == pointDices[15] || pointDices[i] == pointDices[17]){
                    continue;
                }
                pointDices[i].classList.toggle("to_hide");
                
            }
            return 4;
        }
        break;

    case 5:
        if(numDice == 1 ){
            for(let i = 0; i <= lenghtOfDice1 ; i++){
    
                if(pointDices[i] == pointDices[0] || pointDices[i] == pointDices[2] || pointDices[i] == pointDices[4] ||  pointDices[i] == pointDices[6] || pointDices[i] == pointDices[8]){
                    continue;
                }
                pointDices[i].classList.toggle("to_hide");
                
            }
            return 5;

        }else if(numDice == 2){
            for(let i = 9; i <= lenghtOfDice2 ; i++){
    
                if(pointDices[i] == pointDices[9] || pointDices[i] == pointDices[11] || pointDices[i] == pointDices[13] ||  pointDices[i] == pointDices[15] || pointDices[i] == pointDices[17]){
                    continue;
                }
                pointDices[i].classList.toggle("to_hide");
                
            }
            return 5;
            
        }
        break;

    case 6: 
        if(numDice == 1){
            for(let i = 0; i <= lenghtOfDice1 ; i++){
        
                if(pointDices[i] == pointDices[3] || pointDices[i] == pointDices[4] || pointDices[i] == pointDices[5]){
                    pointDices[i].classList.toggle("to_hide");
                }
                
            }
            return 6;  

        }else if(numDice == 2){
            for(let i = 9; i <= lenghtOfDice2 ; i++){
        
                if(pointDices[i] == pointDices[12] || pointDices[i] == pointDices[13] || pointDices[i] == pointDices[14]){
                    pointDices[i].classList.toggle("to_hide");
                }
                
            }
            return 6; 
        
        }
        break;
    }
}
   
// const alpaha = logicDices(1);
// const teta = logicDices(2);

// if(alpaha == teta){
//     console.log("empate");
// }else if(alpaha > teta){
//     console.log("alpaha gano")
// }else if(teta > alpaha){
//     console.log("gano teta");
// }


//usando ES6 Default params

const whoWin = (player1 = logicDices(1),player2 = logicDices(2)) =>{
    if(player1 == player2){
        h1.innerHTML=`Empate <i class="fab fa-black-tie"></i>`;
        console.log("empate");
    }
    else if(player1 > player2){
        h1.innerHTML=`Gano el jugador 1 <i class="fas fa-trophy"></i>`;
        console.log("gano el 1ro");
    }
    else if(player1 < player2){
        h1.innerHTML=`Gano el jugador 2 <i class="fas fa-trophy"></i>`;
        console.log("gano el 2do jugador");
    }
}
console.log(h1);

// if(document.location.reload()){
//     whoWin();
      
// }else {
//     break;
// }

  
  if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    whoWin();   
    console.info( "This page is reloaded" );
  } else {
    console.info( "This page is not reloaded");
  }

// whoWin();