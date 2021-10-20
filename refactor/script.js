const loadButton = document.querySelector('#load');

loadButton.onclick = async () => {
  loadButton.disabled = true
  loadButton.textContent = 'Loading images…'
  const gifs = await cleanFetch('https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&limit=3')
  gifs.forEach(gif => mountGif(gif))
  loadButton.remove();
};

async function cleanFetch(url) {
  const res = await fetch(url)
  const json = await res.json()
  return json.data
}

function mountGif(gif) {
  const image = new Image()
  image.src = gif.images.downsized.url
  document.body.appendChild(image)
}