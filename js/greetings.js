const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logout = document.querySelector("#logout");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const onLoginSubmit = event => {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
};

const paintGreetings = username => {
  greeting.innerText = `어서오세요. ${username}님, 오늘도 화이팅!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  logout.classList.remove(HIDDEN_CLASSNAME);
};

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}

const handdleLogOut = () => {
  localStorage.removeItem(USERNAME_KEY);
  location.reload();
};

logout.addEventListener("click", handdleLogOut);
