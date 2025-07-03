import './Footer.css';
import GithubLogo from '../../assets/GithubLogo/GithubLogo.png';

function Footer() {
  return (
    <footer className="footer">
      <a
        href="https://github.com/Daniel01101000"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
        aria-label="GitHub"
      >
        <img src={GithubLogo} alt="GitHub Logo" className="github-image" />
      </a>
    </footer>
  );
}

export default Footer;