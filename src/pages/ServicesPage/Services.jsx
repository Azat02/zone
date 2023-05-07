import React from "react";
import css from "./Services.module.css";
import email from "../../assets/icons/email.svg";
import divider from "../../assets/icons/divider.svg";
import website_url from "../../assets/icons/website_url.svg";
import artboard from "../../assets/img/artboard.png";
import right_black from "../../assets/icons/right_black.svg";
import search_engine from "../../assets/icons/search_engine.svg";
import social_media from "../../assets/icons/social_media.svg";
import real_time from "../../assets/icons/real_time.svg";
import online_media from "../../assets/icons/online_media.svg";
import reporting_analysis from "../../assets/icons/reporting_analysis.svg";
import penalty_recovery from "../../assets/icons/penalty_recovery.svg";
import benefits from "../../assets/img/benefits.png";
import circle_blue from "../../assets/icons/circle_blue.svg";
import circle_orange from "../../assets/icons/circle_orange.svg";
import circle_green from "../../assets/icons/circle_green.svg";
import dot_orange from "../../assets/icons/dot_orange.svg";
import dot_blue from "../../assets/icons/dot_blue.svg";
import dot_green from "../../assets/icons/dot_green.svg";
import dot_yellow from "../../assets/icons/dot_yellow.svg";
import layer from "../../assets/icons/layer.svg";

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
              <input
                className={css.service_input_email}
                type="email"
                placeholder="Email"
              />
              <img
                className={css.service_img_divider}
                src={divider}
                alt="divider"
              />
              <img
                className={css.service_img_website}
                src={website_url}
                alt="website_url"
              />
              <input
                className={css.service_input_website}
                type="text"
                placeholder="Website URL"
              />
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
        <div className={css.service_include}>
          <div className={css.service_include_header}>
            <h2>Services Include</h2>
            <p>
              Nunc nonummy metus. Donec elit libero, sodales nec, <br />{" "}
              volutpat a, suscipit non, turpis.
            </p>
          </div>
          <div className={css.service_include_icons}>
            <div>
              <img src={search_engine} alt="search_engine" />
              <h3>Search Engine Optimization</h3>
              <p>
                Suspendisse enim turpis, dictum sed, <br /> iaculis a,
                condimentum nec, nisi.{" "}
              </p>
            </div>
            <div>
              <img src={social_media} alt="social_media" />
              <h3>Social Media Strategy</h3>
              <p>
                Suspendisse enim turpis, dictum sed, <br /> iaculis a,
                condimentum nec, nisi.{" "}
              </p>
            </div>
            <div>
              <img src={real_time} alt="real_time" />
              <h3>Real Time and Data</h3>
              <p>
                Suspendisse enim turpis, dictum sed, <br /> iaculis a,
                condimentum nec, nisi.{" "}
              </p>
            </div>
            <div>
              <img src={online_media} alt="online_media" />
              <h3>Online Media Management</h3>
              <p>
                Suspendisse enim turpis, dictum sed, <br /> iaculis a,
                condimentum nec, nisi.{" "}
              </p>
            </div>
            <div>
              <img src={reporting_analysis} alt="reporting_analysis" />
              <h3>Reporting & Analysis</h3>
              <p>
                Suspendisse enim turpis, dictum sed, <br /> iaculis a,
                condimentum nec, nisi.{" "}
              </p>
            </div>
            <div>
              <img src={penalty_recovery} alt="penalty_recovery" />
              <h3>Penalty Recovery</h3>
              <p>
                Suspendisse enim turpis, dictum sed, <br /> iaculis a,
                condimentum nec, nisi.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={css.benefits_wrapper}>
        <div className="container">
          <div className={css.benefits_header}>
            <h2>Benefits Achieved</h2>
            <p>
              Nunc nonummy metus. Donec elit libero, sodales nec, <br />{" "}
              volutpat a, suscipit non, turpis.
            </p>
          </div>
          <div className={css.management_wrapper}>
            <div>
              <div className={css.circle_wrapper}>
                <h2>Online Media Management</h2>
                <img src={circle_orange} alt="circle_orange" />
              </div>
              <p>
                Suspendisse enim turpis, dictum sed, <br /> iaculis a,
                condimentum nec, nisi.{" "}
              </p>
              <div className={css.circle_wrapper_center_left}>
                <h2>Online Media Management</h2>
                <img src={circle_green} alt="circle_green" />
              </div>
              <p className={css.circle_text_center_left}>
                Suspendisse enim turpis
              </p>
              <div className={css.circle_wrapper}>
                <h2>Online Media Management</h2>
                <img src={circle_blue} alt="circle_blue" />
              </div>
              <p>
                Suspendisse enim turpis, dictum sed, <br /> iaculis a,
                condimentum nec, nisi.{" "}
              </p>
            </div>
            <div>
              <img src={benefits} alt="benefits" />
            </div>
            <div>
              <div className={css.circle_wrapper}>
                <img src={circle_blue} alt="circle_blue" />
                <h2>Online Media Management</h2>
              </div>
              <p>
                Suspendisse enim turpis, dictum sed, <br /> iaculis a,
                condimentum nec, nisi.{" "}
              </p>
              <div className={css.circle_wrapper_center_right}>
                <img src={circle_green} alt="circle_green" />
                <h2>Online Media Management</h2>
              </div>
              <p className={css.circle_text_center_right}>
                Suspendisse enim turpis
              </p>
              <div className={css.circle_wrapper}>
                <img src={circle_orange} alt="circle_orange" />
                <h2>Online Media Management</h2>
              </div>
              <p>
                Suspendisse enim turpis, dictum sed, <br /> iaculis a,
                condimentum nec, nisi.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={css.works_wrapper}>
        <div className="container">
          <div className={css.works_header_wrapper}>
            <h2>How It Works</h2>
            <p>
              Nunc nonummy metus. Donec elit libero, sodales nec, <br />{" "}
              volutpat a, suscipit non, turpis.
            </p>
          </div>
          <div className={css.works_step_orange}>
            <img src={dot_orange} alt="dot_orange" />
            <span className={css.works_orange}>STEP 1</span>
          </div>
          <div className={css.planning_wrapper_orange}>
            <img src={layer} alt="layer" />
            <div>
              <h3>Planning</h3>
              <p>
                Curabitur ullamcorper ultricies nisi. Praesent <br /> nonummy mi
                in odio. Donec mollis hendrerit risus.
              </p>
            </div>
          </div>
          <div className={css.works_step_blue}>
            <span className={css.works_blue}>STEP 2</span>
            <img src={dot_blue} alt="dot_blue" />
          </div>
          <div className={css.planning_wrapper_blue}>
            <div>
              <h3>Research</h3>
              <p>
                Curabitur ullamcorper ultricies nisi. Praesent <br /> nonummy mi
                in odio. Donec mollis hendrerit risus.
              </p>
            </div>
            <img src={layer} alt="layer" />
          </div>
          <div className={css.works_step_yellow}>
            <img src={dot_yellow} alt="dot_yellow" />
            <span className={css.works_yellow}>STEP 3</span>
          </div>
          <div className={css.planning_wrapper_yellow}>
            <img src={layer} alt="layer" />
            <div>
              <h3>Optimizing</h3>
              <p>
                Curabitur ullamcorper ultricies nisi. Praesent <br /> nonummy mi
                in odio. Donec mollis hendrerit risus.
              </p>
            </div>
          </div>
          <div className={css.works_step_green}>
            <span className={css.works_green}>STEP 4</span>
            <img src={dot_green} alt="dot_green" />
          </div>
          <div className={css.planning_wrapper_green}>
            <div>
              <h3>Results</h3>
              <p>
                Curabitur ullamcorper ultricies nisi. Praesent <br /> nonummy mi
                in odio. Donec mollis hendrerit risus.
              </p>
            </div>
            <img src={layer} alt="layer" />
          </div>
        </div>
      </div>
      <div className={css.work_slide_wrapper}>
        <div className="container">
          <div className={css.header_slide}>
            <span>Testimonials</span>
            <h2>Who Love Our Work</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
