import React from 'react'
import PropTypes from 'prop-types'
import css from '../resources/Css.mjs'
import '../css/navbar.css'
import backLightScheme from '../resources/Backlight.mjs'


export default function Navbar(props) {
    const onClickColorTile = (num) => {
        props.backLightColorChanger(num);
    }
    return (
        <nav className={"navbar navbar-expand-lg transition-1 " + props.backgroundColor}>
            <div className="container-fluid">
                <b>
                    <a className={"navbar-brand " + props.backLightColor.color} href="/">{props.title}</a>
                </b>
                <button
                    className="navbar-toggler border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className={"navbar-toggler-icon"}></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 font-size-18">
                        
                        <li className="nav-item">
                            <a className="nav-link" href="#about">{props.about}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#showcase">{props.portfolio}</a>
                        </li>
                    </ul>
                    <div className='d-flex justify-content-center'>
                        <div className={'dropdown ' + props.showColorPalette}>
                            <button
                                className="btn dropdown-toggle m-0 p-0"
                                type="button"
                                id="dropdownMenuButton1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <i className={"fa-solid fa-palette m-0 p-0 color-palette " + props.backLightColor.color}></i>
                            </button>
                            <div className='dropdown-menu font-size-15'>
                                <span onClick={() => onClickColorTile(1)} className={'color-tile ' + backLightScheme(1).color}><i className="fa-solid fa-square"></i></span>
                                <span onClick={() => onClickColorTile(2)} className={'color-tile ' + backLightScheme(2).color}><i className="fa-solid fa-square"></i></span>
                                <span onClick={() => onClickColorTile(3)} className={'color-tile ' + backLightScheme(3).color}><i className="fa-solid fa-square"></i></span>
                                <span onClick={() => onClickColorTile(4)} className={'color-tile ' + backLightScheme(4).color}><i className="fa-solid fa-square"></i></span>
                                <span onClick={() => onClickColorTile(5)} className={'color-tile ' + backLightScheme(5).color}><i className="fa-solid fa-square"></i></span>
                                <span onClick={() => onClickColorTile(6)} className={'color-tile ' + backLightScheme(6).color}><i className="fa-solid fa-square"></i></span>
                                <span onClick={() => onClickColorTile(7)} className={'color-tile ' + backLightScheme(7).color}><i className="fa-solid fa-square"></i></span>
                                <span onClick={() => onClickColorTile(8)} className={'color-tile ' + backLightScheme(8).color}><i className="fa-solid fa-square"></i></span>
                                <span onClick={() => onClickColorTile(9)} className={'color-tile ' + backLightScheme(9).color}><i className="fa-solid fa-square"></i></span>
                                <span onClick={() => onClickColorTile(10)} className={'color-tile ' + backLightScheme(10).color}><i className="fa-solid fa-square"></i></span>
                            </div>
                        </div>
                        <div className={'me-2 ' + props.backLightSwitch}>
                            <input type="checkbox" id="backLightSwitch" onClick={props.backLightToggler} />
                            <label htmlFor="backLightSwitch" className={"back-light-switch " + props.backLightColor.boxShadowSm}>
                                <span className=''>Back Light</span>
                                <svg
                                    className="slider"
                                    viewBox="0 0 512 512"
                                    height="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z"
                                    ></path>
                                </svg>
                            </label>
                        </div>
                        <div className="d-inline ms-2">
                            <div className="dark-mode-btn d-inline-block" id="darkModeBtn">
                                <input id='darkModeBtnInput' type="checkbox" onClick={props.darkModeSwitch} />
                                <span className={props.darkMode ? props.backLightToggle ? props.backLightColor.boxShadowSm : 'box-shadow-default ' : 'box-shadow-default '}></span>
                                {/* <span className=''></span> */}
                            </div>
                        </div>

                    </div>


                </div>

            </div>

        </nav>

    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    home: PropTypes.string.isRequired,
    portfolio: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    darkMode: PropTypes.bool.isRequired,
    darkModeSwitch: PropTypes.func.isRequired,
    backLightSwitch: PropTypes.string.isRequired,
    backLightToggle: PropTypes.bool.isRequired,
    backLightToggler: PropTypes.func.isRequired,
    showColorPalette: PropTypes.string.isRequired,
    backLightColor: PropTypes.object.isRequired
}

Navbar.defaultProps = {
    title: "Title here",
    home: "Home",
    portfolio: "Portfolio",
    about: "About here",
    backLightSwitch: css.displayNone,
    showColorPalette: css.displayNone,
}