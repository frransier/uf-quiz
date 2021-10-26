const loadButton = document.querySelector("#load");

loadButton.onclick = async () => {
  loadButton.disabled = true;
  loadButton.textContent = "Loading images…";
  await cleanFetch(
    "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&limit=3"
  )
    .then((gifs) => gifs.forEach((gif) => mountGif(gif)))
    .catch((e) => console.log(e));
  loadButton.remove();
};

async function cleanFetch(url) {
  const res = await fetch(url);
  if (res.ok) {
    const json = await res.json();
    return json.data;
  } else {
    throw new Error(res.status);
  }
}

function mountGif(gif) {
  const image = new Image();
  image.src = gif.images.downsized.url;
  document.body.appendChild(image);
}
