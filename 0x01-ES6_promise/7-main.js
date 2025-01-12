import loadBalancer from './7-load_balancer.js';

const ukSuccess = 'Downloading from UK is faster';
const frSuccess = 'Downloading from FR is faster';

const promiseUK = new Promise((res, rej) => setTimeout(res, 100, ukSuccess));

const promiseUKSlow = new Promise((res, rej) => setTimeout(res, 400, ukSuccess));

const promiseFR = new Promise((res, rej) => setTimeout(res, 200, frSuccess));

const test = async () => {
    console.log(await loadBalancer(promiseUK, promiseFR));
    console.log(await loadBalancer(promiseUKSlow, promiseFR));
}

test();