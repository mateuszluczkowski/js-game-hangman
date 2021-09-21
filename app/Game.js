import { Quote } from "./Quote.js";
import { Step } from "./Step.js";

import { quotes } from "../data/index.js";

export default class Game {
   constructor({
      lettersWrapper,
      categoryWrapper,
      wordWrapper,
      outputWrapper,
      images,
   }) {
      this.lettersWrapper = lettersWrapper;
      this.categoryWrapper = categoryWrapper;
      this.wordWrapper = wordWrapper;
      this.outputWrapper = outputWrapper;
      this.quotes = quotes;
      this.images = images;
      const { text, category } =
         this.quotes[Math.floor(Math.random() * this.quotes.length)];
      this.categoryWrapper.innerText = category;
      this.step = new Step(images);
      this.quote = new Quote(text);
   }
   disableAllButtons() {
      const buttons = document.querySelectorAll("button");
      buttons.forEach((button) => button.setAttribute("disabled", true));
   }

   guess(e, label) {
      e.target.setAttribute("disabled", true);
      !this.quote.checkGuess(label)
         ? this.step.setActiveStep()
         : (this.wordWrapper.textContent = this.quote.content);

      if (this.quote.isEnd) this.end("win");
      if (this.step.isEnd) this.end("lose");
   }
   drawButtons() {
      for (let i = 0; i < 26; i++) {
         const label = (i + 10).toString(36);
         const button = document.createElement("button");
         button.innerText = label;
         button.setAttribute("id", label);
         button.addEventListener("click", (e) => this.guess(e, label));
         this.lettersWrapper.appendChild(button);
      }
   }
   end(result) {
      this.disableAllButtons();
      return (this.wordWrapper.textContent =
         result === "win"
            ? "GRATULUJEMY WYGRANEJ! YOU'RE THE BEST!"
            : "PRZEGRAŁEŚ!");
   }
   start() {
      this.drawButtons();
      this.quote.renderLetters();
      this.wordWrapper.textContent = this.quote.content;
      this.step.setActiveStep();
   }
}
