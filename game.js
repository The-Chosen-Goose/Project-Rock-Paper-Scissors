
// randomly choose an option 

function getComputerChoice()
{
     let num = ((Math.random() * 10));
     let result = "hello";

     if(num >= 0 && num <= 3){
        result = "ROCK"
        return result
     }

     else if (num > 3 && num <= 7){
        result = "PAPER"
        return result
     }

     else if (num > 7 && num <= 10){
        result = "SCISSORS"
        return result
     }
}


// takes input from user

function getHumanChoice()
{
    let str = prompt("Test your might !").toUpperCase()
    

    if (str === "ROCK"){
        return "ROCK"
    }

    else if (str === "PAPER"){
        return "PAPER"
    }

    else if (str === "SCISSORS"){
        return "SCISSORS"
    }

    else {
        return undefined
    }
}

let humanscore = 0

let computerscore = 0

/* compare player's choice to the bot's choice

if the player doesn't chose a move or inputs a wrong option the function he'll be notified in playgame()

There are 3 possibilities where the player will win and his score will increment

There is also a Tie possibility / the scores will remain unchanged

outside the stated possibilities the computer will always win and it's score will increment

*/
function playround(humanchoice,computerchoice){
   
    if(humanchoice === undefined){
        console.log("Unvalid input")
    }
     
    // first winning possibility

    else if(humanchoice === "ROCK" && computerchoice === "SCISSORS"){
        console.log("You win! ROCK beats SCISSORS")
        alert("You win! ROCK beats SCISSORS")
        return humanscore++
    }
    
    // second winning possibility

    else if (humanchoice === "PAPER" && computerchoice === "ROCK"){
        console.log("You win! PAPER beats ROCK")
        alert("You win! PAPER beats ROCK")
        return humanscore++
    }

    // third winning possibility

    else if (humanchoice === "SCISSORS" && computerchoice === "PAPER"){
        console.log("You win! SCISSORS beats PAPER")
        alert("You win! SCISSORS beats PAPER")
        return humanscore++
    }

    // tie possibility

    else if (humanchoice === computerchoice){
        console.log("It's a TIE")
        alert("It's a TIE")
    }

    // losing possibilities
    
    else {
        console.log("You lose! " + computerchoice + " beats " + humanchoice)
        alert("You lose! " + computerchoice + " beats " + humanchoice)
        return computerscore++
    }
}


/* the game consists of 5 round 

if the player didn't choose or inputed an unvalid option that round will be not be counted

after the 5 rounds the winner will be displayed alongside the scores
*/

function playgame()
{  

    for (i = 1 ; i <= 5 ; i++)
    { 
        let humanselection = getHumanChoice()

        let computerselection = getComputerChoice()

        let winner = playround(humanselection,computerselection)


        if(humanselection === undefined)
        {
            i--;
            alert("unvalid input")
        }
        
        
    }

    if(humanscore > computerscore)
        {
            console.log("\n--- Hey you've Won ---")
            console.log("You : " + humanscore + " /////// Bot : " + computerscore)
            alert("\n--- Hey you've Won ---" + " \nYou : " + humanscore + " /////// Bot : " + computerscore)
        }

        else if (humanscore === computerscore)
        {
            console.log("\n--- What do we have here. It's a Tie !!!! ---")
            console.log("You : " + humanscore + " /////// Bot : " + computerscore)
            alert("\n--- What do we have here. It's a Draw !!!! ---" + " \nYou : " + humanscore + " /////// Bot : " + computerscore)
        }

        else 
        {
            console.log("\n --- you've lost !")
            console.log("You : " + humanscore + " /////// Bot : " + computerscore)
        }
}
playgame()