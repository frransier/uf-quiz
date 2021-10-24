import { motion } from "framer-motion";
import useFullSize from "../lib/useFullSize";
import props from "../lib/props";
import Details from "../components/details";
import Close from "../components/close";

export default function FullScreen() {
  const { img } = props;
  const fullSize = useFullSize(img);

  return (
    <motion.div
      layoutId="container"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        width: "100vw",
        height: "100vh",
        marginTop: 0,
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
          borderRadius: 0
        }}
        src={img.src}
        alt="tokyo"
        transition={{ type: "spring", duration: 0.4 }}
      />
      <Close />
      <Details />
    </motion.div>
  );
}
