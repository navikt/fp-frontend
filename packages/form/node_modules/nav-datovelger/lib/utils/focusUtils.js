"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.focusLastElement = exports.focusFirstElement = exports.getFocusableElements = void 0;
const elementSelector = [
    'a[href]',
    'select:not([disabled])',
    'input:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]',
    'button:not([disabled])',
];
function nodelistToArray(nodes) {
    const arr = [];
    for (let i = nodes.length; i--;) {
        arr.unshift(nodes.item(i));
    }
    return arr;
}
const tabEnabledSelectors = [`[tabIndex='0']`].concat(elementSelector);
const allTabIndexEnabledSelectors = [`[tabIndex]`].concat(elementSelector);
function getFocusableElements(el, onlyTabReachable = true) {
    if (!el) {
        return undefined;
    }
    if (onlyTabReachable) {
        return nodelistToArray(el.querySelectorAll(tabEnabledSelectors.join(',')));
    }
    else {
        return nodelistToArray(el.querySelectorAll(allTabIndexEnabledSelectors.join(',')));
    }
}
exports.getFocusableElements = getFocusableElements;
function focusFirstElement(el) {
    const elements = getFocusableElements(el);
    if (elements && elements.length > 0) {
        elements[0].focus();
    }
    else {
        el.focus();
    }
}
exports.focusFirstElement = focusFirstElement;
function focusLastElement(el) {
    const elements = getFocusableElements(el);
    if (elements && elements.length > 0) {
        elements[elements.length - 1].focus();
    }
    else {
        el.focus();
    }
}
exports.focusLastElement = focusLastElement;
