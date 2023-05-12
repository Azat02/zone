import React from 'react'
import css from './Testimon.module.css'
import TestimonSlider from './testimon_slider/TestimonSlider'

function Testimon({theme}) {
  return (
    <div className={css.testimon} style={theme ? null : {background: '#212B36', boxShadow: 'none'}}>
        <div className={css.testimon_subtitle}>Testimonials</div>
        <div className={css.testimon_title} style={theme ? null : {color: '#fff'}}>Who Love Our Work</div>
        <TestimonSlider theme={theme}/>
    </div>
  )
}

export default Testimon