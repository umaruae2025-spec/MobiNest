export default function Contact() {
  return (
    <main style={{ padding: "40px", textAlign: "center" }}>
      <h1>Contact Us</h1>

      <p>Email us at: support@mobinest.com</p>

      <form style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Your Name"
          style={{ padding: "10px", margin: "5px", width: "250px" }}
        />
        <br />

        <input
          type="email"
          placeholder="Your Email"
          style={{ padding: "10px", margin: "5px", width: "250px" }}
        />
        <br />

        <textarea
          placeholder="Your Message"
          style={{ padding: "10px", margin: "5px", width: "250px", height: "100px" }}
        />
        <br />

        <button style={{
          padding: "10px 20px",
          background: "black",
          color: "white",
          border: "none",
          marginTop: "10px"
        }}>
          Send
        </button>
      </form>
    </main>
  );
}