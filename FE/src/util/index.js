import { isEmpty } from "lodash";

export const setLocalStorage = (response) => {
    localStorage.setItem('userToken', response.data.token);
    localStorage.setItem('user', JSON.stringify(response.data.user));
};

export function isUserSignedIn() {
    return !isEmpty(localStorage.getItem('userToken'));
}

export function getToken() {
    return localStorage.getItem('userToken');
}

export function getUser() {
    const userString = localStorage.getItem('user');
    return JSON.parse(userString);
}

export function isAdmin() {
    const userString = localStorage.getItem('user');
    return JSON.parse(userString).admin;
}

export function formatDate(dateTimeString) {
    const date = new Date(dateTimeString);
    const formattedDate = date.toLocaleDateString(date);;
    return formattedDate;
}

export function formatTime(dateTimeString) {
    const date = new Date(dateTimeString);

    const options = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    };

    const formattedTime = date.toLocaleString('en-US', options);
    return formattedTime;

}

export function combineDateTime(dateString, timeString) {
    const dateParts = dateString.split('-');
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]) - 1; // Month is zero-based (0-11)
    const day = parseInt(dateParts[2]);

    const timeParts = timeString.split(':');
    const hour = parseInt(timeParts[0]);
    const minute = parseInt(timeParts[1]);

    const dateTime = new Date(year, month, day, hour, minute);
    console.log(dateTime);
    return dateTime;
};
