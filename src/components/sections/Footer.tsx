export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="fc">
        © {currentYear} Ashok Verma · Alchemetryx Consulting · Mumbai, India
      </div>
      <div className="fl-row">
        <a href="https://alchemetryx.com" target="_blank" rel="noopener noreferrer">
          Alchemetryx
        </a>
        <a href="https://linkedin.com/in/averma1986" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="mailto:verma.86ashok@gmail.com">
          Email
        </a>
      </div>
    </footer>
  );
}
