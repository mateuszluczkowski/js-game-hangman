import Game from "./Game.js";

const game = new Game({
   lettersWrapper: document.getElementById("letters"),
   categoryWrapper: document.getElementById("category"),
   wordWrapper: document.getElementById("word"),
   outputWrapper: document.getElementById("output"),
   images: document.querySelectorAll("img"),
});
game.start();
