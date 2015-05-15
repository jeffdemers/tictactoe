angular
    .module('tictactoeApp')
    .controller('TictactoeController', TictactoeController);

TictactoeController.$inject = ['$scope', '$firebaseObject'];

function TictactoeController($scope, $firebaseObject) {


    //connecting firebase
    var rootRef = new Firebase ("https://tictactoejd.firebaseio.com/");

    //using "game" as term for firebase
    $firebaseObject(rootRef).$bindTo($scope, "game");


    //get winner function by row (0,1,2) (3,4,5) (6,7,8)
    // column (0,3,6) (1,4,7) (2,5,8)
    // and both diagnals (0,4,8) (6,4,8)
    function getWinner () {
        if (!$scope.game){
            return;
        }
        var boxes = $scope.game.board;

        for(var row = 0; row < 3; row++){
            var sum = boxes[row * 3] + boxes[row * 3 + 1] + boxes[row * 3 + 2];
            var winner = checkWinner(sum);
            if ( winner ) { return winner; }
        }

        for(var col = 0; col < 3; col++){
            var sum = boxes[col] + boxes[col + 3] + boxes[col + 6];
            winner = checkWinner(sum);
            if ( winner ) { return winner; }
        }

        var sum = boxes[0] + boxes[4] + boxes[8];
        winner = checkWinner(sum);
        if ( winner ) { return winner; }

        var sum = boxes[6] + boxes[4] + boxes[2];
        winner = checkWinner(sum);
        if ( winner ) { return winner; }

        return 0;

    }
    // move alternates between users by *-1.
    $scope.move = function (square){
        var sqVal = $scope.game.board[square];
        if(sqVal) return;
        $scope.game.board[square] = $scope.game.turn;
        $scope.game.turn = $scope.game.turn * (-1);

        $scope.game.winner = getWinner();


    }

    //get the actual symbol based on (x if val is 1) or (O is val is -1)
    $scope.getSymbol = function (square){
        var sqVal = $scope.game.board[square];
        if (sqVal === 1) {
            return "X";
        } else if (sqVal === -1){
            return "O";

        } else{
            return "";
        }

    };
    //check winner logic is sum = 3/-3 increment the score, else end.
    function checkWinner(sum) {
        if ( sum === 3 || sum === -3 ) {
            $scope.score1= $scope.score1 + sum < 0 ? 0 :1;
            $scope.score2= $scope.score2 + sum < 0 ? 0 :1;
            return sum < 0 ? -1 : 1;

        } else {
            return 0;
        }
    }

    //reset firebase board after each game. board values 0, winner 0 and game turn to 1
    $scope.reset = function (){
        $scope.game.board = [0,0,0,0,0,0,0,0,0];
        $scope.game.winner = 0;
        $scope.game.turn = 1;
    }


    console.log(getWinner());

    self.winner = getWinner();
}










//this.gameBoard = [
//    {player:'null'}, {player: 'null'}, {player:'null'},
//    {player: 'null'}, {player:'null'}, {player:'null'},
//    {player: 'null'}, {player: 'null'}, {player:'null'}
//]

//var player = 1;
//this.assign=assign;
//
//function assign(button){
//    if(player == 1) {
//        document.getElementById(button).value = "X";
//        document.getElementById(button).disabled= true;
//        player = player - 1;
//        evaluateForWinner();
//
//    }
//    else {
//        document.getElementById(button).value = "O";
//        document.getElementById(button).disabled = true;
//        player = player + 1;
//        evaluateForWinner();
//
//
//    }
//
//
//
//
//
//    function evaluateForWinner() {
//
//        if (document.getElementById("zero").value == "X" &&
//            document.getElementById("one").value == "X" &&
//            document.getElementById("two").value == "X"){
//            document.getElementById('winner-main-msg').innerHTML = 'Player X Wins!';
//            document.getElementById('winnerX').innerHTML = 1;
//
//        }
//        else if (
//            document.getElementById("three").value == "X" &&
//            document.getElementById("four").value == "X" &&
//            document.getElementById("five").value == "X"){
//            document.getElementById('winner-main-msg').innerHTML = 'Player X Wins!';
//        }
//        else if (
//            document.getElementById("six").value == "X" &&
//            document.getElementById("seven").value == "X" &&
//            document.getElementById("eight").value == "X"){
//            document.getElementById('winner-main-msg').innerHTML = 'Player X Wins!';
//        }
//        else if (
//            document.getElementById("zero").value == "X" &&
//            document.getElementById("three").value == "X" &&
//            document.getElementById("six").value == "X"){
//            document.getElementById('winner-main-msg').innerHTML = 'Player X Wins!';
//        }
//        else if (
//            document.getElementById("one").value == "X" &&
//            document.getElementById("four").value == "X" &&
//            document.getElementById("seven").value == "X"){
//            document.getElementById('winner-main-msg').innerHTML = 'Player X Wins!';
//        }
//        else if (
//            document.getElementById("two").value == "X" &&
//            document.getElementById("five").value == "X" &&
//            document.getElementById("eight").value == "X"){
//            document.getElementById('winner-main-msg').innerHTML = 'Player X Wins!';
//        }
//        else if (
//            document.getElementById("zero").value == "X" &&
//            document.getElementById("four").value == "X" &&
//            document.getElementById("eight").value == "X"){
//            document.getElementById('winner-main-msg').innerHTML = 'Player X Wins!';
//        }
//        else if (
//            document.getElementById("two").value == "X" &&
//            document.getElementById("four").value == "X" &&
//            document.getElementById("six").value == "X") {
//            document.getElementById('winner-main-msg').innerHTML = 'Player X Wins!';
//        }
//        else if (
//            document.getElementById("zero").value == "O" &&
//            document.getElementById("one").value == "O" &&
//            document.getElementById("two").value == "O"){
//            document.getElementById('winner-main-msg').innerHTML = 'Player O Wins!';
//        }
//        else if (
//            document.getElementById("three").value == "O" &&
//            document.getElementById("four").value == "O" &&
//            document.getElementById("five").value == "O"){
//            document.getElementById('winner-main-msg').innerHTML = 'Player O Wins!';
//        }
//        else if (
//            document.getElementById("six").value == "O" &&
//            document.getElementById("seven").value == "O" &&
//            document.getElementById("eight").value == "O"){
//            document.getElementById('winner-main-msg').innerHTML = 'Player O Wins!';
//        }
//        else if (
//            document.getElementById("zero").value == "O" &&
//            document.getElementById("three").value == "O" &&
//            document.getElementById("six").value == "O"){
//            document.getElementById('winner-main-msg').innerHTML = 'Player O Wins!';
//        }
//        else if (
//            document.getElementById("one").value == "O" &&
//            document.getElementById("four").value == "O" &&
//            document.getElementById("seven").value == "O"){
//            document.getElementById('winner-main-msg').innerHTML = 'Player O Wins!';
//        }
//        else if (
//            document.getElementById("two").value == "O" &&
//            document.getElementById("five").value == "O" &&
//            document.getElementById("eight").value == "O"){
//            document.getElementById('winner-main-msg').innerHTML = 'Player O Wins!';
//        }
//
//        else if (
//            document.getElementById("zero").value == "O" &&
//            document.getElementById("four").value == "O" &&
//            document.getElementById("eight").value == "O"){
//            document.getElementById('winner-main-msg').innerHTML = 'Player O Wins!';
//        }
//        else if (
//            document.getElementById("two").value == "O" &&
//            document.getElementById("four").value == "O" &&
//            document.getElementById("six").value == "O"){
//            document.getElementById('winner-main-msg').innerHTML = 'Player O Wins!'
//        }
//
//        else{
//            console.log("no winner")
//
//        }
//
//    }


