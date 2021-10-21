import Link from "next/link";
import { motion } from "framer-motion";

export default function Card({ id }) {
  console.log(id);
  return (
    <li className={`card`}>
      <div className="card-content-container">
        <motion.div className="card-content" layoutId={`card-container`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <img width="100%" className="card-image" src={`tokyo.jpg`} alt="" />
          </motion.div>
        </motion.div>
      </div>
      <Link href="/expand" className={`card-open-link`}>
        hej
      </Link>
    </li>
  );
}
