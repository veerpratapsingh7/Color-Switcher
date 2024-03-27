const button = document.querySelectorAll('.button');
console.log(button);
const body = document.querySelector('body');

button.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (veer) {
    console.log(veer);
    console.log(veer.target);
    if (veer.target.id === 'grey') {
      body.style.background = veer.target.id;
    }
    if (veer.target.id === 'white') {
      body.style.background = veer.target.id;
    }
    if (veer.target.id === 'blue') {
      body.style.background = veer.target.id;
    }
    if(veer.target.id === 'yellow'){
      body.style.background = veer.target.id;
    }
  });
});
