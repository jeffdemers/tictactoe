
var player = 1;
function assign(button){
    if(player == 1) {
        document.getElementById(button).value = "X";
        document.getElementById(button).disabled= true;
        player -=1;
    }
    else
    {document.getElementById(button).value = "O";
        document.getElementById(button).disabled = true;
        player +=1;

    }





}


