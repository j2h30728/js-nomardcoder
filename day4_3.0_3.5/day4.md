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

- `innerHTML : "Grab me!"`
- `outerHTML : "<h1 id="title">Grab me!</h1>"`
- `innterText : "Grab me!"`
  HTML을 가지고오지만 동작은 javascript에서 작동 시킴
  Javascript는 HTML element를 가지고 오지만, HTML 자체를 보여주지는 않음
  `document`라는 HTML을 표현하는 object를 보여줄 뿐 임

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
