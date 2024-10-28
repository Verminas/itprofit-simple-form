/**
 * Deletes the error message associated with a form item and removes the 'invalid' state from the form item.
 *
 * @param {HTMLElement} label - The label element containing the form item and the error message.
 */

export function deleteErrorItem(label){
    const error = label.querySelector('.form-error')
    const formItem = label.querySelector('.form-item')
    if (error) {
        error.remove()
        formItem.classList.remove('invalid')
    }
}