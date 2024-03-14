import React, { useState } from 'react'
import '../css/footer.css'
import ProjectDescModal from './ProjectDescModal'

// const startProjectLeftText = "Start a project";
// const startProjectCenterText = "Interested in working together? Let's schedule a time to have a conversation.";
// const startProjectRightText = "Let me know";
const footerHead = "SagarDaDa";
const footerDesc = "Navigating existence, acquiring wisdom, and immersing myself in the realm of coding.";
const facebookLink = "https://www.facebook.com/";
const linkedinLink = "https://www.linkedin.com/";
const instagramLink = "https://https://www.instagram.com/";
const whatsappLink = "https://wa.me/+9779876543210";
const emailLink = "saagaar.dada@gmail.com";
const createdBy = "Created by me";
const createdWith = "Created with";
const createdToolIconFontwesome = "fa-brands fa-react";
const createdToolName = "React";

export default function Footer(props) {
    const [showModal, setShowModal] = useState(false);

    if (showModal) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }

    return (
        <>
            {/* Commented due to no backend support */}
            {/* <div className='px-2 mb-5'>
                <div className={'text-center container border-radius-10 font-size-18 ' + props.backLightColor.boxShadowSm}>
                    <div className='row p-4'>
                        <div className='col-12 col-md-4 p-2'>
                            <p className='h1 fw-bold m-0 p-0'>{startProjectLeftText}</p>
                        </div>
                        <div className='col-12 col-md-4 p-2'>
                            <p className=' m-0 p-0'>{startProjectCenterText}</p>
                        </div>
                        <div className='col-12 col-md-4 pt-3 pb-2'>
                            <button
                                className={`btn-wide-1 ${props.isDarkMode ? props.backLightToggle ? '' : ' border-muted-grey' : 'border-muted-grey'} ${props.backLightColor.boxShadowSm}`}
                                type='button'
                                onClick={() => setShowModal(true)}>{startProjectRightText}</button>
                        </div>
                    </div>
                </div>
            </div> */}
            {
                showModal
                &&
                <ProjectDescModal
                    backLightColor={props.backLightColor}
                    isDarkMode={props.isDarkMode}
                    onCloseModal={() => setShowModal(false)} />
            }
            <div className={'footerContainer bg-transparent-grey text-center ' + props.backLightColor.boxShadowSm}>
                <p className=' fw-bold display-6'>{footerHead}</p>
                <p className='font-size-18 mb-4'>{footerDesc}</p>
                <div className='d-flex justify-content-center gap-3 w-25 mx-auto mb-4'>
                    <a className='text-decoration-none' href={facebookLink} target="_blank" rel="noopener noreferrer">
                        <span className={(props.isDarkMode ? props.backLightToggle ? '' : ' border-muted-grey' : '') + ' social-icon mx-auto circle-50  d-flex justify-content-center align-items-center fa-brands fa-facebook-f ' + props.backLightColor.boxShadowSm}></span>
                    </a>
                    <a className='text-decoration-none' href={linkedinLink} target="_blank" rel="noopener noreferrer">
                        <span className={(props.isDarkMode ? props.backLightToggle ? '' : ' border-muted-grey' : '') + ' social-icon mx-auto circle-50  d-flex justify-content-center align-items-center fa-brands fa-linkedin-in ' + props.backLightColor.boxShadowSm}></span>
                    </a>
                    <a className='text-decoration-none' href={instagramLink} target="_blank" rel="noopener noreferrer">
                        <span className={(props.isDarkMode ? props.backLightToggle ? '' : ' border-muted-grey' : '') + ' social-icon mx-auto circle-50  d-flex justify-content-center align-items-center fa-brands fa-square-instagram ' + props.backLightColor.boxShadowSm}></span>
                    </a>
                    <a className='text-decoration-none' href={whatsappLink} target="_blank" rel="noopener noreferrer">
                        <span className={(props.isDarkMode ? props.backLightToggle ? '' : ' border-muted-grey' : '') + ' social-icon mx-auto circle-50  d-flex justify-content-center align-items-center fa-brands fa-square-whatsapp ' + props.backLightColor.boxShadowSm}></span>
                    </a>
                    <a className='text-decoration-none' href={'mailto:' + emailLink} target="_blank" rel="noopener noreferrer">
                        <span className={(props.isDarkMode ? props.backLightToggle ? '' : ' border-muted-grey' : '') + ' social-icon mx-auto circle-50  d-flex justify-content-center align-items-center fa-solid fa-envelope ' + props.backLightColor.boxShadowSm}></span>
                    </a>
                </div>
                <p className='font-size-18 p-0 m-0'>{createdBy} <i className="fa-regular fa-copyright "></i> {new Date().getFullYear()}</p>
                <p className='font-size-13 p-0 m-0'>
                    {createdWith}
                    <i className={"ms-1 fw-bold font-size-18 react-color " + createdToolIconFontwesome}></i>
                    <span className='font-size-18 fw-bold react-color'> {createdToolName}</span>
                </p>
            </div>
        </>
    )
}
