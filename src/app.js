let who = ['the dog','my granma','his turtle','my bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

function generateExcuse() {
  const randomWho = who[Math.floor(Math.random() * who.length)];
  const randomAction = action[Math.floor(Math.random() * action.length)];
  const randomWhat = what[Math.floor(Math.random() * what.length)];
  const randomWhen = when[Math.floor(Math.random() * when.length)];

  return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
}

window.onload =function () {
  document.getElementById('excuse').innerHTML = generateExcuse ();
};
