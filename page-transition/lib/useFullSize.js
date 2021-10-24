export default function useFullSize(img) {
  const ratio = img.height / img.width;
  if (typeof document !== "undefined") {
    const { clientWidth, clientHeight } = document.documentElement
    const img = clientWidth > clientHeight
      ? { width: clientWidth, height: clientWidth * ratio }
      : { height: clientHeight, width: clientHeight / ratio }
    return { ...img, clientWidth, clientHeight }
  }
  else return { ...img, clientWidth: img.width, clientHeight: img.height }
}