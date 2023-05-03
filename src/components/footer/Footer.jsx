import React from 'react'
import css from './Footer.module.css'
import sign from '../../assets/img/sign.svg'
import logo from '../../assets/img/Logo.svg'
import facebook from '../../assets/icons/facebook.svg'
import instagram from '../../assets/icons/instagram.svg'
import linkedin from '../../assets/icons/linkedin.svg'
import twitter from '../../assets/icons/twitter.svg'
import white_logo from '../../assets/icons/white_logo.svg'
import email_btn from '../../assets/icons/email_btn.svg'
import white_facebook from '../../assets/icons/white_facebook.svg'
import white_instagram from '../../assets/icons/white_instagram.svg'
import white_linkedin from '../../assets/icons/white_linkedin.svg'
import white_twitter from '../../assets/icons/white_twitter.svg'

function Footer({theme}) {
    const socialData = [{
        img: `${theme ? facebook : white_facebook}`,
        url: 'https://www.facebook.com/',
    },
    {
        img: `${theme ? instagram : white_instagram}`,
        url: 'https://www.instagram.com/',
    },
    {
        img: `${theme ? linkedin : white_linkedin}`,
        url: 'https://www.linkedin.com/',
    },
    {
        img: `${theme ? twitter: white_twitter}`,
        url: 'https://twitter.com/',
    }

]
  return (
    <>
        <section className={css.footer_bg}>
            <div className={css.get_wrapper + ' container'}>
                <div>
                    <div className={css.get_title}>Get Free  <br /> SEO Analysis</div>
                    <div className={css.get_email}><a href="mailto:Hello@agency.com">Hello@agency.com</a></div>
                    <div className={`${css.get_email} + ${css.location}`}><a href="mailto:Hello@agency.com">508 Bridle Avenue Newnan, GA 30263</a></div>
                </div>
                <div className={css.request}>
                    <input className={css.get_input} type="text" placeholder='Name' />
                    <input className={css.get_input} type="email" placeholder='Email'/>
                    <input className={css.get_input} type="tel:" placeholder='Phone' />
                    <input className={css.get_input} type="text" placeholder='Website URL' />
                    <button className={css.get_button}>Send Request</button>
                </div>
            </div>
        </section>
        <section className={css.sign} style={theme ? null : {background: '#212B36', boxShadow: 'none'}}>
            <div className={css.sign_wrapper + ' container'}>
                <div className={css.new}>
                    <img src={sign} alt="Sign" />
                    <div>
                        <div className={css.new_title} style={theme ? null : {color: '#fff'}}>Sign Up For Newsletter </div>
                        <div className={css.new_subtitle}>Receive 50% discount on first project</div>
                    </div>
                </div>
                <div className={css.sign_up}>
                    <input className={css.sign_up_input} type="email" placeholder='Enter your email' />
                    <button className={css.sign_up_btn}>Sign Up</button>
                </div>
            </div>
        </section>
        <section className={css.footer + ' container'}>
            <div className={css.footer_wrapper}>
                <div className={css.footer_zone}>
                    <img src={theme ? logo : white_logo} alt="Logo" />
                    <div className={css.footer_zone_descr}>The starting point for your next project based on easy-to-customize Material-UI © helps you build apps faster and better.</div>
                    <div className={css.social_wrapper}>
                        {socialData.map((item) => (
                            <div key={item.url} className={css.social_wrapper}>
                                <a target="_blank" rel="noopener noreferrer" href={item.url}><img src={item.img} alt="Social" /></a>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={css.footer_info}>
                    <div className={`${css.get_email} + ${theme ? css.black_email : null}`}><a style={theme ? null : {color: '#fff'}} href="mailto:Hello@agency.com">Hello@agency.com</a></div>
                    <div className={`${css.get_email} + ${theme ? css.black_location : css.location}`}><a style={theme ? null : {color: '#fff'}} href="mailto:Hello@agency.com">508 Bridle Avenue Newnan, GA 30263</a></div>
                </div>
                <div className={css.footer_email}>
                    <input className={css.email_input} type="email" placeholder='Email address'/>
                    <button className={css.email_btn}>
                        <img src={email_btn} alt="Email_btn" />
                    </button>
                </div>
            </div>
            <div className={css.footer_rights}>
                <div className={css.footer_rights_text}>© 2021. All rights reserved</div>
                <div className={css.center_wrapper}>
                    <div className={css.footer_rights_text}>Help Center</div>
                    <div className={css.footer_rights_text}>Terms of Service</div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Footer