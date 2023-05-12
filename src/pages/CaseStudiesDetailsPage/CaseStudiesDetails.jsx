import css from './CaseStudiesDetails.module.css'
import Testimon from '../../components/testimon/Testimon'
import case_bg from '../../assets/bg/case_bg.svg'
import case1 from '../../assets/img/case8.svg'
import case2 from '../../assets/img/case3.svg'
import case3 from '../../assets/img/case1.svg'
import social1 from '../../assets/icons/blue_facebook.svg'
import social2 from '../../assets/icons/red_instagram.svg'
import social3 from '../../assets/icons/blue_linkedin.svg'
import social4 from '../../assets/icons/blue_twitter.svg'

function CaseStudiesDetails({theme}) {
  return (
    <>
        <div className='container'>
            <div className={css.case_bg}>
                <img src={case_bg} alt="Case Background" />
            </div>
            <div className={css.details_pages}>
                <div className={css.details_title}>Home</div>
                <div className={css.details_title}>Case Studies</div>
                <div className={css.details_title_hover}>Bank of America</div>
            </div>
            <div className={css.details_wrapper}>
                <div className={css.project}>
                    <div className={css.project_title}>Project Brief</div>
                    <div className={css.project_descr}>Nullam tincidunt adipiscing enim. Mauris sollicitudin fermentum libero. Pellentesque auctor neque nec urna. Sed fringilla mauris sit amet nibh. Phasellus viverra nulla ut metus varius laoreet.</div>
                    <div className={css.project_title}>How We Work</div>
                    <div className={css.project_descr}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                    <ul className={css.project_ul}>
                        <li>Medical Assistant</li>
                        <li>Web Designer</li>
                        <li>Dog Trainer</li>
                        <li>Nursing Assistant</li>
                        <li>President of Sales</li>
                    </ul>
                    <div className={css.project_title}>Results</div>
                    <div className={css.project_descr}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                    <ul className={css.project_ul}>
                        <li>Medical Assistant</li>
                        <li>Web Designer</li>
                        <li>Dog Trainer</li>
                        <li>Nursing Assistant</li>
                        <li>President of Sales</li>
                    </ul>
                    <div className={css.project_title}>Gallery</div>
                    <div className={css.gallery_wrapper}>
                        <img src={case1} className={css.gallery_img} alt="Case" />
                        <img src={case2} className={css.gallery_img} alt="Case" />
                        <img src={case3} className={css.gallery_img} alt="Case" />
                    </div>
                </div>
                <div className={css.summary}>
                    <div className={css.summary_subtitle}>summary</div>
                    <div className={css.summary_title}>Bank of America</div>
                    <div className={css.summary_descr}>Praesent vestibulum dapibus nibh. Vestibulum fringilla pede sit amet augue. </div>
                    <div className={css.summary_site}>Website</div>
                    <div className={css.summary_site_name}>example.com</div>
                    <div className={css.summary_site}>Category</div>
                    <div className={css.summary_site_name}>SEO Optimization</div>
                    <div className={css.summary_site}>Date</div>
                    <div className={css.summary_site_name}>October 25, 2019</div>
                    <div className={css.summary_social_wrapper}>
                        <div className={css.share}>Share:</div>
                        <img src={social1} alt="Social" />
                        <img src={social2} alt="Social" />
                        <img src={social3} alt="Social" />
                        <img src={social4} alt="Social" />
                    </div>
                </div>
            </div>
        </div>
        <Testimon theme={theme}/>
    </>
  )
}

export default CaseStudiesDetails