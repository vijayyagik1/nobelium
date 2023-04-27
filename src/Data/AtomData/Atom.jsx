import {atom } from 'recoil';

export const isUserLoggedIn = atom({
    key : 'isUserLoggedIn',
    default: false
})


export const isShowing = atom ({
    key: 'Show',
    default: false
})