import { useRouter } from "next/router";
import { MdClose } from "react-icons/md";
import Link from 'next/link'

export default function Close() {
  const router = useRouter();
  return (
    <Link href="/">
      <span
        style={{
          color: "white",
          position: "absolute",
          top: 0,
          left: 0,
          padding: 20,
          fontSize: 28,
          opacity: 0.9,
        }}
      // onClick={() => router.back()}
      >
        <MdClose />
      </span>
    </Link>
  );
}