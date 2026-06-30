export default function About() {
  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "700px",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
        About Us
      </h1>

      <p style={{ fontSize: "18px", lineHeight: "1.6", color: "#444" }}>
        Welcome to our website. We are building a simple and modern web
        application using Next.js. Our goal is to create a clean, fast, and
        user-friendly experience for everyone.
      </p>

      <p style={{ fontSize: "18px", lineHeight: "1.6", color: "#444" }}>
        This project is just the beginning. We will keep improving it step by
        step and add more features like login system, contact system, and
        advanced UI.
      </p>
    </div>
  );
}