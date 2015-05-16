angular
    .module('tictactoeApp')
    .controller('TictactoeController', TictactoeController);

TictactoeController.$inject = ['$scope', '$firebaseObject'];

function TictactoeController($scope, $firebaseObject) {


    //connecting firebase
    var rootRef = new Firebase ("https://tictactoejd.firebaseio.com/");

    //using "game" as for firebase binding.
    $firebaseObject(rootRef).$bindTo($scope, "game");
    //players can make a move, true or false.  false once game is won.
    $scope.canMove = true;
    $scope.tempBoard = [];




    function getWinner () {
        if (!$scope.game){
            return;
        }
        var boxes = $scope.game.board;
        //get winner function by row (0,1,2) (3,4,5) (6,7,8)
        for(var row = 0; row < 3; row++){
            var sum = boxes[row * 3] + boxes[row * 3 + 1] + boxes[row * 3 + 2];
            var winner = checkWinner(sum);
            if ( winner ) {
                $scope.canMove = false;
                return winner;
            }

        }
        // column (0,3,6) (1,4,7) (2,5,8)
        for(var col = 0; col < 3; col++){
            var sum = boxes[col] + boxes[col + 3] + boxes[col + 6];
            winner = checkWinner(sum);
            if ( winner ) {
                $scope.canMove = false;
                return winner; }
        }
        // and both diagonals (0,4,8) (6,4,8)
        var sum = boxes[0] + boxes[4] + boxes[8];
        winner = checkWinner(sum);
        if ( winner ) {
            $scope.canMove = false;
            return winner; }

        var sum = boxes[6] + boxes[4] + boxes[2];
        winner = checkWinner(sum);
        if ( winner ) {
            $scope.canMove = false;
            return winner; }

        return 0;

    }
    // move alternates between users by *-1. checking if player has won
    $scope.move = function (square){
    if($scope.canMove) {
        var sqVal = $scope.game.board[square];
        if(sqVal) return;
        $scope.game.board[square] = $scope.game.turn;
        $scope.game.turn = $scope.game.turn * (-1);

        $scope.game.winner = getWinner();

    }};

    //get the symbol based on (x if val is 1) or (O is val is -1)
    $scope.getSymbol = function (square){
        var sqVal = $scope.game.board[square];
        if (sqVal === 1) {
            $scope.tempBoard[square] = "player1";
            return "X";
        } else if (sqVal === -1){
            $scope.tempBoard[square] = "player2";
            return "O";
        } else{
            return "";
        }

    };


    //if winner increment the score in firebase.
    function checkWinner(sum) {
        if ( sum === -3) {
            $scope.game.scoreO++;
            return true;
        }else if (sum === 3) {
            $scope.game.scoreX++;
            return true;
        }
    }



    //reset firebase board after each game. board values 0, winner 0 and game turn to 1
    $scope.reset = function (){
        $scope.game.board = [0,0,0,0,0,0,0,0,0];
        $scope.game.winner = 0;
        $scope.game.turn = 1;
        $scope.canMove = true;
    }

    //reset everything including score 1 and score 2
    $scope.newGame = function (){
        $scope.game.board = [0,0,0,0,0,0,0,0,0];
        $scope.game.winner = 0;
        $scope.game.turn = 1;
        $scope.game.scoreO = 0;
        $scope.game.scoreX = 0;
        $scope.canMove = true;
    }


    //console.log(getWinner());
    //
    //self.winner = getWinner();
}







