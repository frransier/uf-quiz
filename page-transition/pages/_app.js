import { AnimateSharedLayout } from "framer-motion";
import "../styles/styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <AnimateSharedLayout type="crossfade">
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </div>
  );
}

export default MyApp;
