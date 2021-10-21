import { AnimatePresence } from "framer-motion";
import Card from "../components/card";

export default function Home() {
  return (
    <AnimatePresence>
      <Card id="shared" key="shared" />
    </AnimatePresence>
  );
}
