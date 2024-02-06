import React from 'react'
import '../css/about.css'
import Strings from '../resources/Strings';

const aboutTextHead = "Hi, I’m Sagar. Nice to meet you.";
const aboutTextDescOne = "Passionate about leveraging technology to drive innovation, I embark on my professional journey with a solid foundation in various IT domains. Throughout my academic endeavors, I have honed my skills in web development, programming, and problem-solving. My enthusiasm for staying abreast of the latest technological trends fuels my commitment to delivering solutions that meet the dynamic needs of the digital landscape. ";
const aboutTextDescTwo = "As I embark on this exciting chapter, I invite you to explore my portfolio, showcasing my projects and achievements.";
const frontendTextHead = "Frontend Development";
const frontendTextDesc = "I have a passion for building things from the ground up and find joy in translating ideas into reality on the web through coding.";
const frontendLanguages = "HTML, CSS, JavaScript";
const frontendDevTools = ['React JS', 'Bootstrap', 'Github', 'VSCode', 'Font Awesome'];
const backendTextHead = "Backend Development";
const backendTextDesc = "I have a fervor for constructing robust systems, finding satisfaction in turning abstract concepts into tangible backend solutions through coding.";
const backendLanguages = "Java, MySQL";
const backendDevTools = ['Spring Boot', 'Spring Tools', 'Maven', 'Github', 'IntelliJ'];

export default function About(props) {
    return (
        <div className={'aboutContainer container mb-5 p-0 py-5 border-radius-10 ' + props.backLightColor.boxShadowSm} id='aboutContainer'>
            <div className={'about-header-div text-center rounded-top-10 px-5 pt-3 d-flex justify-content-center '}>
                <div className='intro-div'>
                    <p className='h1  fw-bold'>
                        {aboutTextHead}
                    </p>
                    <p className=' font-size-18'>
                        {aboutTextDescOne}
                    </p>
                    <p className=' font-size-18'>
                        {aboutTextDescTwo}
                    </p>
                </div>
            </div>
            <div className={' rounded mx-3 my-4 language-div '}>
                <div className={' row w-100 mx-auto rounded '}>
                    <div className={'frontend-div col-12 col-md-6 text-center py-5 px-5 '}>
                        <div className={(props.isDarkMode ? props.backLightToggle ? '' : ' border-muted-grey' : '') + ' mx-auto circle-50  d-flex justify-content-center align-items-center ' + props.backLightColor.boxShadowSm}>
                            <span className="fa-solid fa-code "></span>
                        </div>
                        <p className='mt-3 h3 fw-bold'>{frontendTextHead}</p>
                        <p className='font-size-18'>{frontendTextDesc}</p>
                        <p className='mt-4 mb-0 fw-bold font-size-18'>{Strings.english.languagesIUse}</p>
                        <span className='font-size-18'>{frontendLanguages}</span>
                        <p className='mt-4 mb-0 fw-bold font-size-18'>{Strings.english.devTools}:</p>
                        <ul className='no-bullets font-size-18'>
                            {
                                frontendDevTools.map((tool, index) => (
                                    <li key={index}>{tool}</li>
                                ))
                            }
                        </ul>

                    </div>
                    <div className={'col-12 col-md-6 text-center py-5 px-5 '}>
                        <div className={(props.isDarkMode ? props.backLightToggle ? '' : ' border-muted-grey' : '') + ' mx-auto circle-50  d-flex justify-content-center align-items-center ' + props.backLightColor.boxShadowSm}>
                            <span class="fa-solid fa-layer-group"></span>
                        </div>
                        <p className='mt-3  h3 fw-bold'>{backendTextHead}</p>
                        <p className='font-size-18'>{backendTextDesc}</p>
                        <p className='mt-4 mb-0 fw-bold font-size-18'>{Strings.english.languagesIUse}:</p>
                        <span className='font-size-18'>{backendLanguages}</span>
                        <p className='mt-4 mb-0 fw-bold font-size-18'>{Strings.english.devTools}:</p>
                        <ul className='no-bullets font-size-18'>
                            {
                                backendDevTools.map((tool, index) => (
                                    <li key={index}>{tool}</li>
                                ))
                            }
                        </ul>

                    </div>
                </div>
            </div>
        </div>

    )
}
