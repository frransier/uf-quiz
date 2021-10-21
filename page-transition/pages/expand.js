import { AnimatePresence } from "framer-motion";
import Expanded from "../components/expanded";

export default function Home() {
  return (
    <AnimatePresence>
      <Expanded id="shared" key="shared" />
    </AnimatePresence>
  );
}
