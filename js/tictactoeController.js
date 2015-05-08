/**
 * Created by jeffdemers on 5/7/15.
 */
angular
    .module('tictactoeApp')
    .controller('TictactoeController', TictactoeController);

function TictactoeController( ) {

    var x = "home";
    var y = "visitor";

    this.gameBoard = [
        [{player: x}, {player: y}, {player:'null'}],
        [{player: x}, {player: y}, {player:'null'}],
        [{player: x}, {player: y}, {player:'null'}]]

       
};


