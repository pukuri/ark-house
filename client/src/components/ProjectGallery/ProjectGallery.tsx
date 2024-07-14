import images from '../../assets/statics/images';

type ProjectGalleryPropType = {
  title: string
  photo: string
  location: string
}

export default function ProjectGallery({ title, photo, location }:ProjectGalleryPropType) {
  return (
    <>
      <div className="projectgallery__item thumbnail-tile-3">
        <img className="watermark" src={images.logosmall} />
        <img className='photo' src={photo} />
        <p><b>{title}</b></p>
        <p>{location}</p>
      </div>
    </>
  )
}