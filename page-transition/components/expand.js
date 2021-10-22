import { MdCode } from "react-icons/md";
import Link from "next/link";

export default function Expand() {
  return (
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
          fontSize: 30,
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
  );
}
