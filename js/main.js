



//function assigns x or o to the button based on value of the player.  button is disabled after assignment.
//evaluate function is used after each move for each player.

var player = 1;
function assign(button){
    if(player == 1) {
        document.getElementById(button).value = "X";
        document.getElementById(button).disabled= true;
        player = player - 1;
        evaluateForWinner();

    }
    else
    {document.getElementById(button).value = "O";
        document.getElementById(button).disabled = true;
        player = player + 1;
        evaluateForWinner();


    }

    var x=0;
    var O=0;

function evaluateForWinner() {

    if (document.getElementById("zero").value == "X" &&
        document.getElementById("one").value == "X" &&
        document.getElementById("two").value == "X"){
        document.getElementById('winner-main-msg').innerHTML = 'Player X Wins!';
        document.getElementById('winnerX').innerHTML = 1;

    }
    else if (
        document.getElementById("three").value == "X" &&
        document.getElementById("four").value == "X" &&
        document.getElementById("five").value == "X"){
        document.getElementById('winner-main-msg').innerHTML = 'Player X Wins!';
    }
    else if (
        document.getElementById("six").value == "X" &&
        document.getElementById("seven").value == "X" &&
        document.getElementById("eight").value == "X"){
        document.getElementById('winner-main-msg').innerHTML = 'Player X Wins!';
    }
    else if (
        document.getElementById("zero").value == "X" &&
        document.getElementById("three").value == "X" &&
        document.getElementById("six").value == "X"){
        document.getElementById('winner-main-msg').innerHTML = 'Player X Wins!';
    }
    else if (
        document.getElementById("one").value == "X" &&
        document.getElementById("four").value == "X" &&
        document.getElementById("seven").value == "X"){
        document.getElementById('winner-main-msg').innerHTML = 'Player X Wins!';
    }
    else if (
        document.getElementById("two").value == "X" &&
        document.getElementById("five").value == "X" &&
        document.getElementById("eight").value == "X"){
        document.getElementById('winner-main-msg').innerHTML = 'Player X Wins!';
    }
    else if (
        document.getElementById("zero").value == "X" &&
        document.getElementById("four").value == "X" &&
        document.getElementById("eight").value == "X"){
        document.getElementById('winner-main-msg').innerHTML = 'Player X Wins!';
    }
    else if (
        document.getElementById("two").value == "X" &&
        document.getElementById("four").value == "X" &&
        document.getElementById("six").value == "X") {
        document.getElementById('winner-main-msg').innerHTML = 'Player X Wins!';
    }
    else if (
        document.getElementById("zero").value == "O" &&
        document.getElementById("one").value == "O" &&
        document.getElementById("two").value == "O"){
        document.getElementById('winner-main-msg').innerHTML = 'Player O Wins!';
    }
    else if (
        document.getElementById("three").value == "O" &&
        document.getElementById("four").value == "O" &&
        document.getElementById("five").value == "O"){
        document.getElementById('winner-main-msg').innerHTML = 'Player O Wins!';
        }
    else if (
        document.getElementById("six").value == "O" &&
        document.getElementById("seven").value == "O" &&
        document.getElementById("eight").value == "O"){
        document.getElementById('winner-main-msg').innerHTML = 'Player O Wins!';
        }
    else if (
        document.getElementById("zero").value == "O" &&
        document.getElementById("three").value == "O" &&
        document.getElementById("six").value == "O"){
        document.getElementById('winner-main-msg').innerHTML = 'Player O Wins!';
        }
    else if (
        document.getElementById("one").value == "O" &&
        document.getElementById("four").value == "O" &&
        document.getElementById("seven").value == "O"){
        document.getElementById('winner-main-msg').innerHTML = 'Player O Wins!';
        }
    else if (
        document.getElementById("two").value == "O" &&
        document.getElementById("five").value == "O" &&
        document.getElementById("eight").value == "O"){
        document.getElementById('winner-main-msg').innerHTML = 'Player O Wins!';
        }

    else if (
        document.getElementById("zero").value == "O" &&
        document.getElementById("four").value == "O" &&
        document.getElementById("eight").value == "O"){
        document.getElementById('winner-main-msg').innerHTML = 'Player O Wins!';
        }
    else if (
        document.getElementById("two").value == "O" &&
        document.getElementById("four").value == "O" &&
        document.getElementById("six").value == "O"){
        document.getElementById('winner-main-msg').innerHTML = 'Player O Wins!'
    }

    else{


    }

}}

function reset(){


}


//location.reload(true);

