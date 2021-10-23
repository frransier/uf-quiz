import { motion } from "framer-motion";
import useFullSize from "../lib/useFullSize";
import props from "../lib/props";
import Details from "./details";
import Close from "./close";
import { useRouter } from 'next/router';
import Expand from './expand';

export default function FullScreen() {
  const router = useRouter()
  const { title, text, img } = props;
  const fullSize = useFullSize(img);
  // console.log(fullSize);

  return (
    // <div>
    <motion.div
      onClick={() => router.push("/")}
      layoutId="container"
      style={{
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        width: "100vw",
        height: "100vh",
        marginTop: 0

      }}
      transition={{ type: "spring", duration: 0.4 }}
    >
      <motion.img
        layoutId="image"
        width={img.width}
        height={img.height}
        style={{
          width: fullSize.width,
          height: fullSize.height,
          borderRadius: 4
        }}
        src={img.src}
        alt="tokyo"
        transition={{ type: "spring", duration: 0.4 }}
      />

      <Close />
      <Details />
    </motion.div>
    // </div>
  );
}
