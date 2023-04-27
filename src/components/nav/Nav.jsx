import css from './Nav.module.css'
import logo from '../../assets/img/Logo.svg'
import { Link } from 'react-router-dom'
import search from '../../assets/icons/search.svg'
import map from '../../assets/icons/map.svg'
import divider from '../../assets/icons/divider.svg'
import { useState } from 'react'
import DropDown from './DropDown'

function Nav() {

    const [isOpen, setOpen] = useState(false)
    const handlePageClose = () => {
        setOpen((prev) => !prev)
    }

  return (
    <nav>
        <div className={css.wrapper + ' container'}>
            <div className={css.nav_menu}>
                <img src={logo} alt="logo" />
                    <Link className={css.menu_link} to="/">Home</Link>
                    <Link className={css.menu_link} to="/">Components</Link>
                    <div className={css.menu_page} onClick={handlePageClose}>Pages</div>
                    {isOpen && <DropDown handlePageClose={handlePageClose}/>} 
                    <Link className={css.menu_link} to="/">Documentation</Link>
            </div>
            <div className={css.menu_sign}>
                <img src={search} alt="serach-icon" />
                <img src={map} alt="map-icon" />
                <img src={divider} alt="divider-icon" />
                <div className={css.login}>Login</div>
                <button className={css.join_btn}>Join Us</button>
            </div>
        </div>
    </nav>
  )
}

export default Nav

