function SiteHeader({ navLinks }) {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Go to top">
        Thiago Gobbi
      </a>
      <nav aria-label="Main navigation">
        <ul className="nav-list">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default SiteHeader;
