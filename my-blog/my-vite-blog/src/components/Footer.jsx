import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.new_footer_area}>
      <div className={styles.new_footer_top}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className={`${styles.f_widget} ${styles.company_widget}`}>
                <h3
                  className={`${styles.f_title} ${styles.f_600} ${styles.t_color} ${styles.f_size_18}`}
                >
                  Get in Touch
                </h3>
                <p>
                  Don’t miss any updates of our new templates and extensions.!
                </p>
                <form
                  className={`${styles.f_subscribe_two} ${styles.mailchimp}`}
                  method="post"
                  noValidate
                >
                  <input
                    type="text"
                    name="EMAIL"
                    className="form-control memail"
                    placeholder="Email"
                  />
                  <button className="btn btn_get btn_get_two" type="submit">
                    Subscribe
                  </button>
                  <p
                    className={`${styles.mchimp_errmessage}`}
                    style={{ display: "none" }}
                  ></p>
                  <p
                    className={`${styles.mchimp_sucmessage}`}
                    style={{ display: "none" }}
                  ></p>
                </form>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className={`${styles.f_widget} ${styles.about_widget} ${styles.pl_70}`}
              >
                <h3
                  className={`${styles.f_title} ${styles.f_600} ${styles.t_color} ${styles.f_size_18}`}
                >
                  Download
                </h3>
                <ul className="list-unstyled f_list">
                  <li>
                    <a href="#">Company</a>
                  </li>
                  <li>
                    <a href="#">Android App</a>
                  </li>
                  <li>
                    <a href="#">ios App</a>
                  </li>
                  <li>
                    <a href="#">Desktop</a>
                  </li>
                  <li>
                    <a href="#">Projects</a>
                  </li>
                  <li>
                    <a href="#">My tasks</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6"></div>
            <div className="col-lg-3 col-md-6"></div>
          </div>
        </div>
        <div className={styles.footer_bg}>
          <div className={styles.footer_bg_one}></div>
          <div className={styles.footer_bg_two}></div>
        </div>
      </div>
      <div className={styles.footer_bottom}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-7"></div>
            <div className="col-lg-6 col-sm-5 text-right"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
