import LatestPosts from '../../components/latestPosts/LatestPosts'
import css from './BlogDetails.module.css'
import maddox from '../../assets/img/maddox.svg'
import share from '../../assets/icons/share.svg'
import like from '../../assets/icons/like.svg'
import paragraph_bg from '../../assets/bg/paragraph_bg.svg'
import donec from '../../assets/icons/donec_icon.svg'
import donec_bg from '../../assets/bg/donec_bg.svg'
import facebook from '../../assets/icons/blue_facebook.svg'
import instagram from '../../assets/icons/red_instagram.svg'
import linkedin from '../../assets/icons/blue_linkedin.svg'
import twitter from '../../assets/icons/blue_twitter.svg'
import courtney from '../../assets/img/courtney.svg'


function BlogDetails({theme}) {
  return (
    <>
        <div className={css.blog_details_bg}></div>
        <div className={css.blog_details_links}>
            <div className={css.link_name}>Home</div>
            <div className={css.link_name}>Blog</div>
            <div className={css.third_link}>The Complete Digital Marketing Course - 12 Courses in 1</div>
        </div>
        <div className={css.blog_details_wrapper}>
            <div className={css.blog_date}>8 minutes read</div>
            <div className={css.blog_title}>The Complete Digital Marketing Course - 12 Courses in 1</div>
            <div className={css.blog_descr}>Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Phasellus viverra nulla ut metus varius laoreet. Praesent egestas tristique nibh.</div>
            <div className={css.blog_commentator}>
                <div className={css.blog_commentator_name}>
                    <img src={maddox} alt="Maddox" />
                    <div>
                        <div className={css.name}>Jane Cooper</div>
                        <div className={css.date}>February 28, 2018</div>
                    </div>
                </div>
                <div className={css.icons}>
                    <img src={share} alt="Share" />
                    <img src={like} alt="Like" />
                </div>
            </div>
            <div className={css.blog_paragraph}>
                <div className={css.first_letter}>P</div>
                <div className={css.paragraph_text}>ellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Phasellus viverra nulla ut metus varius laoreet. Praesent egestas tristique nibh.</div>
            </div>
            <div className={css.paragraph_content}>Donec posuere vulputate arcu. Quisque rutrum.</div>
            <div className={css.paragraph_content}>
                Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper mauris at ligula. <br /> <br />
                Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Phasellus viverra nulla ut metus varius laoreet. Praesent egestas tristique nibh.
            </div>
            <img src={paragraph_bg} style={{marginBottom: '40px'}} alt="Paragraph_bg" />
            <div className={css.paragraph_title}>Curabitur suscipit suscipit tellus</div>
            <div className={css.paragraph_content}>Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper mauris at ligula.</div>
            <div className={css.paragraph_title}>Nullam accumsan lorem in</div>
            <div className={css.paragraph_content}>Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper mauris at ligula.</div>
            <div className={css.donec_wrapper}>
                <img src={donec} alt="Donec icon" />
                <div className={css.donec_title}>Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo.</div>
            </div>
            <img src={donec_bg} alt="Donec backgroind" style={{marginBottom: '40px'}}/>
            <div className={css.paragraph_content}>
                Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper mauris at ligula. <br /> <br />
                Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Phasellus viverra nulla ut metus varius laoreet. Praesent egestas tristique nibh. <br /><br />
                Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper mauris at ligula.
            </div>
            <div className={css.tags}>
                <div className={css.tag}>Tags:</div>
                <div className={css.tags_item}>Marketing</div>
                <div className={css.tags_item}>Development</div>
                <div className={css.tags_item}>HR & Recruting</div>
                <div className={css.tags_item}>Design</div>
                <div className={css.tags_item}>Management</div>
            </div>
            <div className={css.share}>
                <div className={css.share_text}>Share:</div>
                <div className={css.share_item}>
                    <img src={facebook} alt="Facebook" />
                    <div className={css.share_item_title}>Facebook</div>
                </div>
                <div className={css.share_item} style={{borderColor: '#E02D69'}}>
                    <img src={instagram} alt="Instagram" />
                    <div className={css.share_item_title} style={{color:'#E02D69'}}>Instagram</div>
                </div>
                <div className={css.share_item} style={{borderColor: '#007EBB'}}>
                    <img src={linkedin} alt="Linkedin" />
                    <div className={css.share_item_title} style={{color: '#007EBB'}}>LinkedIn</div>
                </div>
                <div className={css.share_item} style={{borderColor: '#00AAEC'}}>
                    <img src={twitter} alt="twitter" />
                    <div className={css.share_item_title} style={{color: '#00AAEC'}}>Twitter</div>
                </div>
            </div>
            <div className={css.courtney_wrapper}>
                <img src={courtney} alt="Courtney" />
                <div>
                    <div className={css.henry_wrapper}>
                        <div>
                            <div className={css.henry_name}>Courtney Henry</div>
                            <div className={css.henry_position}>Curator of Marketing Course</div>
                        </div>
                        <div style={{display:'flex', gap: '20px' }}>
                            <img src={facebook} alt="Facebook" />
                            <img src={instagram} alt="Instagram" />
                            <img src={linkedin} alt="Linkedin" />
                            <img src={twitter} alt="twitter" />
                        </div>
                    </div>
                    <div className={css.henry_descr}>Integer tincidunt. Nullam dictum felis eu pede mollis pretium. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem..</div>
                    <div className={css.henry_date}>Member since Mar 15, 2021</div>
                </div>
            </div>
        </div>
        <hr />
        <LatestPosts theme={theme}/>
    </>
  )
}

export default BlogDetails