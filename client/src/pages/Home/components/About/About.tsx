import images from '../../../../assets/statics/images';

import './about.css';
import GotoLink from '../../../../components/GotoLink/GotoLink';

export default function Header() {
  return (
    <div className='about__wrapper component-wrapper' id='about'>
      <h1>Forming an irrational love between <br /> clients and their buildings</h1>
      <p>Our approach starts with... <br /> How do you want to make people feel?</p>
      <div className='about__images'>
        <div className='about__image'>
          <img src={images.aboutimg1} />
        </div>
        <div className='about__image'>
          <img src={images.aboutimg2} />
        </div>
        <div className='about__image'>
          <img src={images.aboutimg3} />
        </div>
      </div>
      <p>In the face of changing trends and technologies, ARK House creates architecture that remains relevant - not based on trends, fads or dates - but on timeless human truths.</p>

      <div style={{ margin: '24px auto', width: 'fit-content' }}>
        <GotoLink text="Our History" link="/history" />
      </div>
    </div>
  )
}