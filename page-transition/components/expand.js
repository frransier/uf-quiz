import { MdCode } from "react-icons/md";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export default function Expand() {
  return (

    <motion.div initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.1 }}>
      <Link href="/full-screen">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 50,
            height: 50,
            borderRadius: 100,
            backgroundColor: "black",
            color: "white",
            marginTop: 20,
            fontSize: 25,
          }}
        >
          <div
            style={{
              display: "grid",
              alignItems: "center",
              transform: "rotate(-45deg)",
            }}
          >
            <MdCode />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
