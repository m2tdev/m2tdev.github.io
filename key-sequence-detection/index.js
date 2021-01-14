// my solution before watching the whole video

// let pressed = [];
// const secretCode = 'trymeEnter';

// window.addEventListener('keyup', (e) => {
//   pressed.push(e.key);
//   if (e.key == 'Enter') {
//     const currentCombination = pressed.join('');
//     if (currentCombination === secretCode) {
//       alert('congrats');
//     }
//     pressed = [];
//   }
// });

// Wes' solution

const pressed = [];
const secretCode = 'summon';

window.addEventListener('keyup', (e) => {
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join('').includes(secretCode)) {
    cornify_add();
  }
});
