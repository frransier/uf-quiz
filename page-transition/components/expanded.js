import { motion } from "framer-motion";
// import { LoremIpsum } from "react-lorem-ipsum";
import Link from "next/link";

export default function Expanded({ id }) {
  console.log(id);
  //   const { category, title } = items.find((item) => item.id === id);

  return (
    <>
      <Link href="/">
        <div className="card-content-container open">
          <motion.div
            className="card-content"
            layoutId={`card-container-${id}`}
          >
            <motion.div
              className="card-image-container"
              layoutId={`card-image-container-${id}`}
            >
              <img className="card-image" src={`tokyo.jpg`} alt="" />
            </motion.div>
            <motion.div
              className="title-container"
              layoutId={`title-container-${id}`}
            >
              {/* <span className="category">{category}</span> */}
              {/* <h2>{title}</h2> */}
            </motion.div>
            <motion.div className="content-container" animate>
              {/* <LoremIpsum
              p={6}
              avgWordsPerSentence={6}
              avgSentencesPerParagraph={4}
            /> */}
            </motion.div>
          </motion.div>
        </div>
      </Link>
    </>
  );
}
