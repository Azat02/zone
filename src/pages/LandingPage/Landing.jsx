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


function Landing() {
    const brands = [spotify, slack, netflix, heroku, vimeo, airbnb]
  return (
    <main className='container'>
        <section className={css.wrapper}>
            <div className={css.digital}>
                <div className={css.digital_title}>Digital Marketing</div>
                <div className={css.digital_big_title} >Boosts Your Website Traffic</div>
                <div className={css.digital_descr}>
                    Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros. 
                </div>
                <div className={css.digital_wrapper}> 
                    <button className={css.free_btn}>Try For Free</button>
                    <img src={play} alt="play"/>
                    <div className={ css.digital_wrapper_text}>See Our Work</div>
                </div>
            </div>
            <img src={digital} alt="digital_bg" />
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
                <div className={css.about_big_title}>Who We Are</div>
                <div className={css.about_descr}>In hac habitasse platea dictumst. Aliquam lobortis. Lorem ipsum dolor sit amet, 
                    consectetuer adipiscing elit. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Pellentesque 
                    habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                </div>
                <div className={css.learn}>Learn more</div>
            </div>
            <div className={css.project}>
                <div className={css.statics}>
                    <div className={css.statics_count}>
                        <div className={css.statics_count_number}>150</div>
                        <div className={css.statics_count_title}>PROJECTS</div>
                    </div>
                    <div className={css.statics_descr}>
                        Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy metus.
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Landing