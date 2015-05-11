



//function assigns x or o to the button based on value of the player.  button is disabled after assignment.
//evaluate function is used after each move for each player.

var player = 1;
function assign(button){
    if(player == 1) {
        document.getElementById(button).value = "X";
        document.getElementById(button).disabled= true;
        player -=1;
        evaluateForWinner();
    }
    else
    {document.getElementById(button).value = "O";
        document.getElementById(button).disabled = true;
        player +=1;
        evaluateForWinner();

    }

function evaluateForWinner() {

    if (document.getElementById("zero").value == "X" &&
        document.getElementById("one").value == "X" &&
        document.getElementById("two").value == "X"){
        console.log("Winner is X!");
    }
    else if (
        document.getElementById("three").value == "X" &&
        document.getElementById("four").value == "X" &&
        document.getElementById("five").value == "X"){
        console.log("Winner is X!");
    }
    else if (
        document.getElementById("six").value == "X" &&
        document.getElementById("seven").value == "X" &&
        document.getElementById("eight").value == "X"){
        console.log("Winner is X!");
    }
    else if (
        document.getElementById("zero").value == "X" &&
        document.getElementById("three").value == "X" &&
        document.getElementById("six").value == "X"){
        console.log("Winner is X!");
    }
    else if (
        document.getElementById("one").value == "X" &&
        document.getElementById("four").value == "X" &&
        document.getElementById("seven").value == "X"){
        console.log("Winner is X!");
    }
    else if (
        document.getElementById("two").value == "X" &&
        document.getElementById("five").value == "X" &&
        document.getElementById("eight").value == "X"){
        console.log("Winner is X!");
    }
    else if (
        document.getElementById("zero").value == "X" &&
        document.getElementById("four").value == "X" &&
        document.getElementById("seven").value == "X"){
        console.log("Winner is X!");
    }
    else if (
        document.getElementById("two").value == "X" &&
        document.getElementById("four").value == "X" &&
        document.getElementById("six").value == "X") {
        console.log("Winner is X!");
    }
    else if (
        document.getElementById("zero").value == "O" &&
        document.getElementById("one").value == "O" &&
        document.getElementById("two").value == "O"){
        console.log("Winner is O!");
    }
    else if (
        document.getElementById("three").value == "O" &&
        document.getElementById("four").value == "O" &&
        document.getElementById("five").value == "O"){
        console.log("Winner is O!");
        }
    else if (
        document.getElementById("six").value == "O" &&
        document.getElementById("seven").value == "O" &&
        document.getElementById("eight").value == "O"){
        console.log("Winner is O!");
        }
    else if (
        document.getElementById("zero").value == "O" &&
        document.getElementById("three").value == "O" &&
        document.getElementById("six").value == "O"){
        console.log("Winner is O!");
        }
    else if (
        document.getElementById("one").value == "O" &&
        document.getElementById("four").value == "O" &&
        document.getElementById("seven").value == "O"){
        console.log("Winner is O!");
        }
    else if (
        document.getElementById("two").value == "O" &&
        document.getElementById("five").value == "O" &&
        document.getElementById("eight").value == "O"){
        console.log("Winner is O!");
        }

    else if (
        document.getElementById("zero").value == "O" &&
        document.getElementById("four").value == "O" &&
        document.getElementById("seven").value == "O"){
        console.log("Winner is O!");
        }
    else if (
        document.getElementById("two").value == "O" &&
        document.getElementById("four").value == "O" &&
        document.getElementById("six").value == "O"){
        console.log("Winner is O!");
    }

    else{
        console.log ("no winner yet");

    }

}}

function reset(){
    document.getElementById("zero").value = 1;
    document.getElementById("one").value = 1;
    document.getElementById("two").value = 1;
    document.getElementById("three").value = 1;
    document.getElementById("four").value = 1;
    document.getElementById("five").value = 1;
    document.getElementById("six").value =1;
    document.getElementById("seven").value = 1;
    document.getElementById("eight").value = 1;
    document.getElementById("nine").value = 1;
    document.getElementById("zero").disabled = false;
    document.getElementById("one").disabled = false;
    document.getElementById("two").disabled = false;
    document.getElementById("three").disabled = false;
    document.getElementById("four").disabled = false;
    document.getElementById("five").disabled = false;
    document.getElementById("six").disabled = false;
    document.getElementById("seven").disabled = false;
    document.getElementById("eight").disabled = false;
    document.getElementById("nine").disabled = false;

}






