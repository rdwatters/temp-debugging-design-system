//shorthand for getElementById
function byId(str) {
    return document.getElementById(str);
}

//shorthard for querySelector
function qs(sel) {
    return document.querySelector(sel);
}

//shorthand for querySelectorAll
function qsa(sel) {
    return document.querySelectorAll(sel);
}

//shorthand for getElementsByTagNam
function byTag(tag) {
    return document.getElementsByTagName(tag);
}

export { byId, qs, qsa, byTag }