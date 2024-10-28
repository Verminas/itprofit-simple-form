import {createAndAppendElement} from "../utils/createAndAppendElement";
import {isValidItem} from "../utils/isValidItem";
import {isValidEmail} from "../utils/isValidEmail";

export function validateItem(label) {
    const formItem = label.querySelector('.form-item')
    const value = formItem.value;
    const isEmail = formItem.id === 'email'
    const isValid = isEmail ? isValidEmail(value) : isValidItem(value)

    if(!isValid) {
        const textContent = isEmail ? 'Email is invalid' : `${formItem.id} is required`
        const currentErrors = Array.from(label.querySelectorAll('.form-error'))
        if(currentErrors.length) {
            currentErrors.forEach((error) => error.remove())
        }
        const error = createAndAppendElement('span', label, {id: `form-error-${formItem.id}`, classNames: 'form-error', textContent})
        setTimeout(() => {
            error.classList.add('show-error')
            formItem.classList.add('invalid')
        }, 150)
    }

    return isValid
}