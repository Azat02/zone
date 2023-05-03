import React from 'react'
import Slider from 'react-slick';
import css from '../Testimon.module.css'
import robert from '../../../assets/img/robert.svg'
import './slick.css'; 
import './slick-theme.css';

function TestimonSlider({theme}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
    <div>
      <div className={css.slider}>
        <Slider {...settings}>
          {[1,1,1,1].map((index) => (
            <div key={index}>
                <div className={css.each_slide_comment} style={theme ? null : {color: '#fff'}}>Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.</div>
                <div className={css.worker}>
                    <img src={robert} alt="Robert" />
                    <div className={css.worker_name} style={theme ? null : {color: '#fff'}}>Robert Fox</div>
                    <div className={css.worker_position}>Designer</div>
                </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default TestimonSlider