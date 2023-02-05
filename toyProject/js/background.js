(async () => {
  const images = await (
    await fetch("https://picsum.photos/v2/list?page=2&limit=100")
  ).json();
  const chosenImage =
    images[Math.floor(Math.random() * images.length)].download_url;
  const bgImage = document.createElement("img");

  bgImage.src = chosenImage;
  bgImage.classList.add("bgImg");
  document.body.appendChild(bgImage);
})();
