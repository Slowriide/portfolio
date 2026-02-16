function SiteHeader({ navLinks, themeOptions, activeThemeId, onThemeChange }) {
  const handleScrollTop = (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Go to top" onClick={handleScrollTop}>
        Thiago Gobbi
      </a>
      <nav aria-label="Main navigation" className="site-nav">
        <ul className="nav-list">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="theme-selector">
        <label htmlFor="theme-select" className="theme-select-label">
          Theme
        </label>
        <select id="theme-select" className="theme-select" value={activeThemeId} onChange={(event) => onThemeChange(event.target.value)}>
          {themeOptions.map((theme) => (
            <option key={theme.id} value={theme.id}>
              {theme.label}
            </option>
          ))}
        </select>
      </div>
    </header>
  );
}

export default SiteHeader;
