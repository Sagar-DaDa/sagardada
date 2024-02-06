import React from 'react'
import '../css/home.css'
import PropTypes from 'prop-types'
import GanapatiBaba from './GanapatiBaba'

const homeUpperText = "ॐ गं गणपतये नमः";
const homeTitle = "Full-stack Developer";
const homeDescription = "I code for both frontend and backend, and I love it.";

export default function Home(props) {

    return (
        <div className={'transition-1 container home-container p-4 mb-5 border-radius-10 ' + props.backLightColor.color}>
            <div className='text-center'>
                <span>{homeUpperText}</span>
            </div>
            <div className='text-center mt-2'>
                <GanapatiBaba color={props.backLightColor.themeColor} />
            </div>
            <div className='text-center mt-2'>
                <span className=''>
                    <span className='fs-1 fw-bold'>{homeTitle}</span>
                    <br />
                    <span className='h1'>{homeDescription}</span>
                </span>
            </div>
            {/* <div className='row'>
                <div className='cold-12 text-center mb-2'>
                    <span>{homeUpperText}</span>
                </div>
                <div className='col-12 d-flex justify-content-center'>
                    <div className='homeImageDiv'>
                        <GanapatiBaba color={props.backLightColor.themeColor} />
                    </div>
                </div>

                <div className='col-12 mt-2'>
                    <div className='text-center'>
                        <span className=''>
                            <span className='font-signika display-2'>{homeTitle}</span>
                            <br />
                            <span className='font-afacad display-6'>{homeDescription}</span>
                        </span>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

Home.propTypes = {
    backLightColor: PropTypes.object.isRequired
}

Home.defaultProps = {

}
