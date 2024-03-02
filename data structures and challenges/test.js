// const game = {
//     team1: 'Bayern Munich',
//     team2: 'Borrussia Dortmund',
//     players: [
//       [
//         'Neuer',
//         'Pavard',
//         'Martinez',
//         'Alaba',
//         'Davies',
//         'Kimmich',
//         'Goretzka',
//         'Coman',
//         'Muller',
//         'Gnarby',
//         'Lewandowski',
//       ],
//       [
//         'Burki',
//         'Schulz',
//         'Hummels',
//         'Akanji',
//         'Hakimi',
//         'Weigl',
//         'Witsel',
//         'Hazard',
//         'Brandt',
//         'Sancho',
//         'Gotze',
//       ],
//     ],
//     score: '4:0',
//     scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//     date: 'Nov 9th, 2037',
//     odds: {
//       team1: 1.33,
//       x: 3.25,
//       team2: 6.5,
//     },
//   };

// //   coding challenge
// // 1 create two arrays with all player names
//   // const [players1,players2]=game.players;
//   // console.log(players1,players2);

// //   2.The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players

// // gk and all rest players
// // const[gk,...players]=players1;
// // console.log(gk,...players)

// // const fieldPlayers=[...players];
// // console.log(fieldPlayers);

// // const allPlayers=[players1,players2];
// // console.log(allPlayers)

// // const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

// const {odds:{team1,x:draw,team2}}=game;
// // console.log(team1,draw,team2);

// // 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

// function printGoals(...rest){
// console.log(rest);
// console.log(`${rest.length} goals were scored`);

// }
// // printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
// // printGoals(...game.scored);


// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');


// // how we can use method names as properties

// // let obj1={
// //   name:'tabrej',
// //   branch:'cse',
// //   printDetails(){
// //     console.log(this.name);
// //     console.log(this.branch); 
// //   }
// // };

// // obj1.printDetails();

// let obj1={
//   name:'tabrej',
//   branch:'cse',
//   details:{
//     year:'final',
//     GPA:6.8
//   },
//   printDetails(){
//     console.log(this.name);
//     console.log(this.branch); 
//   }
// };
// console.log(obj1.details?.year)



// iterating or looping through arrays

// const sample={
//  hours:{mon:{
//   open:10,
//   close:20
//    },
//    tue:{
//     open:10,
//     close:20
//      },
//     }
// };

// // console.log(sample);

// const entries=Object.entries(sample.hours);
// console.log(entries);

// const properties=Object.keys(sample.hours);
// const propertyValue=Object.values(sample.hours.mon);
// // console.log(properties);
// console.log(propertyValue);
// // for(const x of properties)
// // console.log(x);

// for(const [key,{open,close}] of entries)
//   console.log(`we are open on ${key} at ${open} and close at ${close}`);

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// // 1 print goal and scoring player
// for(const item of game.scored.entries()){
//   console.log(`${item[1]} : scored the goal ${item[0]+1} `);
// }

// // 2. average odd calculate

// let size=Object.entries(game.odds);
// // console.log(size.length)
// let avg=0;
// for( const x of Object.values(game.odds)){
//   avg+=x;
// }
// console.log(`average of odds is : ${avg/size.length}`)

// for( const [key,value] of Object.entries(game.odds)){
//   console.log(`odd of victory ${game[key] ??'Draw'} is : ${value}`)
// }

let scorers = new Object();

for( const item of game.scored){
  if(scorers[item])
    scorers[item]+=1;
  else
    scorers[item]=1;
}
console.log(scorers);