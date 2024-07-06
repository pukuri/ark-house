import { useState } from "react";
import images from "../../../../assets/statics/images";
import GotoLink from "../../../../components/GotoLink/GotoLink";

import './services.css'

type ServiceItemType = {
  img: string
  text: string
}

type ServiceListType = {
  architecture: ServiceItemType
  landscape: ServiceItemType
  interior: ServiceItemType
  design: ServiceItemType
}

const serviceList: ServiceListType = {
  architecture: {
    'img': images.servicesimg1,
    'text': 'At the heart of everything we do is the human experience to feel. To love. To image. To wonder. To guide. To jest. To rule. To serve. To belong.'
  },
  landscape: {
    'img': images.servicesimg2,
    'text': 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
  },
  interior: {
    'img': images.servicesimg3,
    'text': 'At the heart of everything we do is the human experience to feel. To love. To image. To wonder. To guide. To jest. To rule. To serve. To belong.'
  },
  design: {
    'img': images.servicesimg4,
    'text': 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
  }
}

export default function Services() {
  const [serviceItem, setServiceItem] = useState(serviceList['architecture']);

  function handleTabClick(event: MouseEvent): void {
    const target: HTMLElement = event.target
    const key = target.getAttribute('data-key') || 'architecture'

    const lis: Element[] = Array.from(document.getElementsByClassName('services__content-tab'));
    lis.forEach(li => {
      li.classList.remove('active')
    });
    target.classList.add('active');

    setServiceItem(serviceList[key]);
  }

  return (
    <>
      <div className="services__wrapper">
        <div className="services__heading component-wrapper">
          <h1>Services</h1>
          <GotoLink text='Discover All' link='/projects' />
        </div>

        <div className="services__content component-wrapper">
          <div className="services__content-title">
            <span>3</span>
            <h1>Offices around<br/>the world</h1>
          </div>

          <div className="services__content-contents">
            <div className="services__content-tabs">
              <ul>
                <li className="services__content-tab active" data-key="architecture" onClick={(event) => handleTabClick(event)}>
                  Architecture
                  <div />
                </li>
                <li className="services__content-tab" data-key="landscape" onClick={(event) => handleTabClick(event)}>
                  Landscape
                  <div />
                </li>
                <li className="services__content-tab" data-key="interior" onClick={(event) => handleTabClick(event)}>
                  Interior
                  <div />
                </li>
                <li className="services__content-tab" data-key="design" onClick={(event) => handleTabClick(event)}>
                  Design
                  <div />
                </li>
              </ul>
            </div>

            <div className="services__content-content">
              <img src={serviceItem.img} className="services__content-content_img" />
              <p className="services__content-content_text">{serviceItem.text}</p>
              <GotoLink text='Contact Us' link='/contact' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}