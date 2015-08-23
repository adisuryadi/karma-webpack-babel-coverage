import greet from './greet';

const $input = document.getElementById('name');
const $status = document.getElementById('status');
const defaultGreet = $status.innerHTML;

$input.addEventListener('keyup', e => {
  if (e.target.value) {
    $status.innerHTML = greet.sayHi(e.target.value);
    return;
  }
  $status.innerHTML = defaultGreet;
});
