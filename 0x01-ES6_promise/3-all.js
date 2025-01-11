import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve(console.log(`${uploadPhoto().body} ${createUser().firstName} ${createUser().lastName}`))
        } else {
            reject(console.error("Signup system offline"));
        }
    })
}
