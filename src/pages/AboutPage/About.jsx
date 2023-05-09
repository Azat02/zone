import LatestPosts from '../../components/latestPosts/LatestPosts'
import Questions from '../../components/questions/Questions'
import Testimon from '../../components/testimon/Testimon'
import css from './About.module.css'
import spotify from '../../assets/img/spotify.svg'
import slack from '../../assets/img/slack.svg'
import netflix from '../../assets/img/netflix.svg'
import microsoft from '../../assets/img/micrsoft.svg'
import vimeo from '../../assets/img/vimeo.svg'
import airbnb from '../../assets/img/airbnb.svg'
import google from '../../assets/img/google.svg'
import tripo from '../../assets/img/trip.svg'
import about_bg from '../../assets/bg/about_bg.svg'
import right from '../../assets/icons/bank_right.svg'
import experince1 from '../../assets/img/expirence1.svg'
import experince2 from '../../assets/img/expirence2.svg'
import experince3 from '../../assets/img/expirence3.svg'
import experince4 from '../../assets/img/expirence4.svg'



function About({theme}) {
    const clientData = [spotify, slack, netflix, microsoft, vimeo, airbnb, google, tripo]
    const expirenceData = [
        {
            img: `${experince1}`,
            count: 12,
            title: 'Years of experience'
        },
        {
            img: `${experince2}`,
            count: 20,
            title: 'Awards'
        },
        {
            img: `${experince3}`,
            count: 150,
            title: 'Projects'
        },
        {
            img: `${experince4}`,
            count: '32k',
            title: 'Happy clients'
        },
    ]
  return (
    <>
        <div className='container'>
            <div className={css.about_wrapper}>
                <img src={about_bg} alt="" />
                <div>
                    <div className={css.about_title}>Who We Are?</div>
                    <div className={css.about_descr}>
                        Vivamus consectetuer hendrerit lacus. Curabitur a felis in nunc fringilla tristique. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. <br /><br />
                        Nam pretium turpis et arcu. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum. Praesent venenatis metus at tortor pulvinar varius.
                    </div>
                    <button className={css.about_btn}>Check Our Work <img src={right} alt="" /></button>
                </div>
            </div>
            <div className={css.expirence}>
               {
                expirenceData.map((item) => (
                    <div className={css.expirence_item} key={item.img}>
                        <img src={item.img} alt="Experience image" />
                        <div className={css.experince_count}>{item.count}</div>
                        <div className={css.experince_title}>{item.title}</div>
                    </div>
                ))
               }
            </div>
        </div>

        <Testimon theme={theme}/>
        <div className={css.our_clients}>
            <div className={css.our_clients_title}>Our Clients</div>
            <div className={css.our_clients_wrapper}>
                {
                    clientData.map((item) => (
                        <img key={item} src={item} alt="" />
                    ))
                }
            </div>
        </div>
        <LatestPosts theme={theme}/>
        <div className='container'>
            <Questions theme={theme}/>
        </div>
    </>
  )
}

export default About