const game = {
   player1: {
      name: "",
   },
   player2: {
      name: "",
   },
   winner: null,
   cosa: 0,
};

document.getElementById("test").addEventListener("click", () => {
   //
   const player1NameInput = document.getElementById("player1-name").value;
   const player2NameInput = document.getElementById("player2-name").value;

   game.player1.name = player1NameInput;
   game.player2.name = player2NameInput;

   saveGame(game);
   window.location.assign("game.html");
});

console.log(game);
