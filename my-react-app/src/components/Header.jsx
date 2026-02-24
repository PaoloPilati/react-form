function Header() {
  return (
    <header className="bg-dark text-white py-3 fixed-top">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="h3 mb-0">Newsblog</h1>

        {/* Navbar semplice */}
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">News</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Forum</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;