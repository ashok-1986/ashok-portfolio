import { WHATSAPP_URL } from '@/lib/constants';

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
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
      </div>
    </footer>
  );
}
