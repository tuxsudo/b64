import isBrowser from "is-in-browser";

export const encode = (str) => {

    const escaped = encodeURIComponent(str)
        .replace(/%([0-9A-F]{2})/g, (match, p1) => String.fromCharCode('0x' + p1) );

    return isBrowser
        ? btoa(escaped)
        : new Buffer(escaped, "binary").toString("base64");
};

export const decode = (str) => {
    const decoded = isBrowser
        ? atob(str)
        : new Buffer(str, "base64").toString("binary");

    return decodeURIComponent(
        decoded.split('').map( (c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join('')
    );
}
