const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(event) {
  event.preventDefault(); //이벤트 막 음
  loginForm.classList.add(HIDDEN_CLASSNAME); // 폼 hidden 클래스 추가
  const username = loginInput.value; // 입력값 저장
  localStorage.setItem(USERNAME_KEY, username); //로컬스토리지 저장
  paintGreetings(username);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

function paintGreetings(username) {
  greeting.innerHTML = `Hello! ${username}`; // h1 값 저장
  greeting.classList.remove(HIDDEN_CLASSNAME); // h1 hidden 없앰
}

loginForm.addEventListener('submit', onLoginSubmit);


//맨 처음 실행할 때 1. 값 없는 상태 2. 저장된 상태 (savedUsername)
if (savedUsername == null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
