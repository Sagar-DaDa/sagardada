import React, { useState } from 'react'
import { useRef } from 'react';
import Strings from '../resources/Strings'
import {useMediaQuery} from 'react-responsive'

const headerText1 = "Let me know about your project.";
const headerText2 = "Ready to get started?";

export default function SayHelloModal(props) {
    const [isHovered, setIsHovered] = useState('');
    const modalRef = useRef();
    const isNotMobile = useMediaQuery({minWidth: 768});

    const closeModal = (e) => {
        if (modalRef.current === e.target) { props.onCloseModal() }
    }

    return (
        <div
            ref={modalRef}
            onClick={closeModal}
            className={`position-fixed top-50 start-50 translate-middle w-100 h-100 d-flex justify-content-center align-items-center opacity-97 d-block zindex-100  ${props.isDarkMode ? 'bg-dark' : 'bg-light'} text-light`}>
            <div className={`${isNotMobile ? 'w-75' : ''} mx-2 p-3 rounded ${props.backLightColor.boxShadowSm}`}>
                <i
                    className={`fa-regular fa-circle-xmark fs-4 float-end ${isHovered}`}
                    onMouseOver={() => setIsHovered('font-muted-grey')}
                    onMouseOut={() => setIsHovered(null)}
                    onClick={props.onCloseModal}
                ></i>
                <p className='fs-1 mt-4 mb-0 text-center fw-bold'>{headerText1}</p>
                <p className='fs-1 text-center fw-bold'>{headerText2}</p>
                <form>
                    <div className='row mx-2'>
                        <div className='col-12 col-md-6 mb-2'>
                            <label htmlFor="inputName" className="m-0 form-label">{Strings.english.name}</label>
                            <input type="text" className="form-control " id="inputName" required />
                        </div>
                        <div className='col-12 col-md-6 mb-2'>
                            <label htmlFor="inputEmail" className="m-0 form-label">{Strings.english.email}</label>
                            <input type="email" className="form-control " id="inputEmail" aria-describedby="emailHelp" required />
                        </div>
                        <div className='col-12 col-md-6 mb-2'>
                            <label htmlFor="inputProjectType" className="m-0 form-label">{Strings.english.typeOfProject}</label>
                            <input type="text" className="form-control " id="inputProjectType" required />
                        </div>
                        <div className='col-12 col-md-6 mb-2'>
                            <label htmlFor="inputBudget" className="m-0 form-label">{Strings.english.budget}</label>
                            <input type="text" className="form-control " id="inputBudget" required />
                        </div>
                        <div className='col-12'>
                            <label htmlFor="inputProjectDetails" className="m-0 form-label">{Strings.english.additionalDetails}</label>
                            <textarea className='form-control mb-2 ' id='inputProjectDetails' rows={4} required></textarea>
                        </div>
                        <button className={`width-200 mx-auto btn-wide-1 ${props.isDarkMode ? props.backLightToggle ? '' : ' border-muted-grey' : 'border-muted-grey'} ${props.backLightColor.boxShadowSm}`} type='button'>
                            <span className=' '>{Strings.english.submit}</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
