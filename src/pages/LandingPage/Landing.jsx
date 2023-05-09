import React from 'react'
import css from './Landing.module.css'
import play from '../../assets/icons/play.svg'
import digital from '../../assets/img/digital.svg'
import spotify from '../../assets/icons/spotify.svg'
import slack from '../../assets/icons/brand_slack.svg'
import netflix from '../../assets/icons/brand_netflix.svg'
import heroku from '../../assets/icons/brand_heroku.svg'
import vimeo from '../../assets/icons/brand_vimeo.svg'
import airbnb from '../../assets/icons/brand_airbnb.svg'
import bg from '../../assets/bg/BG.png'
import seo from '../../assets/icons/seo.svg'
import email from '../../assets/icons/email.svg'
import search_eng from '../../assets/icons/search_eng.svg'
import social from '../../assets/icons/social.svg'
import right from '../../assets/icons/right.svg'
import left from '../../assets/icons/left.svg'
import planning from '../../assets/icons/planning.svg'
import research from '../../assets/icons/research.svg'
import optimize from '../../assets/icons/optimize.svg'
import results from '../../assets/icons/results.svg'
import bank_bg from '../../assets/bg/bank_bg.svg'
import louis_bg from '../../assets/bg/louis_bg.svg'
import pena from '../../assets/img/pena.svg'
import raplh from '../../assets/img/raplh.svg'
import marvin from '../../assets/img/marvin.svg'
import Testimon from '../../components/testimon/Testimon'
import LatestPosts from '../../components/latestPosts/LatestPosts'
import '../../i18next/i18next'
import { useTranslation } from 'react-i18next'
import Questions from '../../components/questions/Questions'

function Landing({theme}) {
    const { t } = useTranslation()
    const brands = [spotify, slack, netflix, heroku, vimeo, airbnb]
    const statics = [{
        count: 150,
        name: 'PROJECTS',
        descr: 'Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy metus.'
    },
    {
        count: '32k',
        name: 'Happy CLIENTS',
        descr: 'Praesent blandit laoreet nibh. Suspendisse pulvinar, augue ac venenatis condimentum.'
    },
    {
        count: 20,
        name: 'YEARS OF EXPERIENCE',
        descr: 'Praesent blandit laoreet nibh. Suspendisse pulvinar, augue ac venenatis condimentum.'
    },
]
    const services_card = [{
        title: 'SEO',
        descr: 'Nunc nonummy metus. Donec elit libero',  
        img: seo
    },
    {
        title: 'Email Marketing',
        descr: 'Nunc nonummy metus. Donec elit libero',
        img: email
        
    },
    {
        title: 'Search Engine Oprimization',
        descr: 'Nunc nonummy metus. Donec elit libero',
        img: search_eng
    },
    {
        title: 'Social Marketing',
        descr: 'Nunc nonummy metus. Donec elit libero',
        img: social
    },

]
  return (
    <>
        <main className='container'>
            <section className={css.wrapper}>
                <div className={css.digital}>
                    <div className={css.digital_title}>{t('main.digital')}</div>
                    <div className={`${css.digital_big_title} + ${theme ? '' : ' white_theme'}`} style={theme ? null : {color: '#fff'}} >{t('main.boost')}</div>
                    <div className={css.digital_descr}>
                        {t('main.boostDescr')} 
                    </div>
                    <div className={css.digital_wrapper}> 
                        <button className={css.free_btn}>{t('tryFree')}</button>
                        <img src={play} alt="play"/>
                        <div className={ css.digital_wrapper_text} style={theme ? null : {color: '#fff'}}>{t('main.See')}</div>
                    </div>
                </div>
                <img src={digital} alt="digital_bg" className={css.digital_img} /> 
            </section>
            <section className={css.brands}>
                {brands.map((item, index) => (
                    <img key={index} src={item} alt='brands'/>
                ))}
            </section>
            <section>
                <img className={css.background} src={bg} alt="Backgroung" />
            </section>
            <section className={css.about}>
                <div className={css.about_us}>
                    <div className={css.about_title}>About us</div>
                    <div className={css.about_big_title} style={theme ? null : {color: '#fff'}}>Who We Are</div>
                    <div className={css.about_descr}>In hac habitasse platea dictumst. Aliquam lobortis. Lorem ipsum dolor sit amet, 
                        consectetuer adipiscing elit. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Pellentesque 
                        habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    </div>
                    <div className={css.learn}>Learn more</div>
                </div>
                <div className={css.project}>
                    {statics.map((item) => (
                        <div key={item.name} className={css.statics}>
                            <div className={css.statics_count}>
                                <div className={css.statics_count_number} style={theme ? null : {color: '#fff'}}>{item.count}</div>
                                <div className={css.statics_count_title}>{item.name}</div>
                            </div>
                            <div className={css.statics_descr}>{item.descr}</div>
                        </div>
                    ))}
                </div>
            </section>
            <section className={css.services}>
                <div className={"main_page_subtitle"}>Our Services</div>
                <div className={"main_page_title"} style={theme ? null : {color: '#fff'}}>We Provide</div>
                <div className={"main_page_descr"}>Nunc nonummy metus. Donec elit libero, sodales nec, <br /> volutpat a, suscipit non, turpis.</div>
                <div className={css.services_wrapper}>
                    {services_card.map((item) => (
                        <div key={item.title} className={css.services_card} style={theme ? null : {background: '#212B36', boxShadow: 'none'}}>
                            <img src={item.img} alt="Seo" />
                            <div className={css.services_card_title}>{item.title}</div>
                            <div className={css.services_card_descr}>{item.descr}</div>
                            <button className={css.right_btn}><img src={right} alt="right" /></button>
                        </div>
                    ))}
                </div>
            </section>
            <section className={css.working}>
                <div className={'main_page_subtitle'}>Work Flow</div>
                <div className={'main_page_title'} style={theme ? null : {color: '#fff'}}>Working Process</div>
                <div className={'main_page_descr'}>Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a, <br /> suscipit non, turpis.</div>
                <div className={css.working_wrapper}>
                    <div className={css.working_card}>
                        <img src={planning} alt="planing" />
                        <div className={`${css.working_card_text} + ${css.text_orange}`}>Planning</div>
                    </div>

                    <div className={`${css.working_card} + ${css.blue}`}>
                        <img src={research} alt="research" />
                        <div className={`${css.working_card_text} + ${css.text_blue}`}>Research</div>
                    </div>

                    <div className={`${css.working_card} + ${css.yellow}`}>
                        <img src={optimize} alt="optimizing" />
                        <div className={`${css.working_card_text} + ${css.text_yellow}`}>Optimizing</div>
                    </div>

                    <div className={`${css.working_card} + ${css.green}`}>
                        <img src={results} alt="planing" />
                        <div className={css.working_card_text}>Results</div>
                    </div>
                </div>
            </section>
            <section className={css.case}>
                <div className={'main_page_subtitle'}>Our Work</div>
                <div className={'main_page_title'} style={theme ? null : {color: '#fff'}}>Case Studies</div>
                <div className={css.case_wrapper}>
                    <div className={css.marketing}>
                        <div className={'case_title'}>marketing</div>
                        <div className={'case_subtitle'}>General Electric</div>
                    </div>
                    <div className={css.branding_wrapper}>
                        <div className={css.bank_wrapper}>
                            <div className={css.bank} style={theme ? null : {background: '#212B36', boxShadow: 'none'}}>
                                <img src={bank_bg} alt="bank_bg" />
                                <div className={css.bank_america}>
                                    <div className={css.bank_america_subtitle}>branding</div>
                                    <div className={css.bank_america_title} style={theme ? null : {color: '#fff'}}>Bank of America</div>
                                    <div className={css.bank_america_descr}>Quisque id odio. Nunc egestas, augue at pellentesque laoreet, felis eros vehicul</div>
                                    <div className={css.bank_america_learn}>Learn more</div>
                                </div>
                            </div>
                            <div className={css.seo}>
                                <div className={'case_title'}>SEO</div>
                                <div className={'case_subtitle'}> Louis Vuitton</div>
                            </div>
                        </div>
                        <div className={`${css.bank_wrapper} + ${css.louis}`}>
                            <div className={`${css.seo} + ${css.gillette}`}>
                                <div className={'case_title'}>marketing</div>
                                <div className={'case_subtitle'}> Gillette</div>
                            </div>
                            <div className={`${css.bank} + ${css.louis_wrapper}`} style={theme ? null : {background: '#212B36', boxShadow: 'none'}} >
                                <img src={louis_bg} alt="louis_bg" />
                                <div className={css.bank_america} >
                                    <div className={css.bank_america_subtitle}>branding</div>
                                    <div className={css.bank_america_title} style={theme ? null : {color: '#fff'}}>Louis Vuitton</div>
                                    <div className={css.bank_america_descr}>Quisque id odio. Nunc egestas, augue at pellentesque laoreet, felis eros vehicul</div>
                                    <div className={css.bank_america_learn}>Learn more</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${css.marketing} + ${css.web_bg}`}>
                        <div className={'case_title'}>WEB</div>
                        <div className={'case_subtitle'}> Gillette</div>
                    </div>
                </div>
                <div className={css.view}>View All</div>
            </section>
            <section className={css.meet}>
                <div className={css.meet_wrapper}>
                    <div className={css.meet_subtitle}>Team</div>
                    <div className={css.meet_title}>Meet Our Team</div>
                    <div className={css.meet_descr}> Since wire-frame renderings are relatively simple and fast to calculate, they are often used in cases</div>
                    <div className={css.btns}>
                        <div className={css.circle}>
                            <img src={left} alt="left" />
                        </div>
                        <div className={css.circle}>
                            <img src={right} alt="right" />
                        </div>
                    </div>
                </div>
                <div className={css.meet_team}>
                    <div className={css.team_card}>
                        <img src={pena} alt="Pena" />
                        <div className={css.team_card_name}>Eleanor Pena</div>
                        <div className={css.team_card_pfoss}>UI Designer</div>
                    </div>
                    <div className={css.team_card}>
                        <img src={raplh} alt="Raplh" />
                        <div className={css.team_card_name}>Ralph Edwards</div>
                        <div className={css.team_card_pfoss}>Project Manager</div>
                    </div>
                    <div className={css.team_card}>
                        <img src={marvin} alt="Marvin" />
                    </div>
                </div>
            </section>
            <section className={css.check}>
                <div className={'main_page_subtitle'}>Pricing</div>
                <div className={'main_page_title'} style={theme ? null : {color: '#fff'}}>Check Our Pricing</div>
                <div className={'main_page_descr'}>Choose the perfect plan for your needs.  <br /> Always flexible to grow</div>
                <div className={css.check_monthly} style={theme ? null : {color: '#fff'}}>MONTHLY 
                    <label className={css.switch}>
                        <input type="checkbox"/>
                        <span className={`${css.slider} + ${css.round}`}></span>
                    </label> YEARLY (save 10%)
                </div>
                <div className={css.check_wrapper}>
                    <div className={css.check_card} style={theme ? null : {background: '#212B36', boxShadow: 'none'}}>
                        <div className={`${css.check_card_title} + ${css.basic}`}>Basic</div>
                        <div className={css.check_card_price} style={theme ? null : {color: '#fff'}}>$29 <span className={css.month}>/mo</span></div>
                        <div className={css.check_card_descr}>Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien</div>
                        <ul className={css.check_card_ul}>
                            <li className={css.check_card_li} style={theme ? null : {color: '#fff'}}>Auto update mode</li>
                            <li className={css.check_card_li} style={theme ? null : {color: '#fff'}}>Online operator 24/7</li>
                            <li className={css.check_card_li} style={theme ? null : {color: '#fff'}}>International posting</li>
                        </ul>
                        <button className={css.check_card_btn}>Get Started</button>
                    </div>
                    <div className={`${css.check_card} + ${css.standart_card}`} style={theme ? null : {background: '#212B36', boxShadow: 'none'}}>
                        <div className={`${css.check_card_title} + ${css.standart}`}>Standard</div>
                        <div className={css.check_card_price} style={theme ? null : {color: '#fff'}}>$59 <span className={css.month}>/mo</span></div>
                        <div className={css.check_card_descr}>Maecenas nec odio et ante tincidunt tempus.</div>
                        <ul className={css.check_card_ul}>
                            <li className={css.check_card_li} style={theme ? null : {color: '#fff'}}>Auto update mode</li>
                            <li className={css.check_card_li} style={theme ? null : {color: '#fff'}}>Online operator 24/7</li>
                            <li className={css.check_card_li} style={theme ? null : {color: '#fff'}}>International posting</li>
                            <li className={css.check_card_li} style={theme ? null : {color: '#fff'}}>Unique newsletters</li>
                        </ul>
                        <button className={css.check_card_btn}>Get Started</button>
                    </div>
                    <div className={`${css.check_card} + ${css.premium_card}`} style={theme ? null : {background: '#212B36', boxShadow: 'none'}}>
                        <div className={`${css.check_card_title} + ${css.premium}`}>Premium</div>
                        <div className={css.check_card_price} style={theme ? null : {color: '#fff'}}>$99 <span className={css.month}>/mo</span></div>
                        <div className={css.check_card_descr}>Sed lectus. Sed consequat, leo eget bibendum sodales</div>
                        <ul className={css.check_card_ul}>
                            <li className={css.check_card_li} style={theme ? null : {color: '#fff'}}>Auto update mode</li>
                            <li className={css.check_card_li} style={theme ? null : {color: '#fff'}}>Online operator 24/7</li>
                            <li className={css.check_card_li} style={theme ? null : {color: '#fff'}}>International posting</li>
                            <li className={css.check_card_li} style={theme ? null : {color: '#fff'}}>Unique newsletters</li>
                            <li className={css.check_card_li} style={theme ? null : {color: '#fff'}}>20 Design templates</li>
                        </ul>
                        <button className={css.check_card_btn}>Get Started</button>
                    </div>
                </div>
            </section>
            <Questions theme={theme}/>
        </main>
        <Testimon theme={theme}/>
        <LatestPosts theme={theme}/>
    </>
  )
}

export default Landing