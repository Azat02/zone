import css from './Nav.module.css'
import logo from '../../assets/img/Logo.svg'
import { Link } from 'react-router-dom'
import search from '../../assets/icons/search.svg'
import map from '../../assets/icons/map.svg'
import divider from '../../assets/icons/divider.svg'
import { useState } from 'react'
import DropDown from './DropDown'
import white_logo from '../../assets/icons/white_logo.svg'
import white_search from '../../assets/icons/white_search.svg'
import white_map from '../../assets/icons/white_map.svg'
import { useTranslation }  from 'react-i18next'
import '../../i18next/i18next'


function Nav({theme}) {
    const lngs = {
        en : { nativName: "English" },
        ru : { nativName: 'Russion'},
    }

    const [isOpen, setOpen] = useState(false);
    const [lng, setLng] = useState(false);
    const [active, setActive] = useState(false);
    const handlePageClose = () => {
        setOpen((prev) => !prev);
    }

    const handleLngClose = () => {
        setLng((prev) => !prev)
    }

    const { t, i18n } = useTranslation()

    const burgerToggle = () => {
        setActive((prev) => !prev)
    }

  return (
    <nav>
        <div className={css.wrapper + ' container'}>
            <div className={css.nav_menu}>
                <div onClick={burgerToggle} className={css.burger_menu}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <img className={css.menu_logo} src={theme ? logo : white_logo} alt="logo" />
                <div className={!active ? `${css.navbar_active}` : `${css.navbar}`}>
                    <Link className={css.menu_link} to="/">{t('main.home')}</Link>
                    <Link className={css.menu_link} to="/">{t('main.components')}</Link>
                    <div className={css.menu_page} style={theme ? null : {color: '#fff'}} onClick={handlePageClose}>{t('main.pages')}</div>
                    {isOpen && <DropDown handlePageClose={handlePageClose}/>} 
                    <Link className={css.menu_link} to="/">{t('main.documentation')}</Link>
                    <div className={css.navbar_menu}>
                        <img src={white_map} alt="map-icon" onClick={handleLngClose}/>
                        { lng && (
                            <div className={css.lng_btns} onClick={handleLngClose}>
                                {Object.keys(lngs).map((lng) => (
                                    <button className={css.lng_btn} type='submit' key={lng} onClick={() => i18n.changeLanguage(lng)} disabled={i18n.resolvedLanguage === lng}>{lngs[lng].nativName}</button>
                                ))}
                            </div>
                        )}
                        <div className={css.login} style={ {color: '#fff'}}>{t('main.login')}</div>
                        <button className={css.join_btn} style={{color: '#212B36', background: '#fff'}} >{t('main.join')}</button>
                    </div>
                </div>
            </div>
            <div className={css.menu_sign}>
                <img src={theme ? search : white_search} alt="serach-icon" />
                <img src={theme ? map : white_map} alt="map-icon" onClick={handleLngClose}/>
                { lng && (
                    <div className={css.lng_btns} onClick={handleLngClose}>
                        {Object.keys(lngs).map((lng) => (
                            <button className={css.lng_btn} type='submit' key={lng} onClick={() => i18n.changeLanguage(lng)} disabled={i18n.resolvedLanguage === lng}>{lngs[lng].nativName}</button>
                        ))}
                    </div>
                )}
                <img src={divider} alt="divider-icon" />
                <div className={css.login} style={theme ? null : {color: '#fff'}}>{t('main.login')}</div>
                <button className={css.join_btn} style={theme ? null : {color: '#212B36', background: '#fff'}} >{t('main.join')}</button>
            </div>
        </div>
    </nav>
  )
}

export default Nav

