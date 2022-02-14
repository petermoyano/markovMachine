/** Textual markov chain generator */

let test = 123;
class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.chains = {};
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    let setWords = new Set(this.words);
    console.log(this.words);
    console.log(setWords);
    for (let uniqueWord of setWords) {
      this.chains[uniqueWord] = [];
      for (let i = 0; i < this.words.length - 1; i++) {
        if (uniqueWord === this.words[i]) {
          this.chains[uniqueWord].push(this.words[i+1])
        }
      }
    }
    console.log(this.chains)
  }


  /** return random text from chains */

/*   makeText(numWords = 100) {
    // TODO
  } */
}


module.exports = {MarkovMachine: MarkovMachine, test: test}
