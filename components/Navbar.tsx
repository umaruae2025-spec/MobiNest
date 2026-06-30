import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "15px 30px",
      background: "black",
      color: "white",
      alignItems: "center"
    }}>
      <h2 style={{ color: "white" }}>MobiNest</h2>

      <div style={{ display: "flex", gap: "15px" }}>
        <Link href="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
        <Link href="/about" style={{ color: "white", textDecoration: "none" }}>About</Link>
        <Link href="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</Link>
      </div>
    </nav>
  );
}