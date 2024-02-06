import React from 'react'
import '../css/notification.css'
import Strings from '../resources/Strings';


const notificationType = (type) => {
    switch (type) {
        case Strings.notificationType.success:
            return notificationStyle.success;

        case Strings.notificationType.warning:
            return notificationStyle.warning;

        case Strings.notificationType.info:
            return notificationStyle.info;

        case Strings.notificationType.toast:
            return notificationStyle.toast;

        default:
            return notificationStyle.none;
    }
}

const notificationStyle = {
    none: {},
    success: {
        faIconClass: 'fa-solid fa-circle-check',
        color: { color: '#f8f9fad9' },
        styles: {
            backgroundColor: '#6c757dd9',
            color: '#f8f9fad9'
        },
        innerLeft: {
            backgroundColor: '#1A5D1Ad9',
        }
    },
    warning: {
        faIconClass: 'fa-solid fa-circle-exclamation',
        color: { color: '#f8f9fab9' },
        styles: {
            backgroundColor: '#6c757ad9',
            color: '#f8f9fad9'
        },
        innerLeft: {
            backgroundColor: '#bb2124a9'
        }
    },
    info: {
        faIconClass: 'fa-solid fa-circle-info',
        color: { color: '#f8f9fab9' },
        styles: {
            backgroundColor: '#6c757ad9',
            color: '#f8f9fad9'
        },
        innerLeft: {
            backgroundColor: '#00337Ca9',
            display: 'none'
        }
    },
    toast: {
        faIconClass: 'fa-solid fa-circle-info',
        color: { color: '#f8f9fab9' },
        styles: {
            backgroundColor: '#6c757ad9',
            color: '#f8f9fad9'
        },
        innerLeft: {
            backgroundColor: '#00337Ca9',
            display: 'none'
        }
    }
}

export default function Notification(props) {
    let notificationStyles = notificationType(props.notification.type);
    // console.log('[CUSTOM] Notification.js - props.notificationType: ' + notificationStyle.styles);
    return (
        <div className="notification-box rounded" style={notificationStyles.styles}>
            <div className='notification row '>
                <div
                    className={'col-2 px-2 py-1 justify-content-center align-items-center font-size-18 rounded-start ' + (props.notification.type === Strings.notificationType.toast ? 'd-none' : 'd-flex')}
                    style={notificationStyles.innerLeft}>
                    <i
                        className={notificationStyles.faIconClass}></i>
                </div>
                <div className={'p-1 font-size-13 d-flex align-items-center ' + (props.notification.type === Strings.notificationType.toast ? 'col-12 px-2' : 'col-10')}>
                    <span>{props.notification.message}</span>
                </div>
            </div>
        </div>
    )
}
