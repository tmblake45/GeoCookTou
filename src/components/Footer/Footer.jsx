import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer
      className={` ${styles.footer} d-flex flex-row align-items-center justify-content-center p-20`}>
      <div>
        <p>Copyright © 2024 3W Schools, Inc.</p>
      </div>
      <div className="d-flex flex-row align-items-center justify-content-center">
        <div>
          <button className="btn btn-primary">
            <i className="fa-brands fa-x-twitter"></i>
          </button>
        </div>
        <div>
          <button className="btn btn-primary">
            <i className="fa-brands fa-facebook"></i>
          </button>
        </div>
        <div>
          <button className="btn btn-primary">
            <i className="fa-brands fa-instagram"></i>
          </button>
        </div>
        <div>
          <button className="btn btn-primary">
            <i className="fa-brands fa-youtube"></i>
          </button>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
