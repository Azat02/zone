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
import play from '../../assets/icons/vision_play.svg'
import core1 from '../../assets/icons/core1.svg'
import core2 from '../../assets/icons/core2.svg'
import core3 from '../../assets/icons/core3.svg'
import core4 from '../../assets/icons/core4.svg'
import member1 from '../../assets/img/member1.svg'
import member2 from '../../assets/img/member2.svg'
import member3 from '../../assets/img/member3.svg'
import member4 from '../../assets/img/member4.svg'
import member5 from '../../assets/img/member5.svg'
import member6 from '../../assets/img/member6.svg'
import member7 from '../../assets/img/member7.svg'
import member8 from '../../assets/img/member8.svg'



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
    const coreData = [
        {
            img: `${core1}`,
            title: 'Customer Satisfaction',
        },
        {
            img: `${core2}`,
            title: 'Transparency',
        },
        {
            img: `${core3}`,
            title: 'Reputation',
        },
        {
            img: `${core4}`,
            title: 'Cooperation',
        }
    ]
    const teamData = [member1, member2, member3, member4, member5, member6, member7, member8 ]
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
                        <img src={item.img} alt="Experience" />
                        <div className={css.experince_count}>{item.count}</div>
                        <div className={css.experince_title}>{item.title}</div>
                    </div>
                ))
               }
            </div>
            <section className={css.our_vision}>
               <div className={css.vision_title}>Our Vision</div>
               <img src={play} alt="Vision play" />
               <div className={css.vision_descr}>Our vision offering the best product nulla vehicula tortor scelerisque ultrices malesuada. </div>
            </section>
            <section className={css.our_core}>
               <div className={"core_title"}>Our Core Values</div>
               <div className={css.core_wrapper}>
                    {
                        coreData.map((item) => (
                            <div key={item.img} className={css.core_item}>
                                <img src={item.img} alt="" />
                                <div className={css.item_title}>{item.title}</div>
                                <div className={css.item_descr}>Aenean urna dictum <br /> adipiscing nec, cras quisque.</div>
                            </div>
                        ))
                    }
               </div>
            </section>
            <section className={css.our_story}>
                <div className={"core_title"}>Our Story</div>
                <div className={"core_subtitle"}>Nunc nonummy metus. Donec elit libero, sodales nec, <br /> volutpat a, suscipit non, turpis.</div>
                <div className={css.story_bussines}>
                    <div className={css.bussines_year}>2021</div>
                    <div className={css.bussines_title}>Business Conception</div>
                    <div className={css.bussines_subtitle}>Curabitur ullamcorper ultricies nisi. Praesent <br /> nonummy mi in odio. Donec mollis hendrerit risus.</div>
                </div>
                <div className={`${css.story_bussines} + ${css.story_legal}`}>
                    <div className={`${css.bussines_year} + ${css.legal_year}`}>2020</div>
                    <div className={`${css.bussines_title} + ${css.legal_title}`}>Legal Rewiew</div>
                    <div className={`${css.bussines_subtitle} + ${css.legal_subtitle}`}>Curabitur ullamcorper ultricies nisi. Praesent <br /> nonummy mi in odio. Donec mollis hendrerit risus.</div>
                </div>
                <div className={css.story_bussines}>
                    <div className={`${css.bussines_year} + ${css.design_year}`}>2019</div>
                    <div className={css.bussines_title}>Infrastucture Design</div>
                    <div className={css.bussines_subtitle}>Curabitur ullamcorper ultricies nisi. Praesent <br /> nonummy mi in odio. Donec mollis hendrerit risus.</div>
                </div>
                <div className={`${css.story_bussines} + ${css.story_legal}`}>
                    <div className={`${css.bussines_year} + ${css.legal_year} + ${css.company_year}`}>2018</div>
                    <div className={`${css.bussines_title} + ${css.legal_title}`}>Company Established</div>
                    <div className={`${css.bussines_subtitle} + ${css.legal_subtitle}`}>Curabitur ullamcorper ultricies nisi. Praesent <br /> nonummy mi in odio. Donec mollis hendrerit risus.</div>
                </div>
            </section>
            <section className={css.great_team}>
                <div className='core_title'>Great Team Is The Key</div>
                <div className='core_subtitle'>Since wire-frame renderings are relatively simple and fast <br /> to calculate, they are often used in cases</div>
                <div className={css.team_wrapper}>
                    {
                        teamData.map((item) => (
                            <div key={item} className={css.team_member}>
                                <img src={item} alt="" />
                            </div>
                        ))
                    }
                </div>
            </section>
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