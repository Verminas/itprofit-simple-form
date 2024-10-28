export function deleteErrorItem(label){
    const error = label.querySelector('.form-error')
    const formItem = label.querySelector('.form-item')
    if (error) {
        error.remove()
        formItem.classList.remove('invalid')
    }
}