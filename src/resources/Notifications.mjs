import { notificationTypeString } from './Strings.js'

const notificationType = (type) => {
    switch (type) {
        case notificationTypeString.success:
            return notificationStyle.success;

        case notificationTypeString.warning:
            return notificationStyle.warning;

        case notificationTypeString.info:
            return notificationStyle.info;

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
            backgroundColor: '#00337Ca9'
        }
    }
}

export default notificationType;