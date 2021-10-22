import { motion } from "framer-motion";
import props from "../lib/props";
import { MdModeComment } from "react-icons/md";

export default function Details() {
  const { title, author, comments } = props;
  const transition = {
    type: "spring",
    bounce: 0.6,
  };
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        color: "white",
      }}
    >
      <div style={{ textAlign: "left", padding: 30 }}>
        <motion.h1
          initial={{ y: -10 }}
          animate={{ y: 0 }}
          transition={{
            type: "spring",
            delay: 0.15,
            bounce: 0.8,
            stiffness: 200,
          }}
          style={{ fontSize: 50, margin: 0, padding: 0 }}
        >
          {title}
        </motion.h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            opacity: 0.9,
          }}
        >
          <motion.h4
            initial={{ y: 10 }}
            animate={{ y: 0 }}
            transition={{
              ...transition,
              delay: 0.12,
            }}
            style={{ fontWeight: "normal" }}
          >
            By {author}
          </motion.h4>
          <motion.div
            initial={{ x: 10 }}
            animate={{ x: 0 }}
            transition={{
              ...transition,
              delay: 0.12,
            }}
            style={{ display: "flex", alignItems: "center" }}
          >
            <div style={{ marginRight: 8 }}>{comments}</div>
            <MdModeComment />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
