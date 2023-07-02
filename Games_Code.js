var dice1 =0;
var dice2 =0;
var dice3 =0;
var dice4 =0;
var sum =0;
/*this rolls the dice to start the process*/ 
function rollDice()
{
    /*the indvidual items used in the formula are lited below */
    dice1 = Math.floor(Math.random() * 6) + 1;
    dice2 = Math.floor(Math.random() * 6) + 1;
    dice3 = Math.floor(Math.random() * 6) + 1;
    dice4 = Math.floor(Math.random() * 6) + 1;
    sum = dice1 + dice2 + dice3 + dice4;
    /*this displays the information on the webpage*/ 
    document.getElementById("dice1").innerHTML = dice1;
    document.getElementById("dice2").innerHTML = dice2;
    document.getElementById("dice3").innerHTML = dice3;
    document.getElementById("dice4").innerHTML = dice4;
    document.getElementById("sum").innerHTML = sum;
    /*The if line provides a set result like getting the proper number or winning number in the formulab*/
    if (sum == 21 || sum == 24) 
    { 
    document.getElementById("result").innerHTML = "YOU WON!"; 
    }
    /*This is the non winning number or the incorrect answers or solutions*/ 
    else if (sum == 4 || sum == 5 ||sum == 6 || sum == 7 ||sum == 8 || sum == 9 ||sum == 10 || sum == 11 ||sum == 12 || sum == 13 ||sum == 14 || sum == 15 ||sum == 16 || 
        sum == 17 || sum == 18 || sum == 19 || sum == 20 || sum == 22 || sum == 23)
    {
    document.getElementById("result").innerHTML = "YOU LOST, roll again"; 
    } 
    else
    {     
    document.getElementById("result").innerHTML = "Try Again"; 
    }
}  
