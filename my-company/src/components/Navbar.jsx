import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",           // enables flexbox
        justifyContent: "space-between", // spaces items across the navbar
        alignItems: "center",      // vertically centers items
        padding: "1rem",
        backgroundColor: "#333",
        color: "#fff",
      }}
    >
      <h2>My Company</h2>

      <div
        style={{
          display: "flex",
          gap: "1rem",
        }}
      >
        <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
          Home
        </Link>
        <Link to="/about" style={{ color: "#fff", textDecoration: "none" }}>
          About
        </Link>
        <Link to="/services" style={{ color: "#fff", textDecoration: "none" }}>
          Services
        </Link>
        <Link to="/contact" style={{ color: "#fff", textDecoration: "none" }}>
          Contact
        </Link>
      </div>
    </nav>
  );
}