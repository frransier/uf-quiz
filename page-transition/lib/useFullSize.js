import { useEffect, useState } from "react";

export default function useFullSize(img) {
  const [fullSize, setFullSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    const w = { width: window.innerWidth, height: window.innerHeight };
    const ratio = img.height / img.width;
    const fz =
      w.width > w.height
        ? { width: w.width, height: w.width * ratio }
        : { height: w.height, width: w.height / ratio };

    setFullSize({
      width: fz.width,
      height: fz.height,
    });
  }, []);
  return fullSize;
}
