import {atom } from 'recoil';

export const isUserLoggedIn = atom({
    key : 'isUserLoggedIn',
    default: false
})
export const isPostLiked = atom({
    key: 'isPostLiked',
    default:false
})