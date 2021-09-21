export class Quote {
   constructor(text) {
      this.arrayText = [...text.toLowerCase()];
      this.numberOfLetters = this.arrayText.filter(
         (letter) => letter !== " "
      ).length;
      this.content = "";
      this.allGuessedIndex = [];
      this.isEnd = false;
   }
   renderLetters() {
      this.content = "";
      this.arrayText.forEach((letter, index) => {
         if (letter === " " || this.allGuessedIndex.includes(index))
            return (this.content += letter);
         else return (this.content += "_");
      });
   }

   checkGuess(label) {
      const guessedIndexes = this.arrayText.filter((letter, index) => {
         if (letter === label) {
            this.allGuessedIndex.push(index);
            this.renderLetters();
            return true;
         } else return false;
      });

      if (this.allGuessedIndex.length === this.numberOfLetters)
         this.isEnd = true;
      return Boolean(guessedIndexes.length);
   }
}
