import React from "react";
import css from "./Services.module.css";
import email from "../../assets/icons/email.svg";
import divider from "../../assets/icons/divider.svg";
import website_url from "../../assets/icons/website_url.svg";
import artboard from "../../assets/img/artboard.png";
import right_black from "../../assets/icons/right_black.svg";

function Services() {
  return (
    <div className={css.service_wrapper}>
      <div className="container">
        <div className={css.text_wrapper}>
          <h1 className={css.service_header}>Offline SEO</h1>
          <p className={css.service_text}>
            Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum <br />{" "}
            laoreet sapien, quis venenatis ante odio sit amet eros.
          </p>
        </div>
        <div className={css.search_form_button}>
          <form className={css.service_form}>
            <label>
              <img className={css.service_img_email} src={email} alt="email" />
              <input className={css.service_input_email} type="email" placeholder="Email" />
              <img className={css.service_img_divider} src={divider} alt="divider" />
              <img className={css.service_img_website} src={website_url} alt="website_url" />
              <input className={css.service_input_website} type="text" placeholder="Website URL" />
            </label>
            <button className={css.service_button_analyse}>Analyse</button>
          </form>
        </div>
        <div className={css.service_content_wrapper}>
          <div>
            <img src={artboard} alt="artboard" />
          </div>
          <div>
            <h1 className={css.service_content_header}>Offline SEO</h1>
            <p className={css.service_content_text}>
              Nunc nonummy metus. Donec elit libero, sodales nec, <br />{" "}
              volutpat a, suscipit non, turpis. Nunc nonummy metus. <br /> Donec
              elit libero, sodales nec
            </p>
            <ul className={css.service_lists}>
              <li>First Class Flights</li>
              <li>5 Star Accommodations</li>
              <li>Inclusive Packages</li>
              <li>Latest Model Vehicles</li>
            </ul>
            <div className={css.service_content_button}>
              <div className={css.service_learn}>Check Our Work</div>
              <img src={right_black} alt="right_black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
