// Start by reading the instructions in the README.

function lintAndPlaySequence() {
  // retrieve strings from each input box and store in variables
  // Hey JavaScript, go into the file, and get me the element with the id sequence-input-1
  // querySelector() will return the first element that matches the selector
  const sequence1 = document.querySelector('#sequence-input-1').value;
  const sequence2 = document.querySelector('#sequence-input-2').value;
  const sequence3 = document.querySelector('#sequence-input-3').value;
  const sequence4 = document.querySelector('#sequence-input-4').value;
  // assign variable to sequence1

  let lintedSequence = sequence1;
  
  // ============== Code below this line =============================

  console.log(sequence1)
  console.log(sequence2)
  console.log(sequence3)
  console.log(sequence4)
  // Example of updating/reassigning a variable value
  // lintedSequence = 'Hello, World'

  // TASKS
  // 1. Update lintedSequence by removing the whitespace off of the ends of sequence1, 2, 3, and 4, and concatenating them together
 let lintedSequence = sequence1.trim() + sequence2.trim() + sequence3.trim() +sequence4.trim();

  // 2. Update lintedSequence by converting all characters to lowercase
 lintedSequence = lintedSequence.toLowerCase();
  

  // 3. LevelUp: Update lintedSequence by using the 'replace' method to remove all characters that aren't letters or spaces
  let lintedSequence = lintedSequence.replace(/[^a-zA-Z ]/g, '');

  console.log(lintedSequence);


  // ============= Don't code below this line ========================

  // play the lintedSequence string
  playSequence(lintedSequence);
  
}
