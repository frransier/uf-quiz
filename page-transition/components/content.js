import { motion } from "framer-motion";
import props from "../lib/props";
import Expand from './expand';

export default function Content() {
  const { title, text } = props
  return <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.4 }}
    style={{
      display: "grid",
      justifyItems: "center",
      width: 260
    }}
  >
    <h1 style={{ marginBottom: 0 }}>{title}</h1>
    <p>{text}</p>
    <Expand />
  </motion.div>
}