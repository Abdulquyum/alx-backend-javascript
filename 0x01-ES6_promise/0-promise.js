export default function getResponseFromAPI() {
    return new Promise((res, rej) => {
        if (true) {
            res("true");
        } else {
            rej("false");
        }
    });
}