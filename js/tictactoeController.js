angular
    .module('tictactoeApp')
    .controller('TictactoeController', TictactoeController);

TictactoeController.$inject = ['$scope', '$firebaseObject'];

function TictactoeController($scope, $firebaseObject) {



    var rootRef = new Firebase ("https://tictactoejd.firebaseio.com/");

    $firebaseObject(rootRef).$bindTo($scope, "game");


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

    $scope.move = function (square){
        var sqVal = $scope.game.board[square];
        if(sqVal) return;
        $scope.game.board[square] = $scope.game.turn;
        $scope.game.turn *= -1;
        $scope.game.winner = getWinner();

    }


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

    function checkWinner(sum) {
        if ( sum === 3 || sum === -3 ) {
            self.score1 += sum < 0 ? 0 :1;
            self.score2 += sum < 0 ? 0 :1;
            //initBoard();
            return sum < 0 ? -1 : 1;
        } else {
            return 0;
        }
    }


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


