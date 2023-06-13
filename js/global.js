const GAME_KEY = "gameKey";

const saveGame = (game) => {
   sessionStorage.setItem(GAME_KEY, JSON.stringify(game));
};

const getGame = () => {
   return JSON.parse(sessionStorage.getItem(GAME_KEY));
};
