const content = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

(async () => {
  const quote = await (await fetch(`https://api.quotable.io/random`)).json();
  content.innerText = `"${quote.content}"`;
  author.innerText = `-${quote.author}-`;
})();
