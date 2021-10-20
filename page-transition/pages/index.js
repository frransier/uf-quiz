import { AnimatePresence } from "framer-motion";
import props from "../props";

export default function Home() {
  const { title, text, img, author } = props
  return (
    <AnimatePresence initial={false}>
      <div style={{ margin: "0 auto", width: "50%" }}>
        <img src={img} />
        <h1>{title}</h1>
        <p>{text}</p>
      </div>

    </AnimatePresence>
  )
}
