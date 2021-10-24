import { useEffect } from 'react';
import { useState } from 'react';

export default function useFullSize(img) {
  const [fullSize, setFullSize] = useState(img)
  const ratio = img.height / img.width;
  useEffect(() => {
    const { clientWidth, clientHeight } = document.documentElement
    setFullSize(
      clientWidth > clientHeight
        ? { width: clientWidth, height: clientWidth * ratio }
        : { height: clientHeight, width: clientHeight / ratio })
  }, [])
  return fullSize
}
