angular
    .module('tictactoeApp')
    .controller('TictactoeController', TictactoeController);

TictactoeController.$inject = ['$scope', '$firebaseObject'];

function TictactoeController($scope, $firebaseObject) {


    //connecting firebase
    var rootRef = new Firebase("https://tictactoejd.firebaseio.com/");

    //using "game" as for firebase binding.
    $firebaseObject(rootRef).$bindTo($scope, "game");
    //players can make a move, true or false.  false once game is won.
    $scope.canMove = true;
    //show that winner is x or o for winning message
    $scope.winX = false;
    $scope.winO = false;

    //check game.board on firebase for winner
    function getWinner() {
        if (!$scope.game) {
            return;
        }
        var boxes = $scope.game.board;
        //get winner function by row (0,1,2) (3,4,5) (6,7,8). Lock off can move if winner.
        for (var row = 0; row < 3; row++) {
            var sum = boxes[row * 3] + boxes[row * 3 + 1] + boxes[row * 3 + 2];
            var winner = checkWinner(sum);
            if (winner) {
                $scope.canMove = false;

            }
        }
        // column (0,3,6) (1,4,7) (2,5,8). Lock off can move if winner.
        for (var col = 0; col < 3; col++) {
            var sum = boxes[col] + boxes[col + 3] + boxes[col + 6];
            winner = checkWinner(sum);
            if (winner) {
                $scope.canMove = false;
            }
        }
        // and both diagonals (0,4,8) (6,4,8). Lock off can move if winner.
        var sum = boxes[0] + boxes[4] + boxes[8];
        winner = checkWinner(sum);
        if (winner) {
            $scope.canMove = false;
        }

        var sum = boxes[6] + boxes[4] + boxes[2];
        winner = checkWinner(sum);
        if (winner) {
            $scope.canMove = false;
        }

        else {
             return "";

        }

    }

    //if winner increment the score in firebase. ng show winO or winX to show x or o winner. Set winner to true.
    function checkWinner(sum) {
        if (sum === -3) {
            $scope.game.scoreO++;
            $scope.winO = true;
            return true;
        } else if (sum === 3) {
            $scope.game.scoreX++;
            $scope.winX = true;
            return true;
        }
    }


    // move alternates between users by *-1.
    $scope.move = function (square) {
        if ($scope.canMove) {
            var sqVal = $scope.game.board[square];
            if (sqVal) return;
            $scope.game.board[square] = $scope.game.turn;
            $scope.game.turn = $scope.game.turn * (-1);

            $scope.game.winner = getWinner();

        }
    };

    //get the symbol based on (x if val is 1) or (O is val is -1)
    $scope.getSymbol = function (square) {
        var sqVal = $scope.game.board[square];
        if (sqVal === 1) {
            return "X";
        } else if (sqVal === -1) {
            return "O";
        } else {
            return "";
        }
    };


    //reset firebase board after each game. board values 0, winner 0 and game turn to 1
    $scope.reset = function (){
        $scope.game.board = [0,0,0,0,0,0,0,0,0];
        $scope.game.winner = 0;
        $scope.game.turn = 1;
        $scope.canMove = true;
        $scope.winX = false;
        $scope.winO = false;
    }

    //reset everything including score O and score X
    $scope.newGame = function (){
        $scope.game.board = [0,0,0,0,0,0,0,0,0];
        $scope.game.winner = 0;
        $scope.game.turn = 1;
        $scope.game.scoreO = 0;
        $scope.game.scoreX = 0;
        $scope.canMove = true;
        $scope.winX = false;
        $scope.winO = false;
    }

}







