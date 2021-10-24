import { motion } from "framer-motion";
import Content from "../components/content";
import props from "../lib/props";

export default function Home() {
  const { img } = props;
  return (
    <>
      <motion.div
        layoutId="container"
        style={{
          display: "flex",
          alignItems: "center",
          width: 260,
          height: 240,
          overflow: "hidden",
          margin: "0 auto",
          marginTop: 50,
          borderRadius: 4,
          boxShadow: "4px 8px 16px darkgrey"
        }}
      >
        <motion.img
          layoutId="image"
          width="100%"
          style={{
            borderRadius: 4
          }}
          src={img.src}
          alt="tokyo"
        />
      </motion.div>
      <Content />
    </>
  );
}
