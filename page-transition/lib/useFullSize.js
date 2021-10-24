import { useEffect, useState } from 'react';
export default function useFullSize(img) {
  const dimensions = createDimensions(img)
  const [fullSize, setFullSize] = useState(dimensions)
  useEffect(() => {
    function handleResize() {
      const d = createDimensions(img)
      setFullSize(d)
      console.log("handleResize", fullSize);
    }
    window.addEventListener("resize", handleResize)
    handleResize()
    return () => window.removeEventListener("resize", handleResize);
  }, [])
  return fullSize
}

function createDimensions(img) {
  const ratio = img.height / img.width;
  if (typeof window !== "undefined") {
    const { innerWidth, innerHeight } = window
    const img = innerWidth > innerHeight || innerHeight / ratio < innerWidth
      ? { width: innerWidth, height: innerWidth * ratio }
      : { height: innerHeight, width: innerHeight / ratio }
    return { ...img, innerWidth, innerHeight }
  }
  else return { ...img, innerWidth: img.width, innerHeight: img.height }

}