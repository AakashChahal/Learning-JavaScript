import { TIMEOUT_SEC } from "./config";

const timeout = function (s) {
    return new Promise(function (_, reject) {
        return setTimeout(function () {
            reject(new Error("Request timeout! Took too long to respond"));
        }, s * 1000);
    });
};

export const getJSON = async function (url) {
    try {
        const res = await Promise.race([fetch(`${url}`), timeout(TIMEOUT_SEC)]);
        const data = await res.json();
        if (!res.ok) throw new Error(`${res.status} ${data.message}`);
        return data;
    } catch (error) {
        throw error;
    }
};
