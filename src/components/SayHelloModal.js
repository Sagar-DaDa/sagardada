import React, { useState } from 'react'
import { useRef } from 'react';
import Strings from '../resources/Strings';

const headerText1 = "How can I help you?";

export default function SayHelloModal(props) {
    const [isHovered, setIsHovered] = useState('');
    const modalRef = useRef();

    const closeModal = (e) =>{
        if(modalRef.current === e.target){props.onCloseModal()}
    }

    return (
        <div ref={modalRef} onClick={closeModal} className={`position-fixed top-50 start-50 translate-middle w-100 h-100 d-flex justify-content-center align-items-center opacity-97 d-block zindex-100 font-size-18 ${props.isDarkMode ? 'bg-dark' : 'bg-light'} text-light`}>
            <div className={`mx-2 p-3 rounded ${props.backLightColor.boxShadowSm}`}>
                <i
                    className={`fa-regular fa-circle-xmark fs-4 float-end ${isHovered}`}
                    onMouseOver={() => setIsHovered('font-muted-grey')}
                    onMouseOut={() => setIsHovered(null)}
                    onClick={props.onCloseModal}
                    ></i>
                <p className='fs-1 m-5 text-center fw-bold'>{headerText1}</p>
                <form>
                    <div className='row mx-2'>
                        <div className='col-12 col-md-6 mb-3'>
                            <label htmlFor="inputName" className="form-label">{Strings.english.name}</label>
                            <input type="text" className="form-control font-size-18" id="inputName" required />
                        </div>
                        <div className='col-12 col-md-6 mb-3'>
                            <label htmlFor="inputEmail" className="form-label">{Strings.english.email}</label>
                            <input type="email" className="form-control font-size-18" id="inputEmail" aria-describedby="emailHelp" required />
                        </div>
                        <div className='col-12'>
                            <label htmlFor="inputMessage" className="form-label">{Strings.english.message}</label>
                            <textarea className='form-control mb-3 font-size-18' id='inputMessage' rows={4} required></textarea>
                        </div>
                        <button className={`width-200 mx-auto btn-wide-1 ${props.isDarkMode ? props.backLightToggle ? '' : ' border-muted-grey' : 'border-muted-grey'} ${props.backLightColor.boxShadowSm}`} type='button'>
                            <span className='font-size-18 '>{Strings.english.sendMessage}</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
