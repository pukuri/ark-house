import { GoArrowUpRight } from 'react-icons/go';
import { Link } from 'react-router-dom';

import './gotolink.css';

type GotoLinkType = {
  text: string
  link: string
}

export default function GotoLink({ text, link }: GotoLinkType) {
  return (
    <>
      <Link to={link}>
        <div className='btn__link-default'>
          <span>{text}</span>
          <GoArrowUpRight />
          <div className='white-box'>
          </div>
        </div>
      </Link>
    </>
  )

}