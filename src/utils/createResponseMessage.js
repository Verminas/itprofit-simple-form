import {createAndAppendElement} from "./createAndAppendElement";

export function createResponseMessage(message, isError = false) {
    const wrapper = createAndAppendElement('div', document.body, {classNames: `message-wrapper`})
    isError && wrapper.classList.add('error-message');
    const text = createAndAppendElement('p', wrapper, {classNames: 'message', textContent: message})
    let timerId = null

    if(timerId) {
        clearTimeout(timerId)
    } else {
        timerId = setTimeout(() => {
            wrapper.remove()
        }, 4000)
    }

}