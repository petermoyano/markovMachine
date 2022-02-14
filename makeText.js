/** Command-line tool to generate Markov text. */
const {MarkovMachine, test} = require("./markov");
let mm = new MarkovMachine("the cat in the hat");
mm.makeChains();
mm.makeText();

