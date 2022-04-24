"use strict";

const getCookieByName = name => {
    return "";
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
    document.write(cookie);
};

const deleteCookie = name => {
    // deleting our cookie
    document.cookie = name + "=''; max-age=0; path=/"; 
};

const goToPage = url => {

};