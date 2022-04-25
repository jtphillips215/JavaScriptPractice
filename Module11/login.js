"use strict";

const getCookieByName = name => {
    const cookies = document.cookie;
    let start = cookies.indexOf(name + "=");
    // no cookie found with name
    if (start === -1) {
        return "";
    }
    else {
        start = start + (name.length + 1);
        let end = cookies.indexOf(";", start);
        if (end === -1) { 
            // no semicolon found means last name value pair
            end = cookies.length;
        }
        const cookieValue = cookies.substring(start, end);
        return decodeURIComponent(cookieValue);
    }
};

const setCookie = (name, value, days) => {
    // creating our name value pair
    let cookie = name + "=" + encodeURIComponent(value);
    // setting max age
    if (days) {
        cookie += "; max-age=" + days * 24 * 60 * 60;
    }
    cookie += "; path=/";
    // setting cookie in doc
    document.cookie = cookie;
    // testing our cookie
    // document.write(cookie);
};

const deleteCookie = name => {
    // deleting our cookie
    document.cookie = name + "=''; max-age=0; path=/"; 
};

const goToPage = url => {
    location.href = url;
};