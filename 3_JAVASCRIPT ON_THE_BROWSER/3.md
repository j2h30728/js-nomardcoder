## day4

3 [2021 UPDATE] JAVASCRIPT ON THE BROWSER

### 3.0 The Document Object

#### HTML

HTML === 접착제

- HTML이 CSS와 Javascript를 가지고 옴
- HTML와 상호작용하기 위해서 javascript를 사용함
  (= HTML의 Element들을 Javascript를 통해 변경하고, 일을 수 있음)

#### document : 브라우저의 핵심 object

- 브라우저에 이미 존재하는 object로 굉장히 많은 정보를 가짐
- document를 통해서 Javscript 에서 HTML에 접근할 수 있음
- Javascript 파일에서 HTML element를 가지고 올수 있고 변경할 수 있음
- 예시 ) `const 홈페이지_타이틀_이름 = document.title  `

### 3.1 HTML in Javascript

특정한 무엇인가를 가져오는 것

```HTML
<!-- index.html -->
<h1 id="title">Grab me!</h1>
```

```js
//index.js
const title = document.getElementById("title");
//: Javascript id="title"을 가진 태그를 가져옴

console.log(title);
console.dir(title); // element를 더 자세하게 보여줌
```

**`console.dir(title)`**

- JavaScript는 (document.getElementById를 이용해서) HTML element를 가지고 오지만, HTML 자체를 보여주지는 않음.
- `document`라는 HTML을 표현하는 object를 보여줄 뿐 임

- `innerHTML : "Grab me!"`
- `outerHTML : "<h1 id="title">Grab me!</h1>"`
- `innterText : "Grab me!"`
  HTML을 가지고오지만 동작은 javascript에서 작동 시킴

```HTML
<!-- index.html -->
<h1 className="hello" id="title">Grab me!</h1>
```

```js
//index.js

const title = document.getElementById("title");
title.innerText = "Got you!";
// Grab me! => Got you!로 변경됨
//=> javascript 에 의해 HTML이 변경됨

console.log(title.id); // title
console.log(title.className); //hello
```

### 3.2 Searching For Elements

#### HTML에서 element를 가지고 오는 방법들

##### 1) getElementById('id')

- id 를 이용해 element를 찾음
- 여러 element들 중에 원하는 element를 하나만 가지고 올 수 있음
- 그 element에서 어떤 것이든 가져올 수 있으며, element의 항목들도 변경할 수 있음
  - className을 가져오거나 추가 가능
  - text를 가져오거나 변경 가능

```js
//index.js
const title = document.getElementById("title");
//: Javascript id="title"을 가진 태그를 가져옴
```

- 만약 'title'를 id 값으로 가지는 element가 없을 경우, null이 됨
- null 값인 상태로 `title.innerText = "Got you!"` 함수를 사용할 경우, ['title'이 존재하지 않으니 title내부의 innerText를 호출하지 마십시오]라는 에러가 뜸
  (null varable의 innerText property는 변경할 수 없음)

##### 2) getElementsByClassName('className')

- class Naame 를 이용해 element를 찾음
- 반환값으로는 해당하는 className을 가진 element들의 array 임
- 소괄호 안에 className을 작성하므로 그것을 넘겨준다는 것을 암

```HTML
<!-- index.html -->
<h1 className="hello" id="title">Grab me!</h1>
```

```js
//index.js
const title = document.getElemenstByClassName("hello");
//: Javascript className="hello"을 가진 태그를 가져옴
```

##### 3) querySelecotor

- element를 CSS 방식으로 검색할 수 있음
  - class : 앞에 . 을 추가
  - id : 앞에 # 을 추가
- selector안의 조건에 부합하는 element가 여러개가 해당될 경우, 오직 첫 번째의 element만 가져옴
- 하위 element를 가지고 올수 있는 것이 장점 (getElementById로는 불가능함)

```HTML
<!-- index.html -->
<h1 className="hello" id="title">Grab me!</h1>
```

```js
//index.js
const titleByClassName = document.querySelector(".hello");
const titleById = document.querySelector("#title");
```

```js
const title = document.querySelector("div.hello:first-child h1");
// className 이 hello인 element의 자식 태그들 주에, 첫 번째 h1 태그
```

##### 4) querySelecotorAll

- selector안의 조건에 부합하는 element들을 array형태로 모두 가지고옴.

### 3.3 Events

```js
const title = document.querySelector("div.hello:first-child h1");

console.dir(title);
title.style.color = "blue"; //title의 색상을 파란색으로 변경
```

- event : active, hover, mouseon, mouseoff, click etc

##### eventListener : event를 listen함

- **addEventListener** : eventListener를 추가함
  - 무슨 event를 listen 하고싶은지도 알려줘야 함. 모든 event가 아닌 특정한 하나의 even만 알아보고 싶기 때문

```js
const title = document.querySelector("div.hello:first-child h1");

//title을 click 햇을때 무언가를 할 행동
const handleTitleClick = () => {
  title.innerText = "You just clicked!";
};

//title의 클릭을 listen 하고, click event가 발생하면, handleTitleClick 함수가 동작함
title.addEventListener("click", handleTitleClick);
```

- `handleTitleClick()` : 함수를 바로 샐힝시키고 싶다
- `handleTitleClick` : 함수를 js에 전달하고 유저가 title을 click할 경우에 js가 대신 함수를 실행시켜주면 좋겠다
  `HTMLelement.addEventListener("listen하고 싶은 event이름", event가 발생하면 호출할 function)`

### 3.4 Events part Two

1. 검색어 : h1 html element mdn ; HTML 관점의 heading element
2. [HTMLHeadingElement - Web APIs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHeadingElement) ; 자바스크립트관점의 heading element
3. [HTMLElement 의 Events](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement#events) ; 클릭, 마우스오버 등
4. [Element 의 Events](https://developer.mozilla.org/en-US/docs/Web/API/Element#events) ; 복사, 붙여넣기,잘라내기 등
5. `console.dir(title)` => 결과의 property이름 앞에 on 이 붙어있다면, event listener인 것

```js
const title = document.querySelector("div.hello:first-child h1");

//title을 click 햇을때 무언가를 할 행동
const handleTitleClick = () => {
  title.innerText = "You just clicked!";
};
const handleTitleMouseEnter = () => {
  title.innerText = "The mouse is here!";
};
const handleTitleMouseLeave = () => {
  title.innerText = "The mouse is gone!";
};

//title의 클릭을 listen 하고, click event가 발생하면, handleTitleClick 함수가 동작함
title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleTitleMouseEnter);
title.addEventListener("mouseleave", handleTitleMouseLeave);
```

### 3.5 More Events

##### 두 가지 방법

1. addEventListener()를 통해서 event들을 listen할 수 있음
   `태그.addEventListener('event', event가 일어나면 실행시키고 싶은 함수이름)`
   - `removeEventListener`를 통해서 event listener을 제거할 수도 있음
2. oneventName property에 eventListenr를 할당함으로써 event를 listen할 수 있음
   `태그.'event = event가 일어나면 실행시키고 싶은 함수이름`

```js
//예시
//1
title.addEventListener("click", handleTitleClick);
//2
title.onclick = handleTitleClick;
```

```js
//index.js
const handleWindowRightClick = () => {
  title.innerText = "That was right click!";
};
const handleWinodwResize = () => {
  title.innerText = "You just resized!";
};
const handleWindowCopy = () => {
  alert("copier!");
};
const handleWindowOffline = () => {
  alert("SOS on WIFI");
};
const handleWindowOnline = () => {
  alert("ALL Good!");
};

window.addEventListener("contextmenu", handleWindowRightClick); // 마우스 우클릭
window.addEventListener("resize", handleWinodwResize); // 윈도우 창 사이즈 변경
window.addEventListener("copy", handleWindowCopy); // 복사키 (ctrl + C)
window.addEventListener("offline", handleWindowOffline); // wifi 연결  끊김
window.addEventListener("online", handleWindowOnline); // wifi 연결 성공
```

### 3.6 CSS in Javascript

```js
const h1 = documeent.querySelector("div.hello:first-child h1");
function handleTitleClick() {
  console.log(h1.style.color); //get
  h1.style.color = "blue"; //set
  console.log(h1.style.color); //get
}
h1.addEventListener("click", handleTitleClick);
```

### 3.7 CSS in Javascript part Two

#### ClassName

```html
<h1 class="font">CSS in Javascript part</h1>
```

```js
const handleTitle2Click = () => {
  const clickedClass = "clicked";
  if (title2.className === clickedClass) {
    title2.className = "";
  } else {
    title2.className = clickedClass;
  }
};
```

- 클릭하는 순간 `class="font"` 에서 `class="clicked"` 로 교체 됨
- class name을 변경하지않고 임의로 추가하고 제거 하고 싶음

### 3.8 CSS in Javascript part Three

#### classList('class name')

- 명시한 class가 HTML element의 class포함되어있는지 알려주는 함수
- element의 class 내용물을 조작하는 것을 허용함
- `classList.remove('class name')` : 지정하는 'class name' 삭제
  - `class name` 이 빈칸이면 메서드는 동작하지 않음
- `classList.add('class name')` : 지정하는 'class name' 추가

```js
const handleTitle2Click = () => {
  const clickedClass = "clicked";
  console.log(title2.classList);
  if (title2.classList.contains(clickedClass)) {
    title2.classList.remove(clickedClass); // 삭제
  } else {
    title2.classList.add(clickedClass); //추가
  }
};
```

- `classList.toogle('class name')` 'class name'을 토글형식으로 추가 제거함

#### day4 챌린지 과제 : [cond sandbox](https://codesandbox.io/s/jscaelrinji-4day-day-three-blueprint-hfbhkx)

**조건**
[x] 마우스가 title위로 올라가면 텍스트가 변경되어야 합니다.
[x] 마우스가 title을 벗어나면 텍스트가 변경되어야 합니다.
[x] 브라우저 창의 사이즈가 변하면 title이 바뀌어야 합니다.
[x] 마우스를 우 클릭하면 title이 바뀌어야 합니다.
[x] title의 색상은 colors 배열에 있는 색을 사용해야 합니다.
[x] .css 와 .html 파일은 수정하지 마세요.
[x] 모든 함수 핸들러는 superEventHandler내부에 작성해야 합니다.
