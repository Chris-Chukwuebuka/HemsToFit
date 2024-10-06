// Header.jsx
import styles from "./Header.module.css";
import { SlMenu } from "react-icons/sl";
import BrandLogo from "../../assets/images/Brand-Logo.png";

const Header = () => {
  const toggleSidebar = () => {
    document.getElementById("sidebar").classList.toggle(styles.active);
  };

  return (
    <div className={styles.wrapper}>
      {/* Sidebar */}
      <nav id="sidebar" className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <h3>Bootstrap Sidebar</h3>
        </div>

        <ul className={`list-unstyled ${styles.components}`}>
          <p>Dummy Heading</p>
          <li className={styles.active}>
            <a
              href="#homeSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              Home
            </a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a
              href="#pageSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              Pages
            </a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        <ul className={`list-unstyled ${styles.CTAs}`}>
          <li>
            <a
              href="https://bootstrapious.com/tutorial/files/sidebar.zip"
              className={styles.download}
            >
              Download source
            </a>
          </li>
          <li>
            <a
              href="https://bootstrapious.com/p/bootstrap-sidebar"
              className={styles.article}
            >
              Back to article
            </a>
          </li>
        </ul>
      </nav>

      {/* Page Content */}
      <div id="content" className={styles.content}>
        <nav className="navbar navbar-expand-lg col-6">
          <div className="container-fluid">
            <button
              type="button"
              id="sidebarCollapse"
              className="btn"
              onClick={toggleSidebar}
            >
              <span className="d-flex gap-4">
                <div className="fs-2">
                  <SlMenu />
                </div>
                {/* Logo displayed based on screen size */}
                <div className={styles.logoContainer}>
                  <img
                    src={BrandLogo}
                    alt="Brand Logo"
                    className={styles.BrandLogo}
                  />
                </div>
              </span>
            </button>

            <div className="collapse navbar-collapse row" id="navbarNav">
              <ul className="navbar-nav col-4  ms-5"></ul>

              <ul className="navbar-nav col-4  ms-5"></ul>
              <ul className="navbar-nav col-4  ms-5"></ul>
            </div>
            <ul className="navbar-nav col-4  ms-5"></ul>

            <ul className="navbar-nav  ms-5">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item ms-4">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item ms-4">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item ms-4">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
              <button>login</button>
              
            </ul>
          </div>
          
        </nav>
        
      </div>
    </div>
  );
};

export default Header;
