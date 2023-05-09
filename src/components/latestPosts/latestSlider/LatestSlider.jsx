import React from 'react'
import Slider from 'react-slick';
import css from '../LatestPosts.module.css'
import '../../testimon/testimon_slider/slick.css'; 
import '../../testimon/testimon_slider/slick-theme.css'; 
import maddox from '../../../assets/img/maddox.svg'
import cruz from '../../../assets/img/cruz.svg'
import margaret from '../../../assets/img/margaret.svg'


function LatestSlider({theme}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
    <div>
        <Slider {...settings}>
            {[1,1,1].map((index) => (
                <div>
                    <div key={index} className={css.slider_wrapper}>
                        <div className={css.slider_card} style={theme ? null : {background: '#212B36', boxShadow: 'none'}}>
                            <div className={css.slider_card_subtitle}>15 Dec 2020 8 min read </div>
                            <div className={css.slider_card_title} style={theme ? null : {color: '#fff'}}>Any mechanical keyboard enthusiasts in design?</div>
                            <div className={css.commentator}>
                                <img src={maddox} alt="Maddox" />
                                <div className={css.commentator_name} style={theme ? null : {color: '#fff'}}>Maddox Fletcher</div>
                            </div>
                        </div>
                        <div className={`${css.slider_card} + ${css.cruz_bg}`}>
                            <div className={css.slider_card_subtitle}>04 Jul 2021 8 min read </div>
                            <div className={`${css.slider_card_title} + ${css.cruz_title} `}>How to design a product that can grow itself 10x in year:</div>
                            <div className={css.commentator}>
                                <img src={cruz} alt="Cruz" />
                                <div className={`${css.commentator_name} ${css.cruz_name}`}>Cruz Truong</div>
                            </div>
                        </div>
                        <div className={`${css.slider_card} + ${css.margaret_bg}`} style={theme ? null : {background: '#212B36', boxShadow: 'none'}}>
                            <div className={css.slider_card_subtitle}>15 Dec 2020 8 min read </div>
                            <div className={css.slider_card_title} style={theme ? null : {color: '#fff'}}>Any mechanical keyboard enthusiasts in design?</div>
                            <div className={css.commentator}>
                                <img src={margaret} alt="Margaret" />
                                <div className={css.commentator_name} style={theme ? null : {color: '#fff'}}>Maddox Fletcher</div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    </div>
  )
}

export default LatestSlider