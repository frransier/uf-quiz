import Link from "next/link";
import { motion } from "framer-motion";
import props from "../lib/props";
import Expand from "./expand";

export default function Card() {
  const { title, img, text } = props;
  return (
    <div style={{ display: "grid", justifyItems: "center", width: 260 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: 260,
          height: 240,
          margin: "auto",
          marginTop: 40,
          borderRadius: 4,
          boxShadow: "2px 4px 8px darkgrey",
          overflow: "hidden"
        }}
      >
        <motion.img
          layoutId="image"
          width="100%"
          style={{ borderRadius: 4 }}
          src={img.src}
          alt="tokyo"
        />
      </div>
      <div
        style={{
          display: "grid",
          justifyItems: "center",
        }}
      >
        <h1 style={{ marginBottom: 0 }}>{title}</h1>
        <p>{text}</p>
        <Expand />
      </div>
    </div>
  );
}
