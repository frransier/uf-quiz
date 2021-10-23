import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import props from "../lib/props";
import Expand from "./expand";
import { useRouter } from 'next/router';

export default function Card() {
  const router = useRouter()
  const { title, img, text } = props;
  return (
    // <div>
    <div style={{ display: "grid", justifyItems: "center", width: 270 }}>
      <motion.div
        onClick={() => router.push("/full-screen")}
        layoutId="container"
        style={{
          display: "flex",
          alignItems: "center",
          width: 260,
          height: 240,
          overflow: "hidden",
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        style={{
          display: "grid",
          justifyItems: "center",
        }}
      >
        <h1 style={{ marginBottom: 0 }}>{title}</h1>
        <p>{text}</p>
        <Expand />
      </motion.div>
    </div >
    // </div>
    // </div>
  );
}
