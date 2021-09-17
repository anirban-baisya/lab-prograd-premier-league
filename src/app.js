//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  var managerArray = [managerName,
   managerAge  ,
    currentTeam ,
 trophiesWon]
 return managerArray;
}



// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation) {
  if (formation.length== 0) {
    return null;
  } else {
    var formate = { defender:formation[0], midfield:formation[1], forward:formation[2]}; //obj
  }
  return formate;
}


// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year) {
  var playerList= [];
  let j = 0;
  for (let i of players) {
    if(i.debut==year){
      playerList[j]=i;
      j++;
    }
  }
  return playerList;
}


//Progression 4 - Filter players that play at the position _______

function filterByPosition(position) {
  var playerList= []; 
  let j = 0;
  for(let i of players ){
    if(i.pos== position){
      playerList[j]= i;
    j++;
    }
  }
  return playerList;
}


//Progression 5 - Filter players that have won ______ award

//Progression 6 - Filter players that won ______ award ____ times

//Progression 7 - Filter players that won ______ award and belong to ______ country

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

//Progression 9 - Sort players in descending order of their age
function SortByAge() {
  var playersList = [];
  playersList = Object.age(players).sort()
  return playersList.reverse();
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
