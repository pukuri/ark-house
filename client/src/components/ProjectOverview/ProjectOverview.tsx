import { Link } from 'react-router-dom';
import images from '../../assets/statics/images';

import './projectoverview.css'

type ProjectIverviewPropType = {
  id: number
  year: number | null
  name: string
  location: string
  thumbnail: string
}

export default function ProjectOverview({ id, year, name, location, thumbnail }:ProjectIverviewPropType) {
  return (
    <>
      <Link to={`/projects/${id}`} className='thumbnail-tile-3'>
        <div className="projectoverview__item">
          <img className="watermark" src={images.logosmall} />
          <img className='photo' src={thumbnail} />
          { year && <p>{year}</p> }
          <p><b>{name}</b></p>
          <p>{location}</p>
        </div>
      </Link>
    </>
  )
}