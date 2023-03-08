//let firstCard=15
//let secondCard=12
//let sum=firstCard+secondCard
//console.log(sum)
//if(sum<21){
//    console.log("Do you want to draw a new card?")
//} else if(sum===21){
  //  console.log("Whoo! you've got blackJack!")
//}else if(sum>21){
  //  console.log("You are out of the game!")
//}
//let age=17
//if(21>age){
  //  console.log("You can't enter the club!")
//}
//else{
  //  console.log("welcome")
//}
//let age=110
//if (age<100){
  //  console.log("Not eligable")
//}else if(age===100){
  //  console.log("Here is your birthday card from the King!")}
    //else{
      //  console.log("Not eligable,you have already gotton one")
    //}
    let firstCard=9
let secondCard=15
let sum=firstCard+secondCard
let hasBlackJack=false
let isAlive=true
let message=""
console.log(sum)
if(sum<=20){
    message="Do you want to draw a new card?"
} else if(sum===21){
    hasBlackJack=true
  message="Whoo! you've got blackJack!"
}else {
message="You are out of the game!"
isAlive=false

}
console.log(hasBlackJack)
console.log(message)