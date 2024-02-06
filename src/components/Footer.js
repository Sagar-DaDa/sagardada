import React from 'react'
import '../css/footer.css'

const startProjectLeftText = "Start a project";
const startProjectCenterText = "Interested in working together? Let's schedule a time to have a conversation.";
const startProjectRightText = "Let me know";
const footerHead = "SagarDaDa";
const footerDesc = "Navigating existence, acquiring wisdom, and immersing myself in the realm of coding.";
const facebookLink = "https://www.facebook.com/SaagaarDaDa";
const linkedinLink = "https://www.linkedin.com/in/saagaardada";
const instagramLink = "https://https://www.instagram.com/saagaardada";
const whatsappLink = "https://wa.me/+9779842333154";
const emailLink = "saagaar.dada@gmail.com";
const createdBy = "Created by me";
const createdWith = "Created with";
const createdToolIconFontwesome = "fa-brands fa-react";
const createdToolName = "React";

export default function Footer(props) {
    return (
        <>
            <div className='px-2 mb-5'>
                <div className={'text-center container border-radius-10 font-size-18 ' + props.backLightColor.boxShadowSm}>
                    <div className='row p-4'>
                        <div className='col-12 col-md-4 p-2'>
                            <p className='h1 fw-bold m-0 p-0'>{startProjectLeftText}</p>
                        </div>
                        <div className='col-12 col-md-4 p-2'>
                            <p className=' m-0 p-0'>{startProjectCenterText}</p>
                        </div>
                        <div className='col-12 col-md-4 pt-3 pb-2'>
                            <button className={'m-0 btn-wide-1 ' + props.backLightColor.boxShadowSm} type='button'>{startProjectRightText}</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'footerContainer bg-transparent-grey text-center ' + props.backLightColor.boxShadowSm}>
                <p className=' fw-bold display-6'>{footerHead}</p>
                <p className='font-size-18 mb-4'>{footerDesc}</p>
                <div className='d-flex justify-content-center gap-3 w-25 mx-auto mb-4'>
                    <a className='text-decoration-none' href={facebookLink}>
                        <span className={(props.isDarkMode ? props.backLightToggle ? '' : ' border-muted-grey' : '') + ' social-icon mx-auto circle-50  d-flex justify-content-center align-items-center fa-brands fa-facebook-f ' + props.backLightColor.boxShadowSm}></span>
                    </a>
                    <a className='text-decoration-none' href={linkedinLink}>
                        <span className={(props.isDarkMode ? props.backLightToggle ? '' : ' border-muted-grey' : '') + ' social-icon mx-auto circle-50  d-flex justify-content-center align-items-center fa-brands fa-linkedin-in ' + props.backLightColor.boxShadowSm}></span>
                    </a>
                    <a className='text-decoration-none' href={instagramLink}>
                        <span className={(props.isDarkMode ? props.backLightToggle ? '' : ' border-muted-grey' : '') + ' social-icon mx-auto circle-50  d-flex justify-content-center align-items-center fa-brands fa-square-instagram ' + props.backLightColor.boxShadowSm}></span>
                    </a>
                    <a className='text-decoration-none' href={whatsappLink}>
                        <span className={(props.isDarkMode ? props.backLightToggle ? '' : ' border-muted-grey' : '') + ' social-icon mx-auto circle-50  d-flex justify-content-center align-items-center fa-brands fa-square-whatsapp ' + props.backLightColor.boxShadowSm}></span>
                    </a>
                    <a className='text-decoration-none' href={'mailto:' + emailLink}>
                        <span className={(props.isDarkMode ? props.backLightToggle ? '' : ' border-muted-grey' : '') + ' social-icon mx-auto circle-50  d-flex justify-content-center align-items-center fa-solid fa-envelope ' + props.backLightColor.boxShadowSm}></span>
                    </a>
                </div>
                <p className='font-size-18 p-0 m-0'>{createdBy} <i class="fa-regular fa-copyright "></i> {new Date().getFullYear()}</p>
                <p className='font-size-13 p-0 m-0'>
                    {createdWith}
                    <i class={"ms-1 fw-bold font-size-18 react-color " + createdToolIconFontwesome}></i>
                    <span className='font-size-18 fw-bold react-color'> {createdToolName}</span>
                </p>
            </div>
        </>
    )
}
