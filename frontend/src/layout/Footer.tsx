const Footer = () => (
  <footer>
    <p>
      Designed & built with 🤍 by web dev nerd <strong>Mila Ziabchenko</strong>
      <br />
      <small>using TypeScript, React, Node, Express, MongoDB & Firebase</small>
      <br />
      <a
        href='https://github.com/MilaZiabchenko/Full-stack-dev-blog'
        target='_blank'
        rel='noopener noreferrer'
      >
        view source code on GitHub →
      </a>
    </p>
    <p>&copy; {new Date().getFullYear()} MILA_DEV</p>
  </footer>
);

export default Footer;
