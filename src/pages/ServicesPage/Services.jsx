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
import Testimon from "../../components/testimon/Testimon";
import LatestPosts from "../../components/latestPosts/LatestPosts";
// import place from "../../assets/icons/place.svg";
// import email_form from "../../assets/icons/email_form.svg";
// import email_orange from "../../assets/icons/email_orange.svg";
// import logo from "../../assets/img/Logo.svg";
// import facebook from "../../assets/icons/facebook.svg";
// import instagram from "../../assets/icons/instagram.svg";
// import In from "../../assets/icons/in.svg";
// import twitter from "../../assets/icons/twitter.svg";
// import email_black from "../../assets/icons/email_black.svg";
// import place_black from "../../assets/icons/place_black.svg";
// import right_white from "../../assets/icons/right_white.svg";

function Services({theme}) {
  return (
    <>
    <div className={css.service_wrapper}>
      {/* <div className={css.form_wrapper}>
        <div className="container">
          <div className={css.form_content}>
            <div className={css.form_content_header}>
              <h2>
                Get Free <br /> SEO Analysis
              </h2>
              <div className={css.form_icon_text}>
                <img src={email_form} alt="email_form" />
                <p>Hello@agency.com</p>
              </div>
              <div className={css.form_icon_text}>
                <img src={place} alt="place" />
                <p>508 Bridle Avenue Newnan, GA 30263</p>
              </div>
            </div>
            <div className={css.form_input}>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="phone" placeholder="Phone" />
              <input type="text" placeholder="Website URL" />
              <button>Send Request</button>
            </div>
          </div>
        </div>
      </div>
      <div className={css.sign_wrapper}>
        <div className="container">
          <div className={css.form_sign_wrapper}>
            <div className={css.form_sign_icon_text}>
              <img src={email_orange} alt="email_orange" />
              <div>
                <h3>Sign Up For Newsletter </h3>
                <p>Receive 50% discount on first project</p>
              </div>
            </div>
            <div className={css.sign_input_button}>
              <input type="text" placeholder="Enter your email" />
              <button>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
      <div className={css.footer}>
        <div className="container">
          <img className={css.footer_logo} src={logo} alt="logo" />
          <div className={css.footer_wrapper}>
            <div className={css.footer_text_icons}>
              <p>
                The starting point for your next project <br /> based on
                easy-to-customize Material-UI <br /> © helps you build apps
                faster and better.
              </p>
              <div className={css.footer_icons}>
                <img src={facebook} alt="facebook" />
                <img src={instagram} alt="instagram" />
                <img src={In} alt="In" />
                <img src={twitter} alt="twitter" />
              </div>
              <span>© 2021. All rights reserved</span>
            </div>
            <div>
              <div className={css.footer_icon_text}>
                <img src={email_black} alt="email_black" />
                <p>info@example.com</p>
              </div>
              <div className={css.footer_icon_text}>
                <img src={place_black} alt="place_black" />
                <p>655 Schaefer Dale</p>
              </div>
            </div>
            <div>
              <div className={css.footer_form_button}>
                <input type="text" placeholder="Email address" />
                <img src={right_white} alt="right_white" />
              </div>
              <span className={css.footer_text_right}>
                Help Center &nbsp; &nbsp; &nbsp; Terms of Service
              </span>
            </div>
          </div>
        </div>
      </div> */}
    </div>
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
        <div>
          <Testimon theme={theme}/> 
        </div>
      </div>
      <div>
        <LatestPosts theme={theme}/>
      </div>
    </>
  );
}

export default Services;