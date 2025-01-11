export default function handleResponseFromAPI(promise) {
    return new Promise((res, rej) => {
        if (promise) {
            res({ status: 200, body: 'success' });
        } else {
            rej(Error(''));
        }

        console.log('Got a response from the API');
    });
}
