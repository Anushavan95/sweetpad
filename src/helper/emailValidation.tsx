export function isEmail(val: string) {
    let regEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!regEmail.test(val)){
        return 'Invalid Email Address';
    }
    return ''
}

export function isSocialValidation(nick: string) {
    return nick.trim().charAt(0).includes('@')
}
export function isReddit(nick: string) {
    return nick.trim().charAt(0).includes('u') && nick.trim().charAt(1).includes('/')
}
export const FACEBOOK = 'Facebook'
export const INSTAGRAM = 'Instagram'
export const TIKTOK = 'Tiktok'
export const YOUTUBE = 'Youtube'
export const MEDIUM  = 'Medium.com'
export const REDDIT = 'Reddit'
export const TWITTER = 'Twitter'
export const DISCORD = 'Discord'