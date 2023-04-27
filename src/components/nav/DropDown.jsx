import React from 'react'
import css from './Nav.module.css'
import { Link } from 'react-router-dom'

function DropDown({handlePageClose}) {
  return (
    <div className={css.down_wrapper}>
        <ul onClick={handlePageClose} className={css.down_ul}>
            <Link className={css.down_link} to='/'>Home</Link>
            <Link className={css.down_link} to='/services'>Services</Link>
            <Link className={css.down_link} to='/casestudies'>Case Studies List</Link>
            <Link className={css.down_link} to='/casestudiesdetails'>Case Studies Details</Link>
            <Link className={css.down_link} to='/blog'>Blog </Link>
            <Link className={css.down_link} to='/blogdetails'>Blog Details</Link>
            <Link className={css.down_link} to='/about'>About </Link>
            <Link className={css.down_link} to='/contact'>Contact </Link>
        </ul>
    </div>
  )
}

export default DropDown