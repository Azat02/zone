import React from 'react'
import LatestPosts from '../../components/latestPosts/LatestPosts'
import css from './CaseStudies.module.css'
import case1 from '../../assets/img/case1.svg'
import case2 from '../../assets/img/case2.svg'
import case3 from '../../assets/img/case3.svg'
import case4 from '../../assets/img/case4.svg'
import case5 from '../../assets/img/case5.svg'
import case6 from '../../assets/img/case6.svg'
import case7 from '../../assets/img/case7.svg'
import case8 from '../../assets/img/case8.svg'
import case9 from '../../assets/img/case9.svg'


function CaseStudies({theme}) {
    const caseData = [
        {
            img: `${case1}`,
            subtitle:'Branding',
            title:"Event Doesn't Have To Be Hard. Read These 7 Tips",
        },
        {
            img: `${case2}`,
            subtitle:'SEO',
            title:'How 7 Things Will Change The Way You Approach Event',
        },
        {
            img: `${case3}`,
            subtitle:'Marketing',
            title:'My Life, My Job, My Career: How 7 Simple Event Helped Me Succeed',
        },
        {
            img: `${case4}`,
            subtitle:'Marketing',
            title:'Believing These 7 Myths About Event Keeps You From Growing',
        },
        {
            img: `${case5}`,
            subtitle:'SEO',
            title:"Don't Waste Time! 7 Facts Until You Reach Your Event",
        },
        {
            img:`${case6}`,
            subtitle:'SEO',
            title:'7 Places To Get Deals On Event',
        },
        {
            img: `${case7}`,
            subtitle:'7 Places To Get Deals On Event',
            title:'The 7 Most Successful Event Companies In Region',
        },
        {
            img: `${case8}`,
            subtitle:'Branding',
            title:'Apply These 7 Secret Techniques To Improve Event',
        },
        {
            img: `${case9}`,
            subtitle:'Branding',
            title:'The 7 Biggest Event Mistakes You Can Easily Avoid',
        }
    ]
  return (
  <>
    <div className='container' style={{paddingTop: "60px"}}>
        <div className='main_page_title'>Our Case Studies</div>
        <div className='main_page_descr'>Nullam tincidunt adipiscing enim. Mauris <br /> sollicitudin fermentum libero.</div>
        <div className={css.case_wrapper}>
            <div className={css.case_title}>All</div>
            <div className={css.case_title}>Branding</div>
            <div className={css.case_title}>Digital</div>
            <div className={css.case_title}>Marketing</div>
            <div className={css.case_title}>SEO</div>
            <div className={css.case_title}>Development</div>
        </div>
        <div className={css.case_card_wrapper}>
            {
                caseData.map((item) => (
                    <div className={css.case_card} key={item.img}>
                        <img src={item.img} alt="Case" />
                        <div className={css.case_card_subtitle}>{item.subtitle}</div>
                        <div className={css.case_card_title}>{item.title}</div>
                    </div>
                ))
            }
        </div>
    </div>
    <LatestPosts theme={theme}/>
  </>
  )
}

export default CaseStudies