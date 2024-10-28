import {createAndAppendElement} from "./createAndAppendElement";

/**
 * Creates a response message that is displayed on the page for a specific duration.
 *
 * @param {string} message - The message text to be displayed.
 * @param {boolean} [isError=false] - A flag indicating whether the message is an error message.
 */

export function createResponseMessage(message, isError = false) {
    const wrapper = createAndAppendElement('div', document.body, {classNames: `message-wrapper`})
    isError && wrapper.classList.add('error-message');
    const text = createAndAppendElement('p', wrapper, {classNames: 'message-response', textContent: message})
    let timerId = null

    if(timerId) {
        clearTimeout(timerId)
    } else {
        timerId = setTimeout(() => {
            wrapper.remove()
        }, 4000)
    }

}