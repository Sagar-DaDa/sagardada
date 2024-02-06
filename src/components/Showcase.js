import React from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import 'react-horizontal-scrolling-menu/dist/styles.css'

export default function Showcase(props) {
  return (
    <div className={'aboutContainer container mb-5 p-5 border-radius-10 font-size-18 ' + props.backLightColor.boxShadowSm}>
      <p className='h1 fw-bold text-center pt-3'>My Showcase</p>
      <p className='h5 text-center'>Projects I've worked on.</p>
      

    </div>
  )
}
