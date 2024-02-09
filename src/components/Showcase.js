import React from 'react'
import HorizontalSlider from './HorizontalSlider'

const clientsDetail = [
  {
    img: `/images/clients/burkettandco.png`,
    desc: `Accounting and tax services characterized by quality, reliability and trust.`,
    url: `https://www.burkettandco.ca/`
  },
  {
    img: `/images/clients/coupal.png`,
    desc: `Vancouver's tower crane rental service and support leader since 1974.`,
    url: `http://coupalcranes.com/`
  },
  {
    img: `/images/clients/wfdesignbuild.png`,
    desc: `High-end, custom residential renovaters serving Fraser Valley homeowners.`,
    url: `https://wfdesignbuild.com/`
  },
  {
    img: `/images/clients/chronicled.png`,
    desc: `Blockchain pioneers bringing transparency, trust, and security to supply.`,
    url: `https://www.chronicled.com/`
  },
  {
    img: `/images/clients/glcsolutions.png`,
    desc: `Business savvy tech experts helping forward thinking companies get things done.`,
    url: `http://glcsolutions.ca/`
  },
  {
    img: `/images/clients/wedlerengineering.png`,
    desc: `Results-oriented, responsive and flexible full service civil engineering firm.`,
    url: `http://wedler.com/`
  },
  {
    img: `/images/clients/chronicled.png`,
    desc: `Blockchain pioneers bringing transparency, trust, and security to supply.`,
    url: `https://www.chronicled.com/`
  },
  {
    img: `/images/clients/glcsolutions.png`,
    desc: `Business savvy tech experts helping forward thinking companies get things done.`,
    url: `http://glcsolutions.ca/`
  },
  {
    img: `/images/clients/coupal.png`,
    desc: `Vancouver's tower crane rental service and support leader since 1974.`,
    url: `http://coupalcranes.com/`
  },
  {
    img: `/images/clients/wfdesignbuild.png`,
    desc: `High-end, custom residential renovaters serving Fraser Valley homeowners.`,
    url: `https://wfdesignbuild.com/`
  },
  {
    img: `/images/clients/burkettandco.png`,
    desc: `Accounting and tax services characterized by quality, reliability and trust.`,
    url: `https://www.burkettandco.ca/`
  },
  {
    img: `/images/clients/coupal.png`,
    desc: `Vancouver's tower crane rental service and support leader since 1974.`,
    url: `http://coupalcranes.com/`
  },
  {
    img: `/images/clients/wfdesignbuild.png`,
    desc: `High-end, custom residential renovaters serving Fraser Valley homeowners.`,
    url: `https://wfdesignbuild.com/`
  },
  {
    img: `/images/clients/chronicled.png`,
    desc: `Blockchain pioneers bringing transparency, trust, and security to supply.`,
    url: `https://www.chronicled.com/`
  },
  {
    img: `/images/clients/glcsolutions.png`,
    desc: `Business savvy tech experts helping forward thinking companies get things done.`,
    url: `http://glcsolutions.ca/`
  },
  {
    img: `/images/clients/wedlerengineering.png`,
    desc: `Results-oriented, responsive and flexible full service civil engineering firm.`,
    url: `http://wedler.com/`
  },
  {
    img: `/images/clients/chronicled.png`,
    desc: `Blockchain pioneers bringing transparency, trust, and security to supply.`,
    url: `https://www.chronicled.com/`
  },
  {
    img: `/images/clients/coupal.png`,
    desc: `Vancouver's tower crane rental service and support leader since 1974.`,
    url: `http://coupalcranes.com/`
  },
  {
    img: `/images/clients/wfdesignbuild.png`,
    desc: `High-end, custom residential renovaters serving Fraser Valley homeowners.`,
    url: `https://wfdesignbuild.com/`
  },
  {
    img: `/images/clients/burkettandco.png`,
    desc: `Accounting and tax services characterized by quality, reliability and trust.`,
    url: `https://www.burkettandco.ca/`
  },
  {
    img: `/images/clients/coupal.png`,
    desc: `Vancouver's tower crane rental service and support leader since 1974.`,
    url: `http://coupalcranes.com/`
  },
  {
    img: `/images/clients/wfdesignbuild.png`,
    desc: `High-end, custom residential renovaters serving Fraser Valley homeowners.`,
    url: `https://wfdesignbuild.com/`
  },
  {
    img: `/images/clients/chronicled.png`,
    desc: `Blockchain pioneers bringing transparency, trust, and security to supply.`,
    url: `https://www.chronicled.com/`
  },
  {
    img: `/images/clients/glcsolutions.png`,
    desc: `Business savvy tech experts helping forward thinking companies get things done.`,
    url: `http://glcsolutions.ca/`
  },
  {
    img: `/images/clients/wedlerengineering.png`,
    desc: `Results-oriented, responsive and flexible full service civil engineering firm.`,
    url: `http://wedler.com/`
  }

]

export default function Showcase(props) {
  return (
    <div id='showcase' className={'container mb-5 py-5 border-radius-10 font-size-18 ' + props.backLightColor.boxShadowSm}>
      <p className='h1 fw-bold text-center pt-3'>My Showcase</p>
      <p className='h5 text-center pb-3'>Projects I've worked on.</p>
      <div className='mx-4'>
        <HorizontalSlider clients={clientsDetail} backLightColor={props.backLightColor}/>
      </div>

    </div>
  )
}
