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
        const error = createAndAppendElement('span', label, {id: `form-error-${formItem.id}`, classNames: 'form-error', textContent})
        formItem.classList.add('invalid')
    }

    return isValid
}