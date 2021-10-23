import { useEffect } from 'react';
import { useState } from 'react';

export default function useFullSize(img) {
  const [fullSize, setFullSize] = useState(img)
  const ratio = img.height / img.width;

  useEffect(() => {
    setFullSize(
      window.innerWidth > window.innerHeight
        ? { width: window.innerWidth, height: window.innerWidth * ratio }
        : { height: window.innerHeight, width: window.innerHeight / ratio })
  }, [])

  return fullSize


}
