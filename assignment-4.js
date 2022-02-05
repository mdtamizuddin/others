// assignment problem 1 --

// function(1) start
function anaToVori(ana) {
    let vori = ana / 16 ;
    return vori ;
}
// function(1) end
const howMuchAna = anaToVori(334);

console.log(howMuchAna);
//Assignment Problem (2)

// function(2) start
function pandaCoast(singara , comuca , jilapi) {
   

    // Frice per product 

    const singaraFrice = 7 ;
    const comucaFrice = 10 ;
    const jilapiFrice = 15 ;
 
    // total Frice Fer Product 

    let totalSingaraFrice = singaraFrice * singara ;
    let totalComucaFrice = comuca * comucaFrice ;
    let totalJilapiFrice = jilapi * jilapiFrice ;

        // total coast 

    let totalFandaCoast = totalSingaraFrice + totalComucaFrice + totalJilapiFrice ;
    return totalFandaCoast;

}
// function(2) end
let productQuantity = pandaCoast(-10 , 12 , 15);

console.log(productQuantity);

//Assignment problem 3 

// function(3) start
function picnicBudget(mambers) {
    let coatPerMamber = 5000;

    if (mambers <= 100) {
        
        coatPerMamber = 5000 ;
    }
    else if (mambers <= 200 ){
        coatPerMamber = 4000 ;
    }
    else {
        coatPerMamber = 3000 ;
    }
   return coatPerMamber;
}
// function(3) End
const numberOfMamber = picnicBudget(123);

console.log(numberOfMamber);
//Assignment problem 4

const friends =['abul', 'kasem' , 'hasem'  , 'kabul' , 'kuddus']
// function start
function oddFriend(friend) {

    for (let i = 0; i < friends.length; i++) {
      
        
        if (friend[i].length % 2 != 0) {
            return friend[i];
            
        }
    }
    
}
// function start
const oddFriendName = oddFriend(friends);
console.log(oddFriendName);
