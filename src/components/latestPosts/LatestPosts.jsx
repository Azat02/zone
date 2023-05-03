import css from './LatestPosts.module.css'
import LatestSlider from './latestSlider/LatestSlider'

function LatestPosts({theme}) {
  return (
    <div className= {css.latest}>
        <div className='main_page_title' style={theme ? null : {color: '#fff'}}>Latest Posts</div>
        <div className={css.latest_wrapper}>
            <LatestSlider theme={theme}/>
        </div>
    </div>
  )
}

export default LatestPosts