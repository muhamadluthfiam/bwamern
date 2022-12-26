import React from 'react'

import imageHero from 'assets/images/hero-image.jpg'
import frameHero_ from 'assets/images/frame-hero-image.jpg'
import CitiesIcon from 'assets/icons/icon-cities.svg'
import TravelerIcon from 'assets/icons/icon-traveler.svg'
import TreasureIcon from 'assets/icons/icon-treasure.svg'
import { formatNumberingIndonesian } from 'utils/numberFormat'

import Button from 'elements/Button'

export default function Hero(props) {

  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth"
    })
  }
  
  return (
    <section className="container pt-4">
      <div className="row align-items-center">
        <div className="col-auto pr-5" style={{ width: 530 }}>
          <h1 className="font-weight-bold line-height-1 mb-3">
            Forget Busy Work <br/>
            Start Next Vacation
          </h1>
          <p className="mb-4 font-weight-light text-gray-500 w-75" style={{ lineHeight: "170%" }}>
            We provide what you need to enjoy your holiday with family. Time to make another memorable moments.
          </p>
          <Button className="btn px-5" hasShadow isPrimary onClick={showMostPicked} >
            Show Me Now
          </Button>

          <div className="row" style={{ marginTop: "80px" }}>

            <div className="col-auto" style={{ marginRight: 35 }}>
              <img width="36" height="36" src={TravelerIcon} alt={`${props.data.travelers} Travelers`} />
              <h6 className="mt-3">
                { formatNumberingIndonesian(props.data.travelers) }
                <span className="text-gray-500 font-weight-light">
                  &nbsp; Travelers
                </span>
              </h6>
            </div>

            <div className="col-auto" style={{ marginRight: 35 }}>
              <img width="36" height="36" src={CitiesIcon} alt={`${props.data.treasures} Treasures`} />
              <h6 className="mt-3">
                { formatNumberingIndonesian(props.data.treasures) }
                <span className="text-gray-500 font-weight-light">
                  &nbsp; Treasures
                </span>
              </h6>
            </div>

            <div className="col-auto">
              <img width="36" height="36" src={TreasureIcon} alt={`${props.data.cities} Cities`} />
              <h6 className="mt-3">
                { formatNumberingIndonesian(props.data.cities) }
                <span className="text-gray-500 font-weight-light">
                  &nbsp; Cities
                </span>
              </h6>
            </div>

          </div>
        </div>
        <div className="col-6 pl-5">
          <div style={{ width: 520, height: 410 }}>
            <img src={imageHero} alt="Room with couches" className="img-fluid position-absolute" style={{ margin: '-30px 0 0 -30px', zIndex: 1 }}/>
            <img src={frameHero_} alt="Room with couches frame" className="img-fluid position-absolute" style={{ margin: '0 -15px -15px 0'}}/>
          </div>
        </div>
      </div>
    </section>
  )
}
