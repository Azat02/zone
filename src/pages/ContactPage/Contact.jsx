import css from './Contact.module.css'
import contact_img from '../../assets/img/contact_img.svg'
import vector1 from '../../assets/icons/Vector.svg'
import vector2 from '../../assets/icons/Vector-1.svg'
import vector3 from '../../assets/icons/Vector-2.svg'
import vector4 from '../../assets/icons/Vector-3.svg'
import divider from '../../assets/img/ready_divider.svg'

function Contact() {
    const contactData = [
        {
            img: `${vector1}`,
            title: 'Visit us',
            subtitle: '508 Bridle Avenue Newnan, GA 30263',
            href: '',
        },
        {
            img: `${vector2}`,
            title: 'Call us',
            subtitle: '(319) 555-0115',
            href: 'tel:3195550115',
        },
        {
            img: `${vector3}`,
            title: 'Talk to us',
            subtitle: 'hello@example.com',
            href: 'mailto:hello@example.com',
        },
        {
            img: `${vector4}`,
            title: 'Working Hours',
            subtitle: 'Mon-Fri: 9 am — 6 pm',
            href: '',
        },
    ]
  return (
    <>
        <div className={css.contact_wrapper + ' container'}>
            <div>
                <img src={contact_img} style={{marginBottom: '42px'}} alt="Contact 24/7" />
                {
                    contactData.map((item, index) => (
                        <div key={index} className={css.contact_data}>
                            <img className={css.contact_img} src={item.img} alt="Contact" />
                            <div>
                                <div className={css.contact_title}>{item.title}</div>
                                <a className={css.contanct_link} href={item.href}>{item.subtitle}</a>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div>
                <div className={css.ready_title}>Ready To Get Started?</div>
                <div className={css.ready_subtitle}>Services</div>
                <div className={css.ready_wrapper}>
                    <div className={css.ready_item}>Services</div>
                    <div className={css.ready_item} style={{backgroundColor: '#212B36', color: '#FFFFFF'}}>SEO</div>
                    <div className={css.ready_item} style={{backgroundColor: '#212B36', color: '#FFFFFF'}}>Social Marketing</div>
                    <div className={css.ready_item}>Research</div>
                </div>
                <div className={css.input_wrapper}>
                    <input type="text" placeholder='First Name' className={css.ready_input}/>
                    <input type="text" placeholder='Last Name' className={css.ready_input}/>
                    <input type="email" placeholder='Email' style={{width:'564px'}} className={css.ready_input}/>
                    <input type="phone" placeholder='Phone number' style={{width:'564px'}} className={css.ready_input}/>
                    <input type="text" placeholder='Compnany' className={css.ready_input}/>
                    <input type="text" placeholder='Website' className={css.ready_input}/>
                </div>
                <div className={css.ready_subtitle}>Your Budget</div>
                <img src={divider} alt="Divider" style={{margin: '40px 0'}} />
                <input type="text" placeholder='Message' className={`${css.ready_input} + ${css.ready_textarea}`}/>
                <button className={css.ready_btn}>Send Request</button>
            </div>
        </div>
    </>
  )
}

export default Contact