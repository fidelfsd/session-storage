const game = getGame();

document.getElementById("player1-name").innerText = game.player1.name;
document.getElementById("player2-name").innerText = game.player2.name;

console.log(game);

setInterval(() => {
   if (2 > 1) {
      game.winner = game.player1;
      saveGame(game);
      window.location.assign("winner.html");
   } else {
      window.location.assign("draw.html");
   }
}, 5000);
