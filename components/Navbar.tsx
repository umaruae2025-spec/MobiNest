import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "15px 30px",
      background: "black",
      color: "white"
    }}>
      <h2>MobiNest</h2>

      <div style={{ display: "flex", gap: "15px" }}>
        <Link href="/" style={{ color: "white" }}>Home</Link>
        <Link href="/about" style={{ color: "white" }}>About</Link>
        <Link href="/contact" style={{ color: "white" }}>Contact</Link>
      </div>
    </nav>
  );
}