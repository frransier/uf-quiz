import { MdClose } from "react-icons/md";
import Link from 'next/link'

export default function Close() {
  return (
    <Link href="/">
      <span
        style={{
          position: "fixed",
          color: "white",
          top: 0,
          left: 0,
          padding: 20,
          fontSize: 28,
          opacity: 0.9,
        }}
      >
        <MdClose />
      </span>
    </Link>
  );
}
