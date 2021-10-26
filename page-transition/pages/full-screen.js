import { motion } from "framer-motion";
import useFullSize from "../lib/useFullSize";
import props from "../lib/props";
import Details from "../components/details";
import Close from "../components/close";

export default function FullScreen() {
  const { img } = props;
  const fullSize = useFullSize(img);

  return (
    <>
      <motion.div
        layoutId="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          width: fullSize.innerWidth,
          height: fullSize.innerHeight,
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
            borderRadius: 0,
          }}
          src={img.src}
          alt="tokyo"
          transition={{ type: "spring", duration: 0.4 }}
        />
      </motion.div>
      <Close />
      <Details />
    </>
  );
}
