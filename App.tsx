import * as R from "ramda"
import React from "react";
import "./style.css";
const filterHearts =   R.filter(R.propEq("suit", "hearts"))
 const displayRank = R.map(R.prop("rank"))
export default function App() {
 const smush = R.curry((thinga, thingb) =>
 {
 
   return(`${thinga}${thingb}`)
  
 })
  const smushName  = smush("name: ", )
  const smushType = smush(`type: `)
 const names  = ["bob", "lambert", "peter"]
 const types = ["al", "bm", "cn"]
 const result2 = R.map(smushName, names)
 const result3 = R.map(smushType, types)
  const add4  = R.add(4)
 const nums  = [3, 2, 1]
 const result = R.map(add4, nums)
 
 const cards = [
{ suit: "clubs" , rank: "king"},
{ suit: "clubs" , rank: "queen"},
{ suit: "clubs" , rank: "jack"},
{ suit: "spades" , rank: "king"},
{ suit: "spades" , rank: "queen"},
{ suit: "spades" , rank: "jack"},
{ suit: "hearts" , rank: "king"},
{ suit: "hearts" , rank: "queen"},
{ suit: "hearts" , rank: "jack"}
 ]
 
const redCards = R.filter(R.propEq("suit", "hearts"),cards)
 const result4 = R.map(R.prop("rank"), redCards)
 
 const result5 = R.pipe(
   R.filter(R.propEq("suit", "hearts")),
   R.map(R.prop("rank"))
 )(cards)
 
 
 const result6 = R.pipe(
filterHearts,
displayRank,
 
 )(cards)
 
 
 return (
   <div>
     <h1>Hello StackBlitz!</h1>
     <pre>{JSON.stringify(result,null,2)} </pre>
     <pre>{JSON.stringify(result2,null,2)} </pre>
     <pre>{JSON.stringify(result3,null,2)} </pre>
     <pre>{JSON.stringify(result4,null,2)} </pre>
     <pre>{JSON.stringify(result5,null,2)} </pre>
     <pre>{JSON.stringify(result6,null,2)} </pre>
   </div>
 );
}
 
 
//Get just the queens
// Get all the red cards, including diamonds
//Get all the cards less than 6
//Get all the cards that are between 3 and 8
// Get the cards between queen and 7
//Dispay just the suit/Display just the rank
//Display suit and rank as string
//for fun: use unicode characters to display the actual suit symbol
