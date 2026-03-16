export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="fc">
        © {currentYear} Ashok Verma. All rights reserved.
      </div>
      <div className="fl-row">
        <a href="https://linkedin.com/in/ashokverma" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://alchemetryx.com" target="_blank" rel="noopener noreferrer">
          Alchemetryx
        </a>
      </div>
    </footer>
  );
}
