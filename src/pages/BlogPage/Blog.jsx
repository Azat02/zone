import css from './Blog.module.css'
import blog_wrapper from '../../assets/bg/blog_wrapper.png'
import Slider from 'react-slick';
import '../../components/testimon/testimon_slider/slick.css'
import '../../components/testimon/testimon_slider/slick-theme.css'
import maddox from '../../assets/img/maddox.svg'
import blog_card1 from '../../assets/bg/blog_card1.svg'
import blog_card2 from '../../assets/bg/blog_card2.svg'
import blog_card3 from '../../assets/bg/blog_card3.svg'
import blog_card4 from '../../assets/bg/blog_card4.svg'
import blog_card5 from '../../assets/bg/blog_card5.svg'
import blog_card6 from '../../assets/bg/blog_card6.svg'
import blog_card7 from '../../assets/bg/blog_card7.svg'
import blog_card8 from '../../assets/bg/blog_card8.svg'
import post1 from '../../assets/img/post1.svg'
import post2 from '../../assets/img/post2.svg'
import post3 from '../../assets/img/post3.svg'
import post4 from '../../assets/img/post4.svg'
 
function Blog() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    const blogData = [
        {
            bg: `${blog_card1}`,
            img: `${maddox}`,
            name: 'Francesca Richards',
        },
        {
            bg: `${blog_card2}`,
            img: `${maddox}`,
            name: 'Bianka Lancaster',
        },
        {
            bg: `${blog_card3}`,
            img: `${maddox}`,
            name: 'Husna Navarro',
        },
        {
            bg: `${blog_card4}`,
            img: `${maddox}`,
            name: 'Maddox Fletcher',
        },
        {
            bg: `${blog_card5}`,
            img: `${maddox}`,
            name: 'Calista Campbell',
        },
        {
            bg: `${blog_card6}`,
            img: `${maddox}`,
            name: 'Antoine Findlay',
        },
        {
            bg: `${blog_card7}`,
            img: `${maddox}`,
            name: 'Margaret Donnelly',
        },
        {
            bg: `${blog_card8}`,
            img: `${maddox}`,
            name: 'Pamela Mclellan',
        },
    ]

    const postData = [
        {
            img: `${post1}`,
            title: 'Understanding color theory: the color wheel and finding...',
            date: 'November 7, 2017 8 min read',
        },
        {
            img: `${post2}`,
            title: 'How to design a product that can grow itself 10x in year',
            date: 'October 24, 2018 8 min read',
        },
        {
            img: `${post3}`,
            title: 'Any mechanical keyboard enthusiasts in design?',
            date: 'November 28, 2015 8 min read',
        },
        {
            img: `${post4}`,
            title: 'Yo Reddit! What’s a small thing that anyone can do at nearly...',
            date: 'May 29, 2017 8 min read',
        },
    ]

  return (
    <>
        <div className={css.blog_bg}>
            <Slider {...settings}>
                <div>
                    <div className='container'>
                        {
                            [1].map((index) => (
                                <div key={index}>
                                    <div className={css.blog_wrapper}>
                                        <img className={css.blog_img} src={blog_wrapper} alt="Blog" />
                                        <div className={css.maximize}>
                                            <div className={css.maximize_subtitle}>February 28, 2018 8 min read</div>
                                            <div className={css.maximize_title}>How to Maximize Your ROI Through Scientific SEM?</div>
                                            <div className={css.maximize_descr}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </div>
                                            <div className={css.maximize_autor}>
                                                <img src={maddox} alt="Maddox" />
                                                <div className={css.maximize_autor_name}>Jane Cooper</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Slider>
        </div>
        <div className={css.blog_card_wrapper + ' container'}>
            <div className={css.blog_cards}>
                {
                    blogData.map((item, index) => (
                        <div className={css.blog_card} key={index} style={{background: `url(${item.bg})`}}>
                            <div className={css.blog_subtitle}>24 May 2019 8 min read</div>
                            <div className={css.blog_title}>How to design a product that can grow itself 10x in year:</div>
                            <div className={css.blog_autor}>
                                <img src={item.img} alt="Maddox" />
                                <div className={css.blog_card_name}>{item.name}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className={css.categories}>
                <input className={css.categories_input} type="text" placeholder='Search...'/>
                <div className={css.categories_title}>Categories</div>
                <ul className={css.categories_ul}>
                    <li>Marketing</li>
                    <li>Community</li>
                    <li>Tutorials</li>
                    <li>Business</li>
                    <li>Management</li>
                </ul>
                <div className={css.categories_title}>Recent Posts</div>
                {
                    postData.map((item) => (
                        <div key={item.img} className={css.resent_card}>
                            <img src={item.img} alt="" />
                            <div>
                                <div className={css.resent_card_title}>{item.title}</div>
                                <div className={css.resent_card_date}>{item.date}</div>
                            </div>
                        </div>
                    ))
                }
                <div className={css.categories_title}>Popular Tags</div>
                <div className={css.popular_wrapper}>
                    <div className={css.popular_item}>Marketing</div>
                    <div className={css.popular_item}>Development</div>
                    <div className={css.popular_item}>Banking</div>
                    <div className={css.popular_item}>HR & Recruting</div>
                    <div className={css.popular_item}>Design</div>
                    <div className={css.popular_item}>Management</div>
                    <div className={css.popular_item}>Business</div>
                    <div className={css.popular_item}>Community</div>
                    <div className={css.popular_item}>Tutorials</div>
                </div>
                <div className={css.popular_add} >
                    <div className={css.popular_add_title}>Advertisement</div>
                    <div className={css.popular_add_sub}>Duis leo. Donec orci lectus, aliquam ut, faucibus non</div>
                    <button className={css.popular_add_btn}>Go Now</button>
                </div>
            </div>
        </div>
    </>

  )
}

export default Blog