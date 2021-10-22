import { motion } from "framer-motion";
import useFullSize from "../lib/useFullSize";
import props from "../lib/props";
import Details from "./details";
import Close from "./close";

export default function FullScreen() {
  const { img } = props;
  const fullSize = useFullSize(img);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        borderRadius: 0,
      }}
    >
      <Close />

      <motion.img
        layoutId="image"
        width={img.width}
        height={img.height}
        style={{
          width: fullSize.width,
          height: fullSize.height,
          borderRadius: 0,
          zIndex: -1,
        }}
        transition={{ type: "spring", duration: 0.8, bounce: 0.4 }}
        src={img.src}
        alt=""
      />

      <Details />
    </div>
  );
}
