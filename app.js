const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const link = document.querySelector('a');

function onLoginSubmit(event) {
  event.preventDefault();
  console.log(loginInput.value);
  const username = loginInput.value;
  loginForm.classList.add('hidden');
  // greeting.innerHTML = "Hello! " + username;
  greeting.innerHTML = `Hello! ${username}`;
  greeting.classList.remove('hidden');
}

function handleLinkClick(e) {
  event.preventDefault();
  console.log(e);
  // alert('clicked!');
  console.dir(e);
}

loginForm.addEventListener('submit', onLoginSubmit);
link.addEventListener('click', handleLinkClick);
